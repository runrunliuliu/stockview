# coding: utf8
from flask import Blueprint
from flask import Flask, request, render_template
from flask_login import current_user, login_required
from flask_restful import Resource, Api
import json
import os
import codecs
import logging
from database.stock import Stock
from database.stockinfo import Stockinfo
from database.mtime import Mtime
import datetime
from . import main
from .. import db
from ..models import Tbuy 


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


@main.route('/tbuy')
def tbuy():
    day = request.args.get('day')

    info = Stockinfo("ROCKS", "stockinfo", "/Users/liu/data/rocksdb/")
    mt = Mtime("ROCKS", "mtime", "/Users/liu/data/rocksdb/")

    distdays = []

    gdlist = db.session.query(Tbuy.day).filter(Tbuy.shape_type == "gd")
    days = gdlist.distinct().all()
    for d in days:
        print(d)
        distdays.append(d[0])
    sortdays = sorted(distdays, key=lambda x: datetime.datetime.strptime(str(x), '%Y%m%d'), reverse=True)

    results = None
    if day is None:
        sel = db.session.query(Tbuy.day, Tbuy.stock_id, Tbuy.shape_json)
        results = sel.filter(Tbuy.day > 0).order_by(Tbuy.day.desc()).all()

    buys = []
    for r in results:
        stock_id = str(r[1])
        js = json.loads(r[2])
        if day is None:
            day = str(r[0])
        rkey = transStock(stock_id) + '|' + transDay(day)
        if js['val'] == 0:
            item = (r[0], stock_id, info.getname(stock_id), float(js['prob']), mt.getNqs(rkey))
            buys.append(item)

    return render_template('tbuy_list.html', buys=buys, sdays=sortdays)


@main.route('/gd')
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


@main.route('/', methods=['GET', 'POST'])
def index():
    return redirect(url_for('main.xgb'))


@main.route('/xt')
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


@main.route('/sxt')
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


@main.route('/users/<username>')
@login_required
def users(username):
    user = User.query.filter_by(username=username).first()
    if user is None:
        flash('Invalid user.', 'error')
        return redirect(url_for('main.index'))

    # get request arguments
    followed = request.args.get('followed', 1, type=int)

    # query for users
    if followed:
        results = user.followed.order_by(Follow.timestamp.desc()).all()
        users = [{'user': item.followed, 'timestamp': item.timestamp}
                 for item in results]
    else:
        results = User.query.order_by(User.username.asc()).all()
        users = [{'user': item, 'timestamp': None}
                 for item in results]

    return render_template('user_list.html', user=user, users=users,
                           followed=followed)


@main.route('/user/<username>')
@login_required
def user(username):
    user = User.query.outerjoin(Geo).outerjoin(UserType)\
        .with_entities(User, Geo, UserType)\
        .filter(User.username == username).first_or_404()

    # query for firms
    firms = Firm.query.join(FirmType).join(FirmTier).join(User)\
        .with_entities(Firm, FirmType, FirmTier, User)\
        .filter(User.username == username)\
        .order_by(FirmTier.firm_tier.asc(), Firm.name.asc()).all()

    # parse firms
    vc_firms = []
    ai_firms = []
    su_firms = []
    for firm in firms:
        if firm.FirmType.firm_type_code == 'vc':
            vc_firms.append(firm)
        if firm.FirmType.firm_type_code == 'ai':
            ai_firms.append(firm)
        if firm.FirmType.firm_type_code == 'su':
            su_firms.append(firm)

    return render_template('user.html', user=user, vc_firms=vc_firms,
                           ai_firms=ai_firms, su_firms=su_firms)


@main.route('/tholds')
def tholds():
    celue = request.args.get('cl')
    if celue is not None:
        filters = Holds.query.filter(Holds.status == 1)
        filters = filters.filter(Holds.strategyid == celue)
    else:
        filters = Holds.query.filter(Holds.status == 1)

    results = filters.join(Stock, Stock.stockid == Holds.stockid).\
        add_columns(Holds.id,
                    Holds.stockid,
                    Stock.stockname,
                    Holds.strategyid,
                    Holds.reason,
                    Holds.dreason,
                    Holds.buyday,
                    Holds.sellday,
                    Holds.bprice,
                    Holds.nprice,
                    Holds.sprice,
                    Holds.holds,)\
        .order_by(Holds.strategyid.asc(), Holds.id.asc()).all()
    holds = [
        {
            'hold': item,
            'ret': float('{0:.4f}'.format((item.nprice - item.bprice) / item.bprice * 100)),
            'timestamp': None
        }
        for item in results
    ]
    return render_template('holds_list.html', holds=holds)


@main.route('/tfinish')
def tfinish():
    pass


@main.route('/tdrops')
def tdrops():
    pass


@main.route('/stocks')
def stocks():
    pass
#
