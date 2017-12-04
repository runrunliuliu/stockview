import os
from random import shuffle
import flask
from flask import Flask, request, render_template, send_from_directory
import json
import time
from db.dbexport import dbexport

app = Flask(__name__)


APP_ROOT = os.path.dirname(os.path.abspath(__file__))


@app.route('/send_image')
def send_image():
    dirs     = request.args.get('dirs')
    filename = request.args.get('filename')
    return send_from_directory(dirs, filename)


@app.route('/stock/moneyflow')
def moneyflow():
    ret = 'ok'
    resp = flask.Response(ret)
    resp.headers["Access-Control-Allow-Origin"] = "http://chart.quchaogu.com"
    return resp


@app.route('/chart/time')
def nowtime():
    now = int(time.time())
    resp = flask.Response(str(now))
    resp.headers["Access-Control-Allow-Origin"] = "http://chart.quchaogu.com"
    return resp


@app.route('/chart/common/shapebytype')
def shapetype():
    inst  = request.args.get('code')
    start = request.args.get('from_date')
    end   = request.args.get('to_date')
    tp    = request.args.get('type')
    if len(inst) > 6:
        inst = '1' + inst[2:]
    else:
        inst = '1' + inst
    db   = dbexport(mode=2)
    sql = "select * from tb_stock_day_kline_shape where stock_id=" + inst \
        + " and day>="  + start + " and day<=" + end + " and shape_type='" + tp + "'"
    shape = db.fetch(sql) 

    shapelist = []
    for s in shape:
        tmp = {}
        tmp['stock_id']   = str(s[1])
        tmp['day']        = str(s[2])
        tmp['shape_type'] = s[3]
        
        data   = json.loads(s[4])
        detail = {}
        detail['y']    = float(data['y'])
        detail['prob'] = float(data['prob'])
        detail['val']  = float(data['val'])
        tmp['shape_detail'] = detail 
        shapelist.append(tmp)

    ret = {}
    ret['code'] = 100000
    ret['data'] = {
        "shape_list": shapelist
    }
    ret['msg']  = "succ"
    resp = flask.Response(json.dumps(ret))
    resp.headers["Access-Control-Allow-Origin"] = "http://chart.quchaogu.com"
    return resp 


@app.route('/chart/symbols')
def symbols():
    inst  = request.args.get('symbol')
    ret = {}
    ret["description"] = "华泰证券"
    ret["exchange-listed"] = "SH"
    ret["exchange-traded"] = "SH"
    ret["name"] = inst
    ret["symbol"] = inst 
    ret["type"] = "stock"
    ret["minmov"] = 1
    ret["timezone"] = "Asia/Shanghai"
    ret["session"] = "0930-1130,1300-1500"
    ret["pointvalue"] = 1
    ret["pricescale"] = 100
    ret["supported_resolutions"] = [ "1", "5", "15", "30", "60", "D", "W", "M"]
    ret["has_intraday"] = True
    ret["has_weekly_and_monthly"] = True
    ret["ticker"] = inst 
    resp = flask.Response(json.dumps(ret))
    resp.headers["Access-Control-Allow-Origin"] = "http://chart.quchaogu.com"
    return resp


@app.route('/chart/common/shape')
def shape():
    ret = {}
    ret['code'] = 100000
    ret['data'] = {
        "shape_list":[
        ]
    }
    ret['msg']  = "succ"
    resp = flask.Response(json.dumps(ret))
    resp.headers["Access-Control-Allow-Origin"] = "http://chart.quchaogu.com"
    return resp


@app.route('/chart/common/analytics')
def analytics():
    ret = {}
    ret['code'] = 100000
    ret['data'] = {}
    ret['msg']  = "succ"
    resp = flask.Response(json.dumps(ret))
    resp.headers["Access-Control-Allow-Origin"] = "http://chart.quchaogu.com"
    return resp


@app.route('/chart/stock/info')
def ticker():
    ret = {}
    ret['code'] = 100000
    ret['data'] = {}
    ret['msg']  = "succ"
    resp = flask.Response(json.dumps(ret))
    resp.headers["Access-Control-Allow-Origin"] = "http://chart.quchaogu.com"
    return resp


@app.route('/chart/common/history')
def history():
    inst  = request.args.get('code')
    start = request.args.get('from')
    end   = request.args.get('to')

    if len(inst) > 6:
        inst = '1' + inst[2:]
    else:
        inst = '1' + inst
    db   = dbexport(mode=2)
    sql  = 'select * from tb_stock_day_kline where day >= ' + start + ' and day<=' + end + ' and stock_id=' + inst
    dayk = db.fetch(sql) 
    out = {}
    t = []
    o = []
    h = []
    d = []
    c = []
    v = []
    a = []
    tr = []
    ch = []
    for k in dayk:
        t.append(int(k[2]))
        o.append(float(k[3]))
        h.append(float(k[4]))
        d.append(float(k[5]))
        c.append(float(k[6]))
        v.append(float(k[7]))
        a.append(0)
        tr.append(0)
        ch.append(0)
    out['s'] = 'ok'
    out['t'] = t
    out['o'] = o
    out['h'] = h
    out['l'] = d
    out['c'] = c
    out['v'] = v
    out['a']  = a 
    out['tr'] = tr 
    out['ch'] = ch 
    out['interval'] = 60
    ret  = json.dumps(out)
    resp = flask.Response(ret)
    resp.headers["Access-Control-Allow-Origin"] = "http://chart.quchaogu.com"
    return resp


@app.route('/show')
def show():
    dirs  = request.args.get('dir')
    label = request.args.get('label')

    tdirs = '/home/himalayas/apps/dltrade/data/' + dirs + '/test/' + label + '/'
    image_names = os.listdir(tdirs)
    shuffle(image_names)
    shows = image_names[-50:]
    items = []
    for s in shows:
        items.append((s, tdirs))

    return render_template("gallery.html", image_names=items)


if __name__ == "__main__":
    app.run(port=4555, host='0.0.0.0', debug=True)
