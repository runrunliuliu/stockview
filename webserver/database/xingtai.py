from database import Store
import logging
import os
import glob
import json
try:
        import cPickle as pickle
except ImportError:
        import pickle


class Xingtai(Store):

    def __init__(self, mode, ind, dirs):
        super(Xingtai, self).__init__(mode, ind, dirs)
        self.logger = logging.getLogger('STOCK')
        self.logger.info('Init XingTai')
        self.xtval = None

    def load(self, path, time):
        files = glob.glob(path + "/*xingtai.csv")
        for f in files:
            arr = f.split('/')
            fname = arr[-1][0:8]
            print(fname)
            self.logger.info('load xingtai {}'.format(fname))
            for line in open(f):
                tmp = line.split('\t')
                self.add(fname + '|' + tmp[0], tmp[1])

    # get Val by key
    def setVal(self, key):
        val = self.get(key)
        if val is not None:
            self.xtval = json.loads(val)
        else:
            self.xtval = None

    # Valid, used for stock selection
    def valid(self, mode, intdays):
        ret = 0
        if mode == 'td':
            dtd = self.getTD('dtd', intdays)
            xtd = self.getTD('xtd', intdays)
            if dtd is not None:
                if dtd[0] > 0 and dtd[1] > 0:
                    ret = ret + 1
            if xtd is not None:
                if xtd[0] > 0 and xtd[1] > 0:
                    ret = ret + 1
        return ret

    # get DTD or XTD
    def getTD(self, td, intdays):
        def slope(line):
            ret = None
            p1v = line['p1']['v']
            p1d = line['p1']['d']
            p2v = line['p2']['v']
            p2d = line['p2']['d']
            if intdays is not None:
                ret = (p2v - p1v) / (intdays[1][p2d] - intdays[1][p1d])
            return ret
        ret = None
        if self.xtval is not None:
            js = self.xtval
            if td in js.get('qs', {}).get('triangle', {}):
                tdv = js['qs']['triangle'][td]
                if len(tdv) > 0:
                    l1 = tdv['l1']
                    l2 = tdv['l2']
                    sl1 = slope(l1)
                    sl2 = slope(l2)
                    ret = (sl1, sl2)
        return ret
#
