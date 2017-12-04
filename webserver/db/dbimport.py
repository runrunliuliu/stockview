from contextlib import closing
import MySQLdb
import json
import re
import logging


class dbimport:

    def __init__(self, mode=0):
        if mode == 0:
            db_user = 'hy'
            db_pass = '123456'
            db_url = '192.168.200.30'
            dbname = 'stock_misc'

        if mode == 1:
            db_user = 'market'
            db_pass = '4nz31ql8f5vbs1a90s'
            db_url = 'rdsl53b8z8217547s910.mysql.rds.aliyuncs.com'
            dbname = 'stock_misc'

        # local test
        if mode == 2:
            db_user = 'root'
            db_pass = ''
            db_url = '127.0.0.1'
            dbname = 'feature_base'

        self.conn = MySQLdb.connect(
            db_url, db_user, db_pass, dbname, charset='utf8')

        self.db_user = db_user
        self.db_pass = db_pass
        self.db_url = db_url
        self.dbname = dbname

        self.logger = logging.getLogger('DBimport')

    def update(self, jsarr):
        table = 'tb_event_pre_list'
        cursor = self.conn.cursor()
        for k, v in jsarr.iteritems():
            sel = "dup='" + json.dumps(v) + "'"
            cond = "id=" + str(k)
            sql = 'UPDATE ' + table + ' SET ' + sel + ' where ' + cond + ';'
            cursor.execute(sql)
            self.conn.commit()

    # update one record
    def updateRecord(self, key, pair):
        table = 'tb_news_pre_data'
        conn = MySQLdb.connect(self.db_url, self.db_user,
                               self.db_pass, self.dbname, charset='utf8')
        with closing(conn.cursor()) as cur:
            sql = 'update ' + table + " SET `" + \
                pair[0] + "`='" + str(pair[1]) + \
                "',zyd_upd_num=1 where tnb_id=" + key
            sql = sql.encode('utf8')
            self.logger.info('update sql_one_record:\t' + sql)
            cur.execute(sql)
            conn.commit()
        conn.close()

    # Partital Update
    def update2(self, jsarr, ids):
        table = 'tb_news_pre_data'
        conn = MySQLdb.connect(self.db_url, self.db_user,
                               self.db_pass, self.dbname, charset='utf8')
        with closing(conn.cursor()) as cur:
            for d in jsarr:
                d = json.loads(d)
                sql = ''

                tnd_id = int(d['tnb_id'])
                if tnd_id in ids:
                    for k in d.keys():
                        if k == 'tnb_id':
                            continue
                        sql = sql + "`" + k + "`='" + d[k] + "',"
                    sql = 'update ' + table + ' SET ' + sql
                    sql = re.sub(',$', ' ', sql)
                    sql = sql + 'where tnb_id=' + d['tnb_id']
                    sql = sql.encode("utf8")
                else:
                    for k in d.keys():
                        sql = sql + "`" + k + "`='" + d[k] + "',"
                    sql = 'REPLACE INTO ' + table + ' SET ' + sql
                    sql = re.sub(',$', ';', sql).encode("utf8")

                self.logger.info('new sql:\t' + sql)
                cur.execute(sql)
                conn.commit()
        conn.close()

    def batchinsert(self, jsarr, table, num):
        conn = MySQLdb.connect(self.db_url, self.db_user,
                               self.db_pass, self.dbname, charset='utf8')
        with closing(conn.cursor()) as cur:
            if num == 0:
                cur.execute('truncate table ' + table)
            cnt = 0
            sql = "insert into " + table + " ("
            concat = []
            for d in jsarr:
                d = json.loads(d)
                if cnt == 0:
                    tmp = []
                    for k in d.keys():
                        tmp.append(k)
                    sql = sql + ','.join(tmp) + ') values '
                    cnt = cnt + 1
                tmp = []
                for k in d.keys():
                    tmp.append(d[k])
                vals = "(" + ','.join(tmp) + ")"
                concat.append(vals)
                cnt = cnt + 1
            sql = sql + ','.join(concat)
            cur.execute(sql)
            conn.commit()
        conn.close()

    def replace(self, jsarr, table):
        conn = MySQLdb.connect(self.db_url, self.db_user,
                               self.db_pass, self.dbname, charset='utf8')
        with closing(conn.cursor()) as cur:
            for d in jsarr:
                d = json.loads(d)
                sql = ''
                for k in d.keys():
                    sql = sql + "`" + k + "`='" + d[k] + "',"
                sql = 'REPLACE INTO ' + table + ' SET ' + sql
                sql = re.sub(',$', ';', sql)
                self.logger.info('new sql:\t' + sql)
                cur.execute(sql)
                conn.commit()
        conn.close()
#
