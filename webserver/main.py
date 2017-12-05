import sys
import getopt
import os
import json
import datetime
import time
import logging
from db import dbimport
from database import xingtai
from database import stockinfo
from database import mtime


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
                    datefmt='%m-%d %H:%M',
                    filename='logs/main.log',
                    filemode='a')


def main(argv):
    rock = "/Users/liu/data/rocksdb/"
    try:
        opts, args = getopt.getopt(argv, "h:m:p:d:r:", ["day="])
    except getopt.GetoptError:
        print('test.py -d <time>')
        sys.exit(2)
    for opt, arg in opts:
        if opt in ("-m", "--mode"):
            mode = arg
        elif opt in ("-p", "--path"):
            path = arg
        elif opt in ("-d", "--kid"):
            db    = int(arg)
        elif opt in ("-r", "--rockpath"):
            rock  = arg

    if mode == 'dayk':
        importDayK(db, path)

    if mode == 'xingtai':
        xt = xingtai.Xingtai("ROCKS", mode, rock)
        xt.load(path)

    if mode == 'stockinfo':
        info = stockinfo.Stockinfo("ROCKS", mode, rock)
        info.load(path)

    if mode == 'mtime':
        mt = mtime.Mtime("ROCKS", mode, rock)
        mt.load(path)


def importDayK(mode, path):
    dimp = dbimport.dbimport(mode=2)
    fnum = 0
    for f in os.listdir(path):
        out = []
        fname = path + f
        cnt = 0
        for line in open(fname):
            if cnt == 0:
                cnt = cnt + 1
                continue
            arr = line.strip().split(',')
            tmp = dict()

            tmp['stock_id'] = '1' + f[2:-4]

            day = datetime.datetime.strptime(arr[0], "%Y-%m-%d")
            stamp = str(int(time.mktime(day.timetuple())))
            tmp['day'] = stamp

            tmp['open'] = arr[1]
            tmp['high'] = arr[2]
            tmp['low'] = arr[3]
            tmp['close'] = arr[4]
            tmp['vol'] = arr[5]

            out.append(json.dumps(tmp))
            cnt = cnt + 1
        dimp.batchinsert(out, 'tb_stock_day_kline', fnum)
        fnum = fnum + 1
    return fnum


if __name__ == "__main__":
    main(sys.argv[1:])
#
