from database import Store
import logging
import os
import glob
try:
        import cPickle as pickle
except ImportError:
        import pickle


class Xingtai(Store):

    def __init__(self, mode, ind, dirs):
        super(Xingtai, self).__init__(mode, ind, dirs)
        self.logger = logging.getLogger('STOCK')
        self.logger.info('Init XingTai')

    def load(self, path):
        files = glob.glob(path + "/*xingtai.csv")
        for f in files:
            arr = f.split('/')
            fname = arr[-1][0:8]
            print(fname)
            self.logger.info('load xingtai {}'.format(fname))
            for line in open(f):
                tmp = line.split('\t')
                self.add(fname + '|' + tmp[0], tmp[1])
#
