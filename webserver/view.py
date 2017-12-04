# coding: utf8
from flask import Flask, request, render_template
from flask_restful import Resource, Api
import pymysql
import json
import os
from flask_bootstrap import Bootstrap
import codecs
import logging
from database.stock import Stock
from database.stockinfo import Stockinfo
from database.mtime import Mtime


bootstrap = Bootstrap()
db = pymysql.connect("127.0.0.1", "root", "", "feature_base")
app = Flask(__name__)
api = Api(app)
bootstrap.init_app(app)

tdays = []
stockname = {}
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
                    datefmt='%m-%d %H:%M',
                    filename='logs/web.log',
                    filemode='a')


def transDay(day):
    return day[0:4] + '-' + day[4:6] + '-' + day[6:]


def transStock(stock):
    pre = ''
    if stock[1] == '6':
        pre = 'SH'
    if stock[1] == '3' or stock[1] == '0':
        pre = 'SZ'
    if stock[0] == '2':
        pre = 'ZS'
    return pre + stock[1:]


@app.route('/xgb')
def xgb():
    info = Stockinfo("ROCKS", "stockinfo", "/Users/liu/data/rocksdb/")
    mt = Mtime("ROCKS", "mtime", "/Users/liu/data/rocksdb/")

    day = request.args.get('day')
    cursor = db.cursor()
    sql = "SELECT day, stock_id, shape_json FROM tb_stock_day_kline_shape where shape_type='gd' and" + " day='" + day + "'"
    cursor.execute(sql)
    results = cursor.fetchall()
    for r in results:
        stock_id = str(r[1])
        js = json.loads(r[2])

        rkey = transStock(stock_id) + '|' + transDay(day)
        if js['val'] == 0:
            print(stock_id, info.getname(stock_id), js, mt.getNqs(rkey))


@app.route('/gd')
def gd():
    stockid = request.args.get('stockid')
    cursor = db.cursor()
    sql = "SELECT day,shape_json FROM tb_stock_day_kline_shape where shape_type='gd' and stock_id=1" + stockid
    cursor.execute(sql)
    results = cursor.fetchall()
    arr = []
    for r in results:
        val = dict()
        val['d'] = r[0]
        val['v'] = r[1]
        arr.append(val)

    return json.dumps(arr)


@app.route('/')
def home():
    return render_template('editor.html')


@app.route('/xt')
def search_quick():
    kline = request.args.get('k')
    kid = request.args.get('d')

    cursor = db.cursor()
    sql = "SELECT kid, cid, avg(num),  avg(mean), avg(win) FROM tb_kmeans_predict where kid=" \
        + str(kid) + " and kline='" + kline + "' group by cid;"
    cursor.execute(sql)
    results = cursor.fetchall()

    data = []
    for r in results:
        tmp = dict()
        tmp['kid'] = r[0]
        tmp['cid'] = "<a href=\'sxt?d=" + \
            str(r[0]) + "&g=" + str(r[1]) + "&k=" + \
            kline + "\'>" + str(r[1]) + "</a>"
        tmp['avg_num'] = str(r[2])
        tmp['avg_mean'] = str(r[3])
        tmp['avg_win'] = str(r[4])
        data.append(tmp)

    columns = [
        {
            "field": "kid",
            "title": "kmeans ID",
            "sortable": True,
        },
        {
            "field": "cid",
            "title": "kmeans group ID",
        },
        {
            "field": "avg_num",
            "title": "Average Number",
            "sortable": True,
        },
        {
            "field": "avg_mean",
            "title": "Average Mean",
            "sortable": True,
        },
        {
            "field": "avg_win",
            "title": "Average Win",
            "sortable": True,
        }
    ]
    return render_template("table.html",
                           data=data,
                           columns=columns,
                           title='Flask Bootstrap Table')


@app.route('/sxt')
def search_xt():
    kline = request.args.get('k')
    kid = request.args.get('d')
    gid = request.args.get('g')
    cursor = db.cursor()

    stock = Stock('ROCKS', 'stock', '', dirs='../output/')

    # 计算收益，胜率，标的数
    sql = "SELECT mean, win, day, num FROM tb_kmeans_predict where kid=" \
        + str(kid) + " and cid =" + str(gid) + \
        " and kline='" + kline + "' order by day"
    cursor.execute(sql)
    results = cursor.fetchall()
    left = []
    right = []
    labels = []
    num = []
    for r in results:
        left.append(r[0])
        right.append(r[1])
        labels.append(r[2])
        num.append(r[3])
    legend = ['Returns', 'Win_Rate', 'Num']

    # 获取中心样本
    samples = []
    sql = "select sample from tb_kmeans_data where kid=" + str(kid) \
        + " and cid=" + str(gid) + " and kline='" + kline + "'"
    cursor.execute(sql)
    results = cursor.fetchall()
    for r in results:
        tmp = r[0].split('/')
        from shutil import copyfile
        copyfile(r[0], 'static/images/' + tmp[-1])
        samples.append(tmp[-1])

    # 获取股票和距离
    stocks = []
    day = tdays[-1]
    if not os.path.isfile('../data/k3_0.' + day + '.csv'):
        day = tdays[-2]
    sql = "select stock, dist from tb_kmeans_stock where kid=" \
        + str(kid) + " and cid=" + str(gid) \
        + " and day='" + day + "' and kline='" + kline + "' order by dist;"
    cursor.execute(sql)
    results = cursor.fetchall()
    for r in results:
        sid = str(r[0])
        if sid in stockname:
            stocks.append((r[0], stockname[sid], day, r[1]))

    # 获取最近选股的收益
    rets = []
    day1 = tdays[-4]
    day2 = tdays[-1]
    sql = "select stock, day, dist from tb_kmeans_stock where kid=" \
        + str(kid) + " and cid=" + str(gid) + " and kline='" + kline \
        + "' and day<='" + day2 + "' and day>='" + day1 + "' order by day desc, dist;"
    cursor.execute(sql)
    results = cursor.fetchall()
    for r in results:
        sid = str(r[0])
        if sid in stockname:
            ret = stock.calRet2Days(r[0], r[1], day2)
            rets.append((r[0], r[1], stockname[sid], r[2], ret))

    return render_template('line_chart.html', values=(left, right, samples, stocks, num, rets), labels=labels, legend=legend)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=7788)

#
