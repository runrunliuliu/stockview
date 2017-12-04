# coding: utf-8
from database import Store
import logging
import os
import glob
try:
    import cPickle as pickle
except ImportError:
    import pickle


class Stock(Store):

    def __init__(self, mode, ind, action, dirs=None):
        super(Stock, self).__init__(mode, ind, dirs)
        self.logger = logging.getLogger('STOCK')
        self.logger.info('Init Stock')

    def trans(self, strs):
        if strs is None:
            return None

        arr = strs.split(',')

        op = float(arr[0])
        hi = float(arr[1])
        lw = float(arr[2])
        cl = float(arr[3])

        return (op, hi, lw, cl)

    # transfer inst
    def inst2inst(self, inst):
        inst = str(inst)
        if len(inst) == 7:
            if inst[1] == '6':
                ninst = 'SH' + inst[1:]
            if inst[1] == '3' or inst[1] == '0':
                ninst = 'SZ' + inst[1:]
        self.logger.info('Inst:{} Ninst:{}'.format(inst, ninst))
        return ninst

    # 计算给定标的在两个day之间的收益
    # day1: select day --> buyday open
    # day2: close
    def calRet2Days(self, inst, day1, day2):
        ret = None

        inst = self.inst2inst(inst)

        AA = self.getIndTdays(inst)
        if AA is None:
            return ret

        # select day to buy day
        day1 = self.getDay(inst, day1, AA, 1)
        if day1 is None:
            return None

        bar1 = self.trans(self.get(inst + '|' + day1))
        bar2 = self.trans(self.get(inst + '|' + day2))

        if bar1 is None or bar2 is None:
            return None

        op = bar1[0]
        cl = bar2[3]

        ret = 100 * (cl - op) / op
        self.logger.info('Inst:{} OP:{} CL:{} D1:{} D2:{}'.format(
            inst, op, cl, day1, day2))

        ret = "{:.4f}".format(ret)
        return ret

    def getIndTdays(self, inst):
        ret = None
        val = self.get(inst + '|indtdays')
        if val is None:
            return ret
        ind_tdays = pickle.loads(val)

        val = self.get(inst + '|tdaysind')
        if val is None:
            return ret
        tdays_ind = pickle.loads(val)
        return (ind_tdays, tdays_ind)

    # Get day base on Step
    def getDay(self, inst, baseday, AA, step=1):
        ret = None
        ind_tdays = AA[0]
        tdays_ind = AA[1]

        if baseday not in tdays_ind:
            return ret
        baseind = tdays_ind[baseday]

        buyday = baseind + step
        if buyday not in ind_tdays:
            return ret
        buyday = ind_tdays[buyday]
        return buyday

    # 计算给定标的未来一段时间的收益
    def calRet(self, inst, baseday, ndays):
        ret = None

        AA = self.getIndTdays(inst)
        if AA is None:
            return ret

        selday = baseday

        # get buy Day
        buyday = self.getDay(inst, baseday, AA, 1)
        if buyday is None:
            return ret

        # get sell day
        sellday = self.getDay(inst, baseday, AA, ndays)
        if sellday is None:
            return ret

        nbar = self.trans(self.get(inst + '|' + buyday))
        xbar = self.trans(self.get(inst + '|' + sellday))

        nopen = nbar[0]
        xclose = xbar[3]
        ret = (xclose - nopen) / nopen
        self.logger.info('Inst:{} Sday:{} Op:{} Cl:{} Bday:{} Sday:{}'.format(
            inst, selday, nopen, xclose, buyday, sellday))
        return ret

    def load(self, path):
        files = glob.glob(path + "/*.csv")
        for f in files:
            arr = f.split('.')
            if len(arr) > 2:
                continue
            fname = arr[0][-8:]
            self.logger.info('load stock {}'.format(fname))
            ind_tdays = {}
            tdays_ind = {}
            cnt = -1
            for line in open(path + '/' + fname + '.csv'):
                arr = line.strip().split(',')

                # raw data
                key = fname + '|' + arr[0]
                val = ','.join(arr[1:])
                self.add(key, val)

                # keep index of trade days
                if cnt == -1:
                    cnt = cnt + 1
                    continue
                ind_tdays[cnt] = arr[0]
                tdays_ind[arr[0]] = cnt
                cnt = cnt + 1

            self.add(fname + '|indtdays', pickle.dumps(ind_tdays))
            self.add(fname + '|tdaysind', pickle.dumps(tdays_ind))
#
