import MySQLdb
import logging
from contextlib import closing


class dbexport:
    def __init__(self, mode=0, basetime=None):
        if mode == 0:
            db_user = 'hy'
            db_pass = '123456'
            db_url  = '192.168.200.30'
            dbname = 'stock_misc'

        if mode == 1:
            db_user = 'market'
            db_pass = '4nz31ql8f5vbs1a90s'
            db_url  = 'rdsl53b8z8217547s910.mysql.rds.aliyuncs.com'
            dbname  = 'stock_misc'

        if mode == 2:
            db_user = 'root'
            db_pass = ''
            db_url  = '127.0.0.1'
            dbname = 'feature_base'

        self.conn = MySQLdb.connect(db_url,db_user,db_pass,dbname,charset='utf8')
        self.path = "data"

        self.basetime = basetime
        self.baseid   = None

        self.db_user = db_user
        self.db_pass = db_pass
        self.db_url  = db_url
        self.dbname  = dbname

        self.logger = logging.getLogger('dbexport') 

    def fetch(self, sql):
        ret = []
        cursor = self.conn.cursor()
        cursor.execute(sql)
        if cursor.rowcount == 0:
            return ret
        for row in cursor.fetchall():
            ret.append(row)
        return ret

    def upID(self, iid):
        self.baseid = iid
    
    def fetchEvent(self):
        ret = None 
        sql = 'select id,title,content,pubtime,source_site,source_url,ext_info from tb_news_basedata where pubtime>=' + self.basetime
        cursor = self.conn.cursor()
        cursor.execute(sql)
        if cursor.rowcount == 0:
            return ret
        tdata = []
        hist  = []
        for row in cursor.fetchall():
            if row[3] >= self.tday: 
                tdata.append(row)
            else:
                hist.append(row)
        return (tdata, hist)
#
