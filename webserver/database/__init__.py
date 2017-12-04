# coding:utf-8
import rocksdb
import logging
import abc
try:
    import cPickle as pickle
except ImportError:
    import pickle

logger = logging.getLogger('STORE')


class Store(object):

    __metaclass__ = abc.ABCMeta

    def __init__(self, mode, ind, dirs=None):

        self.mode = mode

        if dirs is None:
            self.dirs = './output'
        else:
            self.dirs = dirs

        self.store = None
        if mode == 'ROCKS':
            logger.info("STORE_LOAD_MODE: {}".format(mode))
            self.store = self.initRocks(ind)

    def load(self):
        pass

    def wrap(self, key):
        if isinstance(key, str):
            key = key.encode('utf8')
        return key

    # get value
    def get(self, key, direct=0):
        if self.mode == 'ROCKS':
            logger.info('Request key:{}'.format(key))
            vals = self.store.get(self.wrap(key))
            if vals is None:
                return None
            if direct == 0:
                vals = vals.decode('utf8')
            return vals

    # add kv
    def add(self, key, val):
        if self.mode == 'ROCKS':
            self.store.put(self.wrap(key), self.wrap(val), disable_wal=True)

    def initRocks(self, ind):
        opts = rocksdb.Options()
        opts.create_if_missing = True
        opts.max_open_files = 300000
        opts.write_buffer_size = 1073741824
        opts.max_write_buffer_number = 20
        opts.target_file_size_base = 67108864
        opts.max_background_compactions = 8
        opts.max_background_flushes = 4

        opts.table_factory = rocksdb.BlockBasedTableFactory(
            filter_policy=rocksdb.BloomFilterPolicy(10),
            block_cache=rocksdb.LRUCache(2 * (1024 ** 3)),
            block_cache_compressed=rocksdb.LRUCache(500 * (1024 ** 2)))

        db = rocksdb.DB(self.dirs + '/' + ind + '.db', opts)
        return db
