from database import Store
import logging
import os
import glob
try:
        import cPickle as pickle
except ImportError:
        import pickle


class Mtime(Store):

    def __init__(self, mode, ind, dirs):
        super(Mtime, self).__init__(mode, ind, dirs)
        self.logger = logging.getLogger('Mtime')
        self.logger.info('Init Mtime')

    def load(self, path):
        files = glob.glob(path + "/*cxshort.csv")
        for f in files:
            arr = f.split('/')
            fname = arr[-1][0:8]
            self.logger.info('load mtime{}'.format(fname))
            for line in open(f):
                tmp = line.strip().split(',')
                val = pickle.dumps(tmp[1:])
                self.add(fname + '|' + tmp[0], val)

    # Now QS
    def getNqs(self, key):
        ret = -1
        val = self.get(key, direct=1)
        if val is None:
            return ret
        ret = pickle.loads(val)[37]
        return ret
#
