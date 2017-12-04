from database import Store
import logging
import os
import glob
try:
        import cPickle as pickle
except ImportError:
        import pickle


class Stockinfo(Store):

    def __init__(self, mode, ind, dirs):
        super(Stockinfo, self).__init__(mode, ind, dirs)
        self.logger = logging.getLogger('STOCK')
        self.logger.info('Init Stockinfo')

    def load(self, path):
        fname = path + "/stockinfo.csv"
        for line in open(fname):
            arr = line.split(',')
            self.logger.info('load stockinfo {}'.format(fname))
            self.add('1' + arr[0], arr[1])

    def getname(self, key):
        return self.get(key)
#
