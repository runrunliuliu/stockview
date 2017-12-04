webpackJsonp([0],{

/***/ "./node_modules/react-datetime/css/react-datetime.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/about/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/about/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/about/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var util_1 = __webpack_require__("./src/util/index.ts");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome(props, context) {
        _super.call(this, props, context);
        this._chartLayout = context.chartLayout;
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            animateStep: 0,
        };
    }
    Welcome.prototype.componentDidMount = function () {
        var _this = this;
        util_1.animationQueue()
            .delay(500)
            .enqueue(function () { return _this.setState({ animateStep: 1 }); })
            .delay(300)
            .enqueue(function () { return _this.setState({ animateStep: 2 }); })
            .delay(120)
            .enqueue(function () { return _this.setState({ animateStep: 4 }); })
            .delay(300)
            .enqueue(function () { return _this.setState({ animateStep: 5 }); });
    };
    Welcome.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.state, nextState);
    };
    Welcome.prototype.render = function () {
        var className = '';
        switch (this.state.animateStep) {
            case 0:
                break;
            case 1:
                className = 'ani-step-1';
                break;
            case 2:
                className = 'ani-step-2';
                break;
            case 3:
                className = 'ani-step-3';
                break;
            case 4:
                className = 'ani-step-4';
                break;
            case 5:
                className = 'ani-step-5';
                break;
            default:
                break;
        }
        return (React.createElement("div", {className: "chart-welcome " + className}, 
            React.createElement("div", {className: 'blocker'}), 
            React.createElement("div", {className: 'content cd-intro-content'}, 
                React.createElement("div", {className: 'logo'}), 
                React.createElement("h1", null, "趣看盘"), 
                React.createElement("h2", null, "更智能， 更高效， 更及时， 更全面"), 
                React.createElement("p", null, "看盘软件在十几年间都没有发生过重要的变化，应该这样吗?"), 
                React.createElement("p", null, 
                    "我们走访了数百家专业机构，发现他们", 
                    React.createElement("em", null, "看盘的方式"), 
                    "和", 
                    React.createElement("em", null, "主流看盘工具提供的功能"), 
                    "有非常", 
                    React.createElement("em", null, "巨大的信息鸿沟"), 
                    "。"), 
                React.createElement("p", null, 
                    React.createElement("em", null, "几个IT工程师"), 
                    "，尝试做些创新， 试图帮您具备", 
                    React.createElement("em", null, "专业的看盘视角和能力"), 
                    "。"), 
                React.createElement("a", {href: 'javascript:;', className: 'proceed-btn', onClick: this.clickHandler}), 
                React.createElement("a", {href: '/forums/', target: '_blank', className: 'feedback-btn'}, "建议/反馈"))));
    };
    Welcome.prototype.clickHandler = function () {
        var _this = this;
        util_1.animationQueue()
            .enqueue(function () { return _this.setState({ animateStep: 3 }); })
            .delay(300)
            .enqueue(function () { return _this.setState({ animateStep: 0 }); })
            .delay(300)
            .enqueue(function () { return _this._chartLayout.toggleAbout(false); });
    };
    Welcome.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Welcome;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Welcome;


/***/ }),

/***/ "./src/component/axisX.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__("./node_modules/react/react.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var AxisX = (function (_super) {
    __extends(AxisX, _super);
    function AxisX(props, context) {
        _super.call(this, props, context);
        this._axisX = context.chartLayout.axisx;
        this.moveHandler = this.moveHandler.bind(this);
        this.startHandler = this.startHandler.bind(this);
        this.endHandler = this.endHandler.bind(this);
    }
    AxisX.prototype.componentDidMount = function () {
        var axisX = this._axisX;
        axisX.ctx = this.refs.canvas.getContext('2d');
        axisX.width = this.props.width;
        axisX.height = this.props.height;
        document.addEventListener('mousemove', this.moveHandler);
        document.addEventListener('touchmove', this.moveHandler);
        document.addEventListener('mouseup', this.endHandler);
        document.addEventListener('touchend', this.endHandler);
    };
    AxisX.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.moveHandler);
        document.removeEventListener('touchmove', this.moveHandler);
        document.removeEventListener('mouseup', this.endHandler);
        document.removeEventListener('touchend', this.endHandler);
    };
    AxisX.prototype.componentDidUpdate = function () {
        var axisX = this._axisX;
        var canvas = this.refs.canvas;
        var width = this.props.width;
        var height = this.props.height;
        axisX.width = width;
        axisX.height = height;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d');
    };
    AxisX.prototype.shouldComponentUpdate = function (nextProps) {
        var curProps = this.props;
        return curProps.width !== nextProps.width ||
            curProps.height !== nextProps.height;
    };
    AxisX.prototype.render = function () {
        var width = this.props.width;
        var height = this.props.height;
        return (React.createElement("div", {className: 'chart-line'}, 
            React.createElement("div", {className: 'chart-axisx', style: { height: height, width: width }}, 
                React.createElement("canvas", {ref: 'canvas', width: width, height: height, onMouseDown: this.startHandler, onTouchStart: this.startHandler})
            )
        ));
    };
    AxisX.prototype.moveHandler = function (ev) {
        if (this._dragBarWidthStart) {
            var axisX = this._axisX;
            var width = axisX.width;
            var pageX = ev.changedTouches ? ev.changedTouches[0].pageX : ev.pageX;
            var curBarWidth = axisX.barWidth;
            var scale = width <= this._dragPosX ? 1 : 1 + (this._dragPosX - pageX) / width;
            axisX.barWidth = curBarWidth * scale;
            scale = axisX.barWidth / curBarWidth;
            axisX.offset *= scale;
            this._dragPosX = pageX;
        }
    };
    AxisX.prototype.startHandler = function (ev) {
        if (!!ev.touches) {
            ev.preventDefault();
            if (ev.touches.length === 1) {
                this._dragPosX = ev.touches[0].pageX;
                this._dragBarWidthStart = true;
            }
        }
        else {
            this._dragPosX = ev.pageX;
            this._dragBarWidthStart = true;
        }
    };
    AxisX.prototype.endHandler = function () {
        this._dragBarWidthStart = false;
    };
    AxisX.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return AxisX;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AxisX;


/***/ }),

/***/ "./src/component/axisY.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__("./node_modules/react/react.js");
var AxisY = (function (_super) {
    __extends(AxisY, _super);
    function AxisY() {
        _super.call(this);
        this._dragMarginStart = false;
        this.downHandler = this.downHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
    }
    AxisY.prototype.componentDidMount = function () {
        var axisY = this.props.axis;
        axisY.ctx = this.refs.canvas.getContext('2d');
        axisY.width = this.props.width;
        axisY.height = this.props.height;
        document.addEventListener('mousemove', this.mouseMoveHandler);
        document.addEventListener('touchmove', this.mouseMoveHandler);
        document.addEventListener('mouseup', this.mouseUpHandler);
        document.addEventListener('touchend', this.mouseUpHandler);
    };
    AxisY.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.mouseMoveHandler);
        document.removeEventListener('touchmove', this.mouseMoveHandler);
        document.removeEventListener('mouseup', this.mouseUpHandler);
        document.removeEventListener('touchend', this.mouseUpHandler);
    };
    AxisY.prototype.componentDidUpdate = function () {
        var axisY = this.props.axis;
        var width = this.props.width;
        var height = this.props.height;
        var canvas = this.refs.canvas;
        axisY.width = width;
        axisY.height = height;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d');
    };
    AxisY.prototype.shouldComponentUpdate = function (nextProps) {
        var curProps = this.props;
        return curProps.width !== nextProps.width ||
            curProps.height !== nextProps.height;
    };
    AxisY.prototype.render = function () {
        var width = this.props.width;
        var height = this.props.height;
        return (React.createElement("div", {className: 'chart-axisy', style: { height: height + 'px', width: width + 'px' }}, 
            React.createElement("canvas", {ref: 'canvas', width: width, height: height, onMouseDown: this.downHandler, onTouchStart: this.downHandler})
        ));
    };
    AxisY.prototype.downHandler = function (ev) {
        if (!!ev.touches) {
            ev.preventDefault();
            if (ev.touches.length === 1) {
                this._dragPosY = ev.touches[0].pageY;
                this._dragMarginStart = true;
            }
        }
        else {
            this._dragPosY = ev.pageY;
            this._dragMarginStart = true;
        }
    };
    AxisY.prototype.mouseMoveHandler = function (ev) {
        if (this._dragMarginStart) {
            var pageY = ev.changedTouches ? ev.changedTouches[0].pageY : ev.pageY;
            var offset = pageY - this._dragPosY;
            var axisY = this.props.axis;
            var margin = axisY.margin;
            var height = axisY.height;
            var graphHeight = height - 2 * margin;
            var scale = 2 * offset / height;
            axisY.margin = (height - graphHeight * (1 + scale)) / 2;
            this._dragPosY = pageY;
        }
    };
    AxisY.prototype.mouseUpHandler = function () {
        this._dragMarginStart = false;
    };
    return AxisY;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AxisY;


/***/ }),

/***/ "./src/component/chart/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/chart/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/chart/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var legend_1 = __webpack_require__("./src/component/chart/legend/index.tsx");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var indicator_1 = __webpack_require__("./src/component/chart/indicator/index.tsx");
var axisY_1 = __webpack_require__("./src/component/axisY.tsx");
var Chart = (function (_super) {
    __extends(Chart, _super);
    function Chart(props, context) {
        _super.call(this, props);
        this._v = 0;
        this.state = {
            hover: false,
            cursor: 'crosshair',
            showEditModeToolTip: false,
            pointX: 0,
            pointY: 0,
        };
        this._chartLayout = context.chartLayout;
        this.dragMoveHandler = this.dragMoveHandler.bind(this);
        this.gestureMoveHandler = this.gestureMoveHandler.bind(this);
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.touchMoveHandler = this.touchMoveHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
        this.mouseUpPageHanlder = this.mouseUpPageHanlder.bind(this);
        this.touchEndPageHandler = this.touchEndPageHandler.bind(this);
        this.contextMenuHanlder = this.contextMenuHanlder.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.toolTipHandler = this.toolTipHandler.bind(this);
        this.hitHandler = this.hitHandler.bind(this);
        this.defaultCursorChangeHandler = this.defaultCursorChangeHandler.bind(this);
    }
    Chart.prototype.shouldComponentUpdate = function (nextProp, nextState) {
        var curProp = this.props;
        return nextProp.chart !== curProp.chart ||
            nextProp.width !== curProp.width ||
            nextProp.height !== curProp.height ||
            !_.isEqual(this.state, nextState);
    };
    Chart.prototype.componentDidMount = function () {
        var chartLayout = this._chartLayout;
        var chart = this.props.chart;
        var width = ~~this.props.width - constant_1.AXIS_Y_WIDTH;
        var height = ~~this.props.height;
        var canvas = this.refs.canvas;
        var topCanvas = this.refs.topCanvas;
        chart.width = width;
        chart.height = height;
        chart.ctx = canvas.getContext('2d');
        chart.topCtx = topCanvas.getContext('2d');
        chartLayout.addListener('graph_hover', this.hitHandler);
        chartLayout.addListener('cursor_change', this.defaultCursorChangeHandler);
        chartLayout.addListener('cursor_move', this.toolTipHandler);
        chartLayout.addListener('drawingtool_end', this.toolTipHandler);
        chartLayout.addListener('editmode_change', this.toolTipHandler);
        document.addEventListener('mousemove', this.dragMoveHandler);
        document.addEventListener('touchmove', this.dragMoveHandler);
        document.addEventListener('touchmove', this.gestureMoveHandler);
        document.addEventListener('mouseup', this.mouseUpPageHanlder);
        document.addEventListener('touchend', this.touchEndPageHandler);
    };
    Chart.prototype.componentWillUnmount = function () {
        var chartLayout = this._chartLayout;
        chartLayout.removeListener('graph_hover', this.hitHandler);
        chartLayout.removeListener('cursor_change', this.defaultCursorChangeHandler);
        chartLayout.removeListener('cursor_move', this.toolTipHandler);
        chartLayout.removeListener('drawingtool_end', this.toolTipHandler);
        chartLayout.removeListener('editmode_change', this.toolTipHandler);
        document.removeEventListener('mousemove', this.dragMoveHandler);
        document.removeEventListener('touchmove', this.dragMoveHandler);
        document.removeEventListener('touchmove', this.gestureMoveHandler);
        document.removeEventListener('mouseup', this.mouseUpPageHanlder);
        document.removeEventListener('touchend', this.touchEndPageHandler);
    };
    Chart.prototype.componentDidUpdate = function (prevProps) {
        // 因为使用了HDPI Canvas，因此当canvas的尺寸发生变化的时候，需要重新调用getContext。目的是
        // 自动适应高清屏
        var curProps = this.props;
        var chart = this.props.chart;
        var canvas = this.refs.canvas;
        var topCanvas = this.refs.topCanvas;
        if (curProps.width !== prevProps.width ||
            curProps.height !== prevProps.height) {
            var width = ~~this.props.width - constant_1.AXIS_Y_WIDTH;
            var height = ~~this.props.height;
            canvas.width = width;
            canvas.height = height;
            topCanvas.width = width;
            topCanvas.height = height;
            canvas.getContext('2d');
            topCanvas.getContext('2d');
            chart.width = width;
            chart.height = height;
        }
    };
    Chart.prototype.render = function () {
        var chart = this.props.chart;
        var width = this.props.width;
        var chartWidth = this.props.width - constant_1.AXIS_Y_WIDTH;
        var height = this.props.height;
        return React.createElement("div", {className: "chart-line " + (chart.isMain ? 'main' : ''), style: { width: width }}, 
            React.createElement("div", {className: 'chart-plot', style: {
                height: height + 'px',
                width: chartWidth + 'px',
                cursor: this.state.cursor,
            }}, 
                React.createElement(legend_1.default, {chart: chart}), 
                React.createElement("canvas", {ref: 'canvas', width: chartWidth, height: height}), 
                React.createElement("canvas", {ref: 'topCanvas', width: chartWidth, height: height, onContextMenu: this.contextMenuHanlder, onMouseDown: this.mouseDownHandler, onTouchStart: this.touchStartHandler, onMouseMove: this.mouseMoveHandler, onTouchMove: this.touchMoveHandler, onTouchEnd: this.touchEndHandler, onMouseOver: this.mouseOver, onMouseOut: this.mouseOut}), 
                this.state.showEditModeToolTip ?
                    React.createElement("div", {className: 'edit-mode-tooltip', style: {
                        right: this.state.pointX + 'px',
                        bottom: this.state.pointY + 'px',
                    }}, 
                        "1.拖动十字线定义第一点.", 
                        React.createElement("br", null), 
                        "2.点击任意位置确定第一个停止位置") : null, 
                chart.isMain ? React.createElement(indicator_1.default, {chart: chart}) : null), 
            React.createElement(axisY_1.default, {axis: chart.axisY, height: height, width: constant_1.AXIS_Y_WIDTH}));
    };
    Chart.prototype.momentumMove = function (v) {
        var _this = this;
        var axisX = this._chartLayout.axisx;
        this._momentumTimer = setTimeout(function () {
            if (Math.abs(v) > 10) {
                axisX.offset += v * 30 / 1000;
                v -= v * 0.3;
                _this.momentumMove(v);
            }
        }, 30);
    };
    Chart.prototype.stopMomentum = function () {
        clearTimeout(this._momentumTimer);
    };
    Chart.prototype.toolTipHandler = function () {
        var chartLayout = this._chartLayout;
        var chart = this.props.chart;
        var point = chart.crosshair.point;
        if (chart.hover && chartLayout.isEditMode) {
            var width = ~~this.props.width - constant_1.AXIS_Y_WIDTH;
            var height = ~~this.props.height;
            this.setState({
                showEditModeToolTip: true,
                pointX: width - point.x + 8,
                pointY: height - point.y + 8,
            });
        }
        else {
            this.setState({ showEditModeToolTip: false });
        }
    };
    Chart.prototype.hitHandler = function (hover) {
        if (this._chartLayout.hoverChart === this.props.chart) {
            this.setState({ cursor: hover ? 'pointer' : this._chartLayout.defaultCursor });
        }
    };
    Chart.prototype.defaultCursorChangeHandler = function (cursor) {
        this.setState({ cursor: this.state.hover ? 'pointer' : this._chartLayout.defaultCursor });
    };
    Chart.prototype.mouseOver = function () {
        this.props.chart.hover = true;
    };
    Chart.prototype.mouseOut = function () {
        this.props.chart.hover = false;
        this.context.chartLayout.setCursorPoint(null);
    };
    Chart.prototype.mouseDownHandler = function (ev) {
        var chartLayout = this._chartLayout;
        var chart = this.props.chart;
        var offset = chart.offset;
        var curPoint = {
            x: ev.pageX - offset.left,
            y: ev.pageY - offset.top,
        };
        if (chartLayout.mainDatasource.loaded() === 0) {
            return;
        }
        // 取消其他chart中图形的选中态
        chartLayout.cancelSelectedGraph();
        // 如果还没有设置过坐标点，则设置坐标，比如页面刚进入时，鼠标还没有移动，此时坐标是空
        if (!chart.crosshair.point) {
            chartLayout.setCursorPoint(curPoint);
        }
        if (chartLayout.selectedDrawingTool) {
            chart.drawingToolBegin();
            chart.drawingToolSetVertex(curPoint);
            if (chart.creatingDrawingTool.isFinished()) {
                chart.drawingToolEnd();
            }
            return;
        }
        // 继续创建画图工具
        if (chart.creatingDrawingTool) {
            chart.drawingToolSetVertex(curPoint);
            if (chart.creatingDrawingTool.isFinished()) {
                chart.drawingToolEnd();
            }
            return;
        }
        // 点击检测
        chart.hitTest(true);
        // 正在编辑中的画图工具
        if (chart.editingDrawingTool) {
            if (chartLayout.willEraseDrawingTool) {
                chart.removeDrawingTool(chart.editingDrawingTool);
            }
            else {
                chart.editingDrawingTool.isEditing = true;
                this._dragDrawingToolStart = true;
                this._dragPosX = curPoint.x;
                this._dragPosY = curPoint.y;
            }
        }
        else {
            this._dragOffsetStart = true;
            this._dragPosX = curPoint.x;
            this._dragPosY = curPoint.y;
        }
    };
    Chart.prototype.touchStartHandler = function (ev) {
        var _this = this;
        var isSingleTouch = ev.touches.length === 1;
        var isDoubleTouch = ev.touches.length === 2;
        var chartLayout = this._chartLayout;
        var chart = this.props.chart;
        // 触摸事件时阻止鼠标事件
        ev.preventDefault();
        if (chartLayout.mainDatasource.loaded() === 0) {
            return;
        }
        this._cancelClick = false;
        // 取消其他chart中图形的选中态
        chartLayout.cancelSelectedGraph();
        // 设置hover chart
        if (!chart.hover) {
            chartLayout.setHoverChart(chart);
        }
        // 停止动量滚动
        this.stopMomentum();
        var offset = chart.offset;
        var curPoint = {
            x: ev.touches[0].pageX - offset.left,
            y: ev.touches[0].pageY - offset.top,
        };
        // 单指非编辑模式下
        if (isSingleTouch) {
            if (!chartLayout.isEditMode) {
                chartLayout.setCursorPoint(curPoint);
                if (chartLayout.selectedDrawingTool) {
                    chart.drawingToolBegin();
                    chart.drawingToolSetVertex(curPoint);
                    if (chart.creatingDrawingTool.isFinished()) {
                        chart.drawingToolEnd();
                    }
                    return;
                }
                else if (chart.creatingDrawingTool) {
                    // 继续创建画图工具
                    chart.drawingToolSetVertex(curPoint);
                    if (chart.creatingDrawingTool.isFinished()) {
                        chart.drawingToolEnd();
                    }
                    return;
                }
                else {
                    this._longTapCounter = setTimeout(function () {
                        _this.contextMenuHanlder();
                    }, 500);
                }
            }
            else {
            }
        }
        else if (isDoubleTouch) {
            var offsetHorz = Math.abs(ev.touches[0].clientX - ev.touches[1].clientX);
            var offsetVert = Math.abs(ev.touches[0].clientY - ev.touches[1].clientY);
            this._dragOffsetStart = false;
            if (offsetHorz >= offsetVert) {
                this._pinchHorzStart = true;
                this._pinchOffset = offsetHorz;
            }
            else {
                this._pinchVertStart = true;
                this._pinchOffset = offsetVert;
            }
            return;
        }
        else {
            return;
        }
        // 点击检测
        chart.hitTest(true);
        // 正在编辑中的画图工具
        if (chart.editingDrawingTool) {
            if (chartLayout.willEraseDrawingTool) {
                chart.removeDrawingTool(chart.editingDrawingTool);
            }
            else {
                chart.editingDrawingTool.isEditing = true;
                this._dragDrawingToolStart = true;
                this._dragPosX = curPoint.x;
                this._dragPosY = curPoint.y;
            }
        }
        else {
            // 动量滚动
            this._lastMovePosition = curPoint.x;
            this._lastMoveTime = ev.timeStamp;
            // 拖拽滚动
            this._dragOffsetStart = true;
            this._dragPosX = curPoint.x;
            this._dragPosY = curPoint.y;
        }
    };
    Chart.prototype.touchEndHandler = function (ev) {
        var isSingleTouch = ev.changedTouches.length === 1;
        var chartLayout = this._chartLayout;
        var chart = this.props.chart;
        var cursorPoint = chart.crosshair.point;
        ev.preventDefault();
        // 取消长按事件
        clearTimeout(this._longTapCounter);
        if (chartLayout.isEditMode && isSingleTouch && !this._cancelClick) {
            if (chartLayout.selectedDrawingTool) {
                // 创建画图工具
                chart.drawingToolBegin();
                chart.drawingToolSetVertex({
                    x: cursorPoint.x,
                    y: cursorPoint.y,
                });
                if (chart.creatingDrawingTool.isFinished()) {
                    chart.drawingToolEnd();
                }
            }
            else if (chart.creatingDrawingTool) {
                // 继续创建画图工具
                chart.drawingToolSetVertex({
                    x: cursorPoint.x,
                    y: cursorPoint.y,
                });
                if (chart.creatingDrawingTool.isFinished()) {
                    chart.drawingToolEnd();
                }
            }
        }
    };
    Chart.prototype.mouseUpPageHanlder = function (ev) {
        var chart = this.props.chart;
        if (this._dragDrawingToolStart) {
            chart.editingDrawingTool.isEditing = false;
            chart.editingDrawingTool = null;
            this._dragDrawingToolStart = false;
        }
        this._dragOffsetStart = false;
    };
    Chart.prototype.touchEndPageHandler = function (ev) {
        var chart = this.props.chart;
        if (this._dragOffsetStart &&
            (ev.timeStamp - this._lastMoveTime < 60 && Math.abs(this._v) > 100)) {
            this.momentumMove(this._v);
        }
        if (this._dragDrawingToolStart) {
            chart.editingDrawingTool.isEditing = false;
            chart.editingDrawingTool = null;
            this._dragDrawingToolStart = false;
        }
        this._dragOffsetStart = false;
        this._pinchHorzStart = false;
        this._pinchVertStart = false;
        this._pinchOffset = 0;
        this._v = 0;
    };
    Chart.prototype.mouseMoveHandler = function (ev) {
        var chartLayout = this._chartLayout;
        var chart = this.props.chart;
        var offset = chart.offset;
        var point = {
            x: ev.pageX - offset.left,
            y: ev.pageY - offset.top,
        };
        chartLayout.setCursorPoint(point);
        if (!this._dragOffsetStart &&
            !this._dragDrawingToolStart &&
            !chart.creatingDrawingTool &&
            !chart.editingDrawingTool) {
            chart.hitTest();
        }
    };
    Chart.prototype.touchMoveHandler = function (ev) {
        var chartLayout = this._chartLayout;
        var chart = this.props.chart;
        var offset = chart.offset;
        var point = {
            x: ev.touches[0].pageX - offset.left,
            y: ev.touches[0].pageY - offset.top,
        };
        // 取消长按事件
        clearTimeout(this._longTapCounter);
        if (this._pinchHorzStart || this._pinchVertStart) {
            return;
        }
        this._cancelClick = true;
        if (!chartLayout.isEditMode) {
            chartLayout.setCursorPoint(point);
        }
    };
    Chart.prototype.dragMoveHandler = function (ev) {
        if (this._dragDrawingToolStart ||
            this._dragOffsetStart) {
            var isTouchEvent = !!ev.touches;
            var chart = this.props.chart;
            var chartLayout = this._chartLayout;
            var axisX = chart.axisX;
            var axisY = chart.axisY;
            var offset = chart.offset;
            var point = isTouchEvent ? {
                x: ev.touches[0].pageX - offset.left,
                y: ev.touches[0].pageY - offset.top,
            } :
                {
                    x: ev.pageX - offset.left,
                    y: ev.pageY - offset.top,
                };
            // 编辑画图工具
            if (this._dragDrawingToolStart) {
                var curBarX = axisX.findTimeBarByX(point.x).x;
                var oldBarX = axisX.findTimeBarByX(this._dragPosX).x;
                var offsetIndex = curBarX >= oldBarX ?
                    ~~((curBarX - oldBarX) / axisX.barWidth + 0.5) :
                    ~~((curBarX - oldBarX) / axisX.barWidth - 0.5);
                var offsetValue = axisY.getValueByY(point.y - offset.top) -
                    axisY.getValueByY(this._dragPosY - offset.top);
                chart.editingDrawingTool.moveBy(offsetIndex, offsetValue);
                this._dragPosX = point.x;
                this._dragPosY = point.y;
            }
            else if (this._dragOffsetStart) {
                if (chartLayout.isEditMode) {
                    var cursorPoint = chart.crosshair.point;
                    chartLayout.setCursorPoint({
                        x: cursorPoint.x + point.x - this._dragPosX,
                        y: cursorPoint.y + point.y - this._dragPosY,
                    });
                    this._dragPosX = point.x;
                    this._dragPosY = point.y;
                }
                else {
                    var curOffset = axisX.offset;
                    var newOffset = curOffset + point.x - this._dragPosX;
                    var timeStamp = ev.timeStamp;
                    axisX.offset = newOffset;
                    this._dragPosX = point.x;
                    if (isTouchEvent) {
                        this._v = (point.x - this._lastMovePosition) / (timeStamp - this._lastMoveTime) * 1000;
                        this._lastMovePosition = point.x;
                        this._lastMoveTime = timeStamp;
                    }
                }
            }
        }
    };
    Chart.prototype.gestureMoveHandler = function (ev) {
        if (this._pinchHorzStart || this._pinchVertStart) {
            var chart = this.props.chart;
            var axisX = chart.axisX;
            var axisY = chart.axisY;
            // 双指水平缩放
            if (this._pinchHorzStart) {
                var newOffset = Math.abs(ev.touches[1].pageX - ev.touches[0].pageX);
                var curBarWidth = axisX.barWidth;
                var scale = newOffset / this._pinchOffset;
                axisX.barWidth = curBarWidth * scale;
                scale = axisX.barWidth / curBarWidth;
                axisX.offset *= scale;
                this._pinchOffset = newOffset;
            }
            else if (this._pinchVertStart) {
                var newOffset = Math.abs(ev.touches[1].pageY - ev.touches[0].pageY);
                var offset = newOffset - this._pinchOffset;
                var height = axisY.height;
                var margin = axisY.margin;
                var graphHeight = height - 2 * margin;
                var scale = 2 * offset / height;
                axisY.margin = (height - graphHeight * (1 + scale)) / 2;
                this._pinchOffset = newOffset;
            }
        }
    };
    Chart.prototype.contextMenuHanlder = function (ev) {
        if (ev) {
            ev.preventDefault();
        }
        var chartLayout = this._chartLayout;
        var offset = this.props.chart.offset;
        var x = ev ? parseInt(ev.pageX) : this._dragPosX + offset.left;
        var y = ev ? parseInt(ev.pageY) : this._dragPosY + offset.top;
        chartLayout.setContextMenu({
            x: x, y: y,
            items: [{
                    name: '定位时间',
                    type: 'gotodate',
                }],
            actions: function (actionType) {
                if (actionType === 'gotodate') {
                    chartLayout.toggleGoToDate(true);
                }
            },
        });
    };
    Chart.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Chart;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Chart;


/***/ }),

/***/ "./src/component/chart/indicator/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/chart/indicator/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/chart/indicator/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var Indicator = (function (_super) {
    __extends(Indicator, _super);
    function Indicator(props, context) {
        _super.call(this, props);
        this._chartLayout = context.chartLayout;
        this.state = {
            isOpen: false,
            isLoading: false,
        };
        this.loadingStartHandler = this.loadingStartHandler.bind(this);
        this.loadingEndHandler = this.loadingEndHandler.bind(this);
    }
    Indicator.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var curProps = this.props;
        return curProps.chart !== nextProps.chart ||
            !_.isEqual(this.state, nextState);
    };
    Indicator.prototype.componentDidMount = function () {
        var _this = this;
        this._intervalCheckStatus = setInterval(function () {
            var open = _this.isOpen();
            if (_this.state.isOpen !== open) {
                _this.setState({ isOpen: open });
            }
        }, 10000);
        this._chartLayout.addListener('loading_start', this.loadingStartHandler);
        this._chartLayout.addListener('loading_end', this.loadingEndHandler);
    };
    Indicator.prototype.componentWillUnmount = function () {
        clearInterval(this._intervalCheckStatus);
        this._chartLayout.removeListener('loading_start', this.loadingStartHandler);
        this._chartLayout.removeListener('loading_end', this.loadingEndHandler);
    };
    Indicator.prototype.render = function () {
        var _a = this.state, isOpen = _a.isOpen, isLoading = _a.isLoading;
        return React.createElement("div", {className: "chart-indicator " + (isLoading ? 'loading' : isOpen ? 'open' : '')}, isLoading ? '加载中...' : isOpen ? '实时' : '收盘');
    };
    Indicator.prototype.loadingStartHandler = function () {
        this.setState({ isLoading: true });
    };
    Indicator.prototype.loadingEndHandler = function () {
        this.setState({ isLoading: false });
    };
    Indicator.prototype.isOpen = function () {
        var now = this.props.chart.datasource.now() * 1000;
        var nowTime = new Date(now);
        if (constant_1.OPEN_DAYS.indexOf(nowTime.getDay()) === -1) {
            return false;
        }
        return constant_1.OPEN_TIME_RANGE.some(function (timeInterval) {
            var openTime = new Date(now);
            openTime.setHours(timeInterval[0][0]);
            openTime.setMinutes(timeInterval[0][1]);
            openTime.setSeconds(0);
            openTime.setMilliseconds(0);
            var closeTime = new Date(now);
            closeTime.setHours(timeInterval[1][0]);
            closeTime.setMinutes(timeInterval[1][1]);
            closeTime.setSeconds(0);
            closeTime.setMilliseconds(0);
            return nowTime.getTime() >= openTime.getTime() && nowTime.getTime() <= closeTime.getTime();
        });
    };
    Indicator.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Indicator;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Indicator;


/***/ }),

/***/ "./src/component/chart/legend/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/chart/legend/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/chart/legend/index.less");
__webpack_require__("./src/style/btn.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
// import Dialog from '../../component/widget/dialog'
var util_1 = __webpack_require__("./src/util/index.ts");
var Legend = (function (_super) {
    __extends(Legend, _super);
    function Legend(proportion) {
        _super.call(this);
        this._studyInSetting = null;
        this.state = {
            showSettingDialog: false,
        };
        this.cursorMoveHandler = this.cursorMoveHandler.bind(this);
        this.studySettingsDialogOpenHandler = this.studySettingsDialogOpenHandler.bind(this);
        this.studySettingDialogCloseHanlder = this.studySettingDialogCloseHanlder.bind(this);
        this.removeStudyHandler = this.removeStudyHandler.bind(this);
        this.removeCompareHandler = this.removeCompareHandler.bind(this);
        this.confirmBtnClickHanler = this.confirmBtnClickHanler.bind(this);
        this.privateSubmitForm = this.privateSubmitForm.bind(this);
        this.updateView = this.updateView.bind(this);
    }
    Legend.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.state, nextState);
    };
    Legend.prototype.componentDidMount = function () {
        var chartLayout = this.context.chartLayout;
        chartLayout.addListener('cursor_move', this.cursorMoveHandler);
        chartLayout.addListener('graph_hover', this.updateView);
        chartLayout.addListener('graph_select', this.updateView);
        chartLayout.addListener('resolution_change', this.updateView);
        chartLayout.addListener('symbol_change', this.updateView);
        chartLayout.addListener('graph_add', this.updateView);
        chartLayout.addListener('graph_remove', this.updateView);
        chartLayout.addListener('graph_modify', this.updateView);
    };
    Legend.prototype.componentWillUnmount = function () {
        var chartLayout = this.context.chartLayout;
        chartLayout.removeListener('cursor_move', this.cursorMoveHandler);
        chartLayout.removeListener('graph_hover', this.updateView);
        chartLayout.removeListener('graph_select', this.updateView);
        chartLayout.removeListener('resolution_change', this.updateView);
        chartLayout.removeListener('symbol_change', this.updateView);
        chartLayout.removeListener('graph_add', this.updateView);
        chartLayout.removeListener('graph_remove', this.updateView);
        chartLayout.removeListener('graph_modify', this.updateView);
    };
    Legend.prototype.render = function () {
        var _this = this;
        var chart = this.props.chart;
        // 过滤出所有非指标图
        var mainGraph = chart.mainGraph;
        var compares = chart.compares;
        // 过滤出所有指标图
        var studies = chart.studies;
        // 过滤出所有均线指标图
        var maStudies = studies.filter(function (graph) {
            return graph.studyType === 'MA' && graph.isVisible;
        });
        // 过滤出所有非均线指标
        var nonMAStudies = studies.filter(function (graph) {
            return graph.studyType !== 'MA' && graph.isVisible;
        });
        // const studyInSetting = this._studyInSetting
        // const input = this.state.showSettingDialog ? studyInSetting.input : null
        // const inputLabels = this.state.showSettingDialog ? studyInSetting.inputLabels : null
        return (React.createElement("div", {className: 'chart-legend'}, 
            [mainGraph].map(function (graph) {
                if (!graph) {
                    return null;
                }
                // 股票类图形
                var curBar = graph.getCurBar();
                var prevBar = graph.getPrevBar();
                var datasource = graph.datasource;
                var cur = curBar ? datasource.barAt(datasource.search(curBar[0][1])) : datasource.last();
                var prev = curBar && prevBar ? datasource.barAt(datasource.search(prevBar[0][1])) : datasource.barAt(datasource.loaded() - 2);
                var comparable = !!prev && !!cur;
                var colorUp = '#d32f2f';
                var colorDown = '#00796b';
                var resolution = datasource.resolution;
                return React.createElement("div", {key: graph.id, className: 'chart-legend-line', style: { fontWeight: graph.hover || graph.selected ? 600 : 'normal' }}, 
                    React.createElement("div", {className: 'chart-legend-item'}, 
                        React.createElement("span", {className: 'symbol-name'}, !datasource.symbolInfo ? '加载中' : datasource.symbolInfo.description), 
                        React.createElement("span", {className: 'symbol-code'}, 
                            datasource.symbolInfo.symbol, 
                            ".", 
                            datasource.symbolInfo.exchange)), 
                    resolution === '1' ?
                        React.createElement("div", {className: 'chart-legend-item', style: {
                            color: !!cur ? cur.changerate > 0 ?
                                colorUp : cur.changerate < 0 ?
                                colorDown : 'inherit' : 'inherit' }}, 
                            "现 ", 
                            cur ? cur.close.toFixed(2) : 'N/A') : [
                        React.createElement("div", {key: 'open', className: 'chart-legend-item', style: {
                            color: comparable ? cur.open > prev.close ?
                                colorUp : cur.open < prev.close ?
                                colorDown : 'inherit' : 'inherit' }}, 
                            "开 ", 
                            cur ? cur.open.toFixed(2) : 'N/A'),
                        React.createElement("div", {key: 'high', className: 'chart-legend-item', style: {
                            color: comparable ? cur.high > prev.close ?
                                colorUp : cur.high < prev.close ?
                                colorDown : 'inherit' : 'inherit',
                            display: resolution > '1' ? '' : 'none' }}, 
                            "高 ", 
                            cur ? cur.high.toFixed(2) : 'N/A'),
                        React.createElement("div", {key: 'low', className: 'chart-legend-item', style: {
                            color: comparable ? cur.low > prev.close ?
                                colorUp : cur.low < prev.close ?
                                colorDown : 'inherit' : 'inherit',
                            display: resolution > '1' ? '' : 'none' }}, 
                            "低 ", 
                            cur ? cur.low.toFixed(2) : 'N/A'),
                        React.createElement("div", {key: 'close', className: 'chart-legend-item', style: {
                            color: comparable ? cur.close > prev.close ?
                                colorUp : cur.close < prev.close ?
                                colorDown : 'inherit' : 'inherit',
                            display: resolution > '1' ? '' : 'none' }}, 
                            "收 ", 
                            cur ? cur.close.toFixed(2) : 'N/A')], 
                    React.createElement("div", {className: 'chart-legend-item', style: {
                        color: !!cur ? cur.changerate > 0 ?
                            colorUp : cur.changerate < 0 ?
                            colorDown : 'inherit' : 'inherit' }}, 
                        "幅 ", 
                        !!cur && typeof cur.changerate === 'number' ?
                            (cur.changerate > 0 ? '+' : '') +
                                (cur.changerate * 100).toFixed(2) + '%'
                            : 'N/A'), 
                    !!cur && typeof cur.turnover === 'string' ?
                        React.createElement("div", {className: 'chart-legend-item'}, 
                            "换 ", 
                            (+cur.turnover * 100).toFixed(2) + '%') : null, 
                    React.createElement("div", {className: 'chart-legend-item'}, 
                        "量 ", 
                        !!cur ? util_1.formatNumber(cur.volume, 2) + '手' : 'N/A'), 
                    React.createElement("div", {className: 'chart-legend-item'}, 
                        "额 ", 
                        !!cur ? util_1.formatNumber(cur.amount, 2) : 'N/A'));
            }), 
            compares.map(function (graph) {
                var datasource = graph.datasource;
                var color = graph.styles[0].color;
                var curBar = mainGraph.getCurBar();
                var cur = curBar ? datasource.barAt(datasource.search(curBar[0][1])) : null;
                return React.createElement("div", {key: graph.id, className: 'chart-legend-line', style: { fontWeight: graph.hover || graph.selected ? 600 : 'normal' }}, 
                    React.createElement("div", {className: 'chart-legend-item'}, !datasource.symbolInfo ? '加载中' : datasource.symbolInfo.description), 
                    React.createElement("div", {className: 'chart-legend-item', style: { color: color }}, cur ? cur.close.toFixed(2) : 'N/A'), 
                    React.createElement("a", {className: 'chart-legend-btn', href: 'javascript:;', "data-id": graph.id, onClick: _this.removeCompareHandler}, 
                        React.createElement("svg", {xmlns: 'http://www.w3.org/2000/svg', viewBox: '-2.4 120.9 14 14', width: '14', height: '14'}, 
                            React.createElement("path", {d: 'M-2.4 120.9v14h14v-14zm3.34 2.123l3.66 3.66 3.66-3.66 1.217 1.22-3.66 3.658 3.66 3.66-1.22 1.22-3.658-3.66-3.66 3.66-1.22-1.22 3.66-3.66-3.66-3.66z'})
                        )
                    ));
            }), 
            maStudies.length ?
                React.createElement("div", {className: 'chart-legend-line'}, maStudies.map(function (ma) {
                    var bars = ma.getCurBar();
                    var bar = bars ? bars[0] : null;
                    var styles = ma.styles;
                    return React.createElement("div", {key: ma.id, className: 'chart-legend-item', style: {
                        color: styles[0].color,
                        fontWeight: ma.hover || ma.selected ? 600 : 'normal',
                    }}, 
                        ma.studyType, 
                        ma.input ? ma.input[0] : null, 
                        ": ", 
                        bar ? bar[2].toFixed(2) : 'N/A');
                })) : null, 
            nonMAStudies.map(function (study) {
                if (!study.noLegend) {
                    var curBar_1 = study.getCurBar();
                    return React.createElement("div", {key: study.id, className: 'chart-legend-line', style: { fontWeight: study.hover || study.selected ? 600 : 'normal' }}, 
                        React.createElement("div", {className: 'chart-legend-item'}, 
                            study.studyType, 
                            study.input ? "(" + study.input.join(',') + ")" : ''), 
                        study.plots.map(function (__, index) { return !study.styles[index].noLegend ?
                            React.createElement("div", {key: index, className: 'chart-legend-item', style: { color: study.styles[index].color }}, curBar_1 && curBar_1[index] && curBar_1[index][2] ? curBar_1[index][2].toFixed(4) : 'N/A') : null; }), 
                        study.isRemovable ?
                            React.createElement("a", {className: 'chart-legend-btn', href: 'javascript:;', "data-id": study.id, onClick: _this.removeStudyHandler}, 
                                React.createElement("svg", {xmlns: 'http://www.w3.org/2000/svg', viewBox: '-2.4 120.9 14 14', width: '14', height: '14'}, 
                                    React.createElement("path", {d: 'M-2.4 120.9v14h14v-14zm3.34 2.123l3.66 3.66 3.66-3.66 1.217 1.22-3.66 3.658 3.66 3.66-1.22 1.22-3.658-3.66-3.66 3.66-1.22-1.22 3.66-3.66-3.66-3.66z'})
                                )
                            ) : null);
                }
            })));
    };
    Legend.prototype.studySettingsDialogOpenHandler = function (ev) {
        this._studyInSetting = _.findWhere(this.props.chart.studies, { id: +ev.currentTarget.dataset.id });
        this.setState({ showSettingDialog: true });
    };
    Legend.prototype.studySettingDialogCloseHanlder = function () {
        this._studyInSetting = null;
        this.setState({ showSettingDialog: false });
    };
    Legend.prototype.confirmBtnClickHanler = function () {
        var settingForm = this.refs.settingForm;
        var input = this._studyInSetting.input.map(function (value, i) {
            return settingForm[i].tagName.toUpperCase() === 'INPUT' ?
                +settingForm[i].value : Boolean(settingForm[i].value);
        });
        this.context.chartLayout.modifyGraph(this._studyInSetting, { input: input });
        this.studySettingDialogCloseHanlder();
    };
    Legend.prototype.removeStudyHandler = function (ev) {
        var studyId = +ev.currentTarget.dataset.id;
        this.context.chartLayout.removeStudy(this.props.chart, studyId);
    };
    Legend.prototype.removeCompareHandler = function (ev) {
        var graphId = +ev.currentTarget.dataset.id;
        this.context.chartLayout.removeComparison(graphId);
    };
    /**
     * 指针移动事件触发的回调处理函数
     * @param  {[type]} point 指针位置
     */
    Legend.prototype.cursorMoveHandler = function (point) {
        if (point) {
            this.forceUpdate();
        }
    };
    Legend.prototype.updateView = function () {
        this.forceUpdate();
    };
    Legend.prototype.privateSubmitForm = function (ev) {
        ev.preventDefault();
    };
    Legend.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Legend;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Legend;


/***/ }),

/***/ "./src/component/chartlayout/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/chartlayout/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
__webpack_require__("./src/component/chartlayout/index.less");
var Spinner = __webpack_require__("./node_modules/spin/spin.js");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var about_1 = __webpack_require__("./src/component/about/index.tsx");
var gotodate_1 = __webpack_require__("./src/component/gotodate/index.tsx");
var contextmenu_1 = __webpack_require__("./src/component/contextmenu/index.tsx");
var chart_1 = __webpack_require__("./src/component/chart/index.tsx");
var axisX_1 = __webpack_require__("./src/component/axisX.tsx");
var toolbox_1 = __webpack_require__("./src/component/toolbox/index.tsx");
var navbar_1 = __webpack_require__("./src/component/navbar/index.tsx");
var sidebar_1 = __webpack_require__("./src/component/sidebar/index.tsx");
var controlbar_1 = __webpack_require__("./src/component/controlbar/index.tsx");
var footerpanel_1 = __webpack_require__("./src/component/footerpanel/index.tsx");
var chart_2 = __webpack_require__("./src/model/chart.ts");
var crosshair_1 = __webpack_require__("./src/model/crosshair.ts");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var axisx_1 = __webpack_require__("./src/model/axisx.ts");
var axisy_1 = __webpack_require__("./src/model/axisy.ts");
var stock_1 = __webpack_require__("./src/model/stock.ts");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var ChartLayout = (function (_super) {
    __extends(ChartLayout, _super);
    function ChartLayout(props, context) {
        _super.call(this, props, context);
        this._chartLayout = this.context.chartLayout;
        var chartLayout = this._chartLayout;
        chartLayout.component = this;
        this.state = {
            sidebarFolded: chartLayout.readFromLS('qchart.sidebar.folded'),
            sidebarActiveIndex: chartLayout.readFromLS('qchart.sidebar.activeIndex') || 0,
            footerPanelFolded: true,
            footerPanelActiveIndex: 0,
            loaded: false,
            showAbout: !this._chartLayout.readFromLS('chart.welcome'),
            showGoToDate: false,
        };
        this.updateView = this.updateView.bind(this);
        this.onSymbolChange = this.onSymbolChange.bind(this);
        this.onResolutionChange = this.onResolutionChange.bind(this);
        this.onRightChange = this.onRightChange.bind(this);
        this.onAddComparison = this.onAddComparison.bind(this);
        this.onRemoveComparison = this.onRemoveComparison.bind(this);
        this.onAddStudy = this.onAddStudy.bind(this);
        this.onStudyModified = this.onStudyModified.bind(this);
        this.onFullScreen = this.onFullScreen.bind(this);
        this.sidebarChangeHandler = this.sidebarChangeHandler.bind(this);
        this.footerPanelChangeHandler = this.footerPanelChangeHandler.bind(this);
        this.wheelHandler = this.wheelHandler.bind(this);
    }
    ChartLayout.prototype.shouldComponentUpdate = function (nextProp, nextState) {
        return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProp);
    };
    ChartLayout.prototype.componentDidMount = function () {
        var _this = this;
        var chartLayout = this._chartLayout;
        var spinner = new Spinner({}).spin(this.refs.root);
        var resolution = chartLayout.readFromLS('qchart.resolution') || this.props.resolution;
        var mainDatasource = new datasource_1.StockDatasource(this.props.defaultSymbol, resolution, this.props.right);
        var start = util_1.getParameterByName('start') || null;
        // 将欢迎标记存入本地存储
        chartLayout.saveToLS('chart.welcome', true);
        Promise.all([
            chartLayout.getServerTime(),
            mainDatasource.resolveSymbol(this.props.symbol),
        ])
            .then(function () {
            history.replaceState(null, document.title, "/?symbol=" + mainDatasource.symbol);
            _this.prepareMainChart(mainDatasource, resolution);
            _this.initEvents();
            spinner.stop();
            _this.setState({
                loaded: true,
            }, function () {
                var _this = this;
                chartLayout.addPatterns();
                if (start) {
                    this.goToDateChecker = setInterval(function () {
                        if (chartLayout.mainDatasource.loaded() > 0) {
                            chartLayout.goToDate(+start);
                            clearInterval(_this.goToDateChecker);
                        }
                    }, 100);
                }
            });
        });
    };
    ChartLayout.prototype.componentWillUnmount = function () {
        var chartLayout = this._chartLayout;
        chartLayout.removeAllListeners();
        chartLayout.axisx.removeAllListeners();
    };
    ChartLayout.prototype.componentDidUpdate = function () {
        this._chartLayout.fullUpdate();
    };
    ChartLayout.prototype.prepareMainChart = function (mainDatasource, resolution) {
        var chartLayout = this._chartLayout;
        var crosshair = new crosshair_1.default(chartLayout);
        var axisX = new axisx_1.default(mainDatasource, crosshair);
        var axisY = new axisy_1.default(mainDatasource, crosshair);
        var chart = new chart_2.default(chartLayout, mainDatasource, axisX, axisY, crosshair, true, true);
        axisY.chart = chart;
        crosshair.chart = chart;
        chartLayout.axisx = axisX;
        chartLayout.mainDatasource = mainDatasource;
        chart.addGraph(new stock_1.default(mainDatasource, chart, true, true, false, resolution === '1' && this.props.shape === 'candle' ? 'line' : this.props.shape, { lineWidth: 2 }));
        chartLayout.addChart(chart);
        chartLayout.resetStudies();
    };
    ChartLayout.prototype.initEvents = function () {
        var chartLayout = this._chartLayout;
        chartLayout.axisx.addListener('offset_change', chartLayout.fullUpdate);
        chartLayout.axisx.addListener('barwidth_change', chartLayout.fullUpdate);
        chartLayout.addListener('chart_add', this.updateView);
        chartLayout.addListener('chart_remove', this.updateView);
        chartLayout.addListener('graph_add', chartLayout.lightUpdate);
        chartLayout.addListener('graph_remove', chartLayout.lightUpdate);
        chartLayout.addListener('graph_modify', chartLayout.lightUpdate);
        chartLayout.addListener('graph_hover', chartLayout.lightUpdate);
        chartLayout.addListener('graph_select', chartLayout.lightUpdate);
        chartLayout.addListener('cursor_move', chartLayout.lightUpdate);
        chartLayout.addListener('barmargin_change', chartLayout.lightUpdate);
        chartLayout.addListener('drawingtool_begin', chartLayout.lightUpdate);
        chartLayout.addListener('drawingtool_end', chartLayout.lightUpdate);
        chartLayout.addListener('drawingtool_setvertex', chartLayout.lightUpdate);
        chartLayout.addListener('drawingtool_remove', chartLayout.lightUpdate);
        chartLayout.addListener('editmode_change', chartLayout.lightUpdate);
        chartLayout.addListener('patterns_add', chartLayout.lightUpdate);
        chartLayout.addListener('patterns_remove', chartLayout.lightUpdate);
        chartLayout.addListener('pattern_modify', chartLayout.lightUpdate);
        chartLayout.addListener('gap_visibility_change', chartLayout.lightUpdate);
    };
    ChartLayout.prototype.render = function () {
        var width = this.props.width;
        var height = this.props.height;
        if (!this.state.loaded) {
            return React.createElement("div", {className: 'chart-layout', ref: 'root', style: { height: height + 'px', width: width + 'px' }});
        }
        var chartLayoutModel = this._chartLayout;
        // 根据屏幕尺寸重置选项
        var greaterThanMinSize = width > 768 && height > 450;
        var showSideBar = greaterThanMinSize ? this.props.showsidebar : false;
        var showToolBox = greaterThanMinSize ? this.props.showtoolbox : false;
        var showFooterPanel = greaterThanMinSize ? this.props.showfooterpanel : false;
        // 12 是chart-body的margin 10 和 border 2
        var availWidth = width - 12;
        if (showToolBox) {
            availWidth -= constant_1.TOOLBOX_WIDTH;
        }
        if (showSideBar) {
            availWidth -= !this.state.sidebarFolded ? constant_1.SIDEBAR_WIDTH : constant_1.SIDEBAR_FOLD_WIDTH;
        }
        var showNavBar = this.props.shownavbar;
        var showControlBar = this.props.showcontrolbar;
        var availHeight = height - constant_1.AXIS_X_HEIGHT - 12;
        if (showNavBar) {
            availHeight -= constant_1.NAVBAR_HEIGHT;
        }
        if (showControlBar) {
            availHeight -= constant_1.CONTROL_BAR_HEIGHT;
        }
        if (showFooterPanel) {
            availHeight -= this.state.footerPanelFolded ? constant_1.FOOTER_PANEL_HEIGHT : constant_1.FOOTER_PANEL_UNFOLD_HEIGHT;
        }
        if (chartLayoutModel.charts.length > 1) {
            availHeight -= chartLayoutModel.charts.length - 1;
        }
        var additionalChartCount = chartLayoutModel.charts.length - 1;
        var mainChartHeight = ~~((1 - additionalChartCount * .3 > .3 ? 1 - additionalChartCount * .3 : .3) * availHeight);
        var addtionalChartHeight = ~~((availHeight - mainChartHeight) / additionalChartCount);
        var chartLines = [];
        for (var i = 0, len = chartLayoutModel.charts.length, chart = void 0; i < len; i++) {
            chart = chartLayoutModel.charts[i];
            chartLines.push(React.createElement(chart_1.default, {key: chart.id, chart: chart, height: chart.isMain ? mainChartHeight : addtionalChartHeight, width: availWidth}));
            if (i < len - 1) {
                chartLines.push(React.createElement("div", {key: chart.id + "_separator", className: 'chart-separator'}));
            }
        }
        return (React.createElement("div", {className: 'chart-layout', ref: 'root', style: { height: height + 'px', width: width + 'px' }}, 
            showToolBox ?
                React.createElement(toolbox_1.default, null) : null, 
            this.state.showAbout ?
                React.createElement(about_1.default, null) : null, 
            this.state.showGoToDate ?
                React.createElement(gotodate_1.default, null) : null, 
            this.state.contextMenuConfig ?
                React.createElement(contextmenu_1.default, __assign({}, this.state.contextMenuConfig)) : null, 
            showSideBar ?
                React.createElement(sidebar_1.default, {folded: this.state.sidebarFolded, activeIndex: this.state.sidebarActiveIndex, onChange: this.sidebarChangeHandler, width: !this.state.sidebarFolded ? constant_1.SIDEBAR_WIDTH : constant_1.SIDEBAR_FOLD_WIDTH, height: this.props.height}) : null, 
            showNavBar ?
                React.createElement(navbar_1.default, {width: availWidth, onSymbolChange: this.onSymbolChange, onResolutionChange: this.onResolutionChange, onAddComparison: this.onAddComparison, onRemoveComparison: this.onRemoveComparison, onAddStudy: this.onAddStudy, onStudyModified: this.onStudyModified, onFullScreen: this.onFullScreen, onRightChange: this.onRightChange}) : null, 
            React.createElement("div", {className: 'chart-body', style: { width: availWidth + 2 + 'px' }, onWheel: this.wheelHandler}, 
                chartLines, 
                React.createElement(axisX_1.default, {height: constant_1.AXIS_X_HEIGHT, width: availWidth - constant_1.AXIS_Y_WIDTH})), 
            showControlBar ?
                React.createElement(controlbar_1.default, {width: availWidth + 2}) : null, 
            showFooterPanel ?
                React.createElement(footerpanel_1.default, {folded: this.state.footerPanelFolded, activeIndex: this.state.footerPanelActiveIndex, onChange: this.footerPanelChangeHandler, width: availWidth + 2}) : null));
    };
    ChartLayout.prototype.onSymbolChange = function (symbol) {
        this._chartLayout.setSymbol(symbol);
    };
    ChartLayout.prototype.onResolutionChange = function (resolution) {
        this._chartLayout.saveToLS('qchart.resolution', resolution);
        this._chartLayout.setResolution(resolution);
    };
    ChartLayout.prototype.onRightChange = function (right) {
        this._chartLayout.setRight(right);
    };
    ChartLayout.prototype.onAddComparison = function (symbol) {
        return this._chartLayout.addComparison(symbol);
    };
    ChartLayout.prototype.onRemoveComparison = function (graphId) {
        this._chartLayout.removeComparison(graphId);
    };
    ChartLayout.prototype.onAddStudy = function (study) {
        this._chartLayout.addStudy(study);
    };
    ChartLayout.prototype.onStudyModified = function (study, properties) {
        this._chartLayout.modifyGraph(study, properties);
    };
    ChartLayout.prototype.onFullScreen = function () {
        var root = this.refs.root;
        if (util_1.getFullScreenElement() === root) {
            util_1.exitFullscreen();
        }
        else {
            util_1.requestFullscreen(root);
        }
    };
    ChartLayout.prototype.sidebarChangeHandler = function (folded, index) {
        this.setState({
            sidebarFolded: folded,
            sidebarActiveIndex: index,
        });
    };
    ChartLayout.prototype.footerPanelChangeHandler = function (folded, index) {
        this.setState({
            footerPanelFolded: folded,
            footerPanelActiveIndex: index,
        });
    };
    ChartLayout.prototype.wheelHandler = function (ev) {
        ev.preventDefault();
        if (this._chartLayout.mainDatasource.loaded() !== 0) {
            var axisX = this._chartLayout.axisx;
            axisX.offset -= ev.deltaX;
        }
    };
    ChartLayout.prototype.updateView = function () {
        this.forceUpdate();
    };
    ChartLayout.propTypes = {
        axis: React.PropTypes.oneOf(['left', 'right', 'both']),
        resolution: React.PropTypes.oneOf(['1', '5', '15', '30', '60', 'D', 'W', 'M']),
        scalable: React.PropTypes.bool,
        scrollable: React.PropTypes.bool,
        shape: React.PropTypes.oneOf(['mountain', 'line', 'column', 'candle']),
        showtoolbox: React.PropTypes.bool,
        showcontrolbar: React.PropTypes.bool,
        showfooterpanel: React.PropTypes.bool,
        showsidebar: React.PropTypes.bool,
        shownavbar: React.PropTypes.bool,
        study: React.PropTypes.oneOf(['MA', 'MACD', 'BOLL', 'KDJ', 'VOLUME']),
        to: React.PropTypes.number,
        type: React.PropTypes.oneOf(['snapshot', 'realtime']),
        width: React.PropTypes.number.isRequired,
        right: React.PropTypes.oneOf([0, 1, 2]),
    };
    ChartLayout.defaultProps = {
        axis: 'right',
        resolution: '1',
        scalable: true,
        scrollable: true,
        shape: 'line',
        showtoolbox: true,
        showcontrolbar: true,
        shownavbar: true,
        showsidebar: true,
        showfooterpanel: true,
        type: 'realtime',
        right: 1,
    };
    ChartLayout.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return ChartLayout;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChartLayout;


/***/ }),

/***/ "./src/component/contextmenu/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/style/popup_menu.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var ContextMenu = (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu(props, context) {
        _super.call(this, props);
        this._chartLayout = context.chartLayout;
        this.closeHandler = this.closeHandler.bind(this);
        this.clickOutsideHandler = this.clickOutsideHandler.bind(this);
        this.onSelectMenu = this.onSelectMenu.bind(this);
    }
    ContextMenu.prototype.shouldComponentUpdate = function (nextProps) {
        return !_.isEqual(this.props, nextProps);
    };
    ContextMenu.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.clickOutsideHandler);
        document.addEventListener('touchstart', this.clickOutsideHandler);
    };
    ContextMenu.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.clickOutsideHandler);
        document.removeEventListener('touchstart', this.clickOutsideHandler);
    };
    ContextMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, x = _a.x, y = _a.y, items = _a.items;
        return (React.createElement("ul", {ref: 'container', className: 'chart-contextmenu popup-menu', style: { left: x + "px", top: y + "px" }}, items.map(function (item) {
            return React.createElement("li", {key: item.type, "data-type": item.type, onMouseDown: _this.onSelectMenu, onTouchStart: _this.onSelectMenu}, item.name);
        })));
    };
    ContextMenu.prototype.onSelectMenu = function (ev) {
        if (ev.touches) {
            ev.preventDefault();
        }
        var actionType = ev.target.dataset.type;
        this.props.actions(actionType);
        this.closeHandler();
    };
    ContextMenu.prototype.closeHandler = function () {
        this._chartLayout.setContextMenu(null);
    };
    ContextMenu.prototype.clickOutsideHandler = function (ev) {
        var container = this.refs.container;
        var target = ev.target;
        if (target !== container && !container.contains(target)) {
            this.closeHandler();
        }
    };
    ContextMenu.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    ContextMenu.defaultProps = {};
    return ContextMenu;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContextMenu;


/***/ }),

/***/ "./src/component/controlbar/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/controlbar/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/controlbar/index.less");
__webpack_require__("./src/style/btn.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var ControlBar = (function (_super) {
    __extends(ControlBar, _super);
    function ControlBar(props, context) {
        _super.call(this, props, context);
        this._chartLayout = context.chartLayout;
        this.state = {};
        this.openDialogHandler = this.openDialogHandler.bind(this);
        this.timeRangeClickHandler = this.timeRangeClickHandler.bind(this);
    }
    ControlBar.prototype.shouldComponentUpdate = function (nextProps) {
        return !_.isEqual(this.props, nextProps);
    };
    ControlBar.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: 'chart-footerbar', style: { width: this.props.width + 'px' }}, 
            React.createElement("div", {className: 'control-list'}, 
                chartlayout_1.preferredTimeRange.map(function (range) {
                    return React.createElement("a", {key: range, className: 'mini-btn', href: 'javascript:;', "data-value": range, onClick: _this.timeRangeClickHandler}, range);
                }), 
                React.createElement("a", {className: 'mini-btn', href: 'javascript:;', onClick: this.openDialogHandler}, "定位时间"))
        ));
    };
    ControlBar.prototype.timeRangeClickHandler = function (ev) {
        var range = ev.target.dataset.value;
        this._chartLayout.setTimeRange(range);
    };
    ControlBar.prototype.openDialogHandler = function () {
        this._chartLayout.toggleGoToDate(true);
    };
    ControlBar.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return ControlBar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ControlBar;


/***/ }),

/***/ "./src/component/footerpanel/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/footerpanel/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/footerpanel/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var selfselect_1 = __webpack_require__("./src/component/footerpanel/selfselect/index.tsx");
var recentvisit_1 = __webpack_require__("./src/component/footerpanel/recentvisit/index.tsx");
var platelist_1 = __webpack_require__("./src/component/footerpanel/platelist/index.tsx");
var mainboard_1 = __webpack_require__("./src/component/footerpanel/mainboard/index.tsx");
var TAB_CONFIG = ['自选股', '最近访问', '板块列表', '大盘综合'];
var FooterPanel = (function (_super) {
    __extends(FooterPanel, _super);
    function FooterPanel(props, context) {
        _super.call(this, props, context);
        this.selectTabHandler = this.selectTabHandler.bind(this);
        this.toggleHandler = this.toggleHandler.bind(this);
    }
    FooterPanel.prototype.shouldComponentUpdate = function (nextProps) {
        return !_.isEqual(this.props, nextProps);
    };
    FooterPanel.prototype.render = function () {
        var _this = this;
        var activeIndex = this.props.activeIndex;
        var width = this.props.width;
        return (React.createElement("div", {className: 'chart-footer-panel', style: { width: width + 'px' }}, 
            React.createElement("div", {className: "btn-group " + (this.props.folded ? 'folded' : '')}, 
                TAB_CONFIG.map(function (label, i) {
                    return React.createElement("button", {key: i, className: "" + (!_this.props.folded && activeIndex === i ? 'active' : ''), "data-index": i, onClick: _this.selectTabHandler}, label);
                }), 
                React.createElement("a", {href: 'javascript:;', className: 'toggle-btn', onClick: this.toggleHandler}, 
                    React.createElement("svg", {viewBox: '0 0 10.35 16'}, 
                        React.createElement("g", null, 
                            React.createElement("path", {d: 'M0,14.42,1.57,16l3.6-3.6L8.78,16l1.58-1.58L5.18,9.25ZM10.35,1.58,8.78,0,5.18,3.6,1.58,0,0,1.58,5.18,6.75Z'})
                        )
                    )
                )), 
            !this.props.folded ?
                React.createElement("div", {className: 'panel-board'}, 
                    activeIndex === 0 ?
                        React.createElement(selfselect_1.default, {width: width}) : null, 
                    activeIndex === 1 ?
                        React.createElement(recentvisit_1.default, {width: width}) : null, 
                    activeIndex === 2 ?
                        React.createElement(platelist_1.default, {width: width}) : null, 
                    activeIndex === 3 ?
                        React.createElement(mainboard_1.default, {width: width}) : null) : null));
    };
    FooterPanel.prototype.toggleHandler = function () {
        if (this.props.folded) {
            this.props.onChange(false, this.props.activeIndex);
        }
        else {
            this.props.onChange(true, this.props.activeIndex);
        }
    };
    FooterPanel.prototype.selectTabHandler = function (ev) {
        var newIndex = +ev.target.dataset.index;
        var folded = this.props.folded;
        if (!folded && this.props.activeIndex === newIndex) {
            if (this.props.onChange) {
                this.props.onChange(true, newIndex);
            }
            return;
        }
        if (this.props.onChange) {
            this.props.onChange(false, newIndex);
        }
    };
    return FooterPanel;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterPanel;


/***/ }),

/***/ "./src/component/footerpanel/mainboard/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/footerpanel/mainboard/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/footerpanel/mainboard/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var RETRY_DELAY = 10000;
var MainBoard = (function (_super) {
    __extends(MainBoard, _super);
    function MainBoard(props, context) {
        _super.call(this, props, context);
        this.state = {};
        this._chartLayout = context.chartLayout;
        this.selectHandler = this.selectHandler.bind(this);
        this.setSymbolHandler = this.setSymbolHandler.bind(this);
        this.loadRankList = this.loadRankList.bind(this);
        this.loadIndexList = this.loadIndexList.bind(this);
    }
    MainBoard.prototype.shouldComponentUpdate = function (nextProp, nextState) {
        var curState = this.state;
        return curState.indexes !== nextState.indexes ||
            curState.rising_rank !== nextState.rising_rank ||
            curState.declining_rank !== nextState.declining_rank;
    };
    MainBoard.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.width !== this.props.width) {
            this._wrapperScroller.refresh();
            this._indexesListScroller.refresh();
            this._descListScroller.refresh();
            this._ascListScroller.refresh();
        }
    };
    MainBoard.prototype.componentDidMount = function () {
        var _this = this;
        this._isMounted = true;
        this._wrapperScroller = new IScroll(this.refs.wrapper, {
            scrollbars: true,
            hScrollbar: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: true,
            fadeScrollbars: true,
        });
        this._indexesListScroller = new IScroll(this.refs.indexesList, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
        this._descListScroller = new IScroll(this.refs.descList, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
        this._ascListScroller = new IScroll(this.refs.ascList, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
        this.loadIndexList()
            .then(function () { return _this.state.indexes ? _this.loadRankList(_this.state.indexes[0].index_id) : null; });
    };
    MainBoard.prototype.componentDidUpdate = function () {
        this._wrapperScroller.refresh();
        this._indexesListScroller.refresh();
        this._descListScroller.refresh();
        this._ascListScroller.refresh();
    };
    MainBoard.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        this._wrapperScroller.destroy();
        this._indexesListScroller.destroy();
        this._descListScroller.destroy();
        this._ascListScroller.destroy();
        clearTimeout(this._pollIndexListTimer);
        clearTimeout(this._pollRankListTimer);
    };
    MainBoard.prototype.render = function () {
        var _this = this;
        var indexes = this.state.indexes;
        var risingRank = this.state.rising_rank;
        var decliningRank = this.state.declining_rank;
        return (React.createElement("div", {ref: 'wrapper', className: 'chart-main-board'}, 
            React.createElement("div", {className: 'wrapper'}, 
                React.createElement("div", {className: 'indexes-list'}, 
                    React.createElement("table", {className: 'header s-table top-header'}, 
                        React.createElement("thead", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", {width: '38%'}, "指数名称"), 
                                React.createElement("th", {width: '31%'}, "涨跌幅"), 
                                React.createElement("th", {width: '31%'}, "涨跌点数"))
                        )
                    ), 
                    React.createElement("div", {className: 'body', ref: 'indexesList'}, 
                        React.createElement("table", {className: 's-table top-header'}, 
                            React.createElement("tbody", null, indexes && indexes.map(function (index, i) {
                                return React.createElement("tr", {key: i, className: _this.state.activeIndexId === index.index_id ? 'active' : '', "data-id": index.index_id, onClick: _this.selectHandler}, 
                                    React.createElement("td", {width: '38%'}, index.name), 
                                    React.createElement("td", {width: '31%'}, 
                                        (index.p_change * 100).toFixed(2), 
                                        "%"), 
                                    React.createElement("td", {width: '31%'}, (+index.price_change).toFixed(2)));
                            }))
                        )
                    )), 
                React.createElement("div", {className: 'separator'}), 
                React.createElement("div", {className: 'desc-list'}, 
                    React.createElement("table", {className: 'header s-table top-header'}, 
                        React.createElement("thead", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", {width: '38%'}, "股票名称"), 
                                React.createElement("th", {width: '31%'}, "最新价"), 
                                React.createElement("th", {width: '31%'}, "涨跌幅"))
                        )
                    ), 
                    React.createElement("div", {className: 'body', ref: 'descList'}, 
                        React.createElement("table", {className: 's-table stripe even top-header'}, 
                            React.createElement("tbody", null, risingRank && risingRank.map(function (stock, i) {
                                return React.createElement("tr", {key: i, "data-symbol": stock[0], onClick: _this.setSymbolHandler}, 
                                    React.createElement("td", {width: '38%'}, stock[1]), 
                                    React.createElement("td", {width: '31%'}, (+stock[3]).toFixed(2)), 
                                    React.createElement("td", {width: '31%'}, 
                                        (stock[2] * 100).toFixed(2), 
                                        "%"));
                            }))
                        )
                    )), 
                React.createElement("div", {className: 'separator'}), 
                React.createElement("div", {className: 'asc-list'}, 
                    React.createElement("table", {className: 'header s-table top-header'}, 
                        React.createElement("thead", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", {width: '38%'}, "股票名称"), 
                                React.createElement("th", {width: '31%'}, "最新价"), 
                                React.createElement("th", {width: '31%'}, "涨跌幅"))
                        )
                    ), 
                    React.createElement("div", {className: 'body', ref: 'ascList'}, 
                        React.createElement("table", {className: 's-table stripe even top-header'}, 
                            React.createElement("tbody", null, decliningRank && decliningRank.map(function (stock, i) {
                                return React.createElement("tr", {key: i, "data-symbol": stock[0], onClick: _this.setSymbolHandler}, 
                                    React.createElement("td", {width: '38%'}, stock[1]), 
                                    React.createElement("td", {width: '31%'}, (+stock[3]).toFixed(2)), 
                                    React.createElement("td", {width: '31%'}, 
                                        (stock[2] * 100).toFixed(2), 
                                        "%"));
                            }))
                        )
                    )))
        ));
    };
    MainBoard.prototype.selectHandler = function (ev) {
        var indexId = ev.currentTarget.dataset.id;
        this.loadRankList(indexId);
    };
    MainBoard.prototype.setSymbolHandler = function (ev) {
        this.context.chartLayout.setSymbol(ev.currentTarget.dataset.symbol);
    };
    MainBoard.prototype.loadIndexList = function () {
        var _this = this;
        return datasource_1.getIndexesInfo()
            .then(function (data) {
            if (_this._isMounted) {
                var reflushinter = data.data.intver * 1000;
                _this.setState({ indexes: data.data.list });
                _this._pollIndexListTimer = reflushinter ? setTimeout(_this.loadIndexList, reflushinter) : -1;
            }
        })
            .catch(function (ex) { return _this._pollIndexListTimer = setTimeout(_this.loadIndexList, RETRY_DELAY); });
    };
    MainBoard.prototype.loadRankList = function (indexId) {
        var _this = this;
        clearTimeout(this._pollRankListTimer);
        datasource_1.getStockListByIndexId(indexId)
            .then(function (data) {
            if (_this._isMounted) {
                var reflushinter = data.data.intver * 1000;
                _this.setState({
                    activeIndexId: indexId,
                    rising_rank: data.data.up,
                    declining_rank: data.data.down,
                });
                _this._pollRankListTimer = reflushinter ? setTimeout(function () { return _this.loadRankList(indexId); }, reflushinter) : -1;
            }
        })
            .catch(function (ex) { return _this._pollRankListTimer = setTimeout(function () { return _this.loadRankList(indexId); }, RETRY_DELAY); });
    };
    MainBoard.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return MainBoard;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainBoard;


/***/ }),

/***/ "./src/component/footerpanel/platelist/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/footerpanel/platelist/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/footerpanel/platelist/index.less");
__webpack_require__("./src/style/table.less");
var React = __webpack_require__("./node_modules/react/react.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var LOAD_SIZE = 9;
var RETRY_DELAY = 10000;
var PlateList = (function (_super) {
    __extends(PlateList, _super);
    function PlateList(props, context) {
        _super.call(this, props, context);
        this.state = {
            sortKey: 'zdf',
            order: 'desc',
            startIndex: 0,
        };
        this._chartLayout = context.chartLayout;
        this.onScrollEnd = this.onScrollEnd.bind(this);
        this.sortHandler = this.sortHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.setSymbolHandler = this.setSymbolHandler.bind(this);
        this.loadPlates = this.loadPlates.bind(this);
        this.loadStocks = this.loadStocks.bind(this);
    }
    PlateList.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var curState = this.state;
        return curState.plates !== nextState.plates ||
            curState.stocks !== nextState.stocks ||
            curState.activePlateId !== nextState.activePlateId ||
            curState.sortKey !== nextState.sortKey ||
            curState.order !== nextState.order;
    };
    PlateList.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.width !== this.props.width) {
            this._platelistScroller.refresh();
            this._stockListScroller.refresh();
            this._wrapperScroller.refresh();
        }
    };
    PlateList.prototype.componentDidMount = function () {
        this._isMounted = true;
        this._wrapperScroller = new IScroll(this.refs.wrapper, {
            scrollbars: true,
            hScrollbar: true,
            scrollX: true,
            scrollY: false,
            fadeScrollbars: true,
        });
        this._platelistScroller = new IScroll(this.refs.plateListBody, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
        this._stockListScroller = new IScroll(this.refs.stockListBody, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
        this._platelistScroller.on('scrollEnd', this.onScrollEnd);
        this.loadPlates(this.state.sortKey, this.state.order, this.state.startIndex);
    };
    PlateList.prototype.componentDidUpdate = function () {
        this._platelistScroller.refresh();
        this._stockListScroller.refresh();
        this._wrapperScroller.refresh();
    };
    PlateList.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        this._platelistScroller.destroy();
        this._stockListScroller.destroy();
        this._wrapperScroller.destroy();
        clearTimeout(this._pollPlateListTimer);
        clearTimeout(this._pollStockListTimer);
    };
    PlateList.prototype.render = function () {
        var _this = this;
        // const topPaddingRows = []
        // const bottomPaddingRows = []
        var total = this.state.total;
        var startIndex = this.state.startIndex;
        var plates = this.state.plates;
        var paddingTop = 30 * startIndex;
        var paddingBottom = 30 * (total - startIndex - LOAD_SIZE - 1);
        // for (let i = 0, len = startIndex; i < len; i++) {
        //   topPaddingRows.push(
        //     <tr key={i}>
        //       <td width='18%'>--</td>
        //       <td width='16%'>--</td>
        //       <td width='18%'>--</td>
        //       <td width='18%'>--</td>
        //       <td width='12%'>--</td>
        //       <td width='12%'>--</td>
        //       <td width='6%'></td>
        //     </tr>
        //   )
        // }
        // for (let i = startIndex + LOAD_SIZE, len = total; i < len; i++) {
        //   bottomPaddingRows.push(
        //     <tr key={i}>
        //       <td width='18%'>--</td>
        //       <td width='16%'>--</td>
        //       <td width='18%'>--</td>
        //       <td width='18%'>--</td>
        //       <td width='12%'>--</td>
        //       <td width='12%'>--</td>
        //       <td width='6%'></td>
        //     </tr>
        //   )
        // }
        return (React.createElement("div", {className: 'chart-plate', ref: 'wrapper'}, 
            React.createElement("div", {className: 'wrapper'}, 
                React.createElement("div", {className: 'plate-list'}, 
                    React.createElement("table", {className: 'header s-table top-header'}, 
                        React.createElement("thead", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", {width: '18%'}, "板块名称"), 
                                React.createElement("th", {width: '16%', "data-key": 'zdf', onClick: this.sortHandler}, 
                                    "涨跌幅", 
                                    this.state.sortKey === 'zdf' ?
                                        this.state.order === 'desc' ? '↑' : '↓'
                                        : ''), 
                                React.createElement("th", {width: '18%', "data-key": 'big_rate', onClick: this.sortHandler}, 
                                    "大单净比", 
                                    this.state.sortKey === 'big_rate' ?
                                        this.state.order === 'desc' ? '↑' : '↓'
                                        : ''), 
                                React.createElement("th", {width: '18%', "data-key": 'big_amount', onClick: this.sortHandler}, 
                                    "主力资金", 
                                    this.state.sortKey === 'big_amount' ?
                                        this.state.order === 'desc' ? '↑' : '↓'
                                        : ''), 
                                React.createElement("th", {width: '12%'}, "上涨数"), 
                                React.createElement("th", {width: '12%'}, "下跌数"), 
                                React.createElement("th", {width: '6%'}))
                        )
                    ), 
                    React.createElement("div", {className: 'body', ref: 'plateListBody'}, 
                        React.createElement("table", {className: "s-table stripe " + (this.state.startIndex % 2 === 0 ? 'even' : 'odd') + " top-header"}, 
                            React.createElement("tbody", null, 
                                React.createElement("tr", {key: 'paddingTop'}, 
                                    React.createElement("td", {style: { height: paddingTop + 'px' }})
                                ), 
                                plates && plates.map(function (plate, i) {
                                    return React.createElement("tr", {key: i, className: plate.bk_id === _this.state.activePlateId ? 'selected' : '', "data-id": plate.bk_id, onClick: _this.selectHandler}, 
                                        React.createElement("td", {width: '18%'}, plate.name), 
                                        React.createElement("td", {width: '16%'}, 
                                            (plate.zdf * 100).toFixed(2), 
                                            "%"), 
                                        React.createElement("td", {width: '18%'}, 
                                            (plate.big_rate * 100).toFixed(2), 
                                            "%"), 
                                        React.createElement("td", {width: '18%'}, util_1.formatNumber(+plate.big_amount, 2)), 
                                        React.createElement("td", {width: '12%'}, plate.z_num), 
                                        React.createElement("td", {width: '12%'}, plate.d_num), 
                                        React.createElement("td", {width: '6%'}));
                                }), 
                                React.createElement("tr", {key: 'paddingBottom'}, 
                                    React.createElement("td", {style: { height: paddingBottom + 'px' }})
                                ))
                        )
                    )), 
                React.createElement("div", {className: 'separator'}), 
                React.createElement("div", {className: 'stock-list'}, 
                    React.createElement("table", {className: 'header s-table top-header'}, 
                        React.createElement("thead", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", {width: '40%'}, "股票名称"), 
                                React.createElement("th", {width: '30%'}, "最新价"), 
                                React.createElement("th", {width: '30%'}, "涨跌幅"))
                        )
                    ), 
                    React.createElement("div", {className: 'body', ref: 'stockListBody'}, 
                        React.createElement("table", {className: 's-table stripe even top-header'}, 
                            React.createElement("tbody", null, this.state.stocks && this.state.stocks.map(function (stock, i) {
                                return React.createElement("tr", {key: i, "data-symbol": stock.c, onClick: _this.setSymbolHandler}, 
                                    React.createElement("td", {width: '40%'}, stock.n), 
                                    React.createElement("td", {width: '30%'}, (+stock.price).toFixed(2)), 
                                    React.createElement("td", {width: '30%'}, 
                                        (stock.p_change * 100).toFixed(2), 
                                        "%"));
                            }))
                        )
                    )))
        ));
    };
    PlateList.prototype.onScrollEnd = function () {
        var startIndex = ~~(-this._platelistScroller.y / 30);
        this.loadPlates(this.state.sortKey, this.state.order, startIndex);
    };
    PlateList.prototype.sortHandler = function (ev) {
        var sortKey = ev.target.dataset.key;
        var order = 'desc';
        if (sortKey === this.state.sortKey) {
            order = this.state.order === 'desc' ? 'asc' : 'desc';
        }
        this.loadPlates(sortKey, order, this.state.startIndex);
    };
    PlateList.prototype.selectHandler = function (ev) {
        var plateId = ev.currentTarget.dataset.id;
        this.loadStocks(plateId);
    };
    PlateList.prototype.setSymbolHandler = function (ev) {
        this.context.chartLayout.setSymbol(ev.currentTarget.dataset.symbol);
    };
    PlateList.prototype.loadPlates = function (sortKey, order, startIndex) {
        var _this = this;
        clearTimeout(this._pollPlateListTimer);
        datasource_1.getAllPlates(sortKey, order, startIndex, LOAD_SIZE)
            .then(function (data) {
            if (_this._isMounted) {
                var reflushinter = data.data.intver * 1000;
                _this.setState({
                    sortKey: sortKey,
                    order: order,
                    startIndex: startIndex,
                    plates: data.data.list,
                    total: data.data.total_count,
                });
                _this._pollPlateListTimer = reflushinter ? setTimeout(function () { return _this.loadPlates(sortKey, order, startIndex); }, reflushinter) : -1;
            }
        })
            .catch(function (ex) { return _this._pollPlateListTimer = setTimeout(function () { return _this.loadPlates(sortKey, order, startIndex); }, RETRY_DELAY); });
    };
    PlateList.prototype.loadStocks = function (plateId) {
        var _this = this;
        clearTimeout(this._pollStockListTimer);
        datasource_1.getStockListByPlateId(plateId)
            .then(function (data) {
            if (_this._isMounted) {
                var reflushinter = data.data.intver * 1000;
                _this.setState({
                    activePlateId: plateId,
                    stocks: data.data.list,
                });
                _this._pollStockListTimer = reflushinter ? setTimeout(function () { return _this.loadStocks(plateId); }, reflushinter) : -1;
            }
        })
            .catch(function (ex) { return _this._pollStockListTimer = setTimeout(function () { return _this.loadStocks(plateId); }, RETRY_DELAY); });
    };
    PlateList.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return PlateList;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlateList;


/***/ }),

/***/ "./src/component/footerpanel/recentvisit/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/footerpanel/recentvisit/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/footerpanel/recentvisit/index.less");
__webpack_require__("./src/style/table.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var util_1 = __webpack_require__("./src/util/index.ts");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var RETRY_DELAY = 10000;
var RecentList = (function (_super) {
    __extends(RecentList, _super);
    function RecentList(props, context) {
        _super.call(this, props, context);
        this.state = {
            sortKey: 'zdf',
            order: 'desc',
        };
        this._chartLayout = context.chartLayout;
        this.loadStocks = this.loadStocks.bind(this);
        this.sortHandler = this.sortHandler.bind(this);
        this.setSymbolHandler = this.setSymbolHandler.bind(this);
    }
    RecentList.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.state, nextState);
    };
    RecentList.prototype.componentDidMount = function () {
        this._isMounted = true;
        this._wrapperScroller = new IScroll(this.refs.wrapper, {
            scrollbars: true,
            hScrollbar: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: true,
            fadeScrollbars: true,
        });
        this._scroller = new IScroll(this.refs.body, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
        this._chartLayout.addListener('self_select_add', this.loadStocks);
        this._chartLayout.addListener('self_select_delete', this.loadStocks);
        this.loadStocks(this.state.sortKey, this.state.order);
    };
    RecentList.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.width !== this.props.width) {
            this._wrapperScroller.refresh();
            this._scroller.refresh();
        }
    };
    RecentList.prototype.componentDidUpdate = function () {
        this._scroller.refresh();
    };
    RecentList.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        this._wrapperScroller.destroy();
        this._scroller.destroy();
        this._chartLayout.removeListener('self_select_add', this.loadStocks);
        this._chartLayout.removeListener('self_select_delete', this.loadStocks);
        clearTimeout(this._pollStocksTimer);
    };
    RecentList.prototype.render = function () {
        var _this = this;
        var stocks = this.state.stocks;
        return (React.createElement("div", {className: 'chart-recent-list', ref: 'wrapper'}, 
            React.createElement("div", {className: 'wrapper'}, 
                React.createElement("table", {className: 'header s-table top-header'}, 
                    React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", {width: '18%'}, "股票"), 
                            React.createElement("th", {width: '14%', "data-key": 'price', onClick: this.sortHandler}, 
                                "最新价", 
                                this.state.sortKey === 'price' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''), 
                            React.createElement("th", {width: '14%', "data-key": 'zdf', onClick: this.sortHandler}, 
                                "涨跌幅", 
                                this.state.sortKey === 'zdf' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''), 
                            React.createElement("th", {width: '16%', "data-key": 'sz', onClick: this.sortHandler}, 
                                "总市值", 
                                this.state.sortKey === 'sz' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''), 
                            React.createElement("th", {width: '20%', "data-key": 'lt_sz', onClick: this.sortHandler}, 
                                "实际流通市值", 
                                this.state.sortKey === 'lt_sz' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''), 
                            React.createElement("th", {width: '18%', "data-key": 'hy', onClick: this.sortHandler}, 
                                "所属行业", 
                                this.state.sortKey === 'hy' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''))
                    )
                ), 
                React.createElement("div", {ref: 'body', className: 'body'}, 
                    React.createElement("table", {className: 's-table stripe even top-header'}, 
                        React.createElement("tbody", null, stocks && stocks.map(function (stock, i) {
                            return React.createElement("tr", {key: i, "data-symbol": stock.code, onClick: _this.setSymbolHandler}, 
                                React.createElement("td", {width: '18%'}, stock.name), 
                                React.createElement("td", {width: '14%'}, (+stock.price).toFixed(2)), 
                                React.createElement("td", {width: '14%'}, 
                                    (stock.zdf * 100).toFixed(2), 
                                    "%"), 
                                React.createElement("td", {width: '16%'}, stock.sz !== '--' ? util_1.formatNumber(+stock.sz, 2) : '--'), 
                                React.createElement("td", {width: '20%'}, stock.lt_sz !== '--' ? util_1.formatNumber(+stock.lt_sz, 2) : '--'), 
                                React.createElement("td", {width: '18%'}, stock.hy));
                        }))
                    )
                ))
        ));
    };
    RecentList.prototype.loadStocks = function (sortKey, order) {
        var _this = this;
        var codes = _.pluck(this._chartLayout.readFromLS('chart.recentlist') || [], 'symbol');
        datasource_1.getStockListByCodes(codes, sortKey, order)
            .then(function (data) {
            if (_this._isMounted) {
                var reflushinter = data.data.intver * 1000;
                _this.setState({
                    sortKey: sortKey,
                    order: order,
                    stocks: data.data.list,
                });
                _this._pollStocksTimer = reflushinter ? setTimeout(function () { return _this.loadStocks; }, reflushinter) : -1;
            }
        })
            .catch(function (ex) { return _this._pollStocksTimer = setTimeout(function () { return _this.loadStocks; }, RETRY_DELAY); });
    };
    RecentList.prototype.sortHandler = function (ev) {
        var sortKey = ev.target.dataset.key;
        var order = 'desc';
        if (sortKey === this.state.sortKey) {
            order = this.state.order === 'desc' ? 'asc' : 'desc';
        }
        this.loadStocks(sortKey, order);
    };
    RecentList.prototype.setSymbolHandler = function (ev) {
        this.context.chartLayout.setSymbol(ev.currentTarget.dataset.symbol);
    };
    RecentList.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return RecentList;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RecentList;


/***/ }),

/***/ "./src/component/footerpanel/selfselect/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/footerpanel/selfselect/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/footerpanel/selfselect/index.less");
__webpack_require__("./src/style/table.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var util_1 = __webpack_require__("./src/util/index.ts");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var RETRY_DELAY = 10000;
var SelfSelectStock = (function (_super) {
    __extends(SelfSelectStock, _super);
    function SelfSelectStock(props, context) {
        _super.call(this, props, context);
        this.state = {
            sortKey: 'zdf',
            order: 'desc',
        };
        this._chartLayout = context.chartLayout;
        this.loadStocks = this.loadStocks.bind(this);
        this.sortHandler = this.sortHandler.bind(this);
        this.setSymbolHandler = this.setSymbolHandler.bind(this);
    }
    SelfSelectStock.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.state, nextState);
    };
    SelfSelectStock.prototype.componentDidMount = function () {
        this._isMounted = true;
        this._wrapperScroller = new IScroll(this.refs.wrapper, {
            scrollbars: true,
            hScrollbar: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: true,
            fadeScrollbars: true,
        });
        this._scroller = new IScroll(this.refs.body, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
        this._chartLayout.addListener('self_select_add', this.loadStocks);
        this._chartLayout.addListener('self_select_delete', this.loadStocks);
        this.loadStocks(this.state.sortKey, this.state.order);
    };
    SelfSelectStock.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.width !== this.props.width) {
            this._wrapperScroller.refresh();
            this._scroller.refresh();
        }
    };
    SelfSelectStock.prototype.componentDidUpdate = function () {
        this._scroller.refresh();
    };
    SelfSelectStock.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        this._wrapperScroller.destroy();
        this._scroller.destroy();
        this._chartLayout.removeListener('self_select_add', this.loadStocks);
        this._chartLayout.removeListener('self_select_delete', this.loadStocks);
        clearTimeout(this._pollStocksTimer);
    };
    SelfSelectStock.prototype.render = function () {
        var _this = this;
        var stocks = this.state.stocks;
        return (React.createElement("div", {className: 'chart-self-select', ref: 'wrapper'}, 
            React.createElement("div", {className: 'wrapper'}, 
                React.createElement("table", {className: 'header s-table top-header'}, 
                    React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", {width: '18%'}, "股票"), 
                            React.createElement("th", {width: '14%', "data-key": 'price', onClick: this.sortHandler}, 
                                "最新价", 
                                this.state.sortKey === 'price' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''), 
                            React.createElement("th", {width: '14%', "data-key": 'zdf', onClick: this.sortHandler}, 
                                "涨跌幅", 
                                this.state.sortKey === 'zdf' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''), 
                            React.createElement("th", {width: '16%', "data-key": 'sz', onClick: this.sortHandler}, 
                                "总市值", 
                                this.state.sortKey === 'sz' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''), 
                            React.createElement("th", {width: '20%', "data-key": 'lt_sz', onClick: this.sortHandler}, 
                                "实际流通市值", 
                                this.state.sortKey === 'lt_sz' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''), 
                            React.createElement("th", {width: '18%', "data-key": 'hy', onClick: this.sortHandler}, 
                                "所属行业", 
                                this.state.sortKey === 'hy' ?
                                    this.state.order === 'desc' ? '↑' : '↓'
                                    : ''))
                    )
                ), 
                React.createElement("div", {className: 'body', ref: 'body'}, 
                    React.createElement("table", {className: 's-table stripe even top-header'}, 
                        React.createElement("tbody", null, stocks && stocks.map(function (stock, i) {
                            return React.createElement("tr", {key: i, "data-symbol": stock.code, onClick: _this.setSymbolHandler}, 
                                React.createElement("td", {width: '18%'}, stock.name), 
                                React.createElement("td", {width: '14%'}, (+stock.price).toFixed(2)), 
                                React.createElement("td", {width: '14%'}, 
                                    (stock.zdf * 100).toFixed(2), 
                                    "%"), 
                                React.createElement("td", {width: '16%'}, stock.sz !== '--' ? util_1.formatNumber(+stock.sz, 2) : '--'), 
                                React.createElement("td", {width: '20%'}, stock.lt_sz !== '--' ? util_1.formatNumber(+stock.lt_sz, 2) : '--'), 
                                React.createElement("td", {width: '18%'}, stock.hy));
                        }))
                    )
                ))
        ));
    };
    SelfSelectStock.prototype.loadStocks = function (sortKey, order) {
        var _this = this;
        var codes = _.pluck(this._chartLayout.readFromLS('qchart.selfselectlist') || [], 'symbol');
        datasource_1.getStockListByCodes(codes, sortKey, order)
            .then(function (data) {
            if (_this._isMounted) {
                var reflushinter = data.data.intver * 1000;
                _this.setState({
                    sortKey: sortKey,
                    order: order,
                    stocks: data.data.list,
                });
                _this._pollStocksTimer = reflushinter ? setTimeout(function () { return _this.loadStocks; }, reflushinter) : -1;
            }
        })
            .catch(function (ex) { return _this._pollStocksTimer = setTimeout(function () { return _this.loadStocks; }, RETRY_DELAY); });
    };
    SelfSelectStock.prototype.sortHandler = function (ev) {
        var sortKey = ev.target.dataset.key;
        var order = 'desc';
        if (sortKey === this.state.sortKey) {
            order = this.state.order === 'desc' ? 'asc' : 'desc';
        }
        this.loadStocks(sortKey, order);
    };
    SelfSelectStock.prototype.setSymbolHandler = function (ev) {
        this.context.chartLayout.setSymbol(ev.currentTarget.dataset.symbol);
    };
    SelfSelectStock.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return SelfSelectStock;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SelfSelectStock;


/***/ }),

/***/ "./src/component/gotodate/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/gotodate/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/gotodate/index.less");
__webpack_require__("./src/style/btn.less");
__webpack_require__("./node_modules/react-datetime/css/react-datetime.css");
var React = __webpack_require__("./node_modules/react/react.js");
var moment = __webpack_require__("./node_modules/moment/moment.js");
var DatetimePicker = __webpack_require__("./node_modules/react-datetime/DateTime.js");
var dialog_1 = __webpack_require__("./src/component/widget/dialog/index.tsx");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var dateTimeFormat = 'YYYY-MM-DD HH:mm';
var dateFormat = 'YYYY-MM-DD';
var GoToDateDialog = (function (_super) {
    __extends(GoToDateDialog, _super);
    function GoToDateDialog(props, context) {
        _super.call(this, props, context);
        this._inputDateValue = null;
        this._chartLayout = context.chartLayout;
        this.state = {};
        this.dateChangeHandler = this.dateChangeHandler.bind(this);
        this.datePickerBlurHandler = this.datePickerBlurHandler.bind(this);
        this.dialogCloseHandler = this.dialogCloseHandler.bind(this);
        this.goToDateHandler = this.goToDateHandler.bind(this);
        this.checkDateHandler = this.checkDateHandler.bind(this);
    }
    GoToDateDialog.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return false;
    };
    GoToDateDialog.prototype.render = function () {
        var chartLayout = this._chartLayout;
        var dontShowTime = chartLayout.mainDatasource.resolution > '60';
        var mainDatasource = chartLayout.mainDatasource;
        var now = new Date(mainDatasource.now() * 1000);
        this.correctTime(now);
        var thisMoment = this._inputDateValue ?
            this._inputDateValue : moment(now).minute(now.getMinutes() - now.getMinutes() % 5);
        var nowDateStr = dontShowTime ? thisMoment.format(dateFormat) : thisMoment.format(dateTimeFormat);
        this._inputDateValue = thisMoment;
        return React.createElement(dialog_1.default, {title: '定位时间', className: 'chart-gotodate', onClose: this.dialogCloseHandler}, 
            React.createElement("div", null, 
                React.createElement("input", {ref: 'dateInput', type: 'text', readOnly: true, defaultValue: nowDateStr}), 
                React.createElement("button", {className: 'btn btn-blue', onClick: this.goToDateHandler}, "前往")), 
            React.createElement(DatetimePicker, {input: false, value: thisMoment.toDate(), open: true, isValidDate: this.checkDateHandler, dateFormat: true, timeFormat: dontShowTime ? null : true, timeConstraints: { hours: { min: constant_1.OPEN_HOUR, max: constant_1.CLOSE_HOUR }, minutes: { step: 5 } }, closeOnSelect: false, disableOnClickOutside: true, locale: 'zh-cn', onBlur: this.datePickerBlurHandler, onChange: this.dateChangeHandler}));
    };
    GoToDateDialog.prototype.goToDateHandler = function () {
        var chartLayout = this._chartLayout;
        var resolution = chartLayout.mainDatasource.resolution;
        var toDate = this._inputDateValue.toDate();
        toDate.setSeconds(0);
        if (resolution > '60') {
            toDate.setHours(0);
            toDate.setMinutes(0);
        }
        chartLayout.goToDate(~~(toDate.getTime() / 1000));
        this.dialogCloseHandler();
    };
    GoToDateDialog.prototype.dialogCloseHandler = function () {
        this._chartLayout.toggleGoToDate(false);
    };
    // 日期选择器值发生变化时
    GoToDateDialog.prototype.dateChangeHandler = function (moment) {
        var resolution = this._chartLayout.mainDatasource.resolution;
        this._inputDateValue = moment;
        this.refs.dateInput.value =
            moment.format(resolution > '60' ? moment.format(dateFormat) : moment.format(dateTimeFormat));
    };
    // 日期选择器关闭时
    GoToDateDialog.prototype.datePickerBlurHandler = function () {
        this.setState({});
    };
    // 校验日期是否可选。晚于当前日期都不可选。太早的日期也不可选。
    GoToDateDialog.prototype.checkDateHandler = function (currentDate, selectedDate) {
        var chartLayout = this._chartLayout;
        var resolution = chartLayout.mainDatasource.resolution;
        var now = chartLayout.mainDatasource.now();
        var thisMoment = moment(now * 1000);
        var constraintMoment = moment(now * 1000);
        if (currentDate.isAfter(thisMoment)) {
            return false;
        }
        switch (resolution) {
            case '1':
                constraintMoment.subtract(1, 'months');
                return currentDate.isAfter(constraintMoment);
            case '5':
                constraintMoment.subtract(2, 'months');
                return currentDate.isAfter(constraintMoment);
            case '15':
                constraintMoment.subtract(6, 'months');
                return currentDate.isAfter(constraintMoment);
            case '30':
                constraintMoment.subtract(1, 'years');
                return currentDate.isAfter(constraintMoment);
            case '60':
                constraintMoment.subtract(2, 'years');
                return currentDate.isAfter(constraintMoment);
            case 'D':
            case 'W':
            case 'M':
                return true;
            default:
                throw new Error('Unsupported resolution');
        }
    };
    // 校正日期，使其在开收盘的限制范围内
    GoToDateDialog.prototype.correctTime = function (date) {
        var hour = date.getHours();
        var minute = date.getMinutes();
        if (hour < constant_1.OPEN_HOUR || (hour === constant_1.OPEN_HOUR && minute < constant_1.OPEN_MINUTE)) {
            date.setHours(constant_1.OPEN_HOUR);
            date.setMinutes(constant_1.OPEN_MINUTE);
        }
        else if (hour > constant_1.CLOSE_HOUR || (hour === constant_1.CLOSE_HOUR && minute > constant_1.CLOSE_MINUTE)) {
            date.setHours(constant_1.CLOSE_HOUR);
            date.setMinutes(constant_1.CLOSE_MINUTE);
        }
    };
    GoToDateDialog.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return GoToDateDialog;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GoToDateDialog;


/***/ }),

/***/ "./src/component/navbar/compare/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/navbar/compare/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/navbar/compare/index.less");
__webpack_require__("./src/style/btn.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var searchbox_1 = __webpack_require__("./src/component/navbar/searchbox/index.tsx");
var dialog_1 = __webpack_require__("./src/component/widget/dialog/index.tsx");
var indexes = [
    [
        ['sh000001', '上证指数'],
        ['sz399001', '深证指数'],
    ],
    [
        ['sz399300', '沪深300'],
        ['sz399005', '中小板指'],
    ],
    [
        ['sz399006', '创业板指'],
    ],
];
var Compare = (function (_super) {
    __extends(Compare, _super);
    function Compare(props, context) {
        _super.call(this, props, context);
        this._indexesCheckState = {};
        this._chartLayout = context.chartLayout;
        this.state = {
            showCompareDialog: false,
        };
        this.showDialogHandler = this.showDialogHandler.bind(this);
        this.dialogCloseHandler = this.dialogCloseHandler.bind(this);
        this.selectSymbolHandler = this.selectSymbolHandler.bind(this);
        this.checkChangeHandler = this.checkChangeHandler.bind(this);
        this.graphRemoveHandler = this.graphRemoveHandler.bind(this);
    }
    Compare.prototype.componentDidMount = function () {
        this._chartLayout.addListener('graph_remove', this.graphRemoveHandler);
    };
    Compare.prototype.componentWillUnmount = function () {
        this._chartLayout.removeListener('graph_remove', this.graphRemoveHandler);
    };
    Compare.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    Compare.prototype.render = function () {
        var _this = this;
        return React.createElement("div", {className: 'chart-compare chart-btn-group'}, 
            React.createElement("button", {className: 'btn', onClick: this.showDialogHandler}, "对比"), 
            this.state.showCompareDialog ?
                React.createElement(dialog_1.default, {title: '对比', width: 320, className: 'chart-compare-dialog', onClose: this.dialogCloseHandler}, 
                    React.createElement(searchbox_1.default, {className: 'chart-compare-search', placeholder: '输入检索股票', onSelect: this.selectSymbolHandler}), 
                    indexes.map(function (indexGroup, i) {
                        return React.createElement("div", {key: i, className: 'index-shortcut'}, indexGroup.map(function (indexInfo) {
                            return React.createElement("div", {key: indexInfo[0]}, 
                                React.createElement("input", {id: "index_" + indexInfo[0], type: 'checkbox', value: indexInfo[0], defaultChecked: !!_this._indexesCheckState[indexInfo[0]], onChange: _this.checkChangeHandler}), 
                                React.createElement("label", {htmlFor: "index_" + indexInfo[0]}, indexInfo[1]));
                        }));
                    })) : null);
    };
    Compare.prototype.showDialogHandler = function () {
        this.setState({ showCompareDialog: true });
    };
    Compare.prototype.dialogCloseHandler = function () {
        this.setState({ showCompareDialog: false });
    };
    Compare.prototype.selectSymbolHandler = function (symbol) {
        this._chartLayout.addComparison(symbol);
    };
    Compare.prototype.checkChangeHandler = function (ev) {
        var checked = ev.target.checked;
        var symbol = ev.target.value;
        if (checked) {
            this._indexesCheckState[symbol] = this.props.onAddComparison(symbol);
        }
        else {
            this.props.onRemoveComparison(this._indexesCheckState[symbol]);
            this._indexesCheckState[symbol] = null;
        }
    };
    // 用户手动移除比较图形时
    Compare.prototype.graphRemoveHandler = function (graph) {
        var indexesCheckState = this._indexesCheckState;
        Object.keys(indexesCheckState).forEach(function (key) {
            if (graph.isComparison && graph.id === indexesCheckState[key]) {
                indexesCheckState[key] = null;
            }
        });
    };
    Compare.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Compare;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Compare;


/***/ }),

/***/ "./src/component/navbar/fullscreen/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/navbar/fullscreen/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/navbar/fullscreen/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var FullScreen = (function (_super) {
    __extends(FullScreen, _super);
    function FullScreen() {
        _super.apply(this, arguments);
    }
    FullScreen.prototype.shouldComponentUpdate = function () {
        return false;
    };
    FullScreen.prototype.render = function () {
        return (React.createElement("a", {ref: 'btn', className: 'full-screen', title: '全屏/取消', onClick: this.mouseclickhandler.bind(this)}));
    };
    FullScreen.prototype.mouseclickhandler = function (ev) {
        this.props.onFullScreen();
    };
    return FullScreen;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FullScreen;


/***/ }),

/***/ "./src/component/navbar/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/navbar/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/navbar/index.less");
__webpack_require__("./src/style/btn.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var resolution_1 = __webpack_require__("./src/component/navbar/resolution/index.tsx");
var searchbox_1 = __webpack_require__("./src/component/navbar/searchbox/index.tsx");
var compare_1 = __webpack_require__("./src/component/navbar/compare/index.tsx");
var study_1 = __webpack_require__("./src/component/navbar/study/index.tsx");
var fullscreen_1 = __webpack_require__("./src/component/navbar/fullscreen/index.tsx");
var right_1 = __webpack_require__("./src/component/navbar/right/index.tsx");
var ma_1 = __webpack_require__("./src/component/navbar/ma/index.tsx");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var Navbar = (function (_super) {
    __extends(Navbar, _super);
    function Navbar(props, context) {
        _super.call(this, props, context);
        this._chartLayout = context.chartLayout;
        this.updateView = this.updateView.bind(this);
        this.onShowAbout = this.onShowAbout.bind(this);
        this.onShowNewest = this.onShowNewest.bind(this);
    }
    Navbar.prototype.shouldComponentUpdate = function (nextProps) {
        return !_.isEqual(this.props, nextProps);
    };
    Navbar.prototype.componentDidMount = function () {
        var chartLayout = this._chartLayout;
        chartLayout.addListener('resolution_change', this.updateView);
        chartLayout.addListener('symbol_change', this.updateView);
    };
    Navbar.prototype.componentWillUnmount = function () {
        var chartLayout = this._chartLayout;
        chartLayout.removeListener('resolution_change', this.updateView);
        chartLayout.removeListener('symbol_change', this.updateView);
    };
    Navbar.prototype.render = function () {
        var chartLayout = this._chartLayout;
        var resolution = chartLayout.mainDatasource.resolution;
        return (React.createElement("div", {className: 'chart-navbar', style: { width: this.props.width + 'px' }}, 
            React.createElement(searchbox_1.default, {className: 'chart-navbar-search', autofill: true, onSelect: this.props.onSymbolChange}), 
            React.createElement(resolution_1.default, {onResolutionChange: this.props.onResolutionChange}), 
            React.createElement(fullscreen_1.default, {onFullScreen: this.props.onFullScreen}), 
            React.createElement(compare_1.default, {onAddComparison: this.props.onAddComparison, onRemoveComparison: this.props.onRemoveComparison}), 
            React.createElement(study_1.default, {onAddStudy: this.props.onAddStudy}), 
            resolution > '1' ? React.createElement(ma_1.default, {onStudyModified: this.props.onStudyModified}) : null, 
            chartLayout.mainDatasource.symbolInfo.type === 'stock' ?
                React.createElement(right_1.default, {onRightChange: this.props.onRightChange}) : null, 
            React.createElement("button", {className: 'about btn', onClick: this.onShowAbout}, "关于"), 
            React.createElement("button", {className: 'newest btn', onClick: this.onShowNewest}, "最新功能")));
    };
    Navbar.prototype.onShowAbout = function () {
        this._chartLayout.toggleAbout(true);
    };
    Navbar.prototype.onShowNewest = function () {
        this._chartLayout.showAnalysisSidebarTab();
    };
    Navbar.prototype.updateView = function () {
        this.forceUpdate();
    };
    Navbar.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Navbar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navbar;


/***/ }),

/***/ "./src/component/navbar/ma/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/navbar/ma/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/navbar/ma/index.less");
__webpack_require__("./src/style/btn.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var dialog_1 = __webpack_require__("./src/component/widget/dialog/index.tsx");
var colorpicker_1 = __webpack_require__("./src/component/widget/colorpicker/index.tsx");
var util_1 = __webpack_require__("./src/util/index.ts");
var MASettings = (function (_super) {
    __extends(MASettings, _super);
    function MASettings(props, context) {
        _super.call(this, props, context);
        this._originMAProps = null;
        this._maProps = null;
        this._chartLayout = context.chartLayout;
        this.state = {
            showDialog: false,
            colorPickerIndex: -1,
        };
        this.showDialogHandler = this.showDialogHandler.bind(this);
        this.closeDialogHandler = this.closeDialogHandler.bind(this);
        this.checkStateChangeHandler = this.checkStateChangeHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
    }
    MASettings.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    MASettings.prototype.render = function () {
        var _this = this;
        var chartLayout = this._chartLayout;
        var maProps = chartLayout.maProps || chartlayout_1.DEFAULT_MA_PROPS;
        return React.createElement("div", {className: 'chart-btn-group'}, 
            React.createElement("button", {className: 'btn', onClick: this.showDialogHandler}, "均线"), 
            this.state.showDialog ?
                React.createElement(dialog_1.default, {title: '均线设置', className: 'chart-ma-settings', onClose: this.closeDialogHandler}, 
                    React.createElement("table", null, 
                        React.createElement("tbody", null, maProps.map(function (prop, i) {
                            return React.createElement("tr", {key: i}, 
                                React.createElement("td", {width: '60'}, 
                                    React.createElement("input", {id: "chart-settings-ma" + i, type: 'checkbox', defaultChecked: prop.isVisible, value: i, onChange: _this.checkStateChangeHandler}), 
                                    React.createElement("label", {htmlFor: "chart-settings-ma" + i}, 
                                        "均线", 
                                        i + 1)), 
                                React.createElement("td", {width: '130'}, 
                                    React.createElement("input", {type: 'text', "data-index": i, defaultValue: prop.length + '', onChange: _this.inputChangeHandler})
                                ), 
                                React.createElement("td", {width: '30'}, 
                                    React.createElement(colorpicker_1.default, {defaultColor: prop.color, onChangeComplete: _this.colorChangeHandler(i)})
                                ));
                        }))
                    ), 
                    React.createElement("div", {className: 'chart-ma-settings-btn-group clearfix'}, 
                        React.createElement("button", {className: 'btn btn-gray btn-smaller', onClick: this.cancelHandler}, "取消"), 
                        React.createElement("button", {className: 'btn btn-blue btn-smaller', onClick: this.closeDialogHandler}, "确定"))) : null);
    };
    MASettings.prototype.showDialogHandler = function () {
        var chartLayout = this._chartLayout;
        this._maProps = chartLayout.maProps || util_1.cloneObj(chartlayout_1.DEFAULT_MA_PROPS);
        this._originMAProps = util_1.cloneObj(this._maProps);
        this.setState({ showDialog: true });
    };
    MASettings.prototype.closeDialogHandler = function () {
        this._maProps = null;
        this._originMAProps = null;
        this.setState({ showDialog: false });
    };
    MASettings.prototype.checkStateChangeHandler = function (ev) {
        var chartLayout = this._chartLayout;
        var isVisible = ev.target.checked;
        var index = +ev.target.value;
        var study = chartLayout.maStudies[index];
        var maProps = this._maProps;
        maProps[index].isVisible = isVisible;
        chartLayout.maProps = maProps;
        chartLayout.modifyGraph(study, { isVisible: isVisible });
    };
    MASettings.prototype.inputChangeHandler = function (ev) {
        var chartLayout = this._chartLayout;
        var index = ev.target.dataset.index;
        var value = +ev.target.value;
        var study = chartLayout.maStudies[index];
        var maProps = this._maProps;
        maProps[index].length = value;
        chartLayout.maProps = maProps;
        chartLayout.modifyGraph(study, { input: [value] });
    };
    MASettings.prototype.colorChangeHandler = function (index) {
        var _this = this;
        return (function (color) {
            var chartLayout = _this._chartLayout;
            var maProps = _this._maProps;
            var study = chartLayout.maStudies[index];
            var styles = study.styles;
            maProps[index].color = color;
            styles[0].color = color;
            chartLayout.maProps = maProps;
            chartLayout.modifyGraph(study, { styles: styles });
        }).bind(this);
    };
    MASettings.prototype.cancelHandler = function () {
        var _this = this;
        var chartLayout = this._chartLayout;
        var maStudies = chartLayout.maStudies;
        var maProps = this._maProps;
        var originMAProps = this._originMAProps;
        originMAProps.forEach(function (originMAProp, i) {
            var study = maStudies[i];
            var styles = study.styles;
            if (!_.isEqual(originMAProp, maProps[i])) {
                styles[0].color = originMAProp.color;
                _this.props.onStudyModified(study, {
                    input: [originMAProp.length],
                    isVisible: originMAProp.isVisible,
                    styles: styles,
                });
            }
        });
        chartLayout.maProps = originMAProps;
        this.closeDialogHandler();
    };
    MASettings.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return MASettings;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MASettings;


/***/ }),

/***/ "./src/component/navbar/resolution/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/navbar/resolution/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/navbar/resolution/index.less");
__webpack_require__("./src/style/btn.less");
__webpack_require__("./src/style/popup_menu.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var moreResolution = ['5', '15', '30', '60', 'D', 'W', 'M'];
var resolutionConfig = {
    '1': '分时',
    '5': '5分钟',
    '15': '15分钟',
    '30': '30分钟',
    '60': '60分钟',
    'D': '日K',
    'W': '周K',
    'M': '月K',
};
var ResolutionOption = (function (_super) {
    __extends(ResolutionOption, _super);
    function ResolutionOption(props, context) {
        _super.call(this, props, context);
        this._resolution = 'D';
        this._chartLayout = context.chartLayout;
        this.state = {
            showMoreResolution: false,
        };
        this.updateView = this.updateView.bind(this);
        this.resolutionSelectHandler = this.resolutionSelectHandler.bind(this);
        this.showMoreResolutionHandler = this.showMoreResolutionHandler.bind(this);
        this.hideMoreResolutionHandler = this.hideMoreResolutionHandler.bind(this);
    }
    ResolutionOption.prototype.componentDidMount = function () {
        this._chartLayout.addListener('resolution_change', this.updateView);
        document.addEventListener('mousedown', this.hideMoreResolutionHandler);
        document.addEventListener('touchstart', this.hideMoreResolutionHandler);
    };
    ResolutionOption.prototype.componentWillUnmount = function () {
        this._chartLayout.removeListener('resolution_change', this.updateView);
        document.removeEventListener('mousedown', this.hideMoreResolutionHandler);
        document.removeEventListener('touchstart', this.hideMoreResolutionHandler);
    };
    ResolutionOption.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    ResolutionOption.prototype.render = function () {
        var _this = this;
        var selectedResolution = this._chartLayout.mainDatasource.resolution;
        if (selectedResolution !== '1') {
            this._resolution = selectedResolution;
        }
        return React.createElement("div", {className: 'chart-resolution chart-btn-group'}, 
            React.createElement("a", {href: 'javascript:;', className: "btn " + (selectedResolution === '1' ? 'active' : ''), "data-value": 1, onClick: this.resolutionSelectHandler}, resolutionConfig['1']), 
            React.createElement("a", {href: 'javascript:;', className: "btn " + (this._resolution === selectedResolution ? 'active' : ''), "data-value": this._resolution, onClick: this.resolutionSelectHandler}, resolutionConfig[this._resolution]), 
            React.createElement("a", {href: 'javascript:;', className: 'btn btn-more', onClick: this.showMoreResolutionHandler}, 
                React.createElement("i", null)
            ), 
            this.state.showMoreResolution ?
                React.createElement("ul", {className: 'popup-menu'}, moreResolution.map(function (resolution) {
                    return React.createElement("li", {key: resolution, "data-value": resolution, onMouseDown: _this.resolutionSelectHandler, onTouchStart: _this.resolutionSelectHandler}, resolutionConfig[resolution]);
                })) : null);
    };
    ResolutionOption.prototype.updateView = function () {
        this.forceUpdate();
    };
    ResolutionOption.prototype.resolutionSelectHandler = function (ev) {
        if (!!ev.touches) {
            ev.preventDefault();
        }
        var chartLayout = this._chartLayout;
        var resolution = ev.target.dataset.value;
        if (chartLayout.mainDatasource.resolution !== resolution) {
            this.props.onResolutionChange(resolution);
        }
    };
    ResolutionOption.prototype.showMoreResolutionHandler = function () {
        this.setState({ showMoreResolution: true });
    };
    ResolutionOption.prototype.hideMoreResolutionHandler = function (ev) {
        if (this.state.showMoreResolution) {
            if (!!ev.touches) {
                ev.preventDefault();
            }
            this.setState({ showMoreResolution: false });
        }
    };
    ResolutionOption.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return ResolutionOption;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ResolutionOption;


/***/ }),

/***/ "./src/component/navbar/right/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/style/btn.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var rightLabels = ['不复权', '前复权'];
var rightValues = [0, 1];
var RightOption = (function (_super) {
    __extends(RightOption, _super);
    function RightOption(props, context) {
        _super.call(this, props, context);
        this._chartLayout = context.chartLayout;
        this.updateView = this.updateView.bind(this);
        this.rightSelectHandler = this.rightSelectHandler.bind(this);
    }
    RightOption.prototype.shouldComponentUpdate = function (nextProps) {
        return !_.isEqual(this.props, nextProps);
    };
    RightOption.prototype.componentDidMount = function () {
        this._chartLayout.addListener('right_change', this.updateView);
    };
    RightOption.prototype.componentWillUnmount = function () {
        this._chartLayout.removeListener('right_change', this.updateView);
    };
    RightOption.prototype.render = function () {
        var right = this._chartLayout.mainDatasource.right;
        return (React.createElement("div", {className: 'chart-btn-group', onClick: this.rightSelectHandler}, rightValues.map(function (val, index) {
            var className = 'btn';
            if (right === val) {
                className += ' active';
            }
            return React.createElement("button", {key: val, className: className, value: val}, rightLabels[index]);
        })));
    };
    RightOption.prototype.updateView = function () {
        this.forceUpdate();
    };
    RightOption.prototype.rightSelectHandler = function (ev) {
        var right = +ev.target.value;
        var chartLayout = this._chartLayout;
        if (chartLayout.mainDatasource.right !== right) {
            this.props.onRightChange(right);
        }
    };
    RightOption.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return RightOption;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RightOption;


/***/ }),

/***/ "./src/component/navbar/searchbox/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/navbar/searchbox/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/navbar/searchbox/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var SearchBox = (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.searchSymbols = _.debounce(function (keyword) {
            _this.setState({
                loading: true,
            });
            return _this.context.chartLayout.mainDatasource
                .searchSymbols(keyword)
                .then(function (symbols) {
                _this.setState({
                    loading: false,
                    results: symbols,
                });
            });
        }, 300);
        this._chartLayout = context.chartLayout;
        this.state = {
            focus: false,
            loading: false,
            results: null,
            selectedIndex: 0,
        };
    }
    SearchBox.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    SearchBox.prototype.render = function () {
        var _this = this;
        var _a = this.state, focus = _a.focus, loading = _a.loading, results = _a.results, selectedIndex = _a.selectedIndex;
        return (React.createElement("div", {className: "chart-searchbox " + this.props.className + " " + (focus ? 'extended' : '')}, 
            React.createElement("input", {className: 'chart-searchbox-input', defaultValue: '', type: 'text', maxLength: 100, placeholder: this.props.placeholder, ref: 'input', onKeyDown: this.keyDownHandler.bind(this), onFocus: this.inputFocosHandler.bind(this), onBlur: this.inputBlurHandler.bind(this), onInput: this.inputHandler.bind(this)}), 
            React.createElement("ul", {className: 'chart-searchresults', onClick: this.selectSymbolHandler.bind(this), style: { display: focus && (loading || results) ? 'block' : 'none' }}, 
                loading ? React.createElement("li", {className: 'loading'}) : null, 
                !loading && results && !results.length ?
                    React.createElement("li", {className: 'no-results'}, "查询结果为空") : null, 
                !loading && results ?
                    results.map(function (symbol, index) {
                        return React.createElement("li", {key: symbol.symbol, "data-index": index, onMouseEnter: _this.mouseEnterHandler.bind(_this), className: "symbol-item " + (selectedIndex === index ? 'selected' : '')}, 
                            React.createElement("span", {className: 'symbol-code'}, symbol.symbol), 
                            React.createElement("span", {className: 'symbol-name'}, symbol.description), 
                            React.createElement("span", {className: 'symbol-exchanger'}, 
                                symbol.type, 
                                "-", 
                                symbol.exchange));
                    }) : null)));
    };
    SearchBox.prototype.selectSymbolHandler = function () {
        var _this = this;
        var index = this.state.selectedIndex;
        var symbolInfo = this.state.results[index];
        this.props.onSelect(symbolInfo.symbol);
        if (this.props.autofill) {
            setTimeout(function () {
                _this.refs.input.value = symbolInfo.symbol;
                _this.refs.input.blur();
            }, 300);
        }
    };
    SearchBox.prototype.inputFocosHandler = function () {
        var el = this.refs.input;
        el.selectionStart = 0;
        el.selectionEnd = el.value.length;
        this.setState({
            focus: true,
            results: null,
            selectedIndex: 0,
        });
    };
    SearchBox.prototype.inputBlurHandler = function () {
        var _this = this;
        setTimeout(function () {
            _this.setState({
                focus: false,
                selectedIndex: 0,
            });
        }, 300);
    };
    SearchBox.prototype.inputHandler = function () {
        var el = this.refs.input;
        var keyword = el.value;
        var selectionStart = el.selectionStart;
        el.value = keyword.toUpperCase();
        el.selectionStart = selectionStart;
        if (keyword.length) {
            this.searchSymbols(keyword);
        }
        else {
            this.setState({
                results: null,
                selectedIndex: 0,
            });
        }
    };
    SearchBox.prototype.mouseEnterHandler = function (ev) {
        var index = +ev.currentTarget.dataset.index;
        this.setState({ selectedIndex: index });
    };
    SearchBox.prototype.keyDownHandler = function (ev) {
        var size = this.state.results ? this.state.results.length : 0;
        var index = this.state.selectedIndex;
        switch (ev.keyCode) {
            case 38:
                this.setState({ selectedIndex: index - 1 < 0 ? size - 1 : index - 1 });
                break;
            case 40:
                this.setState({ selectedIndex: (index + 1) % size });
                break;
            case 13:
                this.selectSymbolHandler();
                break;
            default:
        }
    };
    SearchBox.defaultProps = {
        className: '',
        placeholder: '',
        autofill: false,
    };
    SearchBox.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return SearchBox;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchBox;


/***/ }),

/***/ "./src/component/navbar/study/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/navbar/study/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/navbar/study/index.less");
__webpack_require__("./src/style/btn.less");
__webpack_require__("./src/style/popup_menu.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var studyNames = ['MACD', 'KDJ', 'RSI', 'BOLL', 'CCI', 'CR'];
var StudySelector = (function (_super) {
    __extends(StudySelector, _super);
    function StudySelector(props, context) {
        _super.call(this, props, context);
        this._chartLayout = context.chartLayout;
        this.state = {
            showStudySelector: false,
        };
        this.showMoreIndicatorHandler = this.showMoreIndicatorHandler.bind(this);
        this.hideMoreIndicatorHandler = this.hideMoreIndicatorHandler.bind(this);
        this.indicatorSelectHandler = this.indicatorSelectHandler.bind(this);
    }
    StudySelector.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.hideMoreIndicatorHandler);
        document.addEventListener('touchstart', this.hideMoreIndicatorHandler);
    };
    StudySelector.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.hideMoreIndicatorHandler);
        document.removeEventListener('touchstart', this.hideMoreIndicatorHandler);
    };
    StudySelector.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    StudySelector.prototype.render = function () {
        return React.createElement("div", {className: 'chart-indicator-selector chart-btn-group'}, 
            React.createElement("button", {className: 'btn', onClick: this.showMoreIndicatorHandler}, "指标"), 
            this.state.showStudySelector ?
                React.createElement("ul", {className: 'popup-menu', onMouseDown: this.indicatorSelectHandler, onTouchStart: this.indicatorSelectHandler}, studyNames.map(function (studyName) {
                    return React.createElement("li", {key: studyName, "data-value": studyName}, studyName);
                })) : null);
    };
    StudySelector.prototype.showMoreIndicatorHandler = function () {
        this.setState({ showStudySelector: true });
    };
    StudySelector.prototype.hideMoreIndicatorHandler = function (ev) {
        if (this.state.showStudySelector) {
            if (!!ev.touches) {
                ev.preventDefault();
            }
            this.setState({ showStudySelector: false });
        }
    };
    StudySelector.prototype.indicatorSelectHandler = function (ev) {
        if (!!ev.touches) {
            ev.preventDefault();
        }
        this.props.onAddStudy(ev.target.dataset.value);
    };
    StudySelector.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return StudySelector;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StudySelector;


/***/ }),

/***/ "./src/component/sidebar/analyze/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/analyze/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/analyze/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var Analyze = (function (_super) {
    __extends(Analyze, _super);
    function Analyze(props, context) {
        _super.call(this, props, context);
        var chartLayout = context.chartLayout;
        this._chartLayout = chartLayout;
        this.state = {
            showMA: !!chartLayout.readFromLS('chart.forceMA'),
            showPressureSupport: !!chartLayout.readFromLS('chart.showPressureSupport'),
            showGap: !!chartLayout.readFromLS('chart.showGap'),
            showWaveForm: !!chartLayout.readFromLS('chart.showWaveForm'),
            showReverseRelay: !!chartLayout.readFromLS('chart.showReverseRelay'),
            showInflection: !!chartLayout.readFromLS('chart.showInflection'),
        };
        this.toggleHandler = this.toggleHandler.bind(this);
    }
    Analyze.prototype.componentDidMount = function () {
        this._scroller = new IScroll(this.refs.scrollWrapper, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
    };
    Analyze.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    Analyze.prototype.render = function () {
        var _a = this.props, stockInfo = _a.stockInfo, analysisData = _a.analysisData;
        var pressureInfo = analysisData ? analysisData.pressureInfo : null;
        var gapInfo = analysisData ? analysisData.gapInfo : null;
        var _b = this.state, showMA = _b.showMA, showGap = _b.showGap, showPressureSupport = _b.showPressureSupport, showWaveForm = _b.showWaveForm, showReverseRelay = _b.showReverseRelay, showInflection = _b.showInflection;
        var gapLow;
        var gapHigh;
        var price;
        if (gapInfo && stockInfo) {
            price = +stockInfo.price;
            gapLow = gapInfo.l1 > gapInfo.l2 ? gapInfo.l2 : gapInfo.l1;
            gapHigh = gapInfo.l1 > gapInfo.l2 ? gapInfo.l1 : gapInfo.l2;
            if (!('up' in gapInfo)) {
                gapInfo.up = price > gapLow;
            }
            if (gapInfo.up) {
                if (price <= gapLow) {
                    analysisData.gapInfo = null;
                    gapInfo = null;
                }
                else if (price < gapHigh) {
                    gapHigh = price;
                }
            }
            else {
                if (price >= gapHigh) {
                    analysisData.gapInfo = null;
                    gapInfo = null;
                }
                else if (price > gapLow) {
                    gapLow = price;
                }
            }
            if (gapInfo) {
                gapInfo.l1 = gapLow;
                gapInfo.l2 = gapHigh;
            }
        }
        return (React.createElement("div", {className: 'chart-analyze', ref: 'scrollWrapper', style: { height: this.props.height + 'px' }}, 
            React.createElement("div", null, 
                React.createElement("h3", null, "分析功能"), 
                React.createElement("div", {className: 'feature-group ma clearfix'}, 
                    React.createElement("div", {className: 'description'}, "分析时强制显示均线"), 
                    React.createElement("a", {href: 'javascript:;', className: "toggle-btn " + (showMA ? 'on' : ''), "data-type": 'ma', onClick: this.toggleHandler}, 
                        React.createElement("div", {className: 'toggle-tips'}, "在左侧图中展示")
                    )), 
                React.createElement("div", {className: 'feature-group inflection clearfix'}, 
                    React.createElement("div", {className: 'description'}, "显示拐点"), 
                    React.createElement("a", {href: 'javascript:;', className: "toggle-btn " + (showInflection ? 'on' : ''), "data-type": 'inflection', onClick: this.toggleHandler}, 
                        React.createElement("div", {className: 'toggle-tips'}, "在左侧图中展示")
                    )), 
                React.createElement("h4", null, "支撑与压力"), 
                React.createElement("div", {className: 'feature-group support-pressure clearfix'}, 
                    React.createElement("div", {className: 'description'}, 
                        React.createElement("div", {className: 'pressure'}, 
                            React.createElement("label", null, "压力："), 
                            React.createElement("span", null, pressureInfo && pressureInfo.upper_price ? (+pressureInfo.upper_price).toFixed(2) : '--')), 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: 'support'}, 
                            React.createElement("label", null, "支撑："), 
                            React.createElement("span", null, pressureInfo && pressureInfo.upper_price ? (+pressureInfo.lower_price).toFixed(2) : '--'))), 
                    React.createElement("a", {href: 'javascript:;', className: "toggle-btn " + (showPressureSupport ? 'on' : ''), "data-type": 'pressure-support', onClick: this.toggleHandler}, 
                        React.createElement("div", {className: 'toggle-tips'}, "在左侧图中展示")
                    )), 
                React.createElement("h4", null, "跳空与缺口"), 
                React.createElement("div", {className: 'feature-group gap clearfix'}, 
                    React.createElement("div", {className: 'description'}, 
                        gapInfo && stockInfo ?
                            React.createElement("p", null, 
                                React.createElement("label", null, gapInfo.dt), 
                                "  ", 
                                React.createElement("span", {className: gapInfo.up ? 'positive' : 'negative'}, 
                                    gapLow, 
                                    "-", 
                                    gapHigh)) : React.createElement("p", null, "--"), 
                        gapInfo && stockInfo ?
                            React.createElement("p", {className: 'position'}, 
                                "当前价格位于缺口", 
                                gapInfo.up ? '上方' : '下方') : null), 
                    React.createElement("a", {href: 'javascript:;', className: "toggle-btn " + (showGap ? 'on' : ''), "data-type": 'gap', onClick: this.toggleHandler}, 
                        React.createElement("div", {className: 'toggle-tips'}, "在左侧图中展示")
                    )), 
                React.createElement("h4", null, "形态技术分析"), 
                React.createElement("div", {className: 'feature-group form-analyze clearfix'}, 
                    React.createElement("div", {className: 'description'}, 
                        React.createElement("p", {className: 'form-title'}, "波浪形态"), 
                        React.createElement("p", null, "根据艾略特波段理论自动构建的形态，方便确定当前的波浪")), 
                    React.createElement("a", {href: 'javascript:;', className: "toggle-btn " + (showWaveForm ? 'on' : ''), "data-type": 'wave-form', onClick: this.toggleHandler}, 
                        React.createElement("div", {className: 'toggle-tips'}, "在左侧图中展示")
                    )), 
                React.createElement("hr", null), 
                React.createElement("div", {className: 'feature-group form-analyze clearfix'}, 
                    React.createElement("div", {className: 'description'}, 
                        React.createElement("p", {className: 'form-title'}, "反转、中继形态"), 
                        React.createElement("p", null, "自动构建常见的形态，如头肩顶，W底，上升三角形等")), 
                    React.createElement("a", {href: 'javascript:;', className: "toggle-btn " + (showReverseRelay ? 'on' : ''), "data-type": 'reverse-relay-form', onClick: this.toggleHandler}, 
                        React.createElement("div", {className: 'toggle-tips'}, "在左侧图中展示")
                    )))
        ));
    };
    Analyze.prototype.toggleHandler = function (ev) {
        var chartLayout = this._chartLayout;
        var type = ev.currentTarget.dataset.type;
        var isOpen = false;
        var study = null;
        switch (type) {
            case 'ma':
                isOpen = !this.state.showMA;
                chartLayout.saveToLS('chart.forceMA', isOpen);
                if (isOpen) {
                    if (chartLayout.mainDatasource.resolution === 'D') {
                        chartLayout.maProps.forEach(function (prop, i) { return chartLayout.modifyGraph(chartLayout.maStudies[i], { isVisible: prop.isVisible }); });
                    }
                }
                else {
                    if (this.state.showWaveForm || this.state.showReverseRelay) {
                        if (chartLayout.mainDatasource.resolution === 'D') {
                            chartLayout.maStudies.forEach(function (ma) { return chartLayout.modifyGraph(ma, { isVisible: false }); });
                        }
                    }
                }
                this.setState({ showMA: isOpen });
                break;
            case 'inflection':
                isOpen = !this.state.showInflection;
                chartLayout.saveToLS('chart.showInflection', isOpen);
                study = chartLayout.mainChart.studies.filter(function (s) { return s.studyType === 'inflection' || s.studyType === 'inflection2'; });
                if (!!study.length) {
                    chartLayout.removeStudy(chartLayout.mainChart, study[0].id);
                    chartLayout.removeStudy(chartLayout.mainChart, study[1].id);
                }
                else {
                    chartLayout.addStudy('inflection');
                    chartLayout.addStudy('inflection2');
                }
                this.setState({ showInflection: isOpen });
                break;
            case 'pressure-support':
                isOpen = !this.state.showPressureSupport;
                chartLayout.saveToLS('chart.showPressureSupport', isOpen);
                study = chartLayout.mainChart.studies.filter(function (s) { return s.studyType === '压力支撑'; })[0];
                if (!!study) {
                    chartLayout.removeStudy(chartLayout.mainChart, study.id);
                }
                else {
                    chartLayout.addStudy('压力支撑');
                }
                this.setState({ showPressureSupport: isOpen });
                break;
            case 'gap':
                isOpen = !this.state.showGap;
                chartLayout.setGapVisibility(isOpen);
                this.setState({ showGap: isOpen });
                break;
            case 'wave-form':
                isOpen = !this.state.showWaveForm;
                chartLayout.setWaveVisibility(isOpen);
                this.setState({ showWaveForm: isOpen });
                break;
            case 'reverse-relay-form':
                isOpen = !this.state.showReverseRelay;
                chartLayout.setReverseRelayVisibility(isOpen);
                this.setState({ showReverseRelay: isOpen });
                break;
            default:
                break;
        }
    };
    Analyze.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Analyze;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Analyze;


/***/ }),

/***/ "./src/component/sidebar/briefing/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/briefing/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/briefing/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var Briefing = (function (_super) {
    __extends(Briefing, _super);
    function Briefing() {
        _super.apply(this, arguments);
    }
    Briefing.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var curProp = this.props;
        return curProp.stockInfo !== nextProps.stockInfo;
    };
    Briefing.prototype.render = function () {
        var stockInfo = this.props.stockInfo;
        var price = +stockInfo.price;
        var changePrice = +stockInfo.changePrice;
        var changeRate = +stockInfo.changeRate;
        return React.createElement("div", {className: 'chart-sidebar-briefing'}, price !== 0 ?
            React.createElement("div", {className: changePrice > 0 ? 'stock-data positive' :
                changePrice < 0 ? 'stock-data negtive' : 'stock-data'}, 
                React.createElement("span", {className: 'price'}, 
                    price.toFixed(2), 
                    changePrice !== 0 ?
                        React.createElement("svg", {viewBox: '0 0 10 12'}, 
                            React.createElement("g", null, 
                                React.createElement("path", {d: 'M9.6,4.4c0.3,0.3,0.3,0.8,0,1.1C9.5,5.7,9.3,5.7,9.1,5.7S8.7,5.7,8.5,5.5L5.7,2.7v8.5c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8V2.7L1.4,5.5c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1l4.1-4.1C4.5,0.1,4.7,0,4.9,0c0.2,0,0.4,0.1,0.6,0.2L9.6,4.4z'})
                            )
                        ) : null), 
                "  ", 
                changePrice > 0 ? '+' + changePrice.toFixed(2) : changePrice.toFixed(2), 
                "  (", 
                changeRate > 0 ? '+' + (changeRate * 100).toFixed(2) + '%'
                    : (changeRate * 100).toFixed(2) + '%', 
                ")") : React.createElement("div", {className: 'stock-data'}, 
            React.createElement("span", {className: 'price'}, "停牌")
        ));
    };
    return Briefing;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Briefing;


/***/ }),

/***/ "./src/component/sidebar/financing/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/financing/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/financing/index.less");
__webpack_require__("./src/style/table.less");
var React = __webpack_require__("./node_modules/react/react.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var Financing = (function (_super) {
    __extends(Financing, _super);
    function Financing() {
        _super.apply(this, arguments);
    }
    Financing.prototype.componentDidMount = function () {
        this._financingScroll = new IScroll(this.refs.financing, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
        });
    };
    Financing.prototype.componentWillUnmount = function () {
        this._financingScroll.destroy();
    };
    Financing.prototype.componentDidUpdate = function () {
        this._financingScroll.refresh();
    };
    Financing.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var curProp = this.props;
        return curProp.financingInfo !== nextProps.financingInfo;
    };
    Financing.prototype.render = function () {
        var financingInfo = this.props.financingInfo;
        return financingInfo ?
            React.createElement("div", {className: 'financing', ref: 'financing', style: { height: this.props.height + 'px' }}, 
                React.createElement("div", null, 
                    React.createElement("h3", null, "财务信息"), 
                    React.createElement("table", {className: 'indexes-display s-table stripe even left-header'}, 
                        React.createElement("tbody", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", {width: '133'}, "每股收益"), 
                                React.createElement("td", {width: '134'}, 
                                    financingInfo.earning_per_Share, 
                                    "元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "净利润"), 
                                React.createElement("td", null, 
                                    financingInfo.net_income, 
                                    "亿元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "净利润增长率"), 
                                React.createElement("td", null, 
                                    financingInfo.net_income_growth_rate, 
                                    "%")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "营业总收入"), 
                                React.createElement("td", null, 
                                    financingInfo.revenue, 
                                    "亿元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "总收入增长率"), 
                                React.createElement("td", null, 
                                    financingInfo.revenue_growth_rate, 
                                    "%")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "每股净资产"), 
                                React.createElement("td", null, 
                                    financingInfo.book_value_per_share, 
                                    "元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "净资产收益率"), 
                                React.createElement("td", null, 
                                    financingInfo.return_on_Equity, 
                                    "%")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "净资产收益率摊薄"), 
                                React.createElement("td", null, 
                                    financingInfo.return_on_equity_diluted, 
                                    "%")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "资产负债比率"), 
                                React.createElement("td", null, 
                                    financingInfo.asset_liability_ratio, 
                                    "%")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "每股资本公积金"), 
                                React.createElement("td", null, 
                                    financingInfo.capital_surplus_per_share, 
                                    "元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "每股未分配利润"), 
                                React.createElement("td", null, 
                                    financingInfo.retained_earning_per_share, 
                                    "元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "每股经营现金流"), 
                                React.createElement("td", null, 
                                    financingInfo.operating_cash_flow_per_share, 
                                    "元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "经营现金流入"), 
                                React.createElement("td", null, 
                                    financingInfo.operating_cashflow_in, 
                                    "亿元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "经营现金流出"), 
                                React.createElement("td", null, 
                                    financingInfo.operating_cashflow_out, 
                                    "亿元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "经营现金流量净额"), 
                                React.createElement("td", null, 
                                    financingInfo.net_operating_cashflow, 
                                    "亿元")), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "流动比率"), 
                                React.createElement("td", null, financingInfo.currentRatio)), 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "速动比率"), 
                                React.createElement("td", null, financingInfo.quickRatio)))
                    ))
            ) :
            React.createElement("div", {className: 'financing', ref: 'financing', style: { height: this.props.height + 'px' }}, 
                React.createElement("div", {className: 'no-financing-info'}, "非个股无财务信息")
            );
    };
    return Financing;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Financing;


/***/ }),

/***/ "./src/component/sidebar/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/index.less");
__webpack_require__("./src/style/btn.less");
__webpack_require__("./src/style/popup_menu.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var pollmanager_1 = __webpack_require__("./src/component/sidebar/pollmanager.ts");
var realtime_1 = __webpack_require__("./src/component/sidebar/realtime/index.tsx");
var market_1 = __webpack_require__("./src/component/sidebar/market/index.tsx");
var financing_1 = __webpack_require__("./src/component/sidebar/financing/index.tsx");
var plates_1 = __webpack_require__("./src/component/sidebar/plates/index.tsx");
var briefing_1 = __webpack_require__("./src/component/sidebar/briefing/index.tsx");
var analyze_1 = __webpack_require__("./src/component/sidebar/analyze/index.tsx");
var STOCK_PANEL_HEIGHT = 44;
var tabsConfig = [
    '实时看盘',
    '大盘概况',
    '财务信息',
    '所属板块',
    '分析功能',
];
var tabsIcon = [
    React.createElement("svg", {viewBox: '0 0 20 20'}, 
        React.createElement("g", null, 
            React.createElement("path", {d: 'M10,4c-6,0-9,6-9,6s3,6,9,6s9-6,9-6S16,4,10,4z M10,14.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5s4.5,2,4.5,4.5S12.5,14.5,10,14.5z'}), 
            React.createElement("path", {d: 'M12,9c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7C10.9,7.1,10.5,7,10,7c-1.7,0-3,1.3-3,3c0,0.3,0,0.6,0.1,0.9C7.4,10.4,7.9,10,8.5,10c0.8,0,1.5,0.7,1.5,1.5c0,0.6-0.4,1.1-0.9,1.4C9.4,13,9.7,13,10,13c1.7,0,3-1.3,3-3c0-0.5-0.1-0.9-0.3-1.3C12.5,8.9,12.3,9,12,9z'}))
    ),
    React.createElement("svg", {viewBox: '0 0 20 20'}, 
        React.createElement("g", null, 
            React.createElement("path", {d: 'M16.7,2.7h1.8v14.1h-1.8V2.7z M13.1,3.2l-0.2,0.1c-0.3,0.1-0.7,0-0.8-0.3c-0.1-0.1-0.1-0.3,0-0.4c0.1-0.1,0.2-0.3,0.4-0.3l2.8-0.9l0.3,2.5c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.3,0.2-0.5,0.2c0,0,0,0-0.1,0c-0.3,0-0.6-0.2-0.6-0.5l0-0.4c-3.2,4.4-10.6,9.2-10.9,9.4c-0.1,0.1-0.2,0.1-0.4,0.1c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.2-0.1-0.4c0-0.1,0.1-0.3,0.2-0.4C2.7,12.2,10,7.5,13.1,3.2z M15.2,5.9v11h-1.8v-11H15.2z M12.1,9.1v7.7h-1.8V9.1H12.1z M8.9,12.5v4.3H7.1v-4.3H8.9z M5.5,14.2v2.6H3.7v-2.6H5.5z M19,18.5H1v-1.3h18L19,18.5L19,18.5z'})
        )
    ),
    React.createElement("svg", {viewBox: '0 0 20 20'}, 
        React.createElement("g", null, 
            React.createElement("path", {d: 'M14.3,5.9l3.8,1l1-3.8l-0.7-0.2l-0.6,2.4C16.1,2.7,13.2,1,10,1c-5,0-9,4-9,9s4,9,9,9c3.3,0,6.2-1.8,7.8-4.5l-0.7-0.4c-1.4,2.4-4.1,4.1-7.1,4.1c-4.6,0-8.3-3.7-8.3-8.3S5.4,1.7,10,1.7c3.1,0,5.7,1.7,7.2,4.1l-2.7-0.7L14.3,5.9z'}), 
            React.createElement("path", {d: 'M10.4,14v-0.7c0.7,0,1.1-0.2,1.5-0.6c0.4-0.3,0.6-0.8,0.6-1.3c0-0.6-0.2-1-0.5-1.3c-0.3-0.3-0.8-0.5-1.6-0.7h0V7.7c0.5,0.1,0.9,0.2,1.3,0.5l0.6-0.8c-0.6-0.4-1.3-0.7-2-0.7V6.2H9.8v0.5c-0.6,0-1.1,0.2-1.5,0.6C8,7.6,7.8,8.1,7.8,8.6c0,0.5,0.2,1,0.5,1.2c0.3,0.3,0.8,0.5,1.5,0.7v1.8c-0.5-0.1-1.1-0.3-1.6-0.8l-0.7,0.8c0.7,0.6,1.5,1,2.3,1V14L10.4,14L10.4,14zM10.4,10.7c0.4,0.1,0.6,0.2,0.8,0.3c0.1,0.2,0.2,0.3,0.2,0.5s-0.1,0.4-0.3,0.5c-0.2,0.2-0.4,0.2-0.7,0.3V10.7z M9.1,9C9,8.9,8.9,8.7,8.9,8.5C8.9,8.3,9,8.1,9.1,8c0.2-0.2,0.4-0.2,0.7-0.3v1.6C9.4,9.3,9.2,9.1,9.1,9z'}))
    ),
    React.createElement("svg", {viewBox: '0 0 20 20'}, 
        React.createElement("g", null, 
            React.createElement("path", {d: 'M10.6,10.7H1c0,4.1,4.2,8.4,9,8.4c5,0,9-4,9-9c0-1.4-0.3-2.8-0.9-4L10.6,10.7z'}), 
            React.createElement("path", {d: 'M6.3,1.6c0.1,0.2,4.2,7.2,4.2,7.2l6.9-4C15,1.2,10.3-0.1,6.3,1.6z M15.3,4.5l-4.2,2.4c-0.9-1.5-1.9-3.3-2.6-4.5C9,2.3,9.5,2.3,10,2.3C12,2.3,13.9,3.1,15.3,4.5z'}), 
            React.createElement("path", {d: 'M5,2.4C2.6,4,1.2,6.6,1,9.3l8,0L5,2.4z M4.6,4.5l1.9,3.3l-3.9,0C3,6.6,3.7,5.5,4.6,4.5z'}))
    ),
    React.createElement("svg", {viewBox: '0 0 18 17.88'}, 
        React.createElement("g", null, 
            React.createElement("path", {d: 'M15.74,10.51A7.12,7.12,0,0,1,2.46,12.2a2.74,2.74,0,0,1-.75.12A2.75,2.75,0,0,1,.39,12a8.93,8.93,0,0,0,17.22-1.63,2.61,2.61,0,0,1-1.87.17Z'}), 
            React.createElement("path", {d: 'M2,6.8A7.12,7.12,0,0,1,15,5.47a2.55,2.55,0,0,1,1.84-.36A8.93,8.93,0,0,0,0,7.37a2.75,2.75,0,0,1,1.71-.61Z'}), 
            React.createElement("path", {d: 'M1.71,11.11a1.56,1.56,0,0,0,1.3-.7H5.84L7,13.73a.91.91,0,0,0,.81.6h0a.9.9,0,0,0,.82-.53l2.87-6.24.45.72a.88.88,0,0,0,.78.42h2.3a1.57,1.57,0,1,0,.1-1.81H13.3L12.23,5.18a.91.91,0,0,0-1.59.1L8,11,7.33,9.19a.91.91,0,0,0-.85-.6H2.95a1.56,1.56,0,1,0-1.24,2.51Z'}))
    ),
];
var Sidebar = (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar(props, context) {
        _super.call(this, props, context);
        this._data = {};
        this._chartLayout = context.chartLayout;
        this.state = {
            popUpOprList: false,
        };
        this.onDataHandler = this.onDataHandler.bind(this);
        this.switchTabPage = this.switchTabPage.bind(this);
        this.symbolChangeHandler = this.symbolChangeHandler.bind(this);
        this.foldingBtnClickHandler = this.foldingBtnClickHandler.bind(this);
        this.showMoreOprHandler = this.showMoreOprHandler.bind(this);
        this.clickOprHandler = this.clickOprHandler.bind(this);
        this.hideOprListHandler = this.hideOprListHandler.bind(this);
    }
    Sidebar.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    Sidebar.prototype.componentDidMount = function () {
        var chartLayout = this._chartLayout;
        var symbolInfo = chartLayout.mainDatasource.symbolInfo;
        this._pollManager = new pollmanager_1.default(symbolInfo, this.props.activeIndex);
        this._pollManager.addListener('data', this.onDataHandler);
        chartLayout.addListener('symbol_change', this.symbolChangeHandler);
        document.addEventListener('mousedown', this.hideOprListHandler);
        document.addEventListener('touchstart', this.hideOprListHandler);
        this._pollManager.start();
    };
    Sidebar.prototype.componentWillUnmount = function () {
        var chartLayout = this._chartLayout;
        this._pollManager.removeListener('data', this.onDataHandler);
        chartLayout.removeListener('symbol_change', this.symbolChangeHandler);
        document.removeEventListener('mousedown', this.hideOprListHandler);
        document.removeEventListener('touchstart', this.hideOprListHandler);
        this._pollManager.stop();
        this._pollManager = null;
    };
    Sidebar.prototype.componentWillReceiveProps = function (nextProps) {
        var chartLayout = this._chartLayout;
        var newIndex = nextProps.activeIndex;
        if (!nextProps.folded && this.props.activeIndex !== newIndex) {
            this._pollManager.tabIndex = newIndex;
        }
        // 如果侧边栏已经收起状态，则先展开侧边栏
        if (nextProps.folded) {
            chartLayout.saveToLS('qchart.sidebar.folded', false);
        }
        chartLayout.saveToLS('qchart.sidebar.activeIndex', newIndex);
    };
    Sidebar.prototype.render = function () {
        var _this = this;
        var chartLayout = this._chartLayout;
        var height = this.props.height - STOCK_PANEL_HEIGHT;
        var _a = this._data, stockInfo = _a.stockInfo, capitalFlowInfo = _a.capitalFlowInfo, realtimeTools = _a.realtimeTools, indexesInfo = _a.indexesInfo, financingInfo = _a.financingInfo, plates = _a.plates, nonRealtimeTools = _a.nonRealtimeTools, analysisData = _a.analysisData;
        var tabPage = null;
        switch (this.props.activeIndex) {
            case 0:
                tabPage = stockInfo ?
                    React.createElement(realtime_1.default, {stockInfo: stockInfo, capitalFlowInfo: capitalFlowInfo, height: height}) : null;
                break;
            case 1:
                tabPage = realtimeTools && indexesInfo ?
                    React.createElement(market_1.default, {height: height, realtimeTools: realtimeTools, indexesInfo: indexesInfo, nonRealtimeTools: nonRealtimeTools}) : null;
                break;
            case 2:
                tabPage = React.createElement(financing_1.default, {height: height, financingInfo: financingInfo});
                break;
            case 3:
                tabPage = React.createElement(plates_1.default, {height: height, plates: plates});
                break;
            case 4:
                tabPage = React.createElement(analyze_1.default, {height: height, stockInfo: stockInfo, analysisData: analysisData});
            default:
        }
        return React.createElement("div", {className: "chart-sidebar " + (this.props.folded ? 'folded' : ''), style: {
            height: this.props.height,
            width: this.props.width,
        }}, 
            !this.props.folded && stockInfo ?
                React.createElement(briefing_1.default, {symbolInfo: chartLayout.mainDatasource.symbolInfo, stockInfo: stockInfo}) : null, 
            React.createElement("div", {className: 'data-window-tabs'}, 
                React.createElement("ul", {className: 'tab-list'}, 
                    React.createElement("a", {href: 'javascript:;', className: 'btn btn-more', onClick: this.showMoreOprHandler}, 
                        React.createElement("i", null)
                    ), 
                    this.state.popUpOprList ?
                        React.createElement("ul", {className: 'popup-menu', onMouseDown: this.clickOprHandler, onTouchStart: this.clickOprHandler}, this.state.isSymbolAdded ?
                            React.createElement("li", {"data-opr": 'delete-self-select'}, "删除自选股") :
                            React.createElement("li", {"data-opr": 'add-self-select'}, "加入自选股")) : null, 
                    tabsConfig.map(function (tab, i) {
                        return React.createElement("li", {key: i, className: !_this.props.folded && _this.props.activeIndex === i ? "active" : '', title: tab, "data-index": i, onClick: _this.switchTabPage}, tabsIcon[i]);
                    })), 
                React.createElement("div", {className: 'data-page-list'}, !this.props.folded && tabPage ? tabPage : null)), 
            React.createElement("a", {href: 'javascript:;', className: "sidebar-folding-btn " + (this.props.folded ? 'folded' : ''), onClick: this.foldingBtnClickHandler}, 
                React.createElement("span", null)
            ));
    };
    Sidebar.prototype.onDataHandler = function (data) {
        this._data = data;
        this.forceUpdate();
    };
    Sidebar.prototype.foldingBtnClickHandler = function () {
        var chartLayout = this._chartLayout;
        var folded = !this.props.folded;
        chartLayout.saveToLS('qchart.sidebar.folded', folded);
        if (this.props.onChange) {
            this.props.onChange(folded, this.props.activeIndex);
        }
    };
    Sidebar.prototype.showMoreOprHandler = function () {
        var chartLayout = this._chartLayout;
        var symbolInfo = chartLayout.mainDatasource.symbolInfo;
        var selfSelectList = chartLayout.readFromLS('qchart.selfselectlist') || [];
        this.setState({ popUpOprList: true, isSymbolAdded: _.findIndex(selfSelectList, { symbol: symbolInfo.symbol }) !== -1 });
    };
    Sidebar.prototype.hideOprListHandler = function (ev) {
        if (this.state.popUpOprList) {
            if (!!ev.touches) {
                ev.preventDefault();
            }
            this.setState({ popUpOprList: false });
        }
    };
    Sidebar.prototype.clickOprHandler = function (ev) {
        var opr = ev.target.dataset.opr;
        var chartLayout = this._chartLayout;
        var symbolInfo = chartLayout.mainDatasource.symbolInfo;
        if (opr === 'add-self-select') {
            chartLayout.addSelfSelect(symbolInfo);
        }
        else if (opr === 'delete-self-select') {
            chartLayout.deleteSelfSelect(symbolInfo);
        }
    };
    Sidebar.prototype.switchTabPage = function (ev) {
        var newIndex = +ev.currentTarget.dataset.index;
        var folded = this.props.folded;
        // 如果已经激活的tab再次点击，则收起侧边栏
        if (!folded && this.props.activeIndex === newIndex) {
            this.foldingBtnClickHandler();
            return;
        }
        if (this.props.onChange) {
            this.props.onChange(false, newIndex);
        }
    };
    Sidebar.prototype.symbolChangeHandler = function (symbolInfo) {
        this._pollManager.symbolInfo = symbolInfo;
        this._pollManager.restart();
    };
    Sidebar.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Sidebar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sidebar;


/***/ }),

/***/ "./src/component/sidebar/market/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/market/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/market/index.less");
__webpack_require__("./src/style/table.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var Indexes = (function (_super) {
    __extends(Indexes, _super);
    function Indexes(props, context) {
        _super.call(this, props, context);
        this._chartLayout = context.chartLayout;
        this.state = {
            highlightFinished: true,
        };
        this.selectIndex = this.selectIndex.bind(this);
    }
    Indexes.prototype.componentDidMount = function () {
        this._scroller = new IScroll(this.refs.scrollWrapper, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
        });
    };
    Indexes.prototype.componentWillUnmount = function () {
        clearTimeout(this._highLightTimeout);
        this._scroller.destroy();
    };
    Indexes.prototype.componentDidUpdate = function () {
        this._scroller.refresh();
    };
    Indexes.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (!_.isEqual(nextProps.indexesInfo, this.props.indexesInfo)) {
            this.state.highlightFinished = false;
            this._highLightTimeout = setTimeout(function () { return _this.setState({ highlightFinished: true }); }, 500);
        }
    };
    Indexes.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    Indexes.prototype.render = function () {
        var _this = this;
        var indexesInfo = this.props.indexesInfo;
        var oldIndexesInfo = this._oldIndexesInfo;
        var realtimeTools = this.props.realtimeTools;
        var nonRealtimeTools = this.props.nonRealtimeTools;
        var mutations = {};
        var classList = {};
        if (oldIndexesInfo) {
            indexesInfo.forEach(function (index, i) {
                return mutations[index.code] = oldIndexesInfo[i].price !== index.price ? 'mutation' : '';
            });
        }
        this._oldIndexesInfo = indexesInfo;
        if (indexesInfo) {
            indexesInfo.forEach(function (index) {
                return classList[index.code] =
                    +index.price_change > 0 ? 'positive' :
                        +index.price_change < 0 ? 'negtive' : '';
            });
        }
        if (realtimeTools) {
            Object.keys(realtimeTools)
                .forEach(function (key) {
                return classList[key] =
                    realtimeTools[key][1] === 'red' ? 'positive' :
                        realtimeTools[key][1] === 'green' ? 'negtive' : '';
            });
        }
        return React.createElement("div", {className: 'chart-market', ref: 'scrollWrapper', style: { height: this.props.height + 'px' }}, 
            React.createElement("div", null, 
                indexesInfo ?
                    React.createElement("div", null, 
                        React.createElement("h3", null, "股指"), 
                        React.createElement("table", {className: 'index-table s-table stripe even left-header'}, 
                            React.createElement("tbody", null, indexesInfo.map(function (index) {
                                return React.createElement("tr", {key: index.code, "data-symbol": index.code, onClick: _this.selectIndex}, 
                                    React.createElement("th", {width: '70'}, index.name), 
                                    React.createElement("td", {width: '70', className: classList[index.code] + " " + (mutations[index.code] || '')}, 
                                        React.createElement("span", null, index.price)
                                    ), 
                                    React.createElement("td", {width: '127', className: classList[index.code]}, 
                                        (index.price_change > 0 ? '+' : '') + (+index.price_change).toFixed(2), 
                                        "(", 
                                        (index.p_change > 0 ? '+' : '') + (index.p_change * 100).toFixed(2), 
                                        "%)"));
                            }))
                        )) : null, 
                realtimeTools ?
                    React.createElement("div", null, 
                        React.createElement("h3", null, "实时数据"), 
                        React.createElement("table", {className: 's-table stripe even left-header'}, 
                            React.createElement("tbody", null, 
                                React.createElement("tr", null, 
                                    React.createElement("th", {width: '157'}, "沪股通资金流入"), 
                                    React.createElement("td", {width: '110', className: classList.hugutong}, realtimeTools.hugutong[0])), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "涨跌幅超过5%个股数"), 
                                    React.createElement("td", null, 
                                        React.createElement("span", {className: 'positive'}, realtimeTools.goUpStaying[0]), 
                                        "/", 
                                        React.createElement("span", {className: 'negtive'}, realtimeTools.fallStaying[0]))), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "急涨急跌股数"), 
                                    React.createElement("td", {className: classList.shortTermMove}, realtimeTools.shortTermMove[0])))
                        )) : null, 
                nonRealtimeTools ?
                    React.createElement("div", null, 
                        React.createElement("h3", null, "资金和人气"), 
                        React.createElement("table", {className: 's-table stripe even left-header nonrealtime-tabe'}, 
                            React.createElement("tbody", null, 
                                React.createElement("tr", null, 
                                    React.createElement("th", {width: '130'}, "上证压力支撑"), 
                                    React.createElement("td", {width: '137'}, 
                                        React.createElement("span", {className: 'positive'}, nonRealtimeTools.pressure), 
                                        "/", 
                                        React.createElement("span", {className: 'negtive'}, nonRealtimeTools.support))), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "央行资金"), 
                                    React.createElement("td", {className: nonRealtimeTools.bankCapital[1] === 'red' ? 'positive' : 'negtive'}, nonRealtimeTools.bankCapital[0])), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "解禁市值"), 
                                    React.createElement("td", {className: 'negtive'}, nonRealtimeTools.liftBanCapitalisation)), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "融资余额"), 
                                    React.createElement("td", {className: 'financing-balance'}, 
                                        nonRealtimeTools.financingBalance, 
                                        " ", 
                                        React.createElement("span", {className: nonRealtimeTools.financingBalanceChange[1] === 'red' ? 'positive' : 'negtive'}, 
                                            nonRealtimeTools.financingBalanceChange[0], 
                                            React.createElement("svg", {viewBox: '0 0 10 12'}, 
                                                React.createElement("g", null, 
                                                    React.createElement("path", {d: 'M9.6,4.4c0.3,0.3,0.3,0.8,0,1.1C9.5,5.7,9.3,5.7,9.1,5.7S8.7,5.7,8.5,5.5L5.7,2.7v8.5c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8V2.7L1.4,5.5c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1l4.1-4.1C4.5,0.1,4.7,0,4.9,0c0.2,0,0.4,0.1,0.6,0.2L9.6,4.4z'})
                                                )
                                            )))), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "机构资金"), 
                                    React.createElement("td", {className: nonRealtimeTools.institutionCapital[1] === 'red' ? 'positive' : 'negtive'}, nonRealtimeTools.institutionCapital[0])), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "投资者资金"), 
                                    React.createElement("td", {className: nonRealtimeTools.investerCapital[1] === 'red' ? 'positive' : 'negtive'}, nonRealtimeTools.investerCapital[0])), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "新增投资者"), 
                                    React.createElement("td", {className: 'positive'}, nonRealtimeTools.newInvester)), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "交易投资者"), 
                                    React.createElement("td", {className: 'positive'}, nonRealtimeTools.tradingInvester)), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "搜索人气"), 
                                    React.createElement("td", {className: 'positive'}, nonRealtimeTools.searchSentiment)), 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "股吧人气"), 
                                    React.createElement("td", {className: 'positive'}, nonRealtimeTools.stockForumSentiment)))
                        )) : null)
        );
    };
    Indexes.prototype.selectIndex = function (ev) {
        this._chartLayout.setSymbol(ev.currentTarget.dataset.symbol);
    };
    Indexes.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Indexes;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Indexes;


/***/ }),

/***/ "./src/component/sidebar/plates/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/plates/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/plates/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var Plates = (function (_super) {
    __extends(Plates, _super);
    function Plates() {
        _super.call(this);
        this.timer = null;
        this.state = {
            activeIndex: -1,
            stocks: null,
        };
        this.selectPlate = this.selectPlate.bind(this);
    }
    Plates.prototype.componentDidMount = function () {
        this._platesScroll = new IScroll(this.refs.plates, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
        });
    };
    Plates.prototype.componentWillUnmount = function () {
        this._platesScroll.destroy();
        this._platesScroll = null;
        this.cancelStockListTimer();
    };
    Plates.prototype.componentDidUpdate = function () {
        this._platesScroll.refresh();
    };
    Plates.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var curProp = this.props;
        var curState = this.state;
        return curProp.plates !== nextProps.plates ||
            curProp.height !== nextProps.height ||
            curState.stocks !== nextState.stocks ||
            curState.activeIndex !== nextState.activeIndex;
    };
    Plates.prototype.render = function () {
        var _this = this;
        var plates = this.props.plates;
        return plates ?
            React.createElement("div", {className: 'plates', ref: 'plates', style: { height: this.props.height + 'px' }}, 
                React.createElement("div", null, 
                    React.createElement("h3", null, "所属板块"), 
                    React.createElement("ul", {className: 'plate-list'}, plates
                        .map(function (plate, i) {
                        return React.createElement("li", {key: plate.n, className: _this.state.activeIndex === i ? 'active' : ''}, 
                            React.createElement("h4", {"data-index": i, "data-id": plate.bk_id, onClick: _this.selectPlate}, plate.n), 
                            _this.state.activeIndex === i ? React.createElement("ul", {className: 'stocks-in-same-plate'}, _this.state.stocks ? _this.state.stocks.map(function (stockInfo) {
                                var clazzName = stockInfo.p_change > 0 ? 'positive' : stockInfo.p_change < 0 ? 'negtive' : '';
                                return React.createElement("li", {key: stockInfo.c}, 
                                    React.createElement("span", {className: 'stock-name'}, 
                                        React.createElement("b", null, stockInfo.n), 
                                        React.createElement("i", null, stockInfo.c)), 
                                    React.createElement("span", {className: clazzName + ' price'}, stockInfo.price), 
                                    React.createElement("span", {className: clazzName + ' change-rate'}, 
                                        stockInfo.p_change > 0 ? '+' : '', 
                                        (stockInfo.p_change * 100).toFixed(2), 
                                        "%"));
                            }) : null) : null);
                    })))
            ) :
            React.createElement("div", {className: 'plates', ref: 'plates', style: { height: this.props.height + 'px' }}, 
                React.createElement("div", {className: 'no-plates'}, "非个股无板块信息")
            );
    };
    Plates.prototype.selectPlate = function (ev) {
        if (ev.touches) {
            ev.preventDefault();
        }
        var index = +ev.target.dataset.index;
        var plateId = ev.target.dataset.id;
        if (index === this.state.activeIndex) {
            this.cancelStockListTimer();
            this.setState({ activeIndex: -1 });
        }
        else {
            this.loadStockList(plateId);
            this.setState({
                activeIndex: index,
                stocks: null,
            });
        }
    };
    Plates.prototype.loadStockList = function (plateId) {
        var _this = this;
        this.cancelStockListTimer();
        datasource_1.getStockListByPlateId(plateId)
            .then(function (data) {
            var reflushinter = data.data.intver * 1000;
            _this.setState({
                stocks: data.data.list,
            });
            _this.timer = reflushinter ? setTimeout(function () { return _this.loadStockList(plateId); }, reflushinter) : -1;
        });
    };
    Plates.prototype.cancelStockListTimer = function () {
        clearTimeout(this.timer);
    };
    return Plates;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Plates;


/***/ }),

/***/ "./src/component/sidebar/pollmanager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventEmitter = __webpack_require__("./node_modules/eventemitter3/index.js");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var RETRY_DELAY = 10000;
var PollManager = (function (_super) {
    __extends(PollManager, _super);
    function PollManager(symbolInfo, tabIndex) {
        if (tabIndex === void 0) { tabIndex = 0; }
        _super.call(this);
        this._timers = {};
        this._data = {};
        this._symbolInfo = symbolInfo;
        this._tabIndex = tabIndex;
        this.pollStockInfo = this.pollStockInfo.bind(this);
        this.pollCapitalFlow = this.pollCapitalFlow.bind(this);
        this.pollIndexesInfo = this.pollIndexesInfo.bind(this);
        this.pollRealtimeTools = this.pollRealtimeTools.bind(this);
        this.getNonRealtimeTools = this.getNonRealtimeTools.bind(this);
        this.getAnalysisData = this.getAnalysisData.bind(this);
    }
    Object.defineProperty(PollManager.prototype, "symbolInfo", {
        get: function () {
            return this._symbolInfo;
        },
        set: function (symbolInfo) {
            this._symbolInfo = symbolInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PollManager.prototype, "tabIndex", {
        set: function (tabIndex) {
            if (tabIndex === this._tabIndex) {
                return;
            }
            switch (this._tabIndex) {
                case 0:
                    // clearTimeout(this._timers.stockInfo)
                    clearTimeout(this._timers.capitalFlowInfo);
                    break;
                case 1:
                    clearTimeout(this._timers.indexesInfo);
                    clearTimeout(this._timers.realtimeTools);
                    clearTimeout(this._timers.nonrealtimeTools);
                    break;
                case 2:
                    clearTimeout(this._timers.financingInfo);
                    break;
                case 3:
                    clearTimeout(this._timers.plates);
                    break;
                case 4:
                    clearTimeout(this._timers.analysis);
                    break;
                default:
            }
            this._tabIndex = tabIndex;
            switch (tabIndex) {
                case 0:
                    if (!this._timers.capitalFlowInfo) {
                        if (this.symbolInfo.type === 'stock') {
                            this.pollCapitalFlow();
                        }
                    }
                    break;
                case 1:
                    if (!this._timers.indexesInfo) {
                        this.pollIndexesInfo();
                    }
                    if (!this._timers.realtimeTools) {
                        this.pollRealtimeTools();
                    }
                    if (!this._timers.nonrealtimeTools && !this._data.nonRealtimeTools) {
                        this.getNonRealtimeTools();
                    }
                    break;
                case 2:
                    if (this._symbolInfo.type === 'stock' && !this._data.financingInfo) {
                        this.getFinancingInfo();
                    }
                    break;
                case 3:
                    if (this._symbolInfo.type === 'stock' && !this._data.plates) {
                        this.getPlates();
                    }
                    break;
                case 4:
                    if (!this._timers.analysis) {
                        this.getAnalysisData();
                    }
                    break;
                default:
            }
        },
        enumerable: true,
        configurable: true
    });
    PollManager.prototype.start = function () {
        this.pollStockInfo();
        switch (this._tabIndex) {
            case 0:
                if (this.symbolInfo.type === 'stock') {
                    this.pollCapitalFlow();
                }
                break;
            case 1:
                this.pollIndexesInfo();
                this.pollRealtimeTools();
                this.getNonRealtimeTools();
                break;
            case 2:
                this.getFinancingInfo();
                break;
            case 3:
                this.getPlates();
                break;
            case 4:
                this.getAnalysisData();
                break;
            default:
                break;
        }
    };
    PollManager.prototype.restart = function () {
        this.stop();
        this.start();
    };
    PollManager.prototype.stop = function () {
        var _this = this;
        Object.keys(this._timers).forEach(function (key) { return clearTimeout(_this._timers[key]); });
        this._data = {};
        this._timers = {};
    };
    PollManager.prototype.pollStockInfo = function () {
        var _this = this;
        datasource_1.getStockInfo(this._symbolInfo.symbol)
            .then(function (data) {
            var ds = data.data.stock_info;
            var stockInfo = {
                open: ds.open,
                high: ds.high,
                low: ds.low,
                preClose: ds.pre_close,
                price: ds.price,
                changeRate: ds.p_change,
                changePrice: ds.price_change,
                amount: ds.amount,
                volume: ds.volume,
                turnover: ds.turnover,
                amplitude: ds.zf,
                inVol: ds.invol,
                outVol: ds.outvol,
                selling: ds.a5_p ? [
                    [ds.a5_p, ds.a5_v],
                    [ds.a4_p, ds.a4_v],
                    [ds.a3_p, ds.a3_v],
                    [ds.a2_p, ds.a2_v],
                    [ds.a1_p, ds.a1_v],
                ] : null,
                buying: ds.b1_p ? [
                    [ds.b1_p, ds.b1_v],
                    [ds.b2_p, ds.b2_v],
                    [ds.b3_p, ds.b3_v],
                    [ds.b4_p, ds.b4_v],
                    [ds.b5_p, ds.b5_v],
                ] : null,
                ticks: data.data.ticks_list,
            };
            _this._data.stockInfo = stockInfo;
            _this._timers.stockInfo = data.data.reflush_time ? setTimeout(_this.pollStockInfo, data.data.reflush_time * 1000) : -1;
            _this.emit('data', _this._data);
        })
            .catch(function () { return _this._timers.stockInfo = setTimeout(_this.pollStockInfo, RETRY_DELAY); });
    };
    PollManager.prototype.pollCapitalFlow = function () {
        var _this = this;
        if (this._symbolInfo.type !== 'stock' || this._tabIndex !== 0) {
            this._timers.capitalFlowInfo = null;
            return;
        }
        datasource_1.getCapitalFlow(this._symbolInfo.symbol)
            .then(function (data) {
            data = data.data;
            var barChartData = data.map(function (d) { return (d.mainIn - d.mainOut) / 1E4; }).reverse();
            data = data[0];
            var retailIn = data.retailIn / 1E4;
            var retailOut = data.retailOut / 1E4;
            var mainIn = data.mainIn / 1E4;
            var mainOut = data.mainOut / 1E4;
            var donutChartData = [retailIn, mainIn, mainOut, retailOut];
            var chartData = {
                barChartData: barChartData,
                donutChartData: donutChartData,
            };
            _this._data.capitalFlowInfo = chartData;
            _this._timers.capitalFlowInfo = setTimeout(_this.pollCapitalFlow, 3 * 60 * 1000);
            _this.emit('data', _this._data);
        })
            .catch(function () {
            _this._timers.capitalFlowInfo = setTimeout(_this.pollCapitalFlow, RETRY_DELAY);
        });
    };
    PollManager.prototype.pollIndexesInfo = function () {
        var _this = this;
        if (this._tabIndex !== 1) {
            this._timers.indexesInfo = null;
            return;
        }
        datasource_1.getIndexesInfo()
            .then(function (data) {
            var reflushinter = data.data.intver * 1000;
            var indexesInfo = data.data.list;
            _this._data.indexesInfo = indexesInfo;
            _this._timers.indexesInfo = reflushinter ? setTimeout(_this.pollIndexesInfo, reflushinter) : -1;
            _this.emit('data', _this._data);
        })
            .catch(function () {
            _this._timers.indexesInfo = setTimeout(_this.pollIndexesInfo, RETRY_DELAY);
        });
    };
    PollManager.prototype.pollRealtimeTools = function () {
        var _this = this;
        if (this._tabIndex !== 1) {
            this._timers.realtimeTools = null;
            return;
        }
        datasource_1.getRealtimeTools()
            .then(function (data) {
            data = data.data;
            var clzReg = /class='(.*?)'/;
            var innerTextReg = />(.*?)</;
            var upAndFallStaying = data.zhangdieting.split('/<');
            var realtimeTools = {
                hugutong: [innerTextReg.exec(data.hugutong)[1], clzReg.exec(data.hugutong)[1]],
                shortTermMove: [innerTextReg.exec(data.jzjd)[1], clzReg.exec(data.jzjd)[1]],
                goUpStaying: [innerTextReg.exec(upAndFallStaying[0])[1], clzReg.exec(upAndFallStaying[0])[1]],
                fallStaying: [innerTextReg.exec(upAndFallStaying[1])[1], clzReg.exec(upAndFallStaying[1])[1]],
            };
            _this._data.realtimeTools = realtimeTools;
            _this._timers.realtimeTools = data.flush_time ? setTimeout(_this.pollRealtimeTools, data.flush_time * 1000) : -1;
            _this.emit('data', _this._data);
        })
            .catch(function () {
            _this._timers.realtimeTools = setTimeout(_this.pollRealtimeTools, RETRY_DELAY);
        });
    };
    PollManager.prototype.getFinancingInfo = function () {
        var _this = this;
        if (this._symbolInfo.type !== 'stock') {
            return;
        }
        datasource_1.getFinancingInfo(this._symbolInfo.symbol)
            .then(function (data) {
            _this._data.financingInfo = data.data;
            _this.emit('data', _this._data);
        })
            .catch(function () {
            _this._timers.financingInfo = setTimeout(_this.getFinancingInfo, RETRY_DELAY);
        });
    };
    PollManager.prototype.getPlates = function () {
        var _this = this;
        if (this._symbolInfo.type !== 'stock') {
            return;
        }
        datasource_1.getPlatesBySymbol(this._symbolInfo.symbol)
            .then(function (data) {
            _this._data.plates = data.data.bk_list;
            _this.emit('data', _this._data);
        })
            .catch(function () {
            _this._timers.plates = setTimeout(_this.getPlates, RETRY_DELAY);
        });
    };
    PollManager.prototype.getNonRealtimeTools = function () {
        var _this = this;
        datasource_1.getNonrealtimeTools()
            .then(function (data) {
            var clzReg = /class="(.*?)"/;
            var tagReg = /<.*?>/g;
            var pressureStrs = data.data.pressure_str.split(/\/(?=\<)/);
            var financingStrs = data.data.rzInfo_str.split('\&nbsp;');
            data = data.data;
            _this._data.nonRealtimeTools = {
                bankCapital: [data.bankInfo_str.replace(tagReg, ''), clzReg.exec(data.bankInfo_str)[1]],
                stockForumSentiment: data.guba_str.replace(tagReg, ''),
                searchSentiment: data.search_str.replace(tagReg, ''),
                institutionCapital: [data.jgInfo_str.replace(tagReg, ''), clzReg.exec(data.jgInfo_str)[1]],
                investerCapital: [data.zijin_str.replace(tagReg, ''), clzReg.exec(data.zijin_str)[1]],
                tradingInvester: data.jiaoyi_str.replace(tagReg, ''),
                liftBanCapitalisation: data.jiejingInfo_str.replace(tagReg, ''),
                support: pressureStrs[1].replace(tagReg, ''),
                pressure: pressureStrs[0].replace(tagReg, ''),
                financingBalance: financingStrs[0],
                financingBalanceChange: [financingStrs[1].replace(tagReg, ''), clzReg.exec(financingStrs[1])[1]],
                newInvester: data.xinzeng_str.replace(tagReg, ''),
            };
            _this.emit('data', _this._data);
        })
            .catch(function () {
            _this._timers.nonrealtimeTools = setTimeout(_this.getNonRealtimeTools, RETRY_DELAY);
        });
    };
    PollManager.prototype.getAnalysisData = function () {
        var _this = this;
        if (this._tabIndex !== 4) {
            this._timers.analysis = null;
            return;
        }
        datasource_1.getAnalysisData(this._symbolInfo.symbol)
            .then(function (data) {
            data = data.data;
            _this._data.analysisData = {
                pressureInfo: data.pressure_info,
                gapInfo: data.gap_info,
            };
            _this.emit('data', _this._data);
        })
            .catch(function () { return _this._timers.analysis = setTimeout(_this.getAnalysisData, RETRY_DELAY); });
    };
    return PollManager;
}(EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PollManager;


/***/ }),

/***/ "./src/component/sidebar/realtime/bidlist/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/realtime/bidlist/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/realtime/bidlist/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var BidList = (function (_super) {
    __extends(BidList, _super);
    function BidList() {
        _super.apply(this, arguments);
    }
    BidList.prototype.shouldComponentUpdate = function (nextProps) {
        var curProp = this.props;
        return curProp.stockInfo !== nextProps.stockInfo ||
            curProp.maxHeight !== nextProps.maxHeight;
    };
    BidList.prototype.componentDidMount = function () {
        this._bidListScroll = new IScroll(this.refs.container, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
        });
    };
    BidList.prototype.componentDidUpdate = function () {
        this._bidListScroll.refresh();
    };
    BidList.prototype.componentWillUnmount = function () {
        this._bidListScroll.destroy();
        this._bidListScroll = null;
    };
    BidList.prototype.render = function () {
        var stockInfo = this.props.stockInfo;
        return (React.createElement("div", {className: 'chart-bid-list', ref: 'container', style: { maxHeight: this.props.maxHeight + "px" }}, 
            React.createElement("div", null, 
                React.createElement("div", {className: 'caption'}, 
                    React.createElement("b", {className: 'sold'}, 
                        "卖", 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        "盘"), 
                    React.createElement("b", {className: 'buy'}, 
                        "买", 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        "盘")), 
                React.createElement("div", {className: 'bid'}, 
                    React.createElement("table", null, 
                        React.createElement("tbody", null, stockInfo.selling.map(function (item, i) {
                            return React.createElement("tr", {key: i}, 
                                React.createElement("td", {width: '33.33%'}, 5 - i), 
                                React.createElement("td", {width: '33.33%', className: item[0] > stockInfo.preClose ? 'positive' : 'negtive'}, item[0]), 
                                React.createElement("td", {width: '33.33%'}, item[1] / 100));
                        }))
                    ), 
                    React.createElement("hr", null), 
                    React.createElement("table", null, 
                        React.createElement("tbody", null, stockInfo.buying.map(function (item, i) {
                            return React.createElement("tr", {key: i}, 
                                React.createElement("td", {width: '33.33%'}, i + 1), 
                                React.createElement("td", {width: '33.33%', className: item[0] > stockInfo.preClose ? 'positive' : 'negtive'}, item[0]), 
                                React.createElement("td", {width: '33.33%'}, item[1] / 100));
                        }))
                    )))
        ));
    };
    return BidList;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BidList;


/***/ }),

/***/ "./src/component/sidebar/realtime/capitalflow/bar/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/realtime/capitalflow/bar/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/realtime/capitalflow/bar/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var CapitalBarChart = (function (_super) {
    __extends(CapitalBarChart, _super);
    function CapitalBarChart() {
        _super.apply(this, arguments);
    }
    CapitalBarChart.prototype.shouldComponentUpdate = function (nextProps) {
        return !_.isEqual(this.props, nextProps);
    };
    CapitalBarChart.prototype.render = function () {
        var data = this.props.data;
        var width = this.props.width;
        var height = this.props.height;
        var barWidth = width / 5;
        var rectWidth = barWidth * 0.4;
        var max = Math.max.apply(Math, data);
        var min = Math.min.apply(Math, data);
        var diff = max - min;
        var tickmarks = [
            barWidth / 2,
            barWidth / 2 * 3,
            barWidth / 2 * 5,
            barWidth / 2 * 7,
            barWidth / 2 * 9,
        ];
        var tranlate = max > 0 ? (height - 40) * max / diff : 20;
        return (React.createElement("div", {className: 'chart-capital-flow-bar-chart'}, 
            React.createElement("h3", null, "最近5日主力流入"), 
            React.createElement("svg", {width: width, height: height}, 
                React.createElement("g", {transform: "translate(0, " + tranlate.toFixed(2) + ")"}, 
                    React.createElement("line", {x1: 0, y1: 0, x2: width, y2: 0, stroke: '#999'}), 
                    tickmarks.map(function (x, i) {
                        return React.createElement("rect", {key: i, x: x - rectWidth / 2, y: data[i] > 0 ? -height * data[i] / diff : 0, width: rectWidth, height: Math.abs(height * data[i] / diff), fill: data[i] > 0 ? '#ff524f' : '#15af3d'});
                    }), 
                    tickmarks.map(function (x, i) {
                        return React.createElement("text", {key: i, x: x + "px", y: (data[i] > 0 ? 16 : -8) + "px", fill: data[i] > 0 ? '#ff524f' : '#15af3d', textAnchor: 'middle'}, ~~(data[i] + 0.5));
                    }))
            )));
    };
    return CapitalBarChart;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CapitalBarChart;


/***/ }),

/***/ "./src/component/sidebar/realtime/capitalflow/donut/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/realtime/capitalflow/donut/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/realtime/capitalflow/donut/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var TOOL_TIPS = ['散户流入', '主力流入', '主力流出', '散户流出'];
var COLORS = ['#ff524f', '#ff7d42', '#68ce3c', '#15af3d'];
var CapitalDonutChart = (function (_super) {
    __extends(CapitalDonutChart, _super);
    function CapitalDonutChart() {
        _super.call(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    }
    CapitalDonutChart.prototype.shouldComponentUpdate = function (nextProps) {
        return _.isEqual(this.props, nextProps);
    };
    CapitalDonutChart.prototype.render = function () {
        var _this = this;
        var data = this.props.data;
        var _a = this.props, width = _a.width, height = _a.height;
        var radius = width / 2;
        var r = radius - 5;
        var bgSectorCommand = [];
        // 灰色背景扇环 参数
        // 移动到中心
        bgSectorCommand.push("M" + -r + ",0");
        bgSectorCommand.push("A" + r + "," + r + ",0,0,1," + r + ",0");
        r = radius - 65;
        bgSectorCommand.push("L" + r + ",0");
        bgSectorCommand.push("A" + r + "," + r + ",0,0,0," + -r + ",0Z");
        var sectors = this.getSectors(data, radius);
        var labels = this.getLabels(data, radius);
        var addup = ~~(data[1] - data[2] + 0.5);
        return (React.createElement("div", {className: 'chart-capital-flow-donut'}, 
            React.createElement("p", null, "单位：万元"), 
            React.createElement("div", {className: 'legend clearfix'}, 
                React.createElement("div", {className: 'color-desc-1'}, 
                    React.createElement("div", {className: 'color-block'}), 
                    React.createElement("p", null, "散户流入")), 
                React.createElement("div", {className: 'color-desc-2'}, 
                    React.createElement("div", {className: 'color-block'}), 
                    React.createElement("p", null, "主力流入")), 
                React.createElement("div", {className: 'color-desc-4'}, 
                    React.createElement("div", {className: 'color-block'}), 
                    React.createElement("p", null, "散户流出")), 
                React.createElement("div", {className: 'color-desc-3'}, 
                    React.createElement("div", {className: 'color-block'}), 
                    React.createElement("p", null, "主力流出"))), 
            React.createElement("svg", {width: width, height: height}, 
                React.createElement("g", {transform: "translate(" + radius + "," + height + ")"}, 
                    React.createElement("path", {fill: '#f1f3f6', d: bgSectorCommand.join('')}), 
                    sectors.map(function (cmd, i) {
                        var label = labels[i];
                        return React.createElement("g", {key: i, className: 'sector', onMouseMove: _this.mouseMoveHandler(i), onMouseLeave: _this.mouseLeaveHandler}, 
                            React.createElement("path", {fill: COLORS[i], d: cmd}), 
                            parseInt(label.text) > 5 ?
                                React.createElement("text", {x: label.x, y: label.y, fontSize: 12, textAnchor: 'middle', fill: '#fff'}, label.text)
                                : null);
                    }), 
                    React.createElement("text", {x: 0, y: -32, textAnchor: 'middle', fontSize: 14, fill: '#999999'}, "主力资金"), 
                    React.createElement("text", {x: 0, y: -6, textAnchor: 'middle', fontSize: 26, fill: addup > 0 ? '#ff524f' : '#15af3d'}, addup > 0 ? '+' + addup : addup))
            ), 
            React.createElement("div", {className: 'clearfix'}, 
                React.createElement("p", {className: 'capital-in'}, 
                    "流入", 
                    React.createElement("i", {className: 'capital-in-num'}, data ? ~~(data[1] + 0.5) : 'N/A')), 
                React.createElement("p", {className: 'capital-out'}, 
                    "流出", 
                    React.createElement("i", {className: 'capital-out-num'}, data ? ~~(data[2] + 0.5) : 'N/A')))));
    };
    CapitalDonutChart.prototype.getSectors = function (data, radius) {
        var total = data.reduce(function (prev, cur) { return prev + cur; }, 0);
        var secttorCommands = [];
        var r1 = radius - 10;
        var r2 = radius - 60;
        var x;
        var y;
        var rad = 0;
        var rad0 = 0;
        var sectorCmd;
        for (var i = 0; i < 4; i++) {
            sectorCmd = [];
            rad0 = rad;
            rad += data[i] / total * Math.PI;
            x = (-Math.cos(rad0) * r1).toFixed(2);
            y = (-Math.sin(rad0) * r1).toFixed(2);
            sectorCmd.push("M" + x + "," + y);
            x = (-Math.cos(rad) * r1).toFixed(2);
            y = (-Math.sin(rad) * r1).toFixed(2);
            sectorCmd.push("A" + r1 + "," + r1 + ",0,0,1," + x + "," + y);
            x = (-Math.cos(rad) * r2).toFixed(2);
            y = (-Math.sin(rad) * r2).toFixed(2);
            sectorCmd.push("L" + x + "," + y);
            x = (-Math.cos(rad0) * r2).toFixed(2);
            y = (-Math.sin(rad0) * r2).toFixed(2);
            sectorCmd.push("A" + r2 + "," + r2 + ",0,0,0," + x + "," + y + "Z");
            secttorCommands.push(sectorCmd.join(''));
        }
        return secttorCommands;
    };
    CapitalDonutChart.prototype.getLabels = function (data, radius) {
        var total = data.reduce(function (prev, cur) { return prev + cur; }, 0);
        var labels = [];
        var r = radius - 35;
        var rad0 = 0;
        var rad = 0;
        var text;
        var x;
        var y;
        for (var i = 0; i < 4; i++) {
            text = ~~(data[i] / total * 100 + 0.5) + '%';
            rad0 = data[i] / total * Math.PI;
            x = (-Math.cos(rad + rad0 / 2) * r).toFixed(2);
            y = (-Math.sin(rad + rad0 / 2) * r + 6).toFixed(2);
            labels.push({ text: text, x: x, y: y });
            rad += rad0;
        }
        return labels;
    };
    CapitalDonutChart.prototype.mouseMoveHandler = function (index) {
        return function (ev) {
            if (this.props.onSectorMouseMove) {
                this.props.onSectorMouseMove({
                    pageX: ev.pageX,
                    pageY: ev.pageY,
                    label: TOOL_TIPS[index],
                    color: COLORS[index],
                    value: ~~(this.props.data[index] + 0.5),
                });
            }
        }.bind(this);
    };
    CapitalDonutChart.prototype.mouseLeaveHandler = function () {
        if (this.props.onSectorMouseLeave) {
            this.props.onSectorMouseLeave();
        }
    };
    return CapitalDonutChart;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CapitalDonutChart;


/***/ }),

/***/ "./src/component/sidebar/realtime/capitalflow/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/realtime/capitalflow/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/realtime/capitalflow/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var donut_1 = __webpack_require__("./src/component/sidebar/realtime/capitalflow/donut/index.tsx");
var bar_1 = __webpack_require__("./src/component/sidebar/realtime/capitalflow/bar/index.tsx");
var util_1 = __webpack_require__("./src/util/index.ts");
var CapitalFlow = (function (_super) {
    __extends(CapitalFlow, _super);
    function CapitalFlow() {
        _super.call(this);
        this.state = {
            showToolTip: false,
            label: '',
            color: '#fff',
            value: 0,
            left: 0,
            top: 0,
        };
        this.sectorMouseMoveHandler = this.sectorMouseMoveHandler.bind(this);
        this.sectorMouseLeaveHandler = this.sectorMouseLeaveHandler.bind(this);
    }
    CapitalFlow.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    CapitalFlow.prototype.componentDidMount = function () {
        this._capitalFlowScroll = new IScroll(this.refs.container, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
        });
    };
    CapitalFlow.prototype.componentDidUpdate = function () {
        this._capitalFlowScroll.refresh();
    };
    CapitalFlow.prototype.componentWillUnmount = function () {
        this._capitalFlowScroll.destroy();
        this._capitalFlowScroll = null;
    };
    CapitalFlow.prototype.render = function () {
        var capitalFlowInfo = this.props.capitalFlowInfo;
        var donutChartData = capitalFlowInfo.donutChartData;
        var barChartData = capitalFlowInfo.barChartData;
        return (React.createElement("div", {className: 'chart-capital-flow', ref: 'container', style: { maxHeight: this.props.maxHeight + "px" }}, 
            React.createElement("div", null, 
                React.createElement(donut_1.default, {data: donutChartData, width: 248, height: 128, onSectorMouseMove: this.sectorMouseMoveHandler, onSectorMouseLeave: this.sectorMouseLeaveHandler}), 
                React.createElement(bar_1.default, {data: barChartData, width: 248, height: 128})), 
            React.createElement("div", {className: 'tool-tip', style: {
                display: this.state.showToolTip ? 'block' : 'none',
                left: this.state.left,
                top: this.state.top,
            }}, 
                this.state.label, 
                ":", 
                React.createElement("span", {style: { color: this.state.color }}, this.state.value))));
    };
    CapitalFlow.prototype.sectorMouseMoveHandler = function (data) {
        var offset = util_1.clientOffset(this.refs.container);
        this.setState({
            showToolTip: true,
            label: data.label,
            value: data.value,
            color: data.color,
            left: data.pageX - offset.left,
            top: data.pageY - offset.top,
        });
    };
    CapitalFlow.prototype.sectorMouseLeaveHandler = function () {
        this.setState({ showToolTip: false });
    };
    return CapitalFlow;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CapitalFlow;


/***/ }),

/***/ "./src/component/sidebar/realtime/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/realtime/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/realtime/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var bidlist_1 = __webpack_require__("./src/component/sidebar/realtime/bidlist/index.tsx");
var stockdetail_1 = __webpack_require__("./src/component/sidebar/realtime/stockdetail/index.tsx");
var ticklist_1 = __webpack_require__("./src/component/sidebar/realtime/ticklist/index.tsx");
var capitalflow_1 = __webpack_require__("./src/component/sidebar/realtime/capitalflow/index.tsx");
var TAB_HEIGHT = 35;
var Realtime = (function (_super) {
    __extends(Realtime, _super);
    function Realtime() {
        _super.call(this);
        this.state = {
            tabIndex: 0,
        };
    }
    Realtime.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var curProp = this.props;
        var curState = this.state;
        return curProp.stockInfo !== nextProps.stockInfo ||
            curProp.capitalFlowInfo !== nextProps.capitalFlowInfo ||
            curProp.height !== nextProps.height ||
            curState.tabIndex !== nextState.tabIndex;
    };
    Realtime.prototype.render = function () {
        var height = this.props.height;
        var stockInfo = this.props.stockInfo;
        var capitalFlowInfo = this.props.capitalFlowInfo;
        var showBidList = stockInfo.selling && stockInfo.buying;
        var showTab = stockInfo.ticks.length;
        var bidListHeightRatio = 0;
        var stockDetailHeightRatio = 0;
        var tabHeightRatio = 0;
        if (showBidList) {
            if (showTab) {
                bidListHeightRatio = 0.3;
                stockDetailHeightRatio = 0.25;
                tabHeightRatio = 0.45;
            }
            else {
                bidListHeightRatio = 0.5;
                stockDetailHeightRatio = 0.5;
            }
        }
        else {
            if (showTab) {
                stockDetailHeightRatio = 0.5;
                tabHeightRatio = 0.5;
            }
            else {
                stockDetailHeightRatio = 1;
            }
        }
        return React.createElement("div", {className: 'realtime-info'}, 
            showBidList ?
                React.createElement(bidlist_1.default, {stockInfo: stockInfo, maxHeight: height * bidListHeightRatio}) : null, 
            React.createElement(stockdetail_1.default, {stockInfo: stockInfo, maxHeight: height * stockDetailHeightRatio}), 
            " : null", 
            showTab ?
                React.createElement("div", {className: 'tab-wrapper', style: { height: height * tabHeightRatio + 'px' }}, 
                    React.createElement("ul", {className: 'tab-btn-group', onClick: this.switchTabPage.bind(this), onTouchStart: this.switchTabPage.bind(this)}, 
                        React.createElement("li", {className: this.state.tabIndex === 0 ? 'on' : '', "data-index": '0'}, "明细"), 
                        React.createElement("li", {className: this.state.tabIndex === 1 ? 'on' : '', "data-index": '1'}, "资金")), 
                    React.createElement("div", {className: 'tab-container'}, 
                        this.state.tabIndex === 0 ?
                            React.createElement(ticklist_1.default, {stockInfo: stockInfo, maxHeight: height * tabHeightRatio - TAB_HEIGHT}) : null, 
                        this.state.tabIndex === 1 ?
                            React.createElement(capitalflow_1.default, {capitalFlowInfo: capitalFlowInfo, maxHeight: height * tabHeightRatio - TAB_HEIGHT}) : null)) : null);
    };
    Realtime.prototype.switchTabPage = function (ev) {
        var index = +ev.target.dataset.index;
        this.setState({ tabIndex: index });
    };
    return Realtime;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Realtime;


/***/ }),

/***/ "./src/component/sidebar/realtime/stockdetail/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/realtime/stockdetail/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/realtime/stockdetail/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var util_1 = __webpack_require__("./src/util/index.ts");
var StockDetail = (function (_super) {
    __extends(StockDetail, _super);
    function StockDetail() {
        _super.apply(this, arguments);
    }
    StockDetail.prototype.shouldComponentUpdate = function (nextProps) {
        var curProp = this.props;
        return curProp.stockInfo !== nextProps.stockInfo ||
            curProp.maxHeight !== nextProps.maxHeight;
    };
    StockDetail.prototype.componentDidMount = function () {
        this._stockInfoScroll = new IScroll(this.refs.container, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
        });
    };
    StockDetail.prototype.componentDidUpdate = function () {
        this._stockInfoScroll.refresh();
    };
    StockDetail.prototype.componentWillUnmount = function () {
        this._stockInfoScroll.destroy();
        this._stockInfoScroll = null;
    };
    StockDetail.prototype.render = function () {
        var stockInfo = this.props.stockInfo;
        return (React.createElement("div", {className: 'chart-stock-detail', ref: 'container', style: { maxHeight: this.props.maxHeight + 'px' }}, 
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", {width: '42'}, "昨收"), 
                        React.createElement("td", {width: '76'}, stockInfo.preClose), 
                        React.createElement("th", {width: '46'}, "成交量"), 
                        React.createElement("td", {width: '74'}, 
                            util_1.formatNumber(stockInfo.volume * 1e4, 2), 
                            "手")), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "今开"), 
                        React.createElement("td", {className: stockInfo.open > stockInfo.preClose ? 'positive' : 'negtive'}, stockInfo.open), 
                        React.createElement("th", null, "成交额"), 
                        React.createElement("td", null, util_1.formatNumber(stockInfo.amount * 1e8, 2))), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "最高"), 
                        React.createElement("td", {className: stockInfo.high > stockInfo.preClose ? 'positive' : 'negtive'}, stockInfo.high), 
                        React.createElement("th", null, "振幅"), 
                        React.createElement("td", null, 
                            stockInfo.amplitude, 
                            "%")), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "最低"), 
                        React.createElement("td", {className: stockInfo.low > stockInfo.preClose ? 'positive' : 'negtive'}, stockInfo.low), 
                        React.createElement("th", null, "换手率"), 
                        React.createElement("td", null, stockInfo.turnover ? stockInfo.turnover + '%' : '--')), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "涨停"), 
                        React.createElement("td", {className: 'positive'}, (stockInfo.preClose * 1.1).toFixed(2)), 
                        React.createElement("th", null, "内盘"), 
                        React.createElement("td", {className: 'positive'}, stockInfo.inVol ? stockInfo.inVol : '--')), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "跌停"), 
                        React.createElement("td", {className: 'negtive'}, (stockInfo.preClose * 0.9).toFixed(2)), 
                        React.createElement("th", null, "外盘"), 
                        React.createElement("td", {className: 'negtive'}, stockInfo.outVol ? stockInfo.outVol : '--')))
            )
        ));
    };
    return StockDetail;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StockDetail;


/***/ }),

/***/ "./src/component/sidebar/realtime/ticklist/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/sidebar/realtime/ticklist/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/sidebar/realtime/ticklist/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var IScroll = __webpack_require__("./node_modules/iscroll/build/iscroll.js");
var StockDetail = (function (_super) {
    __extends(StockDetail, _super);
    function StockDetail() {
        _super.apply(this, arguments);
    }
    StockDetail.prototype.shouldComponentUpdate = function (nextProps) {
        var curProp = this.props;
        return curProp.stockInfo !== nextProps.stockInfo ||
            curProp.maxHeight !== nextProps.maxHeight;
    };
    StockDetail.prototype.componentDidMount = function () {
        this._tickListScroll = new IScroll(this.refs.container, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
        });
    };
    StockDetail.prototype.componentDidUpdate = function () {
        this._tickListScroll.refresh();
    };
    StockDetail.prototype.componentWillUnmount = function () {
        this._tickListScroll.destroy();
        this._tickListScroll = null;
    };
    StockDetail.prototype.render = function () {
        var stockInfo = this.props.stockInfo;
        return (React.createElement("div", {className: 'chart-tick-list', ref: 'container', style: { maxHeight: this.props.maxHeight + "px" }}, 
            React.createElement("table", null, 
                React.createElement("tbody", null, stockInfo.ticks.map(function (tick, i) {
                    return React.createElement("tr", {key: i}, 
                        React.createElement("td", {width: '34%'}, 
                            tick.time.substring(0, 2), 
                            ":", 
                            tick.time.substring(2, 4), 
                            ":", 
                            tick.time.substring(4, 6)), 
                        React.createElement("td", {width: '33%'}, tick.price), 
                        React.createElement("td", {width: '33%', className: tick.type === '1' ? 'positive' :
                            tick.type === '2' ? 'negative' : ''}, 
                            +tick.volume / 100, 
                            React.createElement("svg", {viewBox: '0 0 10 12'}, 
                                React.createElement("g", null, 
                                    React.createElement("path", {d: 'M9.6,4.4c0.3,0.3,0.3,0.8,0,1.1C9.5,5.7,9.3,5.7,9.1,5.7S8.7,5.7,8.5,5.5L5.7,2.7v8.5c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8V2.7L1.4,5.5c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1l4.1-4.1C4.5,0.1,4.7,0,4.9,0c0.2,0,0.4,0.1,0.6,0.2L9.6,4.4z'})
                                )
                            )));
                }))
            )
        ));
    };
    return StockDetail;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StockDetail;


/***/ }),

/***/ "./src/component/toolbox/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/toolbox/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/toolbox/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var tool_1 = __webpack_require__("./src/graphic/tool/index.ts");
var toolsList = [
    [['chart-tools-crosshair', '十字指针'], ['chart-tools-pointer', '箭头']],
    [
        ['chart-tools-trend-line', '趋势线'],
        ['chart-tools-trend-angle', '角度趋势线'],
        ['chart-tools-vert-line', '垂直线'],
        ['chart-tools-horz-line', '水平线'],
    ],
    [
        ['chart-tools-date-range', '日期范围'],
    ],
    [['chart-tools-eraser', '删除画线']],
];
var ToolBox = (function (_super) {
    __extends(ToolBox, _super);
    function ToolBox(props, context) {
        _super.call(this, props, context);
        this._clickCanceled = false;
        this._chartLayout = context.chartLayout;
        this.resetTool = this.resetTool.bind(this);
        this.downHandler = this.downHandler.bind(this);
        this.upHandler = this.upHandler.bind(this);
        this.moveHandler = this.moveHandler.bind(this);
        this.selectToolHandler = this.selectToolHandler.bind(this);
        this.hideMoreTools = this.hideMoreTools.bind(this);
        this.showMoreTools = this.showMoreTools.bind(this);
        this.state = {
            selectedIndex: 0,
            selectedIndex2: [0, 0, 0, 0],
            showMoreTools: false,
        };
    }
    ToolBox.prototype.shouldComponentUpdate = function (nextProp, nextState) {
        return !_.isEqual(this.state, nextState);
    };
    ToolBox.prototype.componentDidMount = function () {
        var chartLayout = this._chartLayout;
        chartLayout.addListener('drawingtool_begin', this.resetTool);
        // chartLayout.addListener('drawingtool_remove', this.resetTool)
        document.addEventListener('mousedown', this.hideMoreTools);
        document.addEventListener('touchstart', this.hideMoreTools);
    };
    ToolBox.prototype.componentWillUnmount = function () {
        var chartLayout = this._chartLayout;
        chartLayout.removeListener('drawingtool_begin', this.resetTool);
        // chartLayout.removeListener('drawingtool_remove', this.resetTool)
        document.removeEventListener('mousedown', this.hideMoreTools);
        document.removeEventListener('touchstart', this.hideMoreTools);
    };
    ToolBox.prototype.render = function () {
        var _this = this;
        return React.createElement("div", {className: 'chart-tools'}, 
            React.createElement("ul", {className: 'chart-tools-group'}, toolsList.map(function (tools, i) {
                return React.createElement("li", {key: i, className: _this.state.selectedIndex === i ? 'selected' : ''}, 
                    React.createElement("span", {className: 'chart-tools-btn'}, 
                        React.createElement("span", {className: "chart-tools-btn-main " + tools[_this.state.selectedIndex2[i]][0], title: tools[_this.state.selectedIndex2[i]][1], "data-index": i, onMouseDown: _this.downHandler, onTouchStart: _this.downHandler, onMouseUp: _this.upHandler, onTouchEnd: _this.upHandler, onMouseMove: _this.moveHandler, onTouchMove: _this.moveHandler}), 
                        tools.length > 1 ?
                            React.createElement("span", {className: 'chart-tools-btn-more', "data-index": i, onClick: _this.showMoreTools}) : null), 
                    _this.state.showMoreTools && _this.state.showMoreIndex === i ?
                        React.createElement("div", {className: 'chart-tools-more'}, toolsList[i].map(function (tool, j) {
                            return React.createElement("a", {href: 'javascript:;', key: tool[0], "data-index1": i, "data-index2": j, onMouseDown: _this.selectToolHandler, onTouchStart: _this.selectToolHandler}, 
                                React.createElement("span", {className: tool[0]}), 
                                tool[1]);
                        })) : null);
            }))
        );
    };
    ToolBox.prototype.downHandler = function (ev) {
        var _this = this;
        if (ev.touches) {
            ev.preventDefault();
        }
        var selectedIndex = +ev.target.dataset.index;
        this._clickCanceled = false;
        if (toolsList[selectedIndex].length > 1) {
            this._longTapDetectTimeout = setTimeout(function () { return _this.showMoreTools(selectedIndex); }, 300);
        }
    };
    ToolBox.prototype.moveHandler = function () {
        this._clickCanceled = true;
        clearInterval(this._longTapDetectTimeout);
    };
    ToolBox.prototype.upHandler = function (ev) {
        var selectedIndex = +ev.target.dataset.index;
        var selectedIndex2 = this.state.selectedIndex2;
        if (!this.state.showMoreTools && !this._clickCanceled) {
            clearInterval(this._longTapDetectTimeout);
            this.selectTool(selectedIndex, selectedIndex2[selectedIndex], !!ev.touches);
        }
    };
    ToolBox.prototype.selectToolHandler = function (ev) {
        if (ev.touches) {
            ev.preventDefault();
        }
        this.selectTool(+ev.currentTarget.dataset.index1, +ev.currentTarget.dataset.index2, !!ev.touches);
    };
    ToolBox.prototype.showMoreTools = function (ev) {
        this.setState({ showMoreIndex: typeof ev === 'object' ? +ev.target.dataset.index : ev, showMoreTools: true });
    };
    ToolBox.prototype.hideMoreTools = function (ev) {
        if (this.state.showMoreTools) {
            if (!!ev.touches) {
                ev.preventDefault();
            }
            this.setState({ showMoreTools: false });
        }
    };
    ToolBox.prototype.selectTool = function (index1, index2, isTouchEvent) {
        var chartLayout = this._chartLayout;
        var selectedIndex2 = this.state.selectedIndex2;
        selectedIndex2[index1] = index2;
        chartLayout.willEraseDrawingTool = false;
        if (index1 === 0) {
            switch (toolsList[index1][index2][0]) {
                case 'chart-tools-crosshair':
                    chartLayout.setDefaultCursor('crosshair');
                    break;
                case 'chart-tools-pointer':
                    chartLayout.setDefaultCursor('default');
                    break;
                default:
                    break;
            }
            chartLayout.isEditMode = false;
            this.resetTool();
        }
        else if (index1 === toolsList.length - 1) {
            chartLayout.willEraseDrawingTool = true;
            this.setState({
                selectedIndex: index1,
                showMoreTools: false,
            });
            chartLayout.selectedDrawingTool = null;
            chartLayout.isEditMode = false;
        }
        else {
            chartLayout.selectedDrawingTool = this.getDrawingToolByName(toolsList[index1][index2][0]);
            if (isTouchEvent) {
                chartLayout.isEditMode = true;
            }
            this.setState({
                selectedIndex: index1,
                selectedIndex2: selectedIndex2,
                showMoreTools: false,
            });
        }
    };
    ToolBox.prototype.getDrawingToolByName = function (toolName) {
        switch (toolName) {
            case 'chart-tools-trend-line':
                return new tool_1.TrendLineToolRenderer();
            case 'chart-tools-trend-angle':
                return new tool_1.TrendAngleToolRenderer();
            case 'chart-tools-vert-line':
                return new tool_1.VertLineRenderer();
            case 'chart-tools-horz-line':
                return new tool_1.HorzLineRenderer();
            case 'chart-tools-date-range':
                return new tool_1.DateRangeRenderer(this._chartLayout.mainDatasource);
            default:
                throw 'Can\'t find any drawing tool match name ' + toolName;
        }
    };
    ToolBox.prototype.resetTool = function () {
        var chartLayout = this._chartLayout;
        this.setState({
            selectedIndex: 0,
        });
        chartLayout.willEraseDrawingTool = false;
        chartLayout.selectedDrawingTool = null;
    };
    ToolBox.contextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return ToolBox;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToolBox;


/***/ }),

/***/ "./src/component/widget/colorpicker/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/widget/colorpicker/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/widget/colorpicker/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var react_color_1 = __webpack_require__("./node_modules/react-color/lib/index.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var util_1 = __webpack_require__("./src/util/index.ts");
var ColorPicker = (function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker() {
        _super.call(this);
        this.state = {
            showColorPicker: false,
        };
        this.openColorPickerHandler = this.openColorPickerHandler.bind(this);
        this.colorChangeHandler = this.colorChangeHandler.bind(this);
        this.clickOutsideHandler = this.clickOutsideHandler.bind(this);
    }
    ColorPicker.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState);
    };
    ColorPicker.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.clickOutsideHandler);
        document.addEventListener('touchstart', this.clickOutsideHandler);
    };
    ColorPicker.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.clickOutsideHandler);
        document.removeEventListener('touchstart', this.clickOutsideHandler);
    };
    ColorPicker.prototype.render = function () {
        var color = this.state.color || this.props.defaultColor;
        return React.createElement("div", null, 
            React.createElement("div", {className: 'chart-color-picker'}, 
                React.createElement("span", {className: 'chart-color-picker-btn', style: { backgroundColor: color, border: "1px solid " + util_1.darkenRGB(color) }, onClick: this.openColorPickerHandler}), 
                this.state.showColorPicker ?
                    React.createElement("div", {ref: 'container', className: 'chart-color-picker-positioning'}, 
                        React.createElement(react_color_1.SketchPicker, {width: '240px', disableAlpha: true, color: color, presetColors: [], onChangeComplete: this.colorChangeHandler})
                    )
                    : null)
        );
    };
    ColorPicker.prototype.openColorPickerHandler = function (ev) {
        this.setState({ showColorPicker: true });
    };
    ColorPicker.prototype.colorChangeHandler = function (colorResult) {
        var rgb = colorResult.rgb;
        var color = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
        this.props.onChangeComplete(color);
        this.setState({ color: color });
    };
    ColorPicker.prototype.clickOutsideHandler = function (ev) {
        var container = this.refs.container;
        var target = ev.target;
        if (!!container && target !== container && !container.contains(target)) {
            this.setState({ showColorPicker: false });
        }
    };
    return ColorPicker;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ColorPicker;


/***/ }),

/***/ "./src/component/widget/dialog/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/component/widget/dialog/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__webpack_require__("./src/component/widget/dialog/index.less");
var React = __webpack_require__("./node_modules/react/react.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        _super.call(this);
        this._dragStart = false;
        this._dragPosX = 0;
        this._dragPosY = 0;
        this.closeHandler = this.closeHandler.bind(this);
        this.clickOutsideHandler = this.clickOutsideHandler.bind(this);
        this.dragStartHandler = this.dragStartHandler.bind(this);
        this.dragMoveHandler = this.dragMoveHandler.bind(this);
        this.dragEndHandler = this.dragEndHandler.bind(this);
    }
    Dialog.prototype.shouldComponentUpdate = function (nextProps) {
        return !_.isEqual(this.props, nextProps);
    };
    Dialog.prototype.componentDidMount = function () {
        var container = this.refs.container;
        var pageHeight = document.documentElement.clientHeight;
        var pageWidth = document.documentElement.clientWidth;
        var style = this.refs.container.style;
        var props = this.props;
        var width = props.width || container.clientWidth;
        var height = props.height || container.clientHeight;
        style.width = props.width + 'px';
        style.height = props.height + 'px';
        style.top = pageHeight * (1 - 0.618) - height / 2 + 'px';
        style.left = pageWidth * 0.5 - width / 2 + 'px';
        document.addEventListener('mousedown', this.clickOutsideHandler);
        document.addEventListener('touchstart', this.clickOutsideHandler);
        document.addEventListener('mousemove', this.dragMoveHandler);
        document.addEventListener('touchmove', this.dragMoveHandler);
        document.addEventListener('mouseup', this.dragEndHandler);
        document.addEventListener('touchend', this.dragEndHandler);
    };
    Dialog.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.clickOutsideHandler);
        document.removeEventListener('touchstart', this.clickOutsideHandler);
        document.removeEventListener('mousemove', this.dragMoveHandler);
        document.removeEventListener('touchmove', this.dragMoveHandler);
        document.removeEventListener('mouseup', this.dragEndHandler);
        document.removeEventListener('touchend', this.dragEndHandler);
    };
    Dialog.prototype.render = function () {
        return React.createElement("div", {ref: 'container', className: this.props.className + " chart-dialog"}, 
            React.createElement("h3", {onMouseDown: this.dragStartHandler, onTouchStart: this.dragStartHandler}, this.props.title), 
            React.createElement("a", {href: 'javascript:;', className: 'close', onClick: this.closeHandler}), 
            React.createElement("div", {className: 'chart-dialog-body'}, this.props.children));
    };
    Dialog.prototype.closeHandler = function () {
        var closeCallback = this.props.onClose;
        if (typeof closeCallback === 'function') {
            closeCallback();
        }
    };
    Dialog.prototype.clickOutsideHandler = function (ev) {
        var container = this.refs.container;
        var target = ev.target;
        if (target !== container && !container.contains(target)) {
            this.closeHandler();
        }
    };
    Dialog.prototype.dragStartHandler = function (ev) {
        if (!!ev.touches) {
            ev.preventDefault();
        }
        var touchDrag = ev.touches && ev.touches.length === 1;
        this._dragStart = true;
        this._dragPosX = touchDrag ? ev.touches[0].pageX : ev.pageX;
        this._dragPosY = touchDrag ? ev.touches[0].pageY : ev.pageY;
    };
    Dialog.prototype.dragMoveHandler = function (ev) {
        if (!this._dragStart) {
            return;
        }
        var style = this.refs.container.style;
        var touchDrag = ev.touches && ev.touches.length === 1;
        var posX = touchDrag ? ev.touches[0].pageX : ev.pageX;
        var posY = touchDrag ? ev.touches[0].pageY : ev.pageY;
        var diffX = posX - this._dragPosX;
        var diffY = posY - this._dragPosY;
        style.left = parseFloat(style.left) + diffX + 'px';
        style.top = parseFloat(style.top) + diffY + 'px';
        this._dragPosX = posX;
        this._dragPosY = posY;
    };
    Dialog.prototype.dragEndHandler = function () {
        this._dragStart = false;
    };
    Dialog.defaultProps = {
        className: '',
    };
    return Dialog;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dialog;


/***/ }),

/***/ "./src/constant/chart.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.OPEN_DAYS = [1, 2, 3, 4, 5];
exports.OPEN_TIME_RANGE = [
    [[9, 30], [11, 30]],
    [[13, 0], [15, 0]],
];
exports.OPEN_HOUR = exports.OPEN_TIME_RANGE[0][0][0];
exports.OPEN_MINUTE = exports.OPEN_TIME_RANGE[0][0][1];
exports.CLOSE_HOUR = exports.OPEN_TIME_RANGE[exports.OPEN_TIME_RANGE.length - 1][1][0];
exports.CLOSE_MINUTE = exports.OPEN_TIME_RANGE[exports.OPEN_TIME_RANGE.length - 1][1][1];
exports.OPEN_MINITES_COUNT = exports.OPEN_TIME_RANGE.reduce(function (count, timeRange) {
    count += (timeRange[1][0] - timeRange[0][0]) * 60 + (timeRange[1][1] - timeRange[0][1]);
    return count;
}, 0);


/***/ }),

/***/ "./src/constant/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/constant/chart.ts"));
__export(__webpack_require__("./src/constant/size.ts"));


/***/ }),

/***/ "./src/constant/size.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.AXIS_X_HEIGHT = 30;
exports.AXIS_Y_WIDTH = 60;
exports.NAVBAR_HEIGHT = 35;
exports.CONTROL_BAR_HEIGHT = 22;
exports.HIT_TEST_TOLERANCE = 'ontouchstart' in document ? 12 : 4;
exports.SIDEBAR_WIDTH = 314;
exports.SIDEBAR_FOLD_WIDTH = 45;
exports.FOOTER_PANEL_HEIGHT = 30;
exports.FOOTER_PANEL_UNFOLD_HEIGHT = 320;
exports.TOOLBOX_WIDTH = 52;


/***/ }),

/***/ "./src/datasource/base.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventEmitter = __webpack_require__("./node_modules/eventemitter3/index.js");
/**
 * @class
 * 数据源
 */
var Datasource = (function (_super) {
    __extends(Datasource, _super);
    function Datasource(resolution, timeDiff) {
        if (timeDiff === void 0) { timeDiff = 0; }
        _super.call(this);
        this._hasMoreHistory = true;
        // 保存上次请求的起始时间，用来记录loadHistory上次加载到哪个时间点
        this._pulseInterval = 60;
        this._resolution = resolution;
        this._timeDiff = timeDiff;
    }
    Object.defineProperty(Datasource.prototype, "timeDiff", {
        get: function () {
            return this._timeDiff;
        },
        set: function (timeDiff) {
            this._timeDiff = timeDiff;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Datasource.prototype, "pulseInterval", {
        get: function () {
            return this._pulseInterval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Datasource.prototype, "resolution", {
        get: function () {
            return this._resolution;
        },
        set: function (resolution) {
            this._resolution = resolution;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 清空缓存
     */
    Datasource.prototype.clearCache = function () {
        this._hasMoreHistory = true;
    };
    Datasource.prototype.now = function () {
        return ~~(Date.now() / 1000) - this._timeDiff;
    };
    Object.defineProperty(Datasource.prototype, "hasMoreHistory", {
        get: function () {
            return this._hasMoreHistory;
        },
        enumerable: true,
        configurable: true
    });
    return Datasource;
}(EventEmitter));
exports.Datasource = Datasource;


/***/ }),

/***/ "./src/datasource/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/datasource/base.ts"));
__export(__webpack_require__("./src/datasource/stock.ts"));
__export(__webpack_require__("./src/datasource/pressuresupport.ts"));
__export(__webpack_require__("./src/datasource/inflection.ts"));
__export(__webpack_require__("./src/datasource/studyconfig.ts"));
__export(__webpack_require__("./src/datasource/studyhelper.ts"));
__export(__webpack_require__("./src/datasource/rpc.ts"));


/***/ }),

/***/ "./src/datasource/inflection.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var moment = __webpack_require__("./node_modules/moment/moment.js");
var rpc_1 = __webpack_require__("./src/datasource/rpc.ts");
var plotlist_1 = __webpack_require__("./src/datasource/plotlist.ts");
var _1 = __webpack_require__("./src/datasource/index.ts");
/**
 * 拐点数据源
 */
var InflectionDatasource = (function (_super) {
    __extends(InflectionDatasource, _super);
    /**
     * @constructor
     * @param {string} symbol     股票代码
     * @param {string} resolution 解析度
     */
    function InflectionDatasource(symbol, resolution, version, timeDiff) {
        if (timeDiff === void 0) { timeDiff = 0; }
        _super.call(this, resolution, timeDiff);
        this._version = version;
        this._symbol = symbol;
        this._plotList = new plotlist_1.default();
    }
    Object.defineProperty(InflectionDatasource.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (symbol) {
            this._symbol = symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InflectionDatasource.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    InflectionDatasource.prototype.barAt = function (index) {
        return this._plotList.get(index);
    };
    InflectionDatasource.prototype.first = function () {
        return this._plotList.first();
    };
    InflectionDatasource.prototype.last = function () {
        return this._plotList.last();
    };
    InflectionDatasource.prototype.slice = function (start, end) {
        return this._plotList.slice(start, end);
    };
    InflectionDatasource.prototype.range = function (from, to) {
        return this._plotList.range(from, to);
    };
    InflectionDatasource.prototype.loaded = function () {
        return this._plotList.size();
    };
    InflectionDatasource.prototype.search = function (time) {
        return this._plotList.search(time);
    };
    /**
     * 请求一段时间范围内的数据
     * @param  {number}               from 开始时间，精确到秒
     * @param  {number}               to   结束时间，精确到秒
     * @return {Promise<InflectionBar[]>}      请求到的数据结果
     */
    InflectionDatasource.prototype.loadTimeRange = function (from, to) {
        var _this = this;
        var symbol = this._symbol;
        var resolution = this._resolution;
        if (from > to) {
            return Promise.resolve([]);
        }
        var fromDate = moment(from * 1000).format('YYYYMMDD');
        var toDate = moment(to * 1000).format('YYYYMMDD');
        return new Promise(function (resolve, reject) {
            return rpc_1.getInflectionData(symbol, _this._version, fromDate, toDate)
                .then(function (data) {
                var bars = [];
                data.data.shape_list.forEach(function (shape) {
                    return bars.push({
                        time: ~~(moment(shape.day).toDate().getTime() / 1000),
                        type: shape.shape_detail.val,
                        val: shape.shape_detail.y,
                        prob: shape.shape_detail.prob,
                    });
                });
                if (symbol.toUpperCase() === _this._symbol.toUpperCase() &&
                    resolution === _this._resolution) {
                    _this._plotList.merge(bars);
                    resolve(bars);
                }
                else {
                    reject('response expired');
                }
            })
                .catch(reject);
        });
    };
    /**
     * 清空缓存
     */
    InflectionDatasource.prototype.clearCache = function () {
        _super.prototype.clearCache.call(this);
        this._plotList.clear();
    };
    return InflectionDatasource;
}(_1.Datasource));
exports.InflectionDatasource = InflectionDatasource;


/***/ }),

/***/ "./src/datasource/plotlist.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @class
 * 图数据的操作集合
 */
var PlotList = (function () {
    /**
     * @constructor
     */
    function PlotList() {
        this.cache = [];
    }
    /**
     * 搜索时间戳对应的下标索引
     * @param  {number} time 时间戳（精确到秒）
     * @return {number}      下标索引
     */
    PlotList.prototype.search = function (time) {
        if (this.cache.length === 0) {
            return -1;
        }
        if (time < this.cache[0].time || time > this.cache[this.cache.length - 1].time) {
            return -1;
        }
        else {
            return this.bsearch(time, 0, this.cache.length - 1);
        }
    };
    /**
     * 获取下标索引位置的数据
     * @param  {number} index 下标索引
     * @return {T}            数据
     */
    PlotList.prototype.get = function (index) {
        return this.cache[index] || null;
    };
    PlotList.prototype.first = function () {
        return this.cache[0] || null;
    };
    PlotList.prototype.last = function () {
        return this.cache[this.cache.length - 1] || null;
    };
    /**
     * 返回数据集合的元素数量
     * @return {number} 数据集合的元素数量
     */
    PlotList.prototype.size = function () {
        return this.cache.length;
    };
    PlotList.prototype.slice = function (start, end) {
        return this.cache.slice(start, end);
    };
    /**
     * 返回指定时间范围的数据子集
     * @param  {number}   from 开始时间戳（精确到秒）
     * @param  {number}   to   结束时间戳（精确到秒）
     * @return {T[]}      数据子集
     */
    PlotList.prototype.range = function (from, to) {
        var fromIndex = this.search(from);
        var toIndex = this.search(to);
        if (fromIndex === -1) {
            if (!this.first() || to < this.first().time) {
                return [];
            }
            fromIndex = 0;
        }
        if (toIndex === -1) {
            if (!this.last() || from > this.last().time) {
                return [];
            }
            toIndex = this.cache.length - 1;
        }
        return this.cache.slice(fromIndex, toIndex + 1);
    };
    /**
     * 将新的数据集合并到当前数据集中
     * @param {T[]} newData 新数据集
     */
    PlotList.prototype.merge = function (newData) {
        if (!newData.length) {
            return;
        }
        newData = newData.sort(function (a, b) { return a.time - b.time; });
        var oldData = this.cache;
        var newDataFrom = newData[0];
        var newDataTo = newData[newData.length - 1];
        var cacheDataFrom = this.cache[0];
        var cacheDataTo = this.cache[this.cache.length - 1];
        if (!cacheDataFrom || !cacheDataTo) {
            this.cache = newData;
        }
        else if (newDataFrom.time > cacheDataTo.time) {
            this.cache = oldData.concat(newData);
        }
        else if (newDataTo.time < cacheDataFrom.time) {
            this.cache = newData.concat(oldData);
        }
        else {
            var data = void 0;
            if (cacheDataFrom.time < newDataFrom.time) {
                data = oldData.slice(0, this.search(newDataFrom.time)).concat(newData);
            }
            else {
                data = newData;
            }
            if (cacheDataTo.time > newDataTo.time) {
                data = data.concat(oldData.slice(this.search(newDataTo.time) + 1));
            }
            this.cache = data;
        }
    };
    /**
     * 清空数据集
     */
    PlotList.prototype.clear = function () {
        this.cache = [];
    };
    /**
     * 二分查找时间戳对应数据集合中的下标索引
     * @param  {number} time      时间戳（精确到秒）
     * @param  {number} fromIndex 开始查找范围
     * @param  {number} toIndex   结束查找范围
     * @return {number}           下标索引
     */
    PlotList.prototype.bsearch = function (time, fromIndex, toIndex, closest) {
        if (closest === void 0) { closest = true; }
        var pivot = ~~((fromIndex + toIndex) / 2);
        var curTime = this.cache[pivot].time;
        if (fromIndex === toIndex) {
            if (time === curTime) {
                return pivot;
            }
            else if (closest) {
                return pivot;
            }
            else {
                return -1;
            }
        }
        if (curTime === time) {
            return pivot;
        }
        else if (curTime > time) {
            return this.bsearch(time, fromIndex, pivot);
        }
        else {
            return this.bsearch(time, pivot + 1, toIndex);
        }
    };
    return PlotList;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlotList;


/***/ }),

/***/ "./src/datasource/pressuresupport.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var moment = __webpack_require__("./node_modules/moment/moment.js");
var rpc_1 = __webpack_require__("./src/datasource/rpc.ts");
var plotlist_1 = __webpack_require__("./src/datasource/plotlist.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var base_1 = __webpack_require__("./src/datasource/base.ts");
/**
 * 股票数据源
 */
var PressureSupportDatasource = (function (_super) {
    __extends(PressureSupportDatasource, _super);
    /**
     * @constructor
     * @param {string} symbol     股票代码
     * @param {string} resolution 解析度
     */
    function PressureSupportDatasource(symbol, resolution, timeDiff) {
        if (timeDiff === void 0) { timeDiff = 0; }
        _super.call(this, resolution, timeDiff);
        this._symbol = symbol;
        this._plotList = new plotlist_1.default();
    }
    Object.defineProperty(PressureSupportDatasource.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (symbol) {
            this._symbol = symbol;
        },
        enumerable: true,
        configurable: true
    });
    PressureSupportDatasource.prototype.barAt = function (index) {
        return this._plotList.get(index);
    };
    PressureSupportDatasource.prototype.first = function () {
        return this._plotList.first();
    };
    PressureSupportDatasource.prototype.last = function () {
        return this._plotList.last();
    };
    PressureSupportDatasource.prototype.slice = function (start, end) {
        return this._plotList.slice(start, end);
    };
    PressureSupportDatasource.prototype.range = function (from, to) {
        return this._plotList.range(from, to);
    };
    PressureSupportDatasource.prototype.loaded = function () {
        return this._plotList.size();
    };
    PressureSupportDatasource.prototype.search = function (time) {
        return this._plotList.search(time);
    };
    PressureSupportDatasource.prototype.max = function (fromIndex, toIndex) {
        if (toIndex === void 0) { toIndex = this.loaded(); }
        var bars = this.slice(fromIndex, toIndex);
        var max = -Number.MAX_VALUE;
        bars.forEach(function (bar) { return max = bar.pressure > max ? bar.pressure : max; });
        return max;
    };
    PressureSupportDatasource.prototype.min = function (fromIndex, toIndex) {
        if (toIndex === void 0) { toIndex = this.loaded(); }
        var bars = this.slice(fromIndex, toIndex);
        var min = Number.MAX_VALUE;
        bars.forEach(function (bar) { return min = bar.support < min ? bar.support : min; });
        return min;
    };
    /**
     * 请求一段时间范围内的数据
     * @param  {number}               from 开始时间，精确到秒
     * @param  {number}               to   结束时间，精确到秒
     * @return {Promise<IPSBar[]>}      请求到的数据结果
     */
    PressureSupportDatasource.prototype.loadTimeRange = function (from, to) {
        var _this = this;
        var symbol = this._symbol;
        var resolution = this._resolution;
        if (from > to) {
            return Promise.resolve([]);
        }
        var fromDate = moment(from * 1000).format('YYYYMMDD');
        var toDate = moment(to * 1000).format('YYYYMMDD');
        return new Promise(function (resolve, reject) {
            return rpc_1.getPressureSupport(symbol, fromDate, toDate)
                .then(function (data) {
                var bars = [];
                if (resolution === 'D') {
                    bars = data.data.map(function (item) { return ({
                        time: +item.timestamp,
                        pressure: +item.upper_price,
                        support: +item.lower_price,
                    }); });
                }
                else {
                    var stops_1 = constant_1.OPEN_TIME_RANGE.map(function (timeRange) { return timeRange[1]; });
                    var starts_1 = constant_1.OPEN_TIME_RANGE.map(function (timeRange) { return timeRange[0]; });
                    var step_1 = null;
                    var pressure_1;
                    var support_1;
                    switch (_this._resolution) {
                        case '1':
                            step_1 = 1;
                            break;
                        case '5':
                            step_1 = 5;
                            break;
                        case '15':
                            step_1 = 15;
                            break;
                        case '30':
                            step_1 = 30;
                            break;
                        case '60':
                            step_1 = 60;
                            break;
                        default:
                            throw 'unsupported resolution';
                    }
                    data.data.forEach(function (item) {
                        stops_1.forEach(function (stop, i) {
                            var stopHour = stop[0];
                            var stopMinute = stop[1];
                            var startHour = starts_1[i][0];
                            var startMinute = starts_1[i][1];
                            var close = moment((+item.timestamp + stopHour * 3600 + stopMinute * 60) * 1000);
                            var current = moment((+item.timestamp + startHour * 3600 + startMinute * 60) * 1000);
                            pressure_1 = +item.upper_price > 0 ? +item.upper_price : pressure_1;
                            support_1 = +item.lower_price > 0 ? +item.lower_price : support_1;
                            while (!current.add(step_1, 'minute').isAfter(close)) {
                                bars.push({
                                    time: current.toDate().getTime() / 1000,
                                    pressure: pressure_1, support: support_1,
                                });
                            }
                        });
                    });
                }
                if (symbol.toUpperCase() === _this._symbol.toUpperCase() &&
                    resolution === _this._resolution) {
                    _this._plotList.merge(bars);
                    resolve(bars);
                }
                else {
                    reject('response expired');
                }
            })
                .catch(reject);
        });
    };
    /**
     * 清空缓存
     */
    PressureSupportDatasource.prototype.clearCache = function () {
        _super.prototype.clearCache.call(this);
        this._plotList.clear();
    };
    return PressureSupportDatasource;
}(base_1.Datasource));
exports.PressureSupportDatasource = PressureSupportDatasource;


/***/ }),

/***/ "./src/datasource/rpc.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ES6Promise = __webpack_require__("./node_modules/es6-promise/dist/es6-promise.js");
// polyfill es6 Promise API
ES6Promise.polyfill();
__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
var API = 'http://api.quchaogu.com';
var QU_CHAO_GU = 'http://www.quchaogu.com';
/**
 * 获取股票数据
 * @param  {string}  symbol     股票代码
 * @param  {string}  resolution 解析度(分时、5分钟、日K、周K、月k等)
 * @param  {number}  from       开始时间戳（精确到秒）
 * @param  {number}  to         结束时间戳（精确到秒）
 * @return {Promise<any>}
 */
function getStockBars(symbol, resolution, right, from, to) {
    return fetch((QU_CHAO_GU + "/chart/history?symbol=" + symbol + "&resolution=" + resolution)
        + ("&fq=" + right + "&from=" + from + "&to=" + to))
        .then(function (response) { return response.json(); });
}
exports.getStockBars = getStockBars;
function resolveSymbol(symbol) {
    return fetch(QU_CHAO_GU + "/chart/symbols?symbol=" + symbol)
        .then(function (response) { return response.json(); });
}
exports.resolveSymbol = resolveSymbol;
function searchSymbols(keyword) {
    return fetch(QU_CHAO_GU + "/chart/search?query=" + keyword + "&limit=15&type=&exchange=")
        .then(function (response) { return response.json(); });
}
exports.searchSymbols = searchSymbols;
function getServerTime() {
    return fetch(QU_CHAO_GU + "/chart/time")
        .then(function (response) { return response.text(); });
}
exports.getServerTime = getServerTime;
function getStockInfo(symbol) {
    return fetch(QU_CHAO_GU + "/chart/stock/info?code=" + symbol.toLowerCase() + "&ticks_time=0")
        .then(function (response) { return response.json(); });
}
exports.getStockInfo = getStockInfo;
function getCapitalFlow(symbol) {
    return fetch(API + "/stock/moneyflow?code=" + symbol)
        .then(function (response) { return response.json(); });
}
exports.getCapitalFlow = getCapitalFlow;
function getIndexesInfo() {
    return fetch(API + "/chart/index/list")
        .then(function (response) { return response.json(); });
}
exports.getIndexesInfo = getIndexesInfo;
function getRealtimeTools() {
    return fetch(QU_CHAO_GU + "/chart/stock/realtimetool")
        .then(function (response) { return response.json(); });
}
exports.getRealtimeTools = getRealtimeTools;
function getFinancingInfo(symbol) {
    return fetch(QU_CHAO_GU + "/chart/stock/finance?code=" + symbol)
        .then(function (response) { return response.json(); });
}
exports.getFinancingInfo = getFinancingInfo;
/**
 * 根据股票代码获取相关板块列表
 * @param  {string}             symbol 股票代码
 * @return {Promise<any>}        响应
 */
function getPlatesBySymbol(symbol) {
    return fetch(API + "/chart/bankuai/bystock?code=" + symbol)
        .then(function (response) { return response.json(); });
}
exports.getPlatesBySymbol = getPlatesBySymbol;
/**
 * 获取所有板块的数据
 * @param  {'zdf'|'big_amount'|'big_rate'}  key 排序的key
 * @param  {'asc'|'desc'}                   sort 排序方式
 * @param  {number}                         start 起始下标
 * @param  {number}                         count 获取总条数
 * @return {Promise<any>}             响应
 */
function getAllPlates(key, sort, start, count) {
    return fetch(API + "/chart/bankuai/list?key=" + key + "&sort=" + sort + "&start=" + start + "&count=" + count)
        .then(function (response) { return response.json(); });
}
exports.getAllPlates = getAllPlates;
/**
 * 通过板块ID获取股票列表
 * @param  {string}             plateId 板块ID
 * @return {Promise<any>}         响应
 */
function getStockListByPlateId(plateId) {
    return fetch(API + "/chart/bankuai/stocklist?bk_id=" + plateId)
        .then(function (response) { return response.json(); });
}
exports.getStockListByPlateId = getStockListByPlateId;
/**
 * 通过code批量获取股票信息
 * @param  {string[]}           codes code数组
 * @return {Promise<any>}       响应
 */
function getStockListByCodes(codes, key, sort) {
    return fetch(API + "/chart/stock/zixuan?code_list=" + codes.join(',') + "&key=" + key + "&sort=" + sort)
        .then(function (response) { return response.json(); });
}
exports.getStockListByCodes = getStockListByCodes;
/**
 * 获取指数下的股票列表
 * @param  {string}             indexId 指数ID
 * @return {Promise<any>}         响应
 */
function getStockListByIndexId(indexId) {
    return fetch(API + "/chart/index/stocks?index_id=" + indexId)
        .then(function (response) { return response.json(); });
}
exports.getStockListByIndexId = getStockListByIndexId;
function getNonrealtimeTools() {
    return fetch(QU_CHAO_GU + "/chart/stock/nonrealtime")
        .then(function (response) { return response.json(); });
}
exports.getNonrealtimeTools = getNonrealtimeTools;
/**
 * 获取形态技术分析数据
 * @param  {string}       symbol 股票代码
 * @return {Promise<any>}        异步响应
 */
function getPatterns(symbol) {
    return fetch(API + "/chart/common/shape?code=" + symbol + "&type=wave,mhead,whead,hsp,hsb,triangle,dtd")
        .then(function (response) { return response.json(); });
}
exports.getPatterns = getPatterns;
/**
 * 获取压力支撑数据
 * @param  {string}       symbol   股票代码
 * @param  {string}       fromDate 开始日期
 * @param  {string}       toDate   结束日期
 * @return {Promise<any>}          异步响应
 */
function getPressureSupport(symbol, fromDate, toDate) {
    return fetch(API + "/chart/common/pressure?code=" + symbol + "&from_date=" + fromDate + "&to_date=" + toDate)
        .then(function (response) { return response.json(); });
}
exports.getPressureSupport = getPressureSupport;
/**
 * 获取拐点信息
 * @param  {string}       symbol   股票代码
 * @param  {string}       fromDate 开始日期
 * @param  {string}       toDate   结束日期
 * @return {Promise<any>}          异步响应
 */
function getInflectionData(symbol, version, fromDate, toDate) {
    return fetch(API + "/chart/common/shapebytype?code=" + symbol + "&from_date=" + fromDate + "&to_date=" + toDate + "&type=" + (version === 1 ? 'gd' : 'gd_v2'))
        .then(function (response) { return response.json(); });
}
exports.getInflectionData = getInflectionData;
/**
 * 获取分析功能页面所需的数据
 * @param {string} symbol 股票代码
 */
function getAnalysisData(symbol) {
    return fetch(API + "/chart/common/analytics?code=" + symbol)
        .then(function (response) { return response.json(); });
}
exports.getAnalysisData = getAnalysisData;


/***/ }),

/***/ "./src/datasource/stock.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var moment = __webpack_require__("./node_modules/moment/moment.js");
var RPC = __webpack_require__("./src/datasource/rpc.ts");
var plotlist_1 = __webpack_require__("./src/datasource/plotlist.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var base_1 = __webpack_require__("./src/datasource/base.ts");
/**
 * 股票数据源
 */
var StockDatasource = (function (_super) {
    __extends(StockDatasource, _super);
    /**
     * @constructor
     * @param {string} resolution 解析度
     * @param {RightType} right   复权设置
     * @param {number} timeDiff   与服务器的时差
     */
    function StockDatasource(defaultSymbol, resolution, right, timeDiff) {
        if (timeDiff === void 0) { timeDiff = 0; }
        _super.call(this, resolution, timeDiff);
        this._defaultSymbol = defaultSymbol;
        this._right = right;
        this._symbolInfo = null;
        this._plotList = new plotlist_1.default();
    }
    Object.defineProperty(StockDatasource.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (right) {
            this._right = right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StockDatasource.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (symbol) {
            this._symbol = symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StockDatasource.prototype, "defaultSymbol", {
        get: function () {
            return this._defaultSymbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StockDatasource.prototype, "symbolInfo", {
        get: function () {
            return this._symbolInfo;
        },
        set: function (symbolInfo) {
            this._symbol = symbolInfo.symbol;
            this._symbolInfo = symbolInfo;
        },
        enumerable: true,
        configurable: true
    });
    StockDatasource.prototype.barAt = function (index) {
        return this._plotList.get(index);
    };
    StockDatasource.prototype.first = function () {
        return this._plotList.first();
    };
    StockDatasource.prototype.last = function () {
        return this._plotList.last();
    };
    StockDatasource.prototype.slice = function (start, end) {
        return this._plotList.slice(start, end);
    };
    StockDatasource.prototype.range = function (from, to) {
        return this._plotList.range(from, to);
    };
    StockDatasource.prototype.loaded = function () {
        return this._plotList.size();
    };
    StockDatasource.prototype.search = function (time) {
        return this._plotList.search(time);
    };
    StockDatasource.prototype.max = function (fromIndex, toIndex) {
        if (toIndex === void 0) { toIndex = this.loaded(); }
        var bars = this.slice(fromIndex, toIndex);
        var max = -Number.MAX_VALUE;
        bars.forEach(function (bar) { return max = bar.high > max ? bar.high : max; });
        return max;
    };
    StockDatasource.prototype.min = function (fromIndex, toIndex) {
        if (toIndex === void 0) { toIndex = this.loaded(); }
        var bars = this.slice(fromIndex, toIndex);
        var min = Number.MAX_VALUE;
        bars.forEach(function (bar) { return min = bar.low < min ? bar.low : min; });
        return min;
    };
    /**
     * 请求一段时间范围内的数据
     * @param  {number}               from 开始时间，精确到秒
     * @param  {number}               to   结束时间，精确到秒
     * @return {Promise<IStockBar[]>}      请求到的数据结果
     */
    StockDatasource.prototype.loadTimeRange = function (from, to) {
        var _this = this;
        var symbol = this._symbol;
        var resolution = this._resolution;
        var right = this._right;
        if (from > to) {
            return Promise.resolve([]);
        }
        return new Promise(function (resolve, reject) {
            return RPC.getStockBars(symbol, resolution, right, from, to)
                .then(function (data) {
                var stockBars = [];
                data.t.forEach(function (time, index) {
                    var barData = {
                        amount: data.a[index],
                        close: data.c[index],
                        high: data.h[index],
                        low: data.l[index],
                        open: data.o[index],
                        time: data.t[index],
                        volume: data.v[index],
                    };
                    _this._pulseInterval = data.interval;
                    if (data.tr) {
                        barData.turnover = data.tr[index];
                    }
                    if (data.zd) {
                        barData.changerate = data.zd[index];
                    }
                    stockBars.push(barData);
                });
                // 过滤time重复的bar数据
                stockBars = _.unique(stockBars, function (bar) { return bar.time; });
                // 请求期间symbol和resolution都没发生改变，则merge
                if (symbol.toUpperCase() === _this._symbol.toUpperCase() &&
                    resolution === _this._resolution) {
                    _this._plotList.merge(stockBars);
                    resolve(stockBars);
                }
                else {
                    reject('response expired');
                }
            })
                .catch(reject);
        });
    };
    /**
     * 从数据源中加载历史数据集
     * @param  {number}  requiredNum 加载的条数
     * @param  {number}  loaded      已经加载的条数
     * @return {Promise}
     */
    StockDatasource.prototype.loadHistory = function (requiredNum, loaded, lastRequestFromTime) {
        var _this = this;
        if (loaded === void 0) { loaded = 0; }
        if (!this._hasMoreHistory) {
            return Promise.resolve();
        }
        var toTime = lastRequestFromTime ?
            lastRequestFromTime : this._plotList.first() ?
            this._plotList.first().time : this.now() + 24 * 3600;
        var fromTime = 0;
        var maxTimeSpan = 0;
        switch (this._resolution) {
            case '1':
                fromTime = toTime - ~~(requiredNum / constant_1.OPEN_MINITES_COUNT + 1) * 24 * 3600;
                maxTimeSpan = 10 * 24 * 3600;
                break;
            case '5':
                fromTime = toTime - ~~(requiredNum / constant_1.OPEN_MINITES_COUNT * 5 + 1) * 24 * 3600;
                maxTimeSpan = 20 * 24 * 3600;
                break;
            case '15':
                fromTime = toTime - ~~(requiredNum / constant_1.OPEN_MINITES_COUNT * 15 + 1) * 24 * 3600;
                maxTimeSpan = 45 * 24 * 3600;
                break;
            case '30':
                fromTime = toTime - ~~(requiredNum / constant_1.OPEN_MINITES_COUNT * 30 + 1) * 24 * 3600;
                maxTimeSpan = 90 * 24 * 3600;
                break;
            case '60':
                fromTime = toTime - ~~(requiredNum / constant_1.OPEN_MINITES_COUNT * 60 + 1) * 24 * 3600;
                maxTimeSpan = 180 * 24 * 3600;
                break;
            case 'D':
                fromTime = toTime - 2 * requiredNum * 24 * 3600;
                maxTimeSpan = 360 * 24 * 3600;
                break;
            case 'W':
                fromTime = toTime - 1.5 * requiredNum * 7 * 24 * 3600;
                maxTimeSpan = 360 * 24 * 3600;
                break;
            case 'M':
                fromTime = toTime - 1.2 * requiredNum * 30 * 24 * 3600;
                maxTimeSpan = 360 * 24 * 3600;
                break;
            default:
                throw new Error('unsupport resolution');
        }
        // 修整fromTime，若fromTime在休市期间，则将时间前推以跳过休市时间，从而避免无效请求
        var fromMoment = moment(fromTime * 1000);
        while (constant_1.OPEN_DAYS.indexOf(fromMoment.day()) === -1) {
            fromMoment.subtract(1, 'days');
        }
        fromTime = ~~(fromMoment.toDate().getTime() / 1000);
        return new Promise(function (resolve, reject) {
            return _this.loadTimeRange(fromTime, toTime)
                .then(function (stockBars) {
                var requestToTime = _this._plotList.first() ?
                    _this._plotList.first().time : _this.now();
                var count = stockBars.length;
                loaded += count;
                // 如果plotList的size已经大于requiredNum，则已经请求足够多的数据了，可以结束请求
                if (loaded >= requiredNum) {
                    resolve();
                }
                else if (requestToTime - fromTime >= maxTimeSpan) {
                    _this._hasMoreHistory = false;
                    resolve();
                }
                else {
                    _this.loadHistory(requiredNum, loaded, fromTime)
                        .then(resolve)
                        .catch(reject);
                }
            })
                .catch(reject);
        });
    };
    StockDatasource.prototype.resolveSymbol = function (symbol) {
        var _this = this;
        return RPC.resolveSymbol(symbol)
            .then(function (data) {
            if (!data.description) {
                return _this.resolveSymbol(_this._defaultSymbol);
            }
            else {
                _this._symbolInfo = {
                    description: data.description,
                    exchange: data['exchange-listed'],
                    symbol: data.symbol,
                    type: data.type,
                };
                _this._symbol = data.symbol;
            }
        });
    };
    StockDatasource.prototype.searchSymbols = function (keyword) {
        return new Promise(function (resolve) {
            return RPC.searchSymbols(keyword)
                .then(function (data) {
                return resolve(data.map(function (symbol) { return ({
                    description: symbol.description,
                    exchange: symbol.exchange,
                    symbol: symbol.symbol,
                    type: symbol.type,
                }); }));
            });
        });
    };
    /**
     * 清空缓存
     */
    StockDatasource.prototype.clearCache = function () {
        _super.prototype.clearCache.call(this);
        this._plotList.clear();
    };
    return StockDatasource;
}(base_1.Datasource));
exports.StockDatasource = StockDatasource;


/***/ }),

/***/ "./src/datasource/studyconfig.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var studyhelper_1 = __webpack_require__("./src/datasource/studyhelper.ts");
var SUPPORT_ALL_RESOLUTION = ['1', '5', '15', '30', '60', 'D', 'W', 'M'];
exports.studyConfig = {
    'inflection': {
        adapter: function (bar) {
            return [0, bar.time, bar.type, bar.val, bar.prob];
        },
        output: function (data, index, input) {
            return [
                [0, data[1], data[2], data[3], data[4]],
            ];
        },
        supportResolutions: ['D'],
        priority: 1,
        isPrice: true,
        isRemovable: true,
        noLegend: true,
        datasourceType: 'remote',
        plots: [{
                shape: 'inflection',
            }],
    },
    'inflection2': {
        adapter: function (bar) {
            return [0, bar.time, bar.type, bar.val, bar.prob];
        },
        output: function (data, index, input) {
            return [
                [0, data[1], data[2], data[3], data[4]],
            ];
        },
        supportResolutions: ['D'],
        priority: 1,
        isPrice: true,
        isRemovable: true,
        noLegend: true,
        datasourceType: 'remote',
        plots: [{
                shape: 'inflection2',
            }],
    },
    '压力支撑': {
        adapter: function (bar) {
            return [0, bar.time, bar.pressure, bar.support];
        },
        output: function (data, index, input) {
            var time = data[1];
            return [
                [0, time, data[2]],
                [0, time, data[3]],
            ];
        },
        supportResolutions: ['1', '5', '15', '30', '60', 'D'],
        priority: 998,
        isPrice: true,
        isRemovable: false,
        noLegend: false,
        datasourceType: 'remote',
        plots: [
            {
                shape: 'line',
                style: {
                    color: '#ff9c00',
                    lineWidth: 1,
                },
            }, {
                shape: 'line',
                style: {
                    color: '#2b89cc',
                    lineWidth: 1,
                },
            },
        ],
    },
    '均价': {
        adapter: function (bar) {
            return [0, bar.time, bar.amount, bar.volume];
        },
        output: function (data, index, input) {
            var ma = studyhelper_1.$MA(index);
            return ma !== null ? [
                [
                    0,
                    data[1],
                    ma,
                ],
            ] : null;
        },
        supportResolutions: ['1'],
        priority: 999,
        isPrice: true,
        isRemovable: false,
        noLegend: false,
        datasourceType: 'local',
        plots: [
            {
                shape: 'line',
                style: {
                    color: 'orange',
                    lineWidth: 1,
                },
            },
        ],
    },
    'MA': {
        adapter: function (bar) {
            return [0, bar.time, bar.close];
        },
        input: [5],
        inputLabels: ['长度'],
        supportResolutions: ['5', '15', '30', '60', 'D', 'W', 'M'],
        priority: 999,
        isPrice: true,
        isRemovable: false,
        noLegend: false,
        datasourceType: 'local',
        output: function (data, index, input) {
            var n = input[0];
            var ma = studyhelper_1.MA(index, n, studyhelper_1.C);
            return ma !== null ? [
                [
                    0,
                    data[1],
                    ma,
                ],
            ] : null;
        },
        plots: [
            {
                shape: 'line',
                style: {
                    color: '#000000',
                    lineWidth: 1,
                },
            },
        ],
    },
    'VOLUME': {
        adapter: function (bar) {
            return [0, bar.time, bar.volume, bar.close < bar.open];
        },
        input: [],
        inputLabels: [],
        supportResolutions: SUPPORT_ALL_RESOLUTION,
        priority: 999,
        isPrice: false,
        isRemovable: false,
        noLegend: true,
        datasourceType: 'local',
        output: function (data) {
            return [
                data,
            ];
        },
        plots: [
            {
                shape: 'column',
                style: {
                    color: '#ff524f',
                    colorDown: '#2bbe65',
                    scale: 0.25,
                    opacity: .2,
                },
            },
        ],
    },
    'BOLL': {
        adapter: function (bar) {
            return [0, bar.time, bar.close];
        },
        input: [20, 2],
        inputLabels: [],
        supportResolutions: SUPPORT_ALL_RESOLUTION,
        priority: 1,
        isPrice: true,
        isRemovable: true,
        noLegend: false,
        datasourceType: 'local',
        output: function (data, index, input) {
            // 0: posX, 1: time, 2: value
            if (index - input[0] < 0) {
                return null;
            }
            var n = input[0];
            var ma = studyhelper_1.MA(index, n, studyhelper_1.C);
            var mb = studyhelper_1.STD(index, n, studyhelper_1.C);
            var time = data[1];
            var ub = ma + input[1] * mb;
            var lb = ma - input[1] * mb;
            return [
                [
                    0,
                    time,
                    ma,
                ],
                [
                    0,
                    time,
                    ub,
                ],
                [
                    0,
                    time,
                    lb,
                ],
                [
                    0,
                    time,
                    ub,
                    lb,
                ],
            ];
        },
        plots: [
            {
                shape: 'line',
                style: {
                    color: '#FF0000',
                    lineWidth: 1,
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#0000FF',
                    lineWidth: 1,
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#0000FF',
                    lineWidth: 1,
                },
            },
            {
                shape: 'band',
                style: {
                    color: '#000080',
                    noLegend: true,
                    opacity: .1,
                },
            },
        ],
    },
    'MACD': {
        adapter: function (bar) {
            return [0, bar.time, bar.close];
        },
        input: [12, 26, 9],
        inputLabels: [],
        supportResolutions: SUPPORT_ALL_RESOLUTION,
        priority: 1,
        isPrice: false,
        isRemovable: true,
        noLegend: false,
        datasourceType: 'local',
        output: function (data, index, input) {
            // 0: posX, 1: time, 2: value
            var fast = input[0];
            var slow = input[1];
            var signal = input[2];
            var time = data[1];
            var DIF = studyhelper_1.EMA(index, fast, studyhelper_1.C) - studyhelper_1.EMA(index, slow, studyhelper_1.C);
            var DIFT = function (c) {
                return studyhelper_1.EMA(c, fast, studyhelper_1.C) - studyhelper_1.EMA(c, slow, studyhelper_1.C);
            };
            var DEA = studyhelper_1.EMA(index, signal, DIFT);
            var MACD = (DIF - DEA) * 2;
            return [
                [0, time, MACD],
                [0, time, DIF],
                [0, time, DEA],
            ];
        },
        plots: [
            {
                shape: 'histogram',
                style: {
                    color: 'rgb(255, 0, 110)',
                    colorDown: 'rgb(255, 0, 110)',
                    histogramBase: 0,
                },
            },
            {
                shape: 'line',
                style: {
                    color: 'rgb(0, 148, 255)',
                },
            },
            {
                shape: 'line',
                style: {
                    color: 'rgb(255, 106, 0)',
                },
            },
        ],
    },
    'KDJ': {
        adapter: function (bar) {
            return [0, bar.time, bar.close, bar.high, bar.low];
        },
        input: [9, 3, 3],
        inputLabels: [],
        supportResolutions: SUPPORT_ALL_RESOLUTION,
        priority: 1,
        isPrice: false,
        isRemovable: true,
        noLegend: false,
        datasourceType: 'local',
        output: function (data, index, input) {
            var signal = input[0];
            var m1 = input[1];
            var m2 = input[2];
            var RSV = function (c) {
                return (studyhelper_1.C(c) - studyhelper_1.LLV(c, signal, studyhelper_1.L)) /
                    (studyhelper_1.HHV(c, signal, studyhelper_1.H) - studyhelper_1.LLV(c, signal, studyhelper_1.L)) * 100;
            };
            var K = function (c) {
                return studyhelper_1.SMA(c, m1, 1, RSV);
            };
            var k = K(index);
            var d = studyhelper_1.SMA(index, m2, 1, K);
            var j = 3 * k - 2 * d;
            var time = data[1];
            return [
                [0, time, k],
                [0, time, d],
                [0, time, j],
            ];
        },
        plots: [
            {
                shape: 'line',
                style: {
                    color: '#0000FF',
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#FFA600',
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#FF00FF',
                },
            },
        ],
    },
    'RSI': {
        adapter: function (bar) {
            return [0, bar.time, bar.close];
        },
        input: [6, 12, 24],
        inputLabels: [],
        supportResolutions: SUPPORT_ALL_RESOLUTION,
        priority: 1,
        isPrice: false,
        isRemovable: true,
        noLegend: false,
        datasourceType: 'local',
        output: function (data, index, input) {
            if (index - Math.max.apply(Math, input) < 0) {
                return null;
            }
            var r1 = input[0], r2 = input[1], r3 = input[2];
            var time = data[1];
            var POS = function (c) {
                return Math.max(studyhelper_1.C(c) - studyhelper_1.LC(c), 0);
            };
            var ABS = function (c) {
                return Math.abs(studyhelper_1.C(c) - studyhelper_1.LC(c));
            };
            return [
                [0, time, studyhelper_1.SMA(index, r1, 1, POS) / studyhelper_1.SMA(index, r1, 1, ABS) * 100],
                [0, time, studyhelper_1.SMA(index, r2, 1, POS) / studyhelper_1.SMA(index, r2, 1, ABS) * 100],
                [0, time, studyhelper_1.SMA(index, r3, 1, POS) / studyhelper_1.SMA(index, r3, 1, ABS) * 100],
            ];
        },
        plots: [
            {
                shape: 'line',
                style: {
                    color: '#f8b439',
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#1b96ff',
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#ea45b3',
                },
            },
        ],
    },
    'CCI': {
        adapter: function (bar) {
            return [0, bar.time, bar.close, bar.high, bar.low];
        },
        input: [14],
        inputLabels: [],
        supportResolutions: SUPPORT_ALL_RESOLUTION,
        priority: 1,
        isPrice: false,
        isRemovable: true,
        noLegend: false,
        datasourceType: 'local',
        output: function (data, index, input) {
            var len = input[0];
            if (index - len < 0) {
                return null;
            }
            var time = data[1];
            var TYP = function (c) {
                return (studyhelper_1.C(c) + studyhelper_1.H(c) + studyhelper_1.L(c)) / 3;
            };
            return [
                [
                    0,
                    time,
                    (TYP(index) - studyhelper_1.MA(index, len, TYP)) / (0.015 * studyhelper_1.AVEDEV(index, len, TYP)),
                ],
            ];
        },
        plots: [
            {
                shape: 'line',
                style: {
                    color: 'rgba(60, 120, 216, 1)',
                },
            },
        ],
    },
    'CR': {
        adapter: function (bar) {
            return [0, bar.time, bar.close, bar.high, bar.low];
        },
        input: [26, 5, 10, 20],
        inputLabels: [],
        supportResolutions: SUPPORT_ALL_RESOLUTION,
        priority: 1,
        isPrice: false,
        isRemovable: true,
        noLegend: false,
        datasourceType: 'local',
        output: function (data, index, input) {
            var n = input[0];
            var ma1 = input[1];
            var ma2 = input[2];
            var ma3 = input[3];
            if (index - n < 0) {
                return null;
            }
            var time = data[1];
            var MID = function (c) {
                return (studyhelper_1.C(c) + studyhelper_1.H(c) + studyhelper_1.L(c)) / 3;
            };
            var POS = function (c) {
                return Math.max(0, studyhelper_1.H(c) - studyhelper_1.REF(c, 1, MID));
            };
            var NEG = function (c) {
                return Math.max(0, studyhelper_1.REF(c, 1, MID) - studyhelper_1.L(c));
            };
            var CR = function (c) {
                var cacheObj = studyhelper_1.getContext().cacheObj;
                var cacheKey = "CR" + c;
                if (cacheObj[cacheKey]) {
                    return cacheObj[cacheKey];
                }
                var cr = studyhelper_1.SUM(c, n, POS) / studyhelper_1.SUM(c, n, NEG) * 100;
                cacheObj[cacheKey] = cr;
                return cr;
            };
            var MA1 = function (c) {
                return studyhelper_1.MA(c, ma1, CR);
            };
            var MA2 = function (c) {
                return studyhelper_1.MA(c, ma2, CR);
            };
            var MA3 = function (c) {
                return studyhelper_1.MA(c, ma3, CR);
            };
            return [
                [0, time, CR(index)],
                index - n - ma1 > 0 ? [0, time, studyhelper_1.REF(index, ma1 / 2.5 + 1, MA1)] : null,
                index - n - ma2 > 0 ? [0, time, studyhelper_1.REF(index, ma2 / 2.5 + 1, MA2)] : null,
                index - n - ma3 > 0 ? [0, time, studyhelper_1.REF(index, ma3 / 2.5 + 1, MA3)] : null,
            ];
        },
        plots: [
            {
                shape: 'line',
                style: {
                    color: '#0000FF',
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#ff9900',
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#ff00ff',
                },
            },
            {
                shape: 'line',
                style: {
                    color: '#00ff00',
                },
            },
        ],
    },
};


/***/ }),

/***/ "./src/datasource/studyhelper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var moment = __webpack_require__("./node_modules/moment/moment.js");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var context = null;
function setContext(datasource, adapter) {
    context = {
        datasource: datasource,
        adapter: adapter,
        cacheObj: {},
    };
}
exports.setContext = setContext;
function clearContext() {
    context = null;
}
exports.clearContext = clearContext;
function getContext() {
    return context;
}
exports.getContext = getContext;
exports.H = function (c) {
    var datasource = context.datasource, adapter = context.adapter;
    return adapter(datasource.barAt(c))[3];
};
exports.L = function (c) {
    var datasource = context.datasource, adapter = context.adapter;
    return adapter(datasource.barAt(c))[4];
};
exports.C = function (c) {
    var datasource = context.datasource, adapter = context.adapter;
    return adapter(datasource.barAt(c))[2];
};
exports.LC = function (c) {
    return REF(c, 1, exports.C);
};
/**
 * 获取最近一个交易日的开盘时间对应的数据bar索引
 * @param  {Datasource} datasource 数据源
 * @return {number}                数据Bar的索引
 */
function getLastOpenIndex(datasource) {
    var m = moment(datasource.last().time * 1000)
        .hour(constant_1.OPEN_HOUR)
        .minute(constant_1.OPEN_MINUTE);
    return datasource.search(~~(m.toDate().getTime() / 1000));
}
/**
 * 均价
 * @param  {number} c 当前的索引标号
 * @return {number}   均值
 */
function $MA(c) {
    var datasource = context.datasource, adapter = context.adapter, cacheObj = context.cacheObj;
    var cacheKey = "$ma_openIndex";
    var openIndex = cacheObj[cacheKey] || getLastOpenIndex(datasource);
    cacheObj[cacheKey] = openIndex;
    if (c < openIndex || openIndex === -1) {
        return null;
    }
    var amount = 0;
    var volume = 0;
    for (var i = openIndex, data = void 0; i <= c; i++) {
        data = adapter(datasource.barAt(i));
        amount += data[2];
        volume += data[3] * 100;
    }
    return amount / volume;
}
exports.$MA = $MA;
/**
 * 均线
 * @param  {number} c    当前的索引标号
 * @param  {number} n    均线参数，5日均线，10日均线等
 * @param  {Attr}   attr
 * @return {number}      均值
 */
function MA(c, n, attr) {
    var datasource = context.datasource, adapter = context.adapter;
    var start = c - n + 1;
    var end = c + 1;
    var ma = 0;
    if (start < 0) {
        return null;
    }
    for (var i = start; i < end; i++) {
        ma += attr(i);
    }
    return ma / (end - start);
}
exports.MA = MA;
function LLV(c, n, attr) {
    var start = c - n + 1 < 0 ? 0 : c - n + 1;
    var end = c + 1;
    var min = Number.MAX_VALUE;
    for (var i = start, val = void 0; i < end; i++) {
        val = attr(i);
        if (val < min) {
            min = val;
        }
    }
    return min;
}
exports.LLV = LLV;
function HHV(c, n, attr) {
    var start = c - n + 1 < 0 ? 0 : c - n + 1;
    var end = c + 1;
    var max = -Number.MAX_VALUE;
    for (var i = start, val = void 0; i < end; i++) {
        val = attr(i);
        if (val > max) {
            max = val;
        }
    }
    return max;
}
exports.HHV = HHV;
function REF(c, n, attr) {
    if (c - 1 < 0) {
        return null;
    }
    else {
        return attr(c - n);
    }
}
exports.REF = REF;
function SUM(c, n, attr) {
    var start = c - n + 1 < 0 ? 0 : c - n + 1;
    var end = c + 1;
    var sum = 0;
    for (var i = start; i < end; i++) {
        sum += attr(i);
    }
    return sum;
}
exports.SUM = SUM;
function STD(c, n, attr) {
    var start = c - n + 1;
    var end = c + 1;
    if (start < 0) {
        return null;
    }
    var ma = 0;
    for (var i = start; i < end; i++) {
        ma += attr(i);
    }
    ma /= end - start;
    var md = 0;
    for (var i = start; i < end; i++) {
        md += Math.pow(attr(i) - ma, 2);
    }
    return Math.sqrt(md / (end - start));
}
exports.STD = STD;
function AVEDEV(c, n, attr) {
    var start = c - n + 1;
    var end = c + 1;
    if (start < 0) {
        return null;
    }
    var ma = 0;
    for (var i = start; i < end; i++) {
        ma += attr(i);
    }
    ma /= end - start;
    var dev = 0;
    for (var i = start; i < end; i++) {
        dev += Math.abs(attr(i) - ma);
    }
    return dev / (end - start);
}
exports.AVEDEV = AVEDEV;
function EMA(c, n, attr) {
    var cacheObj = context.cacheObj;
    var hash = attr.toString();
    var cacheKey = "ema" + hash + n + "_" + c;
    var prevKey = "ema" + hash + n + "_" + (c - 1);
    if (typeof cacheObj[cacheKey] === 'number') {
        return cacheObj[cacheKey];
    }
    if (typeof cacheObj[prevKey] === 'number') {
        return cacheObj[cacheKey] =
            2 / (n + 1) * (attr(c) - cacheObj[prevKey]) + cacheObj[prevKey];
    }
    // 回溯5倍的n，过小的倍数会导致计算精确度不够
    var start = c - n * 5 < 0 ? 0 : c - n * 5;
    var end = c + 1;
    var ema = 0;
    for (var i = start + 1; i < end; i++) {
        ema = 2 / (n + 1) * (attr(i) - ema) + ema;
    }
    cacheObj[cacheKey] = ema;
    return ema;
}
exports.EMA = EMA;
function SMA(c, n, w, attr) {
    var cacheObj = context.cacheObj;
    var hash = attr.toString();
    var cacheKey = "sma" + hash + n + "_" + c;
    var prevKey = "sma" + hash + n + "_" + (c - 1);
    if (typeof cacheObj[cacheKey] === 'number') {
        return cacheObj[cacheKey];
    }
    if (cacheObj[prevKey]) {
        return cacheObj[cacheKey] =
            (w * attr(c) + (n - w) * cacheObj[prevKey]) / n;
    }
    // 回溯8倍的n，过小的倍数会导致计算精确度不够
    var start = c - n * 8 < 0 ? 0 : c - n * 8;
    var end = c + 1;
    var sma = 50;
    for (var i = start + 1; i < end; i++) {
        sma = (w * attr(i) + (n - w) * sma) / n;
    }
    cacheObj[cacheKey] = sma;
    return sma;
}
exports.SMA = SMA;


/***/ }),

/***/ "./src/graphic/axisx.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var util_1 = __webpack_require__("./src/util/index.ts");
var AxisXRenderer = (function () {
    function AxisXRenderer(axis) {
        this._axis = axis;
    }
    AxisXRenderer.prototype.draw = function () {
        var axis = this._axis;
        var ctx = axis.ctx;
        var width = axis.width;
        var height = axis.height;
        var timeBars = axis.getVisibleTimeBars();
        var cursorPoint = axis.crosshair.point;
        ctx.strokeStyle = '#999999';
        ctx.lineWidth = 1;
        ctx.translate(0.5, 0.5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.stroke();
        ctx.font = '10px ans-serif';
        ctx.fillStyle = '#999999';
        ctx.textAlign = 'center';
        var tickmarks = axis.tickmark.getTickMarksByTimeBars(timeBars);
        for (var i = 0, len = tickmarks.length; i < len; i++) {
            var tickmark = tickmarks[i];
            ctx.moveTo(~~tickmark.x, 0);
            ctx.lineTo(~~tickmark.x, 5);
            ctx.fillText(tickmark.time, tickmark.x, 19);
        }
        ctx.stroke();
        ctx.closePath();
        if (cursorPoint) {
            var timeBar = axis.findTimeBarByX(cursorPoint.x);
            if (timeBar) {
                var date = new Date(timeBar.time * 1000);
                var margin = 8;
                var dateStr = '';
                var textMetrics = null;
                if (axis.datasource.resolution >= 'D') {
                    dateStr = date.getFullYear() + '-' +
                        util_1.pad(date.getMonth() + 1 + '', 2) + '-' +
                        util_1.pad(date.getDate() + '', 2);
                }
                else {
                    dateStr = date.getFullYear() + '-' +
                        util_1.pad(date.getMonth() + 1 + '', 2) + '-' +
                        util_1.pad(date.getDate() + '', 2) + ' ' +
                        util_1.pad(date.getHours() + '', 2) + ':' +
                        util_1.pad(date.getMinutes() + '', 2);
                }
                textMetrics = ctx.measureText(dateStr);
                ctx.fillStyle = '#333333';
                ctx.fillRect(timeBar.x - textMetrics.width / 2 - margin / 2, 0, textMetrics.width + margin, height);
                ctx.fillStyle = '#999999';
                ctx.fillText(dateStr, timeBar.x, 19);
            }
        }
    };
    return AxisXRenderer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AxisXRenderer;


/***/ }),

/***/ "./src/graphic/axisy.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AxisYRenderer = (function () {
    function AxisYRenderer(axis) {
        this._axis = axis;
    }
    AxisYRenderer.prototype.draw = function () {
        var axis = this._axis;
        var chart = axis.chart;
        var ctx = axis.ctx;
        var width = axis.width;
        var height = axis.height;
        var axisY = axis;
        var cursorPoint = axis.crosshair.point;
        var hover = axis.crosshair.chart.hover;
        var margin = 8;
        ctx.strokeStyle = '#999999';
        ctx.lineWidth = 1;
        ctx.translate(0.5, 0.5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, height);
        ctx.font = '10px ans-serif';
        ctx.fillStyle = '#999999';
        ctx.textAlign = 'left';
        var tickmarks = axisY.tickmark.getTickMarksByTimeBars();
        for (var i = 0, len = tickmarks.length; i < len; i++) {
            var tickmark = tickmarks[i];
            ctx.moveTo(0, ~~tickmark.y);
            ctx.lineTo(5, ~~tickmark.y);
            ctx.fillText(tickmark.value.toFixed(2).toString(), 10, tickmark.y + 4);
        }
        ctx.closePath();
        ctx.stroke();
        if (chart.datasource.resolution > '1') {
            chart.graphs.forEach(function (graph) {
                return graph.plots.forEach(function (plot) {
                    return plot.priceLabels.forEach(function (priceLabel) {
                        var y = ~~axis.getYByValue(priceLabel.val);
                        ctx.fillStyle = priceLabel.color;
                        ctx.fillRect(0, y - 6 - margin / 2, width + margin, 12 + margin);
                        ctx.fillStyle = '#ffffff';
                        ctx.fillText(priceLabel.val.toFixed(2).toString(), 10, y + 4);
                    });
                });
            });
        }
        if (cursorPoint && hover && axis.range) {
            var y = cursorPoint.y;
            ctx.fillStyle = '#333333';
            ctx.fillRect(0, y - 6 - margin / 2, width + margin, 12 + margin);
            ctx.fillStyle = '#999999';
            ctx.fillText(axis.getValueByY(y).toFixed(2).toString(), 10, ~~(y + 4));
        }
    };
    return AxisYRenderer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AxisYRenderer;


/***/ }),

/***/ "./src/graphic/crosshair.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var CrosshairRenderer = (function () {
    function CrosshairRenderer(model) {
        this._model = model;
    }
    CrosshairRenderer.prototype.draw = function () {
        var model = this._model;
        var chart = model.chart;
        var ctx = chart.topCtx;
        var point = model.point;
        var height = chart.height;
        var width = chart.width;
        var isEditMode = chart.chartLayout.isEditMode;
        if (!point) {
            return;
        }
        var bar = chart.axisX.findTimeBarByX(point.x);
        ctx.save();
        ctx.strokeStyle = isEditMode ? '#a000a0' : '#999999';
        ctx.translate(0.5, 0.5);
        if (ctx.setLineDash) {
            ctx.setLineDash([2, 4]);
        }
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (bar) {
            ctx.moveTo(~~bar.x, 0);
            ctx.lineTo(~~bar.x, ~~height);
            ctx.stroke();
        }
        if (chart.hover && chart.axisY.range) {
            ctx.moveTo(0, ~~point.y);
            ctx.lineTo(~~width, ~~point.y);
            ctx.stroke();
        }
        ctx.closePath();
        if (isEditMode && chart.hover) {
            ctx.fillStyle = '#a000a0';
            ctx.beginPath();
            ctx.arc(~~bar.x, ~~point.y, 3, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();
    };
    return CrosshairRenderer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CrosshairRenderer;


/***/ }),

/***/ "./src/graphic/diagram/band.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var basechart_1 = __webpack_require__("./src/graphic/diagram/basechart.ts");
var PLOT_DATA;
(function (PLOT_DATA) {
    PLOT_DATA[PLOT_DATA["X"] = 0] = "X";
    PLOT_DATA[PLOT_DATA["TIME"] = 1] = "TIME";
    PLOT_DATA[PLOT_DATA["UP"] = 2] = "UP";
    PLOT_DATA[PLOT_DATA["DOWN"] = 3] = "DOWN";
})(PLOT_DATA || (PLOT_DATA = {}));
var DEFAULT_STYLE = {
    color: '#000080',
    opacity: .3,
};
var BandRenderer = (function (_super) {
    __extends(BandRenderer, _super);
    function BandRenderer(plotModel, style) {
        _super.call(this, plotModel, _.defaults(style, DEFAULT_STYLE));
    }
    BandRenderer.prototype.hitTest = function () {
        return false;
    };
    BandRenderer.prototype.draw = function (ctx) {
        var plot = this._plotModel;
        var bars = plot.getVisibleBars();
        if (!bars.length) {
            return;
        }
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        ctx.globalAlpha = this.style.opacity;
        ctx.fillStyle = this.style.color;
        ctx.beginPath();
        var len = bars.length;
        if (len) {
            var bar = bars[0];
            ctx.moveTo(bar[PLOT_DATA.X], axisY.getYByValue(bar[PLOT_DATA.UP], rangeY));
        }
        for (var i = 1; i < len; i++) {
            var bar = bars[i];
            ctx.lineTo(bar[PLOT_DATA.X], axisY.getYByValue(bar[PLOT_DATA.UP], rangeY));
        }
        for (var i = len - 1; i >= 0; i--) {
            var bar = bars[i];
            ctx.lineTo(bar[PLOT_DATA.X], axisY.getYByValue(bar[PLOT_DATA.DOWN], rangeY));
        }
        ctx.closePath();
        ctx.fill();
    };
    BandRenderer.prototype.calcRangeY = function () {
        var bars = this._plotModel.getVisibleBars();
        if (!bars.length) {
            return null;
        }
        var range = {
            max: -Number.MAX_VALUE,
            min: Number.MAX_VALUE,
        };
        return bars.reduce(function (prev, cur) {
            var bar = cur;
            if (bar[PLOT_DATA.UP] < prev.min) {
                prev.min = bar[PLOT_DATA.UP];
            }
            if (bar[PLOT_DATA.DOWN] > prev.max) {
                prev.max = bar[PLOT_DATA.DOWN];
            }
            return prev;
        }, range);
    };
    BandRenderer.prototype.getSelectionYByBar = function (bar) {
        return null;
    };
    return BandRenderer;
}(basechart_1.BaseChartRenderer));
exports.BandRenderer = BandRenderer;


/***/ }),

/***/ "./src/graphic/diagram/basechart.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PLOT_DATA;
(function (PLOT_DATA) {
    PLOT_DATA[PLOT_DATA["X"] = 0] = "X";
    PLOT_DATA[PLOT_DATA["TIME"] = 1] = "TIME";
    PLOT_DATA[PLOT_DATA["VALUE"] = 2] = "VALUE";
})(PLOT_DATA || (PLOT_DATA = {}));
var BaseChartRenderer = (function () {
    function BaseChartRenderer(plotModel, style) {
        this._plotModel = plotModel;
        this._style = style;
    }
    Object.defineProperty(BaseChartRenderer.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (style) {
            this._style = style;
        },
        enumerable: true,
        configurable: true
    });
    BaseChartRenderer.prototype.drawSelection = function () {
        var plot = this._plotModel;
        var graph = plot.graph;
        var datasource = graph.datasource;
        var chart = graph.chart;
        var ctx = chart.ctx;
        var axisX = chart.axisX;
        var span = ~~(60 / axisX.barWidth + 0.5);
        var bars = plot.getVisibleBars();
        if (!bars.length) {
            return;
        }
        var start = (datasource.loaded() - datasource.search(bars[0][PLOT_DATA.TIME])) % span;
        for (var i = start, len = bars.length, bar = void 0, y = void 0; i < len; i += span) {
            bar = bars[i];
            y = this.getSelectionYByBar(bar);
            if (!y) {
                return;
            }
            ctx.beginPath();
            ctx.arc(bar[PLOT_DATA.X], y, 3, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = '#D6D6D6';
            ctx.strokeStyle = '#6B6B6B';
            ctx.fill();
            ctx.stroke();
        }
    };
    return BaseChartRenderer;
}());
exports.BaseChartRenderer = BaseChartRenderer;


/***/ }),

/***/ "./src/graphic/diagram/candle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var basechart_1 = __webpack_require__("./src/graphic/diagram/basechart.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var PLOT_DATA;
(function (PLOT_DATA) {
    PLOT_DATA[PLOT_DATA["X"] = 0] = "X";
    PLOT_DATA[PLOT_DATA["TIME"] = 1] = "TIME";
    PLOT_DATA[PLOT_DATA["OPEN"] = 2] = "OPEN";
    PLOT_DATA[PLOT_DATA["CLOSE"] = 3] = "CLOSE";
    PLOT_DATA[PLOT_DATA["HIGH"] = 4] = "HIGH";
    PLOT_DATA[PLOT_DATA["LOW"] = 5] = "LOW";
})(PLOT_DATA || (PLOT_DATA = {}));
var DEFAULT_STYLE = {
    color: 'rgb(215, 84, 66)',
    colorDown: 'rgb(107, 165, 131)',
};
var CandleChartRenderer = (function (_super) {
    __extends(CandleChartRenderer, _super);
    function CandleChartRenderer(plotModel, style) {
        _super.call(this, plotModel, _.defaults(style, DEFAULT_STYLE));
    }
    CandleChartRenderer.prototype.hitTest = function () {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var curBar = plot.getCurBar();
        if (!curBar) {
            return false;
        }
        var point = chart.crosshair.point;
        var candleWidth = ~~(axisX.barWidth * 0.8 + 0.5) % 2 === 0 ?
            ~~(axisX.barWidth * 0.8 + 0.5) - 1 : ~~(axisX.barWidth * 0.8 + 0.5);
        var x0 = point.x;
        var y0 = point.y;
        var x1 = ~~curBar[PLOT_DATA.X] - ~~(candleWidth / 2) - constant_1.HIT_TEST_TOLERANCE;
        var y1 = ~~axisY.getYByValue(curBar[PLOT_DATA.HIGH], rangeY) - constant_1.HIT_TEST_TOLERANCE;
        var x2 = x1 + candleWidth + constant_1.HIT_TEST_TOLERANCE;
        var y2 = ~~axisY.getYByValue(curBar[PLOT_DATA.LOW], rangeY) + constant_1.HIT_TEST_TOLERANCE;
        return util_1.isPointInRect(x0, y0, x1, y1, x2, y2);
    };
    CandleChartRenderer.prototype.calcRangeY = function () {
        var bars = this._plotModel.getVisibleBars();
        if (!bars.length) {
            return null;
        }
        var range = {
            max: -Number.MAX_VALUE,
            min: Number.MAX_VALUE,
        };
        return bars.reduce(function (prev, cur) {
            if (cur[PLOT_DATA.HIGH] > prev.max) {
                prev.max = cur[PLOT_DATA.HIGH];
            }
            if (cur[PLOT_DATA.LOW] < prev.min) {
                prev.min = cur[PLOT_DATA.LOW];
            }
            return prev;
        }, range);
    };
    CandleChartRenderer.prototype.draw = function (ctx) {
        var plot = this._plotModel;
        var bars = plot.getVisibleBars();
        if (!bars.length) {
            return;
        }
        var graph = plot.graph;
        var chart = graph.chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var candleWidth = ~~(axisX.barWidth * 0.8 + 0.5) % 2 === 0 ?
            ~~(axisX.barWidth * 0.8 + 0.5) - 1 : ~~(axisX.barWidth * 0.8 + 0.5);
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var high = bars.reduce(function (memo, cur) {
            return cur[PLOT_DATA.HIGH] > memo ? cur[PLOT_DATA.HIGH] : memo;
        }, -Number.MAX_VALUE);
        var low = bars.reduce(function (memo, cur) {
            return cur[PLOT_DATA.LOW] < memo ? cur[PLOT_DATA.LOW] : memo;
        }, Number.MAX_VALUE);
        plot.priceLabels = [{
                val: high,
                color: this.style.color,
            }, {
                val: low,
                color: this.style.colorDown,
            }];
        var x;
        var y;
        ctx.translate(0.5, 0.5);
        ctx.lineWidth = 1;
        for (var i = 0, bar = void 0, len = bars.length, isUp = void 0, color = void 0; i < len; i++) {
            bar = bars[i];
            isUp = bar[PLOT_DATA.CLOSE] >= bar[PLOT_DATA.OPEN];
            color = isUp ? this.style.color : this.style.colorDown;
            ctx.strokeStyle = '#333333';
            ctx.beginPath();
            ctx.moveTo(~~bar[PLOT_DATA.X], ~~axisY.getYByValue(bar[PLOT_DATA.HIGH], rangeY));
            ctx.lineTo(~~bar[PLOT_DATA.X], ~~axisY.getYByValue(bar[PLOT_DATA.LOW], rangeY));
            ctx.stroke();
        }
        for (var i = 0, bar = void 0, len = bars.length, isUp = void 0, color = void 0; i < len; i++) {
            bar = bars[i];
            isUp = bar[PLOT_DATA.CLOSE] >= bar[PLOT_DATA.OPEN];
            color = isUp ? this.style.color : this.style.colorDown;
            ctx.strokeStyle = '#333333';
            ctx.lineWidth = 1;
            ctx.fillStyle = color;
            x = ~~bar[PLOT_DATA.X] - (candleWidth - 1) / 2;
            y = ~~axisY.getYByValue(isUp ? bar[PLOT_DATA.CLOSE] : bar[PLOT_DATA.OPEN], rangeY);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + candleWidth - 1, y);
            y = ~~Math.ceil(axisY.getYByValue(isUp ? bar[PLOT_DATA.OPEN] : bar[PLOT_DATA.CLOSE], rangeY));
            ctx.lineTo(x + candleWidth - 1, y);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        ctx.setLineDash([2, 4]);
        ctx.strokeStyle = this.style.color;
        ctx.beginPath();
        y = ~~axisY.getYByValue(high, rangeY);
        ctx.moveTo(0, y);
        ctx.lineTo(axisX.width, y);
        ctx.stroke();
        ctx.strokeStyle = this.style.colorDown;
        ctx.beginPath();
        y = ~~axisY.getYByValue(low, rangeY);
        ctx.moveTo(0, y);
        ctx.lineTo(axisX.width, y);
        ctx.stroke();
    };
    CandleChartRenderer.prototype.getSelectionYByBar = function (bar) {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var close = bar[PLOT_DATA.CLOSE];
        var open = bar[PLOT_DATA.OPEN];
        return ~~axisY.getYByValue(Math.abs(close - (close - open) / 2), rangeY);
    };
    return CandleChartRenderer;
}(basechart_1.BaseChartRenderer));
exports.CandleChartRenderer = CandleChartRenderer;


/***/ }),

/***/ "./src/graphic/diagram/column.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var basechart_1 = __webpack_require__("./src/graphic/diagram/basechart.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var PLOT_DATA;
(function (PLOT_DATA) {
    PLOT_DATA[PLOT_DATA["X"] = 0] = "X";
    PLOT_DATA[PLOT_DATA["TIME"] = 1] = "TIME";
    PLOT_DATA[PLOT_DATA["VOLUME"] = 2] = "VOLUME";
    PLOT_DATA[PLOT_DATA["IS_DOWN"] = 3] = "IS_DOWN";
})(PLOT_DATA || (PLOT_DATA = {}));
var DEFAULT_STYLE = {
    color: '#ff524f',
    colorDown: '#2bbe65',
    lineWidth: 1,
    opacity: 1,
};
var ColumnChartRenderer = (function (_super) {
    __extends(ColumnChartRenderer, _super);
    function ColumnChartRenderer(plotModel, style) {
        _super.call(this, plotModel, _.defaults(style, DEFAULT_STYLE));
    }
    ColumnChartRenderer.prototype.hitTest = function () {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var curBar = plot.getCurBar();
        if (!curBar) {
            return false;
        }
        var point = chart.crosshair.point;
        var width = axisX.barWidth;
        var height = chart.height;
        var histogramBase = this.style.histogramBase;
        var scale = this.style.scale || 1;
        var margin = axisY.margin;
        var x0 = point.x;
        var y0 = point.y;
        var x1;
        var y1;
        var x2;
        var y2;
        if (typeof histogramBase === 'number') {
            x1 = curBar[PLOT_DATA.X] - width / 2;
            y1 = axisY.getYByValue(curBar[PLOT_DATA.VOLUME], rangeY);
            x2 = x1 + width;
            y2 = axisY.getYByValue(histogramBase, rangeY);
            return util_1.isPointInRect(x0, y0, x1, y1, x2, y2);
        }
        else if (typeof this.style.scale === 'number') {
            x1 = curBar[PLOT_DATA.X] - width / 2;
            y1 = ~~(height - (height - axisY.getYByValue(curBar[PLOT_DATA.VOLUME], rangeY) - margin) * scale);
            x2 = x1 + width;
            y2 = height;
            return util_1.isPointInRect(x0, y0, x1, y1, x2, y2);
        }
        else {
            x1 = curBar[PLOT_DATA.X] - width / 2;
            y1 = ~~axisY.getYByValue(curBar[PLOT_DATA.VOLUME], rangeY);
            x2 = x1 + width;
            y2 = height;
            return util_1.isPointInRect(x0, y0, x1, y1, x2, y2);
        }
    };
    ColumnChartRenderer.prototype.calcRangeY = function () {
        var bars = this._plotModel.getVisibleBars();
        if (!bars.length) {
            return null;
        }
        var range = {
            max: -Number.MAX_VALUE,
            min: Number.MAX_VALUE,
        };
        return bars.reduce(function (prev, cur) {
            var data = cur;
            if (data[PLOT_DATA.VOLUME] > prev.max) {
                prev.max = data[PLOT_DATA.VOLUME];
            }
            if (data[PLOT_DATA.VOLUME] < prev.min) {
                prev.min = data[PLOT_DATA.VOLUME];
            }
            return prev;
        }, range);
    };
    ColumnChartRenderer.prototype.draw = function (ctx) {
        var plot = this._plotModel;
        var bars = plot.getVisibleBars();
        if (!bars.length) {
            return;
        }
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var height = chart.height;
        var barWidth = ~~chart.axisX.barWidth;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var style = this.style;
        var margin = axisY.margin;
        var scale = style.scale || 1;
        var histogramBase = style.histogramBase;
        var x;
        var y;
        var y1;
        var bar;
        var lastBarX = 0;
        var lastBarY = 0;
        ctx.lineWidth = 1;
        ctx.globalAlpha = style.opacity;
        ctx.strokeStyle = 'black';
        ctx.translate(0.5, 0.5);
        ctx.beginPath();
        for (var i = 0, len = bars.length; i < len; i++) {
            bar = bars[i];
            x = ~~bar[PLOT_DATA.X] - ~~(barWidth / 2);
            y1 = ~~axisY.getYByValue(bar[PLOT_DATA.VOLUME], rangeY);
            // 如果设置了基准线baseline
            if (typeof histogramBase === 'number') {
                y = y1;
                y1 = ~~axisY.getYByValue(histogramBase, rangeY);
                ctx.fillStyle = y - y1 > 0 ? style.colorDown : style.color;
                if (lastBarX > 0) {
                    ctx.fillRect(lastBarX, y, barWidth + x - lastBarX, y1 - y);
                    ctx.moveTo(lastBarX, lastBarY);
                    ctx.lineTo(lastBarX, y);
                }
                else {
                    ctx.fillRect(x, y, barWidth, y1 - y);
                    ctx.moveTo(x, y1);
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(x + barWidth, y);
                ctx.lineTo(x + barWidth, y1);
            }
            else if (typeof style.scale === 'number') {
                ctx.fillStyle = bar[PLOT_DATA.IS_DOWN] ? style.colorDown : style.color;
                y = ~~(height - (height - y1 - margin) * scale);
                if (lastBarX > 0) {
                    ctx.fillRect(lastBarX, y, barWidth + x - lastBarX, height - y);
                    ctx.moveTo(lastBarX, lastBarY);
                    ctx.lineTo(lastBarX, y);
                }
                else {
                    ctx.fillRect(x, y, barWidth, height - y);
                    ctx.moveTo(x, height);
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(x + barWidth, y);
                ctx.lineTo(x + barWidth, height);
            }
            else {
                ctx.fillStyle = bar[PLOT_DATA.IS_DOWN] ? style.colorDown : style.color;
                y = y1;
                if (lastBarX > 0) {
                    ctx.fillRect(lastBarX, y, barWidth + x - lastBarX, height - y);
                    ctx.moveTo(lastBarX, lastBarY);
                    ctx.lineTo(lastBarX, y);
                }
                else {
                    ctx.fillRect(x, y, barWidth, height - y);
                    ctx.moveTo(x, height);
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(x + barWidth, y);
                ctx.lineTo(x + barWidth, height);
            }
            lastBarX = x + barWidth;
            lastBarY = y;
        }
        ctx.stroke();
    };
    ColumnChartRenderer.prototype.getSelectionYByBar = function (bar) {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var height = chart.height;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var margin = axisY.margin;
        var style = this.style;
        var scale = style.scale || 1;
        var histogramBase = style.histogramBase;
        if (typeof histogramBase === 'number') {
            return ~~axisY.getYByValue(bar[PLOT_DATA.VOLUME], rangeY);
        }
        else if (typeof style.scale === 'number') {
            return ~~(height - (height - ~~axisY.getYByValue(bar[PLOT_DATA.VOLUME], rangeY) - margin) * scale);
        }
        else {
            return ~~axisY.getYByValue(bar[PLOT_DATA.VOLUME], rangeY);
        }
    };
    return ColumnChartRenderer;
}(basechart_1.BaseChartRenderer));
exports.ColumnChartRenderer = ColumnChartRenderer;


/***/ }),

/***/ "./src/graphic/diagram/histogram.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basechart_1 = __webpack_require__("./src/graphic/diagram/basechart.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var PLOT_DATA;
(function (PLOT_DATA) {
    PLOT_DATA[PLOT_DATA["X"] = 0] = "X";
    PLOT_DATA[PLOT_DATA["TIME"] = 1] = "TIME";
    PLOT_DATA[PLOT_DATA["VALUE"] = 2] = "VALUE";
})(PLOT_DATA || (PLOT_DATA = {}));
var HistogramChartRenderer = (function (_super) {
    __extends(HistogramChartRenderer, _super);
    function HistogramChartRenderer(plotModel, style) {
        _super.call(this, plotModel, style);
    }
    HistogramChartRenderer.prototype.hitTest = function () {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var curBar = plot.getCurBar();
        if (!curBar) {
            return false;
        }
        var point = chart.crosshair.point;
        var width = ~~(axisX.barWidth / 2 + 0.5) % 2 === 0 ?
            ~~(axisX.barWidth / 2 + 0.5) - 1 : ~~(axisX.barWidth / 2 + 0.5);
        var style = this.style;
        var histogramBase = style.histogramBase;
        var x0 = point.x;
        var y0 = point.y;
        var x1 = ~~curBar[PLOT_DATA.X] - ~~(width / 2) - constant_1.HIT_TEST_TOLERANCE;
        var y1 = ~~axisY.getYByValue(curBar[PLOT_DATA.VALUE], rangeY) - constant_1.HIT_TEST_TOLERANCE;
        var x2 = x1 + width + constant_1.HIT_TEST_TOLERANCE;
        var y2 = ~~axisY.getYByValue(histogramBase, rangeY) + constant_1.HIT_TEST_TOLERANCE;
        return util_1.isPointInRect(x0, y0, x1, y1, x2, y2);
    };
    HistogramChartRenderer.prototype.calcRangeY = function () {
        var bars = this._plotModel.getVisibleBars();
        if (!bars.length) {
            return null;
        }
        var range = {
            max: -Number.MAX_VALUE,
            min: Number.MAX_VALUE,
        };
        return bars.reduce(function (prev, cur) {
            var bar = cur;
            if (bar[PLOT_DATA.VALUE] < prev.min) {
                prev.min = bar[PLOT_DATA.VALUE];
            }
            if (bar[PLOT_DATA.VALUE] > prev.max) {
                prev.max = bar[PLOT_DATA.VALUE];
            }
            return prev;
        }, range);
    };
    HistogramChartRenderer.prototype.draw = function (ctx) {
        var plot = this._plotModel;
        var bars = plot.getVisibleBars();
        if (!bars.length) {
            return;
        }
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var axisX = chart.axisX;
        // 宽度为bar宽度的一半
        var histWidth = ~~(axisX.barWidth / 2 + 0.5) % 2 === 0 ?
            ~~(axisX.barWidth / 2 + 0.5) - 1 : ~~(axisX.barWidth / 2 + 0.5);
        var style = this.style;
        var histogramBase = style.histogramBase;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var base = ~~axisY.getYByValue(histogramBase, rangeY);
        for (var i = 0, len = bars.length, data = void 0, x = void 0, y = void 0; i < len; i++) {
            data = bars[i];
            x = ~~data[PLOT_DATA.X] - ~~(histWidth / 2);
            y = ~~axisY.getYByValue(data[PLOT_DATA.VALUE], rangeY);
            ctx.fillStyle = data[PLOT_DATA.VALUE] > histogramBase ? style.color : style.colorDown;
            ctx.fillRect(x, y, histWidth, base - y);
        }
    };
    HistogramChartRenderer.prototype.getSelectionYByBar = function (bar) {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        return axisY.getYByValue(bar[PLOT_DATA.VALUE], rangeY);
    };
    return HistogramChartRenderer;
}(basechart_1.BaseChartRenderer));
exports.HistogramChartRenderer = HistogramChartRenderer;


/***/ }),

/***/ "./src/graphic/diagram/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/graphic/diagram/basechart.ts"));
__export(__webpack_require__("./src/graphic/diagram/band.ts"));
__export(__webpack_require__("./src/graphic/diagram/candle.ts"));
__export(__webpack_require__("./src/graphic/diagram/column.ts"));
__export(__webpack_require__("./src/graphic/diagram/histogram.ts"));
__export(__webpack_require__("./src/graphic/diagram/line.ts"));
__export(__webpack_require__("./src/graphic/diagram/mountain.ts"));
__export(__webpack_require__("./src/graphic/diagram/inflection.ts"));


/***/ }),

/***/ "./src/graphic/diagram/inflection.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basechart_1 = __webpack_require__("./src/graphic/diagram/basechart.ts");
var PLOT_DATA;
(function (PLOT_DATA) {
    PLOT_DATA[PLOT_DATA["X"] = 0] = "X";
    PLOT_DATA[PLOT_DATA["TIME"] = 1] = "TIME";
    PLOT_DATA[PLOT_DATA["TYPE"] = 2] = "TYPE";
    PLOT_DATA[PLOT_DATA["VAL"] = 3] = "VAL";
    PLOT_DATA[PLOT_DATA["PROB"] = 4] = "PROB";
})(PLOT_DATA || (PLOT_DATA = {}));
var InflectionRenderer = (function (_super) {
    __extends(InflectionRenderer, _super);
    function InflectionRenderer(plotModel) {
        _super.call(this, plotModel, null);
    }
    InflectionRenderer.prototype.hitTest = function () {
        return false;
    };
    InflectionRenderer.prototype.draw = function (ctx) {
        var plot = this._plotModel;
        var bars = plot.getVisibleBars();
        var version = plot.graph.datasource.version;
        if (!bars.length) {
            return;
        }
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var len = bars.length;
        ctx.textAlign = 'center';
        for (var i = 0; i < len; i++) {
            var bar = bars[i];
            switch (bar[PLOT_DATA.TYPE]) {
                case 0:
                    ctx.font = '48px Verdana, Arial, sans-serif';
                    ctx.fillStyle = '#FF3333';
                    ctx.fillText('↑', bar[PLOT_DATA.X], version === 1 ? ~~axisY.getYByValue(bar[PLOT_DATA.VAL]) - 16 : chart.height - 8);
                    ctx.font = '12px Verdana, Arial, sans-serif';
                    ctx.fillStyle = '#000000';
                    ctx.fillText(bar[PLOT_DATA.PROB], bar[PLOT_DATA.X], version === 1 ? ~~axisY.getYByValue(bar[PLOT_DATA.VAL]) - 60 : chart.height - 48);
                    break;
                case 1:
                    ctx.font = '48px Verdana, Arial, sans-serif';
                    ctx.fillStyle = '#99FF33';
                    ctx.fillText('↓', bar[PLOT_DATA.X], version === 1 ? ~~axisY.getYByValue(bar[PLOT_DATA.VAL]) + 40 : chart.height - 8);
                    ctx.font = '12px Verdana, Arial, sans-serif';
                    ctx.fillStyle = '#000000';
                    ctx.fillText(bar[PLOT_DATA.PROB], bar[PLOT_DATA.X], version === 1 ? ~~axisY.getYByValue(bar[PLOT_DATA.VAL]) + 72 : chart.height - 48);
                    break;
                // case 2:
                //   ctx.fillStyle = 'blue'
                //   ctx.beginPath()
                //   ctx.arc(bar[PLOT_DATA.X], axisY.height / 2, 3, 0, 2 * Math.PI)
                //   ctx.closePath()
                //   ctx.fill()
                //   break
                default:
            }
        }
    };
    InflectionRenderer.prototype.calcRangeY = function () {
        var bars = this._plotModel.getVisibleBars();
        if (!bars.length) {
            return null;
        }
        var range = {
            max: -Number.MAX_VALUE,
            min: Number.MAX_VALUE,
        };
        return range;
    };
    InflectionRenderer.prototype.getSelectionYByBar = function (bar) {
        return null;
    };
    return InflectionRenderer;
}(basechart_1.BaseChartRenderer));
exports.InflectionRenderer = InflectionRenderer;


/***/ }),

/***/ "./src/graphic/diagram/line.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var basechart_1 = __webpack_require__("./src/graphic/diagram/basechart.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var PLOT_DATA;
(function (PLOT_DATA) {
    PLOT_DATA[PLOT_DATA["X"] = 0] = "X";
    PLOT_DATA[PLOT_DATA["TIME"] = 1] = "TIME";
    PLOT_DATA[PLOT_DATA["VALUE"] = 2] = "VALUE";
})(PLOT_DATA || (PLOT_DATA = {}));
var DEFAULT_STYLE = {
    color: 'rgba( 60, 120, 216, 1)',
    lineWidth: 1,
};
var LineChartRenderer = (function (_super) {
    __extends(LineChartRenderer, _super);
    function LineChartRenderer(plotModel, style) {
        _super.call(this, plotModel, _.defaults(style, DEFAULT_STYLE));
    }
    LineChartRenderer.prototype.hitTest = function () {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var curBar = plot.getCurBar();
        var prevBar = plot.getPrevBar();
        var nextBar = plot.getNextBar();
        if (!curBar || (curBar && curBar[PLOT_DATA.VALUE] === 0)) {
            return false;
        }
        var point = chart.crosshair.point;
        var x0 = point.x;
        var y0 = point.y;
        var x1 = prevBar ? prevBar[PLOT_DATA.X] : 0;
        var y1 = prevBar ? ~~axisY.getYByValue(prevBar[PLOT_DATA.VALUE], rangeY) : 0;
        var x2 = curBar[PLOT_DATA.X];
        var y2 = ~~axisY.getYByValue(curBar[PLOT_DATA.VALUE], rangeY);
        var x3 = nextBar ? nextBar[PLOT_DATA.X] : 0;
        var y3 = nextBar ? ~~axisY.getYByValue(nextBar[PLOT_DATA.VALUE], rangeY) : 0;
        var distance1 = Number.MAX_VALUE;
        var distance2 = Number.MAX_VALUE;
        if (prevBar) {
            distance1 = util_1.pointToSegDist(x0, y0, x1, y1, x2, y2);
        }
        if (nextBar) {
            distance2 = util_1.pointToSegDist(x0, y0, x2, y2, x3, y3);
        }
        return distance1 < constant_1.HIT_TEST_TOLERANCE || distance2 < constant_1.HIT_TEST_TOLERANCE;
    };
    LineChartRenderer.prototype.calcRangeY = function () {
        var bars = this._plotModel.getVisibleBars();
        if (!bars.length) {
            return null;
        }
        var range = {
            max: -Number.MAX_VALUE,
            min: Number.MAX_VALUE,
        };
        range = bars
            .reduce(function (prev, cur) {
            if (cur[PLOT_DATA.VALUE] > prev.max) {
                prev.max = cur[PLOT_DATA.VALUE];
            }
            if (cur[PLOT_DATA.VALUE] < prev.min) {
                prev.min = cur[PLOT_DATA.VALUE];
            }
            return prev;
        }, range);
        var ratio = (range.max - range.min) / range.max;
        if (ratio < 0.02) {
            range.max += (0.02 - ratio) * range.max;
            range.min -= (0.02 - ratio) * range.max;
        }
        return range;
    };
    LineChartRenderer.prototype.draw = function (ctx) {
        var plot = this._plotModel;
        var bars = plot.getVisibleBars();
        if (!bars.length) {
            return;
        }
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        ctx.strokeStyle = this.style.color;
        ctx.lineWidth = this.style.lineWidth;
        ctx.beginPath();
        for (var i = 0, x = void 0, y = void 0, bar = void 0, hasMoveTo = false, len = bars.length; i < len; i++) {
            bar = bars[i];
            x = bar[PLOT_DATA.X];
            y = ~~axisY.getYByValue(bar[PLOT_DATA.VALUE], rangeY);
            if (bar[PLOT_DATA.VALUE] === 0) {
                continue;
            }
            if (hasMoveTo) {
                ctx.lineTo(x, y);
            }
            else {
                ctx.moveTo(x, y);
                hasMoveTo = true;
            }
        }
        ctx.stroke();
    };
    LineChartRenderer.prototype.getSelectionYByBar = function (bar) {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        return ~~axisY.getYByValue(bar[PLOT_DATA.VALUE], rangeY);
    };
    return LineChartRenderer;
}(basechart_1.BaseChartRenderer));
exports.LineChartRenderer = LineChartRenderer;


/***/ }),

/***/ "./src/graphic/diagram/mountain.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var basechart_1 = __webpack_require__("./src/graphic/diagram/basechart.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var PLOT_DATA;
(function (PLOT_DATA) {
    PLOT_DATA[PLOT_DATA["X"] = 0] = "X";
    PLOT_DATA[PLOT_DATA["TIME"] = 1] = "TIME";
    PLOT_DATA[PLOT_DATA["VALUE"] = 2] = "VALUE";
})(PLOT_DATA || (PLOT_DATA = {}));
var DEFAULT_STYLE = {
    color: 'rgba( 60, 120, 240, 1)',
    fillColor: 'rgba( 60, 120, 216, 1)',
    lineWidth: 2,
};
var MountainChartRenderer = (function (_super) {
    __extends(MountainChartRenderer, _super);
    function MountainChartRenderer(plotModel, style) {
        _super.call(this, plotModel, _.defaults(style, DEFAULT_STYLE));
    }
    MountainChartRenderer.prototype.hitTest = function () {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var curBar = plot.getCurBar();
        var prevBar = plot.getPrevBar();
        var nextBar = plot.getNextBar();
        if (!curBar) {
            return false;
        }
        var point = chart.crosshair.point;
        var x0 = point.x;
        var y0 = point.y;
        var x1 = prevBar ? prevBar[PLOT_DATA.X] : 0;
        var y1 = prevBar ? axisY.getYByValue(prevBar[PLOT_DATA.VALUE], rangeY) : 0;
        var x2 = curBar[PLOT_DATA.X];
        var y2 = axisY.getYByValue(curBar[PLOT_DATA.VALUE], rangeY);
        var x3 = nextBar ? nextBar[PLOT_DATA.X] : 0;
        var y3 = nextBar ? axisY.getYByValue(nextBar[PLOT_DATA.VALUE], rangeY) : 0;
        var distance1 = Number.MAX_VALUE;
        var distance2 = Number.MAX_VALUE;
        if (prevBar) {
            distance1 = util_1.pointToSegDist(x0, y0, x1, y1, x2, y2);
        }
        if (nextBar) {
            distance2 = util_1.pointToSegDist(x0, y0, x2, y2, x3, y3);
        }
        return distance1 < constant_1.HIT_TEST_TOLERANCE || distance2 < constant_1.HIT_TEST_TOLERANCE;
    };
    MountainChartRenderer.prototype.calcRangeY = function () {
        var bars = this._plotModel.getVisibleBars();
        if (!bars.length) {
            return null;
        }
        var range = {
            max: -Number.MAX_VALUE,
            min: Number.MAX_VALUE,
        };
        return bars.reduce(function (prev, cur) {
            var bar = cur;
            if (bar[PLOT_DATA.VALUE] < prev.min) {
                prev.min = bar[PLOT_DATA.VALUE];
            }
            if (bar[PLOT_DATA.VALUE] > prev.max) {
                prev.max = bar[PLOT_DATA.VALUE];
            }
            return prev;
        }, range);
    };
    MountainChartRenderer.prototype.draw = function (ctx) {
        var plot = this._plotModel;
        var bars = plot.getVisibleBars();
        if (!bars.length) {
            return;
        }
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var height = chart.height;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        var histogramBase = this.style.histogramBase;
        var baseHeight = typeof histogramBase === 'number' ? axisY.getYByValue(histogramBase, rangeY) : -1;
        ctx.strokeStyle = this.style.color;
        ctx.lineWidth = this.style.lineWidth;
        ctx.fillStyle = this.style.fillColor || this.style.color;
        ctx.beginPath();
        var len = bars.length;
        var bar;
        if (len) {
            bar = bars[0];
            ctx.moveTo(~~bar[PLOT_DATA.X], ~~axisY.getYByValue(bar[PLOT_DATA.VALUE], rangeY));
        }
        for (var i = 0; i < len; i++) {
            bar = bars[i];
            ctx.lineTo(~~bar[PLOT_DATA.X], ~~axisY.getYByValue(bar[PLOT_DATA.VALUE], rangeY));
        }
        ctx.stroke();
        if (typeof histogramBase === 'number') {
            ctx.lineTo(bars[len - 1][PLOT_DATA.X], baseHeight);
            ctx.lineTo(bars[0][PLOT_DATA.X], baseHeight);
        }
        else {
            ctx.lineTo(bars[len - 1][PLOT_DATA.X], height);
            ctx.lineTo(bars[0][PLOT_DATA.X], height);
        }
        ctx.closePath();
        ctx.fill();
    };
    MountainChartRenderer.prototype.getSelectionYByBar = function (bar) {
        var plot = this._plotModel;
        var graph = plot.graph;
        var chart = graph.chart;
        var axisY = chart.axisY;
        var rangeY = graph.isPrice ? axisY.range : graph.getRangeY();
        return ~~axisY.getYByValue(bar[PLOT_DATA.VALUE], rangeY);
    };
    return MountainChartRenderer;
}(basechart_1.BaseChartRenderer));
exports.MountainChartRenderer = MountainChartRenderer;


/***/ }),

/***/ "./src/graphic/gap.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GapRenderer = (function () {
    function GapRenderer(graph) {
        this._gapCache = null;
        // 记住firstBar的时间，以便之后再次计算跳空缺口时，直接从此位置开始，而不需要从头计算
        this._firstBarTime = 0;
        this._graph = graph;
    }
    /**
     * 获取离现在最近的一个跳空缺口
     */
    GapRenderer.prototype.findLastGap = function () {
        var graph = this._graph;
        var axisX = graph.chart.axisX;
        var datasource = graph.datasource;
        if (datasource.loaded() < 2) {
            return null;
        }
        var gapCache = this._gapCache;
        var visibleTimeBars = axisX.getVisibleTimeBars();
        /*
         * lastBarTime用来记录bars是否有更新，如果有更新的话，需要重新计算跳空。
         */
        if (gapCache &&
            gapCache.lastBarTime === datasource.last().time) {
            if (gapCache.time2 > visibleTimeBars[0].time &&
                gapCache.time2 < visibleTimeBars[visibleTimeBars.length - 1].time) {
                return gapCache;
            }
            else {
                return null;
            }
        }
        var curIndex = this._firstBarTime ? datasource.search(this._firstBarTime) : datasource.loaded() - 1;
        var lastBarTime = datasource.last().time;
        var findGap = false;
        var time1;
        var time2;
        var from;
        var to;
        var curBar;
        var lastBar;
        var max = datasource.max(curIndex);
        var min = datasource.min(curIndex);
        while (curIndex) {
            curBar = datasource.barAt(curIndex);
            lastBar = datasource.barAt(curIndex - 1);
            max = Math.max(max, curBar.high);
            min = Math.min(min, curBar.low);
            time1 = lastBar.time;
            time2 = curBar.time;
            if (lastBar.low > max) {
                findGap = true;
                from = lastBar.low;
                to = max;
                break;
            }
            else if (lastBar.high < min) {
                findGap = true;
                from = lastBar.high;
                to = min;
                break;
            }
            curIndex--;
        }
        if (findGap) {
            this._gapCache = gapCache = findGap ? { time1: time1, time2: time2, from: from, to: to, lastBarTime: lastBarTime } : null;
            if (gapCache.time2 > visibleTimeBars[0].time &&
                gapCache.time2 < visibleTimeBars[visibleTimeBars.length - 1].time) {
                return gapCache;
            }
            else {
                return null;
            }
        }
        else {
            this._firstBarTime = datasource.first().time;
            return null;
        }
    };
    GapRenderer.prototype.draw = function (ctx) {
        var chart = this._graph.chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var width = axisX.width;
        var gap = this.findLastGap();
        if (gap) {
            var x2 = ~~axisX.getXByTime(gap.time2);
            var y1 = ~~axisY.getYByValue(gap.from);
            var y2 = ~~axisY.getYByValue(gap.to);
            var h = ~~(Math.abs(y2 - y1));
            ctx.save();
            ctx.fillStyle = '#636363';
            ctx.font = '12px Verdana, Arial, sans-serif';
            ctx.fillRect(x2, y2 < y1 ? y2 : y1, width - x2, h > 0 ? h : 1);
            ctx.fillStyle = 'black';
            ctx.fillText(Number(gap.from).toFixed(2) + '-' + Number(gap.to).toFixed(2), x2, y1 < y2 ? y1 - 2 : y2 - 2);
            ctx.restore();
        }
    };
    GapRenderer.prototype.clearCache = function () {
        this._firstBarTime = 0;
        this._gapCache = null;
    };
    return GapRenderer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GapRenderer;


/***/ }),

/***/ "./src/graphic/grid.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GridRenderer = (function () {
    function GridRenderer(chart) {
        this._chart = chart;
    }
    GridRenderer.prototype.draw = function (ctx) {
        var chart = this._chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var width = ~~chart.width;
        var height = ~~chart.height;
        var tickmarks;
        var tickmark;
        ctx.save();
        ctx.translate(0.5, 0.5);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#e6e6e6';
        ctx.beginPath();
        tickmarks = axisX.tickmark.getTickMarksByTimeBars(axisX.getVisibleTimeBars());
        for (var i = 0, len = tickmarks.length; i < len; i++) {
            tickmark = tickmarks[i];
            ctx.moveTo(~~tickmark.x, 0);
            ctx.lineTo(~~tickmark.x, height);
        }
        tickmarks = axisY.tickmark.getTickMarksByTimeBars();
        for (var i = 0, len = tickmarks.length; i < len; i++) {
            tickmark = tickmarks[i];
            ctx.moveTo(0, ~~tickmark.y);
            ctx.lineTo(width, ~~tickmark.y);
        }
        ctx.stroke();
        ctx.restore();
    };
    return GridRenderer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridRenderer;


/***/ }),

/***/ "./src/graphic/pattern/basepattern.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BasePatternRenderer = (function () {
    function BasePatternRenderer(chart) {
        this._chart = chart;
    }
    return BasePatternRenderer;
}());
exports.BasePatternRenderer = BasePatternRenderer;


/***/ }),

/***/ "./src/graphic/pattern/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/graphic/pattern/basepattern.ts"));
__export(__webpack_require__("./src/graphic/pattern/shape.ts"));
__export(__webpack_require__("./src/graphic/pattern/wave.ts"));


/***/ }),

/***/ "./src/graphic/pattern/shape.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var basepattern_1 = __webpack_require__("./src/graphic/pattern/basepattern.ts");
var DEFAULT_COLOR = 'rgba( 60, 120, 216, 1)';
var trendLineColorPresets = ['rgba( 60, 120, 216, 1)', 'rgba(102, 255, 153, .5)'];
var trendLineDashedPresets = [[8, 8], []];
var ShapePatternRenderer = (function (_super) {
    __extends(ShapePatternRenderer, _super);
    function ShapePatternRenderer(chart, points, trendLines) {
        _super.call(this, chart);
        this._points = points;
        this._trendLines = trendLines;
    }
    ShapePatternRenderer.prototype.draw = function (ctx) {
        var points = this._points || [];
        var trendLines = this._trendLines || [];
        var chart = this._chart;
        var datasource = chart.datasource;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var visibleRange = axisX.getVisibleTimeBars();
        var firstVisibleBar = visibleRange[0];
        var lastVisibleBar = visibleRange[visibleRange.length - 1];
        var firstBar = datasource.first();
        var lastBar = datasource.last();
        var len = points.length;
        var line;
        var point = null;
        var x;
        var y;
        ctx.save();
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 8]);
        ctx.strokeStyle = DEFAULT_COLOR;
        ctx.beginPath();
        if (len) {
            point = points[0];
            x = ~~axisX.getXByTime(point.time);
            y = ~~axisY.getYByValue(point.value);
            ctx.moveTo(x, y);
        }
        for (var i = 1; i < len; i++) {
            point = points[i];
            x = ~~axisX.getXByTime(point.time);
            y = ~~axisY.getYByValue(point.value);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.lineWidth = 3;
        len = trendLines.length;
        for (var i = 0, distance = void 0, slope = void 0; i < len; i++) {
            ctx.beginPath();
            ctx.strokeStyle = trendLineColorPresets[~~(i / 2)];
            ctx.setLineDash(trendLineDashedPresets[~~(i / 2)]);
            line = trendLines[i];
            distance = datasource.search(line[1].time) - datasource.search(line[0].time);
            slope = (line[1].value - line[0].value) / distance;
            if (firstVisibleBar.time < line[0].time) {
                if (firstVisibleBar.time < firstBar.time) {
                    distance = axisX.search(firstBar.time) + datasource.search(line[0].time);
                }
                else {
                    distance = datasource.search(line[0].time) - datasource.search(firstVisibleBar.time);
                }
                x = firstVisibleBar.x;
                y = ~~axisY.getYByValue(line[0].value - distance * slope);
                ctx.moveTo(x, y);
            }
            x = ~~axisX.getXByTime(line[0].time);
            y = ~~axisY.getYByValue(line[0].value);
            ctx.lineTo(x, y);
            x = ~~axisX.getXByTime(line[1].time);
            y = ~~axisY.getYByValue(line[1].value);
            ctx.lineTo(x, y);
            if (lastVisibleBar.time > line[1].time) {
                if (lastVisibleBar.time > lastBar.time) {
                    distance = visibleRange.length - 1 - axisX.search(lastBar.time) + datasource.search(lastBar.time) - datasource.search(line[1].time);
                }
                else {
                    distance = datasource.search(lastVisibleBar.time) - datasource.search(line[1].time);
                }
                x = lastVisibleBar.x;
                y = ~~axisY.getYByValue(line[1].value + distance * slope);
                ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
        ctx.restore();
    };
    ShapePatternRenderer.prototype.hitTest = function () {
        return false;
    };
    ShapePatternRenderer.prototype.isNowVisible = function () {
        var visibleRange = this._chart.axisX.getVisibleTimeBars();
        var firstBar = visibleRange[0];
        var lastBar = visibleRange[visibleRange.length - 1];
        var points = this._points || [];
        var lines = this._trendLines || [];
        var times = _.pluck(lines.reduce(function (acc, line) {
            acc.push(line[0]);
            acc.push(line[1]);
            return acc;
        }, []).concat(points), 'time');
        return !(firstBar.time > _.max(times) || lastBar.time < _.min(times));
    };
    return ShapePatternRenderer;
}(basepattern_1.BasePatternRenderer));
exports.ShapePatternRenderer = ShapePatternRenderer;


/***/ }),

/***/ "./src/graphic/pattern/wave.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var basepattern_1 = __webpack_require__("./src/graphic/pattern/basepattern.ts");
var DEFAULT_COLOR = 'rgba( 60, 120, 216, 1)';
var WavePatternRenderer = (function (_super) {
    __extends(WavePatternRenderer, _super);
    function WavePatternRenderer(chart, bwPoints, swPoints) {
        _super.call(this, chart);
        this._bwPoints = bwPoints;
        this._swPoints = swPoints;
    }
    WavePatternRenderer.prototype.draw = function (ctx) {
        var bwPoints = this._bwPoints;
        var swPoints = this._swPoints;
        var chart = this._chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var len = bwPoints.length;
        var point = null;
        var x;
        var y;
        ctx.save();
        ctx.lineWidth = 3;
        ctx.strokeStyle = DEFAULT_COLOR;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        if (len) {
            point = bwPoints[0];
            x = ~~axisX.getXByTime(point.time);
            y = ~~axisY.getYByValue(point.value);
            ctx.moveTo(x, y);
        }
        for (var i = 1; i < len; i++) {
            point = bwPoints[i];
            x = ~~axisX.getXByTime(point.time);
            y = ~~axisY.getYByValue(point.value);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.lineWidth = 3;
        ctx.beginPath();
        len = swPoints.length;
        if (len) {
            point = swPoints[0];
            x = ~~axisX.getXByTime(point.time);
            y = ~~axisY.getYByValue(point.value);
            ctx.moveTo(x, y);
        }
        for (var i = 1; i < len; i++) {
            point = swPoints[i];
            x = ~~axisX.getXByTime(point.time);
            y = ~~axisY.getYByValue(point.value);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
    };
    WavePatternRenderer.prototype.hitTest = function () {
        return false;
    };
    WavePatternRenderer.prototype.isNowVisible = function () {
        var visibleRange = this._chart.axisX.getVisibleTimeBars();
        var firstBar = visibleRange[0];
        var lastBar = visibleRange[visibleRange.length - 1];
        var bTimes = _.pluck(this._bwPoints, 'time');
        var sTimes = _.pluck(this._swPoints, 'time');
        return !(firstBar.time > Math.max(_.max(bTimes), _.max(sTimes)) || lastBar.time < _.min(bTimes));
    };
    return WavePatternRenderer;
}(basepattern_1.BasePatternRenderer));
exports.WavePatternRenderer = WavePatternRenderer;


/***/ }),

/***/ "./src/graphic/tool/basetool.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var BaseToolRenderer = (function () {
    function BaseToolRenderer() {
        this._hitVertexIndex = -1;
        this._vertexes = [];
        this._isValid = false;
        this._isEditing = false;
        this._hover = false;
        this._selected = false;
    }
    Object.defineProperty(BaseToolRenderer.prototype, "hover", {
        get: function () {
            return this._hover;
        },
        set: function (hover) {
            if (hover !== this._hover) {
                this._hover = hover;
                this._isValid = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseToolRenderer.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            if (selected !== this._selected) {
                this._selected = selected;
                this._isValid = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseToolRenderer.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseToolRenderer.prototype, "isEditing", {
        get: function () {
            return this._isEditing;
        },
        set: function (isEditing) {
            if (isEditing !== this._isEditing) {
                this._isEditing = isEditing;
                this._isValid = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseToolRenderer.prototype, "vertexes", {
        get: function () {
            return this._vertexes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseToolRenderer.prototype, "hitVertexIndex", {
        get: function () {
            return this._hitVertexIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseToolRenderer.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (chart) {
            this._chart = chart;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 画图工具当前是否可见
     */
    BaseToolRenderer.prototype.isNowVisible = function () {
        var visibleRange = this._chart.axisX.getVisibleTimeBars();
        var firstBar = visibleRange[0];
        var lastBar = visibleRange[visibleRange.length - 1];
        var times = _.pluck(this._vertexes, 'time');
        return !(firstBar.time > _.max(times) || lastBar.time < _.min(times));
    };
    BaseToolRenderer.prototype.getContext = function () {
        return !this._isEditing && this.isFinished() ? this._chart.ctx : this._chart.topCtx;
    };
    /**
     * 获取当前的指针位置
     */
    BaseToolRenderer.prototype.getCursor = function () {
        return this._lastCursorPoint = this._chart.hover ?
            this._chart.crosshair.point || this._lastCursorPoint :
            this._lastCursorPoint;
    };
    BaseToolRenderer.prototype.addVertex = function (vertex) {
        this._vertexes.push(vertex);
        this._isValid = false;
    };
    BaseToolRenderer.prototype.drawVertex = function () {
        var ctx = this.getContext();
        var chart = this._chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var vertexes = this.vertexes;
        ctx.strokeStyle = 'rgba( 128, 128, 128, 1)';
        ctx.lineWidth = this._selected ? 4 : 2;
        ctx.fillStyle = '#fff';
        for (var i = 0, len = vertexes.length; i < len; i++) {
            ctx.beginPath();
            ctx.arc(axisX.getXByTime(vertexes[i].time), axisY.getYByValue(vertexes[i].value), 5, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    };
    /**
     * 设置画图工具端点的位置
     * @param {number} index 表示修改的端点对应的数组下标
     * @param {number} time  时间戳，精确到秒
     * @param {number} value 值
     */
    BaseToolRenderer.prototype.setVertex = function (index, time, value) {
        var vertex = this._vertexes[index];
        vertex.time = time;
        vertex.value = value;
        this._isValid = false;
    };
    BaseToolRenderer.prototype.hitTest = function (select) {
        var _this = this;
        var isHit = false;
        var hitVertexIndex = -1;
        var chart = this._chart;
        var point = chart.crosshair.point;
        this._hitVertexIndex = -1;
        isHit = this.vertexes.some(function (vertex, idx) {
            if (_this.hitTestVertex(vertex, point)) {
                hitVertexIndex = idx;
                return true;
            }
            else {
                return false;
            }
        });
        if (!isHit) {
            isHit = this.hitTestTool();
        }
        else {
            this._hitVertexIndex = hitVertexIndex;
        }
        if (select) {
            if (isHit) {
                chart.editingDrawingTool = this;
            }
            return this.selected = isHit;
        }
        else {
            return this.hover = isHit;
        }
    };
    BaseToolRenderer.prototype.draw = function () {
        var ctx = this.getContext();
        ctx.save();
        this.drawTool(ctx);
        ctx.restore();
        if (this._selected || this._hover || !this.isFinished()) {
            ctx.save();
            this.drawVertex();
            ctx.restore();
        }
        this._isValid = true;
    };
    BaseToolRenderer.prototype.moveBy = function (offsetTime, offsetValue) {
        this.hitVertexIndex === -1 ?
            this.moveAsWhole(offsetTime, offsetValue) :
            this.moveVertex(this._hitVertexIndex, offsetTime, offsetValue);
    };
    BaseToolRenderer.prototype.moveAsWhole = function (offsetIndex, offsetValue) {
        var _this = this;
        this._vertexes.forEach(function (vertex, i) {
            _this.moveVertex(i, offsetIndex, offsetValue);
        });
    };
    /**
     * 移动画图工具的定点。。。这个方法略复杂呢。。。😭移动经过左右端点的时候都需要做特殊处理
     * 所谓端点，指的是datasource.first() 以及 datasource.last()所分别对应chart中的
     * 左端点和右端点
     * @param {[type]} index       订单的索引号
     * @param {number} offsetIndex 时间轴偏移量，单位为resolution
     * @param {number} offsetValue 价格轴偏移量
     */
    BaseToolRenderer.prototype.moveVertex = function (index, offsetIndex, offsetValue) {
        var datasource = this._chart.datasource;
        var axisX = this._chart.axisX;
        var resolution = datasource.resolution;
        var firstBar = datasource.first();
        var lastBar = datasource.last();
        var total = datasource.loaded();
        var vertex = this._vertexes[index];
        if (offsetIndex === 0 && offsetValue === 0) {
            return;
        }
        var offset = offsetIndex;
        var time = vertex.time;
        var barIndex = datasource.search(time);
        var guard;
        if (barIndex === -1) {
            if (time < firstBar.time) {
                if (offset > 0) {
                    guard = axisX.getPrevTickTime(firstBar.time, resolution);
                    while (offset--) {
                        // 判断是否到达左端点。特殊处理。因为断点上的值可能不恰好匹配getNextTickTime计算得到的刻度
                        // 例如2000-1-7，当resolution为w时，右移1w的值是2000-1-14，但如果右移1w恰好抵达左端点，
                        // 则日期值跟服务器获得的值有关，比如可能是2000-1-12，跟getNextTickTime计算所得不匹配。
                        // 因此这里针对左端点做特殊处理
                        if (guard === time) {
                            time = firstBar.time;
                        }
                        else {
                            time = axisX.getNextTickTime(time, resolution);
                            if (time > firstBar.time) {
                                // 如果移动到的坐标在datasource的数据范围内，则使用datasource中的数据，因为datasource中的数据
                                // 不一定匹配getNextTickTime计算所得
                                if (offset < total) {
                                    time = datasource.barAt(offset + 1).time;
                                    offset = 0;
                                }
                                else {
                                    time = lastBar.time;
                                    offset -= total;
                                }
                            }
                        }
                    }
                }
                else {
                    while (offset++) {
                        time = axisX.getPrevTickTime(time, resolution);
                    }
                }
            }
            else {
                if (offset > 0) {
                    while (offset--) {
                        time = axisX.getNextTickTime(time, resolution);
                    }
                }
                else {
                    guard = axisX.getNextTickTime(lastBar.time, resolution);
                    while (offset++) {
                        // 判断是否到达右端点。特殊处理。因为断点上的值可能不恰好匹配getPrevTickTime计算得到的刻度
                        // 例如2000-1-7，当resolution为w时，左移1w的值是1999-12-31，但如果左移1w恰好抵达右端点，
                        // 则日期值跟服务器获得的值有关，比如可能是1999-12-30，跟getPrevTickTime计算所得不匹配。
                        // 因此这里针对右端点做特殊处理
                        if (guard === time) {
                            time = lastBar.time;
                        }
                        else {
                            time = axisX.getPrevTickTime(time, resolution);
                            if (time < lastBar.time) {
                                // 如果移动到的坐标在datasource的数据范围内，则使用datasource中的数据，因为datasource中的数据
                                // 不一定匹配getPrevTickTime计算所得
                                if (offset > -total) {
                                    time = datasource.barAt(total - 2 + offset).time;
                                    offset = 0;
                                }
                                else {
                                    time = firstBar.time;
                                    offset += total;
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            if (barIndex + offset < 0) {
                time = datasource.first().time;
                offset += barIndex;
                while (offset++) {
                    time = axisX.getPrevTickTime(time, resolution);
                }
            }
            else if (barIndex + offset > datasource.loaded() - 1) {
                time = datasource.last().time;
                offset -= datasource.loaded() - 1 - barIndex;
                while (offset--) {
                    time = axisX.getNextTickTime(time, resolution);
                }
            }
            else {
                time = datasource.barAt(barIndex + offset).time;
            }
        }
        this.setVertex(index, time, vertex.value + offsetValue);
    };
    BaseToolRenderer.prototype.hitTestVertex = function (vertex, point) {
        var chart = this._chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var x = axisX.getXByTime(vertex.time);
        var y = axisY.getYByValue(vertex.value);
        if (Math.sqrt(Math.pow(x - point.x, 2) + Math.pow(y - point.y, 2)) < constant_1.HIT_TEST_TOLERANCE) {
            return true;
        }
        else {
            return false;
        }
    };
    return BaseToolRenderer;
}());
exports.BaseToolRenderer = BaseToolRenderer;


/***/ }),

/***/ "./src/graphic/tool/daterange.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var moment = __webpack_require__("./node_modules/moment/moment.js");
var util_1 = __webpack_require__("./src/util/index.ts");
var basetool_1 = __webpack_require__("./src/graphic/tool/basetool.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var legendTableLayout = [
    ['起始时间', 'startTime', '终止时间', 'endTime'],
    ['起始价', 'startPrice', '终止价', 'endPrice'],
    ['最高', 'high', '最低', 'low'],
    ['涨跌幅', 'changeRate', '振幅', 'amplitude'],
    ['总手', 'volume', '金额', 'amount'],
    ['阳线', 'upCount', '阴线', 'downCount'],
    ['十字星', 'crossCount'],
];
var colorSettings = {
    startTime: '#000',
    endTime: '#000',
    startPrice: '#000',
    endPrice: null,
    high: '#d32f2f',
    low: '#00796b',
    changeRate: null,
    amplitude: '#54a9ff',
    volume: '#54a9ff',
    amount: '#54a9ff',
    upCount: '#d32f2f',
    downCount: '#00796b',
    crossCount: '#000',
};
var DateRangeRenderer = (function (_super) {
    __extends(DateRangeRenderer, _super);
    function DateRangeRenderer(datasource) {
        _super.call(this);
        this._datasource = datasource;
    }
    /**
     * @override
     * 画图工具当前是否可见
     */
    DateRangeRenderer.prototype.isNowVisible = function () {
        var axisX = this._chart.axisX;
        var visibleBars = axisX.getVisibleTimeBars();
        var vertexes = this._vertexes;
        return vertexes[0].time <= visibleBars[visibleBars.length - 1].time &&
            vertexes[1].time >= visibleBars[0].time;
    };
    Object.defineProperty(DateRangeRenderer.prototype, "selected", {
        set: function (selected) {
            if (selected !== this._selected) {
                this._selected = selected;
                this._isValid = false;
            }
            if (!selected) {
                this._chart.removeDrawingTool(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangeRenderer.prototype, "vertexes", {
        get: function () {
            var axisY = this._chart.axisY;
            var range = axisY.range;
            return this._vertexes.map(function (vertex) { return ({
                time: vertex.time,
                value: (range.max + range.min) / 2,
            }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangeRenderer.prototype, "statData", {
        get: function () {
            if (this._isValid && this.isFinished()) {
                return this._statData;
            }
            var datasource = this._datasource;
            var axisX = this._chart.axisX;
            var startTime = this._vertexes[0].time;
            var endTime = this._vertexes.length > 1 ? this._vertexes[1].time : axisX.findTimeBarByX(this.getCursor().x).time;
            var tmp;
            if (startTime > endTime) {
                tmp = startTime;
                startTime = endTime;
                endTime = tmp;
            }
            var bars = datasource.range(startTime, endTime);
            if (bars.length === 0) {
                return this._statData = null;
            }
            var formatStr = datasource.resolution >= 'D' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm';
            var startPrice = bars[0].open;
            var endPrice = bars[bars.length - 1].close;
            var high = Math.max.apply(Math, _.pluck(bars, 'high'));
            var low = Math.min.apply(Math, _.pluck(bars, 'low'));
            var volume = util_1.formatNumber(_.pluck(bars, 'volume').reduce(function (memo, cur) {
                return memo + cur;
            }, 0), 2) + '手';
            var amount = util_1.formatNumber(_.pluck(bars, 'amount').reduce(function (memo, cur) {
                return memo + cur;
            }, 0), 2);
            var upCount = bars.reduce(function (memo, bar) {
                return bar.close >= bar.open ? memo + 1 : memo;
            }, 0);
            var downCount = bars.reduce(function (memo, bar) {
                return bar.close < bar.open ? memo + 1 : memo;
            }, 0);
            var crossCount = bars.reduce(function (memo, bar) {
                return Math.abs((bar.open - bar.close) / (bar.high - bar.low)) < 0.2 ? memo + 1 : memo;
            }, 0);
            return this._statData = {
                startTime: moment(bars[0].time * 1000).format(formatStr),
                endTime: moment(bars[bars.length - 1].time * 1000).format(formatStr),
                startPrice: startPrice,
                endPrice: endPrice,
                high: high,
                low: low,
                changeRate: (endPrice >= startPrice ? '+' : '') + ((endPrice / startPrice - 1) * 100).toFixed(2) + '%',
                amplitude: ((high / low - 1) * 100).toFixed(2) + '%',
                volume: volume, amount: amount,
                upCount: upCount, downCount: downCount,
                crossCount: crossCount,
            };
        },
        enumerable: true,
        configurable: true
    });
    DateRangeRenderer.prototype.drawTool = function (ctx) {
        var chart = this._chart;
        var axisX = chart.axisX;
        var vertexes = this._vertexes;
        var curPoint = this.getCursor();
        var isFinished = this.isFinished();
        var height = chart.height;
        var resolution = this._datasource.resolution;
        ctx.strokeStyle = '#ababab';
        ctx.lineWidth = 1;
        ctx.beginPath();
        var lTime;
        var rTime;
        var tmp;
        var lx;
        var rx;
        if (isFinished) {
            lTime = vertexes[0].time;
            rTime = vertexes[1].time;
            if (lTime > rTime) {
                tmp = lTime;
                lTime = rTime;
                rTime = tmp;
            }
            lx = ~~axisX.getXByTime(lTime);
            rx = ~~axisX.getXByTime(rTime);
            ctx.moveTo(lx, 0);
            ctx.lineTo(lx, height);
            ctx.moveTo(rx, 0);
            ctx.lineTo(rx, height);
        }
        else {
            lx = ~~axisX.getXByTime(vertexes[0].time);
            rx = curPoint.x;
            if (lx > rx) {
                tmp = lx;
                lx = rx;
                rx = tmp;
            }
            ctx.moveTo(lx, 0);
            ctx.lineTo(lx, height);
            ctx.moveTo(rx, 0);
            ctx.lineTo(rx, height);
        }
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#a000a0';
        ctx.setLineDash([6, 6]);
        ctx.moveTo(lx, height / 2);
        ctx.lineTo(rx, height / 2);
        ctx.moveTo(rx - 8, height / 2 - 8);
        ctx.lineTo(rx, height / 2);
        ctx.moveTo(rx - 8, height / 2 + 8);
        ctx.lineTo(rx, height / 2);
        ctx.stroke();
        ctx.globalAlpha = .3;
        ctx.fillStyle = '#6b91c5';
        ctx.rect(lx, 0, rx - lx, height);
        ctx.fill();
        var padding = 14;
        var lineHeight = 20;
        var columeWidth = resolution >= 'D' ? 80 : 100;
        var legendWidth = columeWidth * 4;
        var legendHeight = lineHeight * legendTableLayout.length + padding * 2;
        var legendX = lx + (rx - lx) / 2 - legendWidth / 2;
        var legendY = height - legendHeight;
        var statData = this.statData;
        var startPrice = statData.startPrice;
        if (resolution > '1' && !!statData) {
            ctx.globalAlpha = 1;
            ctx.setLineDash([0, 0]);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#6b91c5';
            ctx.fillStyle = '#eee';
            ctx.beginPath();
            ctx.rect(legendX, legendY, legendWidth, legendHeight);
            ctx.fill();
            ctx.stroke();
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.font = '10px Verdana, Arial, sans-serif';
            for (var i = 0, len1 = legendTableLayout.length, row = void 0, y = void 0; i < len1; i++) {
                row = legendTableLayout[i];
                y = legendY + padding + (i + 0.5) * lineHeight;
                for (var j = 0, len2 = row.length, label = void 0, value = void 0, x = void 0, key = void 0, color = void 0; j < len2; j += 2) {
                    x = legendX + columeWidth * j + padding;
                    label = row[j];
                    ctx.fillStyle = '#000';
                    ctx.textAlign = 'left';
                    ctx.fillText(label, x, y);
                    key = row[j + 1];
                    value = statData[key];
                    color = colorSettings[key];
                    x = legendX + columeWidth * (j + 2) - padding;
                    if (!!color) {
                        ctx.fillStyle = color;
                    }
                    else {
                        if (typeof value === 'number') {
                            ctx.fillStyle = value >= startPrice ? '#d32f2f' : '#00796b';
                        }
                        else if (typeof value === 'string') {
                            ctx.fillStyle = value.charAt(0) !== '-' ? '#d32f2f' : '#00796b';
                        }
                    }
                    ctx.textAlign = 'right';
                    ctx.fillText(typeof value === 'number' ? value.toFixed(2) : value, x, y);
                }
            }
        }
    };
    DateRangeRenderer.prototype.hitTestTool = function () {
        var chart = this._chart;
        var height = chart.height;
        var axisX = chart.axisX;
        var vertexes = this._vertexes;
        var _a = this.getCursor(), x = _a.x, y = _a.y;
        var x1 = ~~axisX.getXByTime(vertexes[0].time);
        var x2 = ~~axisX.getXByTime(vertexes[1].time);
        var lx = x1 <= x2 ? x1 : x2;
        var rx = x1 <= x2 ? x2 : x1;
        return Math.abs(lx - x) < constant_1.HIT_TEST_TOLERANCE ||
            Math.abs(rx - x) < constant_1.HIT_TEST_TOLERANCE ||
            (x >= lx && x <= rx && Math.abs(y - height / 2) < constant_1.HIT_TEST_TOLERANCE);
    };
    DateRangeRenderer.prototype.isFinished = function () {
        return this._vertexes.length === 2;
    };
    return DateRangeRenderer;
}(basetool_1.BaseToolRenderer));
exports.DateRangeRenderer = DateRangeRenderer;


/***/ }),

/***/ "./src/graphic/tool/horzline.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basetool_1 = __webpack_require__("./src/graphic/tool/basetool.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var HorzLineRenderer = (function (_super) {
    __extends(HorzLineRenderer, _super);
    function HorzLineRenderer() {
        _super.apply(this, arguments);
    }
    /**
     * @override
     * 画图工具当前是否可见
     */
    HorzLineRenderer.prototype.isNowVisible = function () {
        var axisY = this._chart.axisY;
        var vertex = this._vertexes[0];
        return vertex.value > axisY.minVal && vertex.value < axisY.maxVal;
    };
    Object.defineProperty(HorzLineRenderer.prototype, "vertexes", {
        get: function () {
            var axisX = this._chart.axisX;
            return this._vertexes.map(function (vertex) { return ({
                time: axisX.findTimeBarByX(axisX.width / 2).time,
                value: vertex.value,
            }); });
        },
        enumerable: true,
        configurable: true
    });
    HorzLineRenderer.prototype.drawTool = function (ctx) {
        var chart = this._chart;
        var axisY = chart.axisY;
        var vertex = this._vertexes[0];
        var y = ~~axisY.getYByValue(vertex.value);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.translate(0, 0.5);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(chart.width, y);
        ctx.stroke();
    };
    HorzLineRenderer.prototype.hitTestTool = function () {
        var chart = this._chart;
        var axisY = chart.axisY;
        var point = this.getCursor();
        var vertex = this._vertexes[0];
        var x0 = point.x;
        var y0 = point.y;
        var x1 = 0;
        var x2 = chart.width;
        var y = axisY.getYByValue(vertex.value);
        var distance = util_1.pointToSegDist(x0, y0, x1, y, x2, y);
        return distance < constant_1.HIT_TEST_TOLERANCE;
    };
    HorzLineRenderer.prototype.isFinished = function () {
        return this._vertexes.length === 1;
    };
    return HorzLineRenderer;
}(basetool_1.BaseToolRenderer));
exports.HorzLineRenderer = HorzLineRenderer;


/***/ }),

/***/ "./src/graphic/tool/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/graphic/tool/basetool.ts"));
__export(__webpack_require__("./src/graphic/tool/trendline.ts"));
__export(__webpack_require__("./src/graphic/tool/trendangle.ts"));
__export(__webpack_require__("./src/graphic/tool/vertline.ts"));
__export(__webpack_require__("./src/graphic/tool/horzline.ts"));
__export(__webpack_require__("./src/graphic/tool/daterange.ts"));


/***/ }),

/***/ "./src/graphic/tool/trendangle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basetool_1 = __webpack_require__("./src/graphic/tool/basetool.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var TrendAngleToolRenderer = (function (_super) {
    __extends(TrendAngleToolRenderer, _super);
    function TrendAngleToolRenderer() {
        _super.apply(this, arguments);
    }
    TrendAngleToolRenderer.prototype.drawTool = function (ctx) {
        var chart = this._chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var rangeY = chart.axisY.range;
        var cursor = this.getCursor();
        var coords = this._vertexes.map(function (vertex) { return ({
            x: ~~axisX.getXByTime(vertex.time),
            y: ~~axisY.getYByValue(vertex.value, rangeY),
        }); });
        if (!this.isFinished()) {
            coords.push({
                x: cursor.x,
                y: cursor.y,
            });
        }
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.beginPath();
        coords.forEach(function (coord, i) {
            if (i === 0) {
                ctx.moveTo(coord.x, coord.y);
            }
            else if (i === 1) {
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
                var firstCoord = coords[0];
                var clockwise = coord.y >= firstCoord.y;
                var angle = Math.atan((coord.y - firstCoord.y) / (coord.x - firstCoord.x));
                if (angle === 0) {
                    if (coord.x >= firstCoord.x) {
                        angle = 0;
                    }
                    else {
                        angle = Math.PI;
                    }
                }
                else {
                    if (clockwise) {
                        angle = angle > 0 ? angle : Math.PI + angle;
                    }
                    else {
                        angle = angle < 0 ? 2 * Math.PI + angle : Math.PI + angle;
                    }
                }
                var angleInt = ~~(angle / 2 / Math.PI * 360);
                if (clockwise) {
                    angleInt = -angleInt;
                }
                else {
                    angleInt = 360 - angleInt;
                }
                if (ctx.setLineDash) {
                    ctx.setLineDash([3, 3]);
                }
                ctx.moveTo(firstCoord.x, firstCoord.y);
                ctx.lineTo(firstCoord.x + 60, firstCoord.y);
                ctx.stroke();
                ctx.beginPath();
                if (clockwise) {
                    ctx.arc(firstCoord.x, firstCoord.y, 60, 0, angle);
                }
                else {
                    ctx.arc(firstCoord.x, firstCoord.y, 60, angle, 2 * Math.PI);
                }
                ctx.font = '12px ans-serif';
                ctx.fillStyle = 'black';
                ctx.fillText(angleInt + '°', firstCoord.x + 65, firstCoord.y + 6);
                ctx.stroke();
            }
        });
    };
    TrendAngleToolRenderer.prototype.hitTestTool = function () {
        var chart = this._chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var point = chart.crosshair.point;
        var vertex1 = this._vertexes[0];
        var vertex2 = this._vertexes[1];
        var x0 = point.x;
        var y0 = point.y;
        var x1 = axisX.getXByTime(vertex1.time);
        var y1 = axisY.getYByValue(vertex1.value);
        var x2 = axisX.getXByTime(vertex2.time);
        var y2 = axisY.getYByValue(vertex2.value);
        var distance = util_1.pointToSegDist(x0, y0, x1, y1, x2, y2);
        return distance < constant_1.HIT_TEST_TOLERANCE;
    };
    TrendAngleToolRenderer.prototype.isFinished = function () {
        return this._vertexes.length === 2;
    };
    return TrendAngleToolRenderer;
}(basetool_1.BaseToolRenderer));
exports.TrendAngleToolRenderer = TrendAngleToolRenderer;


/***/ }),

/***/ "./src/graphic/tool/trendline.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basetool_1 = __webpack_require__("./src/graphic/tool/basetool.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var TrendLineToolRenderer = (function (_super) {
    __extends(TrendLineToolRenderer, _super);
    function TrendLineToolRenderer() {
        _super.apply(this, arguments);
    }
    TrendLineToolRenderer.prototype.drawTool = function (ctx) {
        var chart = this._chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var cursor = this.getCursor();
        var startVertex = this._vertexes[0];
        var endVertex = this._vertexes[1];
        var x;
        var y;
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (this.isFinished()) {
            x = ~~axisX.getXByTime(startVertex.time);
            y = ~~axisY.getYByValue(startVertex.value);
            ctx.moveTo(x, y);
            x = ~~axisX.getXByTime(endVertex.time);
            y = ~~axisY.getYByValue(endVertex.value);
            ctx.lineTo(x, y);
        }
        else {
            x = ~~axisX.getXByTime(startVertex.time);
            y = ~~axisY.getYByValue(startVertex.value);
            ctx.moveTo(x, y);
            ctx.lineTo(~~cursor.x, ~~cursor.y);
        }
        ctx.stroke();
    };
    TrendLineToolRenderer.prototype.hitTestTool = function () {
        var chart = this._chart;
        var axisX = chart.axisX;
        var axisY = chart.axisY;
        var point = chart.crosshair.point;
        var vertex1 = this._vertexes[0];
        var vertex2 = this._vertexes[1];
        var x0 = point.x;
        var y0 = point.y;
        var x1 = axisX.getXByTime(vertex1.time);
        var y1 = axisY.getYByValue(vertex1.value);
        var x2 = axisX.getXByTime(vertex2.time);
        var y2 = axisY.getYByValue(vertex2.value);
        var distance = util_1.pointToSegDist(x0, y0, x1, y1, x2, y2);
        return distance < constant_1.HIT_TEST_TOLERANCE;
    };
    TrendLineToolRenderer.prototype.isFinished = function () {
        return this._vertexes.length === 2;
    };
    return TrendLineToolRenderer;
}(basetool_1.BaseToolRenderer));
exports.TrendLineToolRenderer = TrendLineToolRenderer;


/***/ }),

/***/ "./src/graphic/tool/vertline.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basetool_1 = __webpack_require__("./src/graphic/tool/basetool.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var VertLineRenderer = (function (_super) {
    __extends(VertLineRenderer, _super);
    function VertLineRenderer() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(VertLineRenderer.prototype, "vertexes", {
        get: function () {
            var range = this._chart.axisY.range;
            return this._vertexes.map(function (vertex) { return ({
                time: vertex.time,
                value: (range.max + range.min) / 2,
            }); });
        },
        enumerable: true,
        configurable: true
    });
    VertLineRenderer.prototype.drawTool = function (ctx) {
        var chart = this._chart;
        var axisX = chart.axisX;
        var vertex = this._vertexes[0];
        var x = ~~axisX.getXByTime(vertex.time);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.translate(0.5, 0);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, chart.height);
        ctx.stroke();
    };
    VertLineRenderer.prototype.hitTestTool = function () {
        var axisX = this._chart.axisX;
        var point = this.getCursor();
        var vertex = this._vertexes[0];
        return Math.abs(point.x - ~~axisX.getXByTime(vertex.time)) < constant_1.HIT_TEST_TOLERANCE;
    };
    VertLineRenderer.prototype.isFinished = function () {
        return this._vertexes.length === 1;
    };
    return VertLineRenderer;
}(basetool_1.BaseToolRenderer));
exports.VertLineRenderer = VertLineRenderer;


/***/ }),

/***/ "./src/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("./src/style/normalize.css");
__webpack_require__("./src/style/common.css");
var React = __webpack_require__("./node_modules/react/react.js");
var react_dom_1 = __webpack_require__("./node_modules/react-dom/index.js");
var provider_1 = __webpack_require__("./src/provider.tsx");
var util_1 = __webpack_require__("./src/util/index.ts");
var chartlayout_1 = __webpack_require__("./src/component/chartlayout/index.tsx");
var chartlayout_2 = __webpack_require__("./src/model/chartlayout.ts");
var container = document.getElementById('chart_container');
var chartLayoutModel = new chartlayout_2.default();
var symbol = util_1.getParameterByName('symbol') || 'sh000001';
function renderChart() {
    react_dom_1.render(React.createElement(provider_1.default, {chartLayout: chartLayoutModel}, 
        React.createElement(chartlayout_1.default, {symbol: symbol, defaultSymbol: 'sh000001', height: document.documentElement.clientHeight, width: document.documentElement.clientWidth, shape: 'candle', resolution: '1'})
    ), container);
}
// 页面resize时重新渲染
window.onresize = renderChart;
renderChart();


/***/ }),

/***/ "./src/model/axisx.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventEmitter = __webpack_require__("./node_modules/eventemitter3/index.js");
var constant_1 = __webpack_require__("./src/constant/index.ts");
var axisx_1 = __webpack_require__("./src/graphic/axisx.ts");
var xtickmark_1 = __webpack_require__("./src/model/xtickmark.ts");
exports.INITIAL_OFFSET = 50;
exports.MAX_BAR_WIDTH = 30;
exports.MIN_BAR_WIDTH = 2;
var AxisXModel = (function (_super) {
    __extends(AxisXModel, _super);
    function AxisXModel(datasource, crosshair) {
        _super.call(this);
        this._barWidth = 8;
        this._offset = -exports.INITIAL_OFFSET;
        this._isValid = false;
        this._datasource = datasource;
        this._crosshair = crosshair;
        this._tickmark = new xtickmark_1.default(this);
        this._graphic = new axisx_1.default(this);
    }
    Object.defineProperty(AxisXModel.prototype, "barWidth", {
        get: function () {
            return this._barWidth;
        },
        set: function (width) {
            if (width < exports.MIN_BAR_WIDTH) {
                this._barWidth = exports.MIN_BAR_WIDTH;
            }
            else if (width > exports.MAX_BAR_WIDTH) {
                this._barWidth = exports.MAX_BAR_WIDTH;
            }
            else {
                this._barWidth = width;
            }
            this._isValid = false;
            this.emit('barwidth_change', this._barWidth);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisXModel.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisXModel.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (offset) {
            if (offset < this.getMinOffset()) {
                this._offset = this.getMinOffset();
            }
            else if (offset > this.getMaxOffset()) {
                this._offset = this.getMaxOffset();
            }
            else {
                this._offset = offset;
            }
            this._isValid = false;
            this.emit('offset_change', this._offset);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisXModel.prototype, "datasource", {
        get: function () {
            return this._datasource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisXModel.prototype, "graphic", {
        get: function () {
            return this._graphic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisXModel.prototype, "tickmark", {
        get: function () {
            return this._tickmark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisXModel.prototype, "crosshair", {
        get: function () {
            return this._crosshair;
        },
        enumerable: true,
        configurable: true
    });
    AxisXModel.prototype.getVisibleTimeBars = function () {
        if (this._visibleTimeBars) {
            return this._visibleTimeBars;
        }
        var timeBars = [];
        var datasource = this._datasource;
        var resolution = datasource.resolution;
        var width = this.width;
        var barWidth = this._barWidth;
        var barSize = datasource.loaded();
        var offset = this._offset;
        var end = barSize - ~~(offset / barWidth);
        var posX = width - barWidth / 2;
        var x;
        var time;
        if (end > barSize) {
            end = barSize;
        }
        else if (end < 0) {
            return timeBars;
        }
        // 修正posX
        if (offset >= 0) {
            posX += offset % barWidth;
        }
        else {
            posX += offset;
        }
        var start = end - Math.ceil(posX / barWidth) - 1;
        if (start <= 0) {
            start = 0;
        }
        var bars = datasource.slice(start, end);
        if (!bars.length) {
            return timeBars;
        }
        x = posX;
        for (var i = bars.length - 1; i >= 0; i--, x -= barWidth) {
            timeBars.unshift({ time: bars[i].time, x: x });
        }
        time = timeBars[0].time;
        // 数据不足显示的时候，使用扩展填充
        while (x >= 0) {
            time = this.getPrevTickTime(time, resolution);
            timeBars.unshift({ time: time, x: x });
            x -= barWidth;
        }
        x = posX;
        time = timeBars[timeBars.length - 1].time;
        while (x <= width - barWidth / 2) {
            x += barWidth;
            time = this.getNextTickTime(time, resolution);
            timeBars.push({ time: time, x: x });
        }
        return this._visibleTimeBars = timeBars;
    };
    AxisXModel.prototype.draw = function (useCache) {
        if (useCache === void 0) { useCache = false; }
        var ctx = this.ctx;
        var width = this.width;
        var height = this.height;
        if (!useCache) {
            this._visibleTimeBars = null;
            this._tickmark.clearTickmarks();
        }
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        this._graphic.draw();
        ctx.restore();
        this._isValid = true;
    };
    AxisXModel.prototype.findTimeBarByX = function (x) {
        var barWidth = this._barWidth;
        var visibleTimeBars = this.getVisibleTimeBars();
        var firstVisibleBar = visibleTimeBars[0];
        var lastVisibleBar = visibleTimeBars[visibleTimeBars.length - 1];
        var resolution = this._datasource.resolution;
        if (!visibleTimeBars.length) {
            return null;
        }
        if (x > lastVisibleBar.x) {
            var baseX = lastVisibleBar.x;
            var offset = ~~((x - baseX + 0.5 * barWidth) / barWidth);
            var time = lastVisibleBar.time;
            x = baseX + offset * barWidth;
            while (offset--) {
                time = this.getNextTickTime(time, resolution);
            }
            return { x: x, time: time };
        }
        else if (x < firstVisibleBar.x) {
            var baseX = firstVisibleBar.x;
            var offset = ~~((baseX - x + 0.5 * barWidth) / barWidth);
            var time = firstVisibleBar.time;
            x = baseX - offset * barWidth;
            while (offset--) {
                time = this.getPrevTickTime(time, resolution);
            }
            return { x: x, time: time };
        }
        else {
            var baseX = firstVisibleBar.x;
            var offset = ~~((x - baseX + 0.5 * barWidth) / barWidth);
            return visibleTimeBars[offset];
        }
    };
    AxisXModel.prototype.getXByTime = function (time) {
        var visibleTimeBars = this.getVisibleTimeBars();
        var barWidth = this._barWidth;
        var datasource = this._datasource;
        var firstVisibleBar = visibleTimeBars[0];
        var lastVisibleBar = visibleTimeBars[visibleTimeBars.length - 1];
        if (!visibleTimeBars.length) {
            return null;
        }
        // 在现有数据范围内，直接使用已有的x坐标
        if (time >= firstVisibleBar.time && time <= lastVisibleBar.time) {
            return visibleTimeBars[this.search(time)].x;
        }
        // 如果time超出了当前数据范围，则需要单独计算x坐标值
        var baseX = time < firstVisibleBar.time ? firstVisibleBar.x : lastVisibleBar.x;
        var resolution = datasource.resolution;
        var distance = 0;
        var baseTime = time < firstVisibleBar.time ? firstVisibleBar.time : lastVisibleBar.time;
        while (baseTime !== time) {
            if (baseTime < time) {
                baseTime = this.getNextTickTime(baseTime, resolution);
                distance++;
            }
            else {
                time = this.getNextTickTime(time, resolution);
                distance--;
            }
        }
        return baseX + distance * barWidth;
    };
    AxisXModel.prototype.getNextTickTime = function (time, resolution) {
        var nextDate;
        switch (resolution) {
            case '1':
                time += 60;
                nextDate = new Date(time * 1000);
                break;
            case '5':
                time += 60 * 5;
                nextDate = new Date(time * 1000);
                break;
            case '15':
                time += 60 * 15;
                nextDate = new Date(time * 1000);
                break;
            case '30':
                time += 60 * 30;
                nextDate = new Date(time * 1000);
                break;
            case '60':
                time += 60 * 60;
                nextDate = new Date(time * 1000);
                break;
            case 'D':
                time += 60 * 60 * 24;
                nextDate = new Date(time * 1000);
                break;
            case 'W':
                time += 7 * 60 * 60 * 24;
                nextDate = new Date(time * 1000);
                // 保证按照每周五对齐数据
                while (nextDate.getDay() !== 5) {
                    nextDate.setTime(nextDate.getTime() + 24 * 3600 * 1000);
                }
                break;
            case 'M':
                nextDate = new Date(time * 1000);
                if (nextDate.getMonth() === 11) {
                    nextDate.setFullYear(nextDate.getFullYear() + 1);
                    nextDate.setDate(1);
                    nextDate.setMonth(1);
                    nextDate.setTime(nextDate.getTime() - 24 * 3600 * 1000);
                }
                else if (nextDate.getMonth() === 10) {
                    nextDate.setFullYear(nextDate.getFullYear() + 1);
                    nextDate.setDate(1);
                    nextDate.setMonth(0);
                    nextDate.setTime(nextDate.getTime() - 24 * 3600 * 1000);
                }
                else {
                    nextDate.setDate(1);
                    nextDate.setMonth(nextDate.getMonth() + 2);
                    nextDate.setTime(nextDate.getTime() - 24 * 3600 * 1000);
                }
                if (constant_1.OPEN_DAYS.indexOf(nextDate.getDay()) === -1) {
                    var day = nextDate.getDay();
                    var diffDays = 0;
                    while (constant_1.OPEN_DAYS.indexOf(day) === -1) {
                        day = day - 1 < 0 ? 6 : day - 1;
                        diffDays++;
                    }
                    nextDate.setTime(nextDate.getTime() - diffDays * (24 * 3600 * 1000));
                }
                break;
            default:
                break;
        }
        if (resolution <= '60') {
            for (var i = 0, len = constant_1.OPEN_TIME_RANGE.length, nextDateHour = nextDate.getHours(), nextDateMinute = nextDate.getMinutes(); i < len; i++) {
                var nextHours = constant_1.OPEN_TIME_RANGE[i + 1];
                var curHours = constant_1.OPEN_TIME_RANGE[i];
                var curCloseHour = curHours[1][0];
                var curCloseMinute = curHours[1][1];
                var nextOpenHour = void 0;
                var nextOpenMinute = void 0;
                if (!!nextHours) {
                    nextOpenHour = nextHours[0][0];
                    nextOpenMinute = nextHours[0][1];
                    if ((nextDateHour > curCloseHour ||
                        (nextDateHour === curCloseHour && nextDateMinute > curCloseMinute)) &&
                        (nextDateHour < nextOpenHour ||
                            (nextDateHour === nextOpenHour && nextDateMinute < nextOpenMinute))) {
                        nextDate.setHours(nextOpenHour + nextDateHour - curCloseHour);
                        nextDate.setMinutes(nextOpenMinute + nextDateMinute - curCloseMinute);
                        break;
                    }
                }
                else {
                    if (nextDateHour > curCloseHour ||
                        (nextDateHour === curCloseHour && nextDateMinute > curCloseMinute)) {
                        nextHours = constant_1.OPEN_TIME_RANGE[0];
                        nextOpenHour = nextHours[0][0];
                        nextOpenMinute = nextHours[0][1];
                        nextDate.setTime(nextDate.getTime() + 24 * 3600 * 1000);
                        nextDate.setHours(nextOpenHour + nextDateHour - curCloseHour);
                        nextDate.setMinutes(nextOpenMinute + nextDateMinute - curCloseMinute);
                        break;
                    }
                }
            }
        }
        if (constant_1.OPEN_DAYS.indexOf(nextDate.getDay()) === -1) {
            var day = nextDate.getDay();
            var diffDays = 0;
            while (constant_1.OPEN_DAYS.indexOf(day % 7) === -1) {
                diffDays++;
                day++;
            }
            nextDate.setTime(nextDate.getTime() + diffDays * (24 * 3600 * 1000));
        }
        return nextDate.getTime() / 1000;
    };
    AxisXModel.prototype.getPrevTickTime = function (time, resolution) {
        var prevDate;
        switch (resolution) {
            case '1':
                time -= 60;
                prevDate = new Date(time * 1000);
                break;
            case '5':
                time -= 60 * 5;
                prevDate = new Date(time * 1000);
                break;
            case '15':
                time -= 60 * 15;
                prevDate = new Date(time * 1000);
                break;
            case '30':
                time -= 60 * 30;
                prevDate = new Date(time * 1000);
                break;
            case '60':
                time -= 60 * 60;
                prevDate = new Date(time * 1000);
                break;
            case 'D':
                time -= 60 * 60 * 24;
                prevDate = new Date(time * 1000);
                break;
            case 'W':
                time -= 7 * 60 * 60 * 24;
                prevDate = new Date(time * 1000);
                // 保证按照每周五对齐数据
                while (prevDate.getDay() !== 5) {
                    prevDate.setTime(prevDate.getTime() + 24 * 3600 * 1000);
                }
                break;
            case 'M':
                prevDate = new Date(time * 1000);
                prevDate.setDate(1);
                prevDate.setTime(prevDate.getTime() - 24 * 3600 * 1000);
                if (constant_1.OPEN_DAYS.indexOf(prevDate.getDay()) === -1) {
                    var day = prevDate.getDay();
                    var diffDays = 0;
                    while (constant_1.OPEN_DAYS.indexOf(day) === -1) {
                        day = day - 1 < 0 ? 6 : day - 1;
                        diffDays++;
                    }
                    prevDate.setTime(prevDate.getTime() - diffDays * (24 * 3600 * 1000));
                }
                break;
            default:
                break;
        }
        if (resolution <= '60') {
            for (var i = constant_1.OPEN_TIME_RANGE.length - 1, prevDateHour = prevDate.getHours(), prevDateMinute = prevDate.getMinutes(); i >= 0; i--) {
                var prevHours = constant_1.OPEN_TIME_RANGE[i - 1];
                var curHours = constant_1.OPEN_TIME_RANGE[i];
                var curOpenHour = curHours[0][0];
                var curOpenMinute = curHours[0][1];
                var prevCloseHour = void 0;
                var prevCloseMinute = void 0;
                if (!!prevHours) {
                    prevCloseHour = prevHours[1][0];
                    prevCloseMinute = prevHours[1][1];
                    if ((prevDateHour > prevCloseHour ||
                        (prevDateHour === prevCloseHour && prevDateMinute > prevCloseMinute)) &&
                        (prevDateHour < curOpenHour ||
                            (prevDateHour === curOpenHour && prevDateMinute < curOpenMinute))) {
                        prevDate.setHours(prevCloseHour - (prevDateHour - curOpenHour));
                        prevDate.setMinutes(prevCloseMinute - (prevDateMinute - curOpenMinute));
                        break;
                    }
                    else if ((prevDateHour === prevCloseHour && prevDateMinute === prevCloseMinute) ||
                        (prevDateHour === curOpenHour && prevDateMinute === curOpenMinute)) {
                        prevDate.setHours(prevCloseHour);
                        prevDate.setMinutes(prevCloseMinute);
                    }
                }
                else {
                    if (prevDateHour < curOpenHour ||
                        (prevDateHour === curOpenHour && prevDateMinute < curOpenMinute)) {
                        prevHours = constant_1.OPEN_TIME_RANGE[constant_1.OPEN_TIME_RANGE.length - 1];
                        prevCloseHour = prevHours[1][0];
                        prevCloseMinute = prevHours[1][1];
                        prevDate.setTime(prevDate.getTime() - 24 * 3600 * 1000);
                        prevDate.setHours(prevCloseHour - (curOpenHour - prevDateHour));
                        prevDate.setMinutes(prevCloseMinute - (curOpenMinute - prevDateMinute));
                        break;
                    }
                    else if (prevDateHour === curOpenHour && prevDateMinute === curOpenMinute) {
                        prevHours = constant_1.OPEN_TIME_RANGE[constant_1.OPEN_TIME_RANGE.length - 1];
                        prevCloseHour = prevHours[1][0];
                        prevCloseMinute = prevHours[1][1];
                        prevDate.setTime(prevDate.getTime() - 24 * 3600 * 1000);
                        prevDate.setHours(prevCloseHour);
                        prevDate.setMinutes(prevCloseMinute);
                    }
                }
            }
        }
        if (constant_1.OPEN_DAYS.indexOf(prevDate.getDay()) === -1) {
            var day = prevDate.getDay();
            var diffDays = 0;
            while (constant_1.OPEN_DAYS.indexOf(day) === -1) {
                day = day - 1 < 0 ? 6 : day - 1;
                diffDays++;
            }
            prevDate.setTime(prevDate.getTime() - diffDays * (24 * 3600 * 1000));
        }
        return ~~(prevDate.getTime() / 1000);
    };
    AxisXModel.prototype.search = function (time) {
        var visibleBars = this.getVisibleTimeBars();
        if (!visibleBars.length) {
            return -1;
        }
        if (time < visibleBars[0].time || time > visibleBars[visibleBars.length - 1].time) {
            return -1;
        }
        return this.bsearch(time, 0, visibleBars.length - 1, visibleBars);
    };
    AxisXModel.prototype.resetOffset = function () {
        this._offset = -exports.INITIAL_OFFSET;
    };
    AxisXModel.prototype.getMaxOffset = function () {
        return (this._datasource.loaded() - 10) * this._barWidth;
    };
    AxisXModel.prototype.getMinOffset = function () {
        return this._barWidth * 10 - this.width;
    };
    /**
     * 二分查找时间戳对应数据集合中的下标索引
     * @param  {number}     time        时间戳（精确到秒）
     * @param  {number}     fromIndex   开始查找范围
     * @param  {number}     toIndex     结束查找范围
     * @param  {ITimeBar[]} visibleBars bar数据
     * @return {number}                 下标索引
     */
    AxisXModel.prototype.bsearch = function (time, fromIndex, toIndex, visibleBars) {
        var pivot = ~~((fromIndex + toIndex) / 2);
        var value = visibleBars[pivot].time;
        if (fromIndex === toIndex) {
            if (time === value) {
                return pivot;
            }
            else {
                return -1;
            }
        }
        if (value === time) {
            return pivot;
        }
        else if (value > time) {
            return this.bsearch(time, fromIndex, pivot, visibleBars);
        }
        else {
            return this.bsearch(time, pivot + 1, toIndex, visibleBars);
        }
    };
    return AxisXModel;
}(EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AxisXModel;


/***/ }),

/***/ "./src/model/axisy.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventEmitter = __webpack_require__("./node_modules/eventemitter3/index.js");
var axisy_1 = __webpack_require__("./src/graphic/axisy.ts");
var ytickmark_1 = __webpack_require__("./src/model/ytickmark.ts");
var AxisYModel = (function (_super) {
    __extends(AxisYModel, _super);
    function AxisYModel(datasource, crosshair) {
        _super.call(this);
        this._margin = 10;
        this._isValid = false;
        this._datasource = datasource;
        this._crosshair = crosshair;
        this._graphic = new axisy_1.default(this);
        this._tickmark = new ytickmark_1.default(this);
    }
    Object.defineProperty(AxisYModel.prototype, "margin", {
        get: function () {
            var height = this.height;
            if (this._margin > height / 2) {
                return height / 2 - 1;
            }
            else {
                return this._margin;
            }
        },
        set: function (margin) {
            var height = this.height;
            if (margin > height / 2) {
                this._margin = height / 2 - 1;
            }
            else {
                this._margin = margin;
            }
            this._isValid = false;
            this._chart.chartLayout.emit('barmargin_change');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisYModel.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisYModel.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (chart) {
            this._chart = chart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisYModel.prototype, "datasource", {
        get: function () {
            return this._datasource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisYModel.prototype, "graphic", {
        get: function () {
            return this._graphic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisYModel.prototype, "tickmark", {
        get: function () {
            return this._tickmark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisYModel.prototype, "crosshair", {
        get: function () {
            return this._crosshair;
        },
        enumerable: true,
        configurable: true
    });
    AxisYModel.prototype.getYByValue = function (value, range) {
        if (range === void 0) { range = this.range; }
        var margin = this.margin;
        var availHeight = this.height - margin * 2;
        var diff1 = range.max - range.min;
        var diff2 = range.max - value;
        if (range.max === 0 && range.min === 0) {
            return availHeight + margin;
        }
        else if (range.max === range.min) {
            return margin;
        }
        else {
            return (diff2 / diff1) * availHeight + margin;
        }
    };
    AxisYModel.prototype.getValueByY = function (value, range) {
        if (range === void 0) { range = this.range; }
        var margin = this.margin;
        var height = this.height;
        var availHeight = height - margin * 2;
        var diff1 = range.max - range.min;
        return (height - margin - value) * diff1 / availHeight + range.min;
    };
    Object.defineProperty(AxisYModel.prototype, "maxVal", {
        get: function () {
            return this.getValueByY(this.getYByValue(this.range.max) - this.margin);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisYModel.prototype, "minVal", {
        get: function () {
            return this.getValueByY(this.getYByValue(this.range.min) + this.margin);
        },
        enumerable: true,
        configurable: true
    });
    AxisYModel.prototype.draw = function (useCache) {
        if (useCache === void 0) { useCache = false; }
        var ctx = this.ctx;
        var width = this.width;
        var height = this.height;
        if (!useCache) {
            this._tickmark.clearTickmarks();
        }
        ctx.save();
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, width, height);
        this._graphic.draw();
        ctx.restore();
        this._isValid = true;
    };
    return AxisYModel;
}(EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AxisYModel;


/***/ }),

/***/ "./src/model/chart.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventEmitter = __webpack_require__("./node_modules/eventemitter3/index.js");
var study_1 = __webpack_require__("./src/model/study.ts");
var grid_1 = __webpack_require__("./src/graphic/grid.ts");
var util_1 = __webpack_require__("./src/util/index.ts");
var sequence = 1;
var ChartModel = (function (_super) {
    __extends(ChartModel, _super);
    function ChartModel(chartLayout, datasource, axisX, axisY, crosshair, isPrice, isMain) {
        if (isMain === void 0) { isMain = false; }
        _super.call(this);
        this._isValid = false;
        this._hover = false;
        this._isHit = false;
        this._id = 0;
        this._id = sequence++;
        this._chartLayout = chartLayout;
        this._datasource = datasource;
        this._axisX = axisX;
        this._axisY = axisY;
        this._crosshair = crosshair;
        this._isPrice = isPrice;
        this._isMain = isMain;
        this._grid = new grid_1.default(this);
        this._graphs = [];
        this._patterns = [];
        this._tools = [];
    }
    Object.defineProperty(ChartModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "chartLayout", {
        get: function () {
            return this._chartLayout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "graphs", {
        get: function () {
            return this._graphs.slice(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "visibleGraphs", {
        get: function () {
            return this._graphs.filter(function (graph) { return graph.isVisible; }).sort(function (a, b) { return b.priority - a.priority; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "studies", {
        get: function () {
            return this.graphs.filter(function (graph) { return graph instanceof study_1.default; }).sort(function (a, b) { return b.priority - a.priority; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "compares", {
        get: function () {
            return this.graphs.filter(function (graph) { return graph.isComparison; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "mainGraph", {
        get: function () {
            return this.graphs.filter(function (graph) { return graph.isMain; })[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "tools", {
        get: function () {
            return this._tools.slice(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "visibleTools", {
        get: function () {
            return this._tools.filter(function (tool) { return tool.isNowVisible() && !tool.isEditing; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "patterns", {
        get: function () {
            return this._patterns.slice(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "visiblePatterns", {
        get: function () {
            return this._patterns.filter(function (pattern) { return pattern.isVisible && pattern.isNowVisible(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "datasource", {
        get: function () {
            return this._datasource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "crosshair", {
        get: function () {
            return this._crosshair;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "axisX", {
        get: function () {
            return this._axisX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "axisY", {
        get: function () {
            return this._axisY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "grid", {
        get: function () {
            return this._grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "isPrice", {
        get: function () {
            return this._isPrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "isMain", {
        get: function () {
            return this._isMain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "isHit", {
        get: function () {
            return this._isHit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "hover", {
        get: function () {
            return this._hover;
        },
        set: function (hover) {
            this._hover = hover;
            if (this.ctx) {
                this._offset = util_1.clientOffset(this.ctx.canvas);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModel.prototype, "isValid", {
        get: function () {
            return this._isValid &&
                this.graphs.every(function (graph) { return graph.isValid; }) &&
                this.tools.every(function (tool) { return tool.isValid; }) &&
                this.patterns.every(function (pattern) { return pattern.isValid; }) &&
                this.axisY.isValid;
        },
        enumerable: true,
        configurable: true
    });
    ChartModel.prototype.addGraph = function (graph) {
        this._graphs.push(graph);
        this._isValid = false;
    };
    ChartModel.prototype.removeGraph = function (graph) {
        this._graphs.splice(this._graphs.indexOf(graph), 1);
        this._isValid = false;
    };
    ChartModel.prototype.addDrawingTool = function (tool) {
        this._tools.push(tool);
        this._isValid = false;
    };
    ChartModel.prototype.setPatternVisibility = function (isWave, visible) {
        this._patterns
            .filter(function (pattern) { return isWave ? pattern.type === 'wave' : pattern.type !== 'wave'; })
            .forEach(function (pattern) { return pattern.isVisible = visible; });
        this._isValid = false;
    };
    /**
     * 删除画图工具
     * @param {BaseToolRenderer} tool 将要删除的画图工具对象
     */
    ChartModel.prototype.removeDrawingTool = function (tool) {
        this.editingDrawingTool = null;
        this._tools.splice(this._tools.indexOf(tool), 1);
        this._isValid = false;
        this._chartLayout.emit('drawingtool_remove');
    };
    ChartModel.prototype.removeAllTools = function () {
        this._tools.length = 0;
    };
    ChartModel.prototype.drawingToolBegin = function () {
        var chartLayout = this._chartLayout;
        this.creatingDrawingTool = chartLayout.selectedDrawingTool;
        this.creatingDrawingTool.chart = this;
        chartLayout.selectedDrawingTool = null;
        this._chartLayout.emit('drawingtool_begin');
    };
    ChartModel.prototype.drawingToolEnd = function () {
        this.addDrawingTool(this.creatingDrawingTool);
        this.creatingDrawingTool = null;
        this._chartLayout.isEditMode = false;
        this._chartLayout.emit('drawingtool_end');
    };
    /**
     * 画图工具设置端点
     * @param {{x: number, y: number}} point 点坐标
     */
    ChartModel.prototype.drawingToolSetVertex = function (point) {
        var curBar = this.axisX.findTimeBarByX(point.x);
        var time = curBar.time;
        var value = this.axisY.getValueByY(point.y);
        this.creatingDrawingTool.addVertex({ time: time, value: value });
        this._chartLayout.emit('drawingtool_setvertex');
    };
    ChartModel.prototype.addPattern = function (pattern) {
        this._patterns.push(pattern);
        this._isValid = false;
    };
    ChartModel.prototype.removeAllPatterns = function () {
        this._patterns.length = 0;
        this._isValid = false;
    };
    ChartModel.prototype.calcRangeY = function () {
        var _this = this;
        var rangeY = this._graphs
            .reduce(function (range, graph) {
            // 如果chart是价格相关的，但是某个子图是价格无关的，则忽略它
            if (_this.isPrice && !graph.isPrice) {
                return range;
            }
            var r = graph.getRangeY();
            if (!r) {
                return range;
            }
            if (!range) {
                return {
                    max: r.max,
                    min: r.min,
                };
            }
            if (r.max > range.max) {
                range.max = r.max;
            }
            if (r.min < range.min) {
                range.min = r.min;
            }
            return range;
        }, null);
        // 修整rangeY，如果max等于min在将rangeY上下各增加0.01个单位
        if (rangeY && rangeY.max === rangeY.min) {
            rangeY.max += 0.01;
            rangeY.min -= 0.01;
        }
        this._axisY.range = rangeY;
    };
    ChartModel.prototype.hitTest = function (select) {
        if (select === void 0) { select = false; }
        var hit = false;
        this.visibleTools.reverse().forEach(function (tool) {
            if (hit) {
                tool.hover = false;
            }
            else if (tool.hitTest(select)) {
                hit = true;
            }
        });
        this.visibleGraphs.reverse().forEach(function (graph) {
            if (hit) {
                graph.hover = false;
            }
            else if (graph.hitTest(select)) {
                hit = true;
            }
        });
        if (hit !== this._isHit) {
            this._isHit = hit;
            this._chartLayout.emit('graph_hover', hit);
        }
        if (select) {
            this._chartLayout.emit('graph_select', hit);
        }
        return hit;
    };
    ChartModel.prototype.draw = function () {
        var visibleGraphs = this.visibleGraphs;
        var ctx = this.ctx;
        if (!this.datasource.loaded()) {
            return;
        }
        // 首先绘制背景色
        this.drawBg(ctx);
        // 绘制网格
        this._grid.draw(ctx);
        // 先绘制没有hover的图形
        visibleGraphs.filter(function (graph) { return !graph.hover; }).forEach(function (graph) { return graph.draw(ctx); });
        // 后绘制hover的图形，这样hover的图形就不会被其他图形遮挡
        visibleGraphs.filter(function (graph) { return graph.hover; }).forEach(function (graph) { return graph.draw(ctx); });
        // 绘制当前可见的画图工具
        this.visibleTools.forEach(function (tool) { return tool.draw(); });
        // 绘制当前可见的形态图形
        this.visiblePatterns.forEach(function (pattern) { return pattern.draw(ctx); });
        this._isValid = true;
    };
    ChartModel.prototype.clearTopCanvas = function () {
        var ctx = this.topCtx;
        var width = this.width;
        var height = this.height;
        ctx.clearRect(0, 0, width, height);
    };
    ChartModel.prototype.clearCache = function () {
        this.graphs.forEach(function (graph) { return graph.clearCache(); });
    };
    ChartModel.prototype.drawBg = function (ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
    };
    return ChartModel;
}(EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChartModel;


/***/ }),

/***/ "./src/model/chartlayout.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventEmitter = __webpack_require__("./node_modules/eventemitter3/index.js");
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var moment = __webpack_require__("./node_modules/moment/moment.js");
var randomColor = __webpack_require__("./node_modules/randomcolor/randomColor.js");
var chart_1 = __webpack_require__("./src/model/chart.ts");
var stock_1 = __webpack_require__("./src/model/stock.ts");
var axisx_1 = __webpack_require__("./src/model/axisx.ts");
var study_1 = __webpack_require__("./src/model/study.ts");
var pattern_1 = __webpack_require__("./src/model/pattern.ts");
var crosshair_1 = __webpack_require__("./src/model/crosshair.ts");
var axisy_1 = __webpack_require__("./src/model/axisy.ts");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var constant_1 = __webpack_require__("./src/constant/index.ts");
exports.preferredTimeRange = ['1天', '5天', '1月', '1年', '全部'];
var perferredResolution = ['1', '5', '30', 'D', 'M'];
exports.DEFAULT_MA_PROPS = [{
        length: 5,
        color: 'rgb(255,0,0)',
        isVisible: true,
    }, {
        length: 10,
        color: 'rgb(0,0,255)',
        isVisible: false,
    }, {
        length: 20,
        color: 'rgb(255,0,255)',
        isVisible: true,
    }, {
        length: 30,
        color: 'rgb(0,255,0)',
        isVisible: false,
    }, {
        length: 60,
        color: 'rgb(255,152,0)',
        isVisible: false,
    }];
var ChartLayoutModel = (function (_super) {
    __extends(ChartLayoutModel, _super);
    function ChartLayoutModel() {
        _super.call(this);
        this.willEraseDrawingTool = false;
        // 是否处于画图编辑模式（只有触屏下才会触发，因为触屏下画图编辑方式跟PC有区别）
        this._isEditMode = false;
        /**
         * 用于标记chart正在加载中，避免重复加载
         * @type {boolean}
         */
        this._loading = false;
        this._maStudies = [];
        this._charts = [];
        this.pulseUpdate = this.pulseUpdate.bind(this);
        this.fullUpdate = this.fullUpdate.bind(this);
        this.lightUpdate = this.lightUpdate.bind(this);
    }
    Object.defineProperty(ChartLayoutModel.prototype, "component", {
        set: function (component) {
            this._component = component;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "charts", {
        get: function () {
            return this._charts.slice(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "axisx", {
        get: function () {
            return this._axisx;
        },
        set: function (axisx) {
            this._axisx = axisx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "mainChart", {
        get: function () {
            return this._mainChart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "mainDatasource", {
        get: function () {
            return this._mainDatasource;
        },
        set: function (datasource) {
            this._mainDatasource = datasource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "hoverChart", {
        get: function () {
            return this._charts.filter(function (chart) { return chart.hover; })[0] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "defaultCursor", {
        get: function () {
            return this._defaultCursor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "maProps", {
        get: function () {
            return this.readFromLS("qchart.studies.props.ma[" + this.mainDatasource.resolution + "]") || exports.DEFAULT_MA_PROPS;
        },
        set: function (prop) {
            this.saveToLS("qchart.studies.props.ma[" + this.mainDatasource.resolution + "]", prop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "maStudies", {
        get: function () {
            return this._maStudies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartLayoutModel.prototype, "isEditMode", {
        get: function () {
            return this._isEditMode;
        },
        set: function (isEditMode) {
            var mainChart = this._mainChart;
            this._isEditMode = isEditMode;
            if (isEditMode) {
                this.setHoverChart(mainChart);
                this.setCursorPoint({
                    x: ~~(mainChart.width / 2 + 0.5),
                    y: ~~(mainChart.height / 2 + 0.5),
                });
            }
            this.emit('editmode_change', isEditMode);
        },
        enumerable: true,
        configurable: true
    });
    ChartLayoutModel.prototype.saveToLS = function (key, value) {
        if (value !== void 0) {
            localStorage[key] = JSON.stringify(value);
        }
    };
    ChartLayoutModel.prototype.readFromLS = function (key) {
        return localStorage.hasOwnProperty(key) ?
            JSON.parse(localStorage[key]) : null;
    };
    ChartLayoutModel.prototype.deleteFromLS = function (key) {
        delete localStorage[key];
    };
    ChartLayoutModel.prototype.setHoverChart = function (hoverChart) {
        this.charts.forEach(function (chart) {
            // 触屏设备需要手动设置取消chart hover
            chart.hover = false;
            chart.graphs.forEach(function (graph) { return graph.hover = false; });
            // 手动取消画图工具的hover
            chart.tools.forEach(function (tool) { return tool.hover = false; });
        });
        // 设置当前chart为hover态
        hoverChart.hover = true;
    };
    ChartLayoutModel.prototype.cancelSelectedGraph = function () {
        this.charts.forEach(function (ch) {
            ch.graphs.forEach(function (graph) { return graph.selected = false; });
            ch.tools.forEach(function (tool) { return tool.selected = false; });
        });
    };
    /**
     * 全量刷新
     */
    ChartLayoutModel.prototype.fullUpdate = function () {
        var _this = this;
        var axisX = this.axisx;
        if (this.needMoreData()) {
            this.loadHistory();
        }
        // 取消上一未调度的帧动画，避免卡顿
        if (this._lastAnimationFrame) {
            cancelAnimationFrame(this._lastAnimationFrame);
        }
        this._lastAnimationFrame = requestAnimationFrame(function () {
            axisX.draw();
            _this.charts.forEach(function (chart) {
                // 全量刷新需要刷新chart中的缓存
                chart.clearCache();
                chart.calcRangeY();
                chart.draw();
                chart.axisY.draw();
                // 清空上层画布
                chart.clearTopCanvas();
                chart.crosshair.draw();
            });
            _this._lastAnimationFrame = null;
        });
    };
    /**
     * 轻量刷新
     */
    ChartLayoutModel.prototype.lightUpdate = function () {
        var _this = this;
        if (!this._lastAnimationFrame) {
            this._lastAnimationFrame = requestAnimationFrame(function () {
                // 绘制x坐标轴
                _this.axisx.draw(_this.axisx.isValid ? true : false);
                _this.charts.forEach(function (chart) {
                    if (!chart.axisY.range) {
                        chart.calcRangeY();
                    }
                    // 清空上层画布
                    chart.clearTopCanvas();
                    if (!chart.isValid) {
                        chart.draw();
                    }
                    // 绘制y坐标轴，顺序不能错，必须放到chart.draw的后面
                    chart.axisY.draw(chart.axisY.isValid ? true : false);
                    // 绘制创建中的工具图形
                    if (chart.creatingDrawingTool) {
                        chart.creatingDrawingTool.draw();
                    }
                    // 绘制编辑中的工具图形
                    if (chart.editingDrawingTool) {
                        chart.editingDrawingTool.draw();
                    }
                    chart.crosshair.draw();
                });
                _this._lastAnimationFrame = null;
            });
        }
    };
    /**
     * 获取服务器时间
     */
    ChartLayoutModel.prototype.getServerTime = function () {
        var _this = this;
        return datasource_1.getServerTime()
            .then(function (timeStr) {
            var timeDiff = ~~(Date.now() / 1000) - (+timeStr);
            var datasources = [];
            _this.charts.forEach(function (chart) {
                chart.graphs.forEach(function (graph) {
                    datasources.push(graph.datasource);
                });
            });
            datasources.forEach(function (dt) { return dt.timeDiff = timeDiff; });
        });
    };
    /**
     * 获取形态技术分析数据
     */
    ChartLayoutModel.prototype.addPatterns = function () {
        var _this = this;
        if (this.mainDatasource.resolution === 'D') {
            return datasource_1.getPatterns(this.mainDatasource.symbol)
                .then(function (json) {
                json.data.shape_list.forEach(function (shape) {
                    if (shape.shape_type === 'wave') {
                        var bwPoints = shape.shape_detail.f.map(function (p) { return ({
                            time: ~~(moment(p.d).toDate().getTime() / 1000),
                            value: p.v,
                        }); });
                        var swPoints = shape.shape_detail.s.map(function (p) { return ({
                            time: ~~(moment(p.d).toDate().getTime() / 1000),
                            value: p.v,
                        }); });
                        _this.mainChart.addPattern(new pattern_1.default(_this.mainChart, shape.shape_type, { bwPoints: bwPoints, swPoints: swPoints }));
                    }
                    else if (shape.shape_type === 'triangle') {
                        var trendLines = [];
                        var points = null;
                        if (shape.shape_detail.xtd) {
                            trendLines.push(shape.shape_detail.xtd.l1);
                            trendLines.push(shape.shape_detail.xtd.l2);
                        }
                        if (shape.shape_detail.dtd) {
                            trendLines.push(shape.shape_detail.dtd.l1);
                            trendLines.push(shape.shape_detail.dtd.l2);
                        }
                        trendLines = trendLines.filter(function (line) { return !!line; }).map(function (line) { return ([
                            {
                                time: ~~(moment(line.p1.d).toDate().getTime() / 1000),
                                value: line.p1.v,
                            },
                            {
                                time: ~~(moment(line.p2.d).toDate().getTime() / 1000),
                                value: line.p2.v,
                            },
                        ]); });
                        _this.mainChart.addPattern(new pattern_1.default(_this.mainChart, shape.shape_type, { points: points, trendLines: trendLines }));
                    }
                    else {
                        var trendLines = [];
                        var points = null;
                        points = shape.shape_detail.st.map(function (p) { return ({
                            time: ~~(moment(p.d).toDate().getTime() / 1000),
                            value: p.v,
                        }); });
                        trendLines = [shape.shape_detail.l1, shape.shape_detail.l2].filter(function (line) { return !!line; }).map(function (line) { return [
                            { time: ~~(moment(line.p1.d).toDate().getTime() / 1000), value: line.p1.v },
                            { time: ~~(moment(line.p2.d).toDate().getTime() / 1000), value: line.p2.v },
                        ]; });
                        _this.mainChart.addPattern(new pattern_1.default(_this.mainChart, shape.shape_type, { points: points, trendLines: trendLines }));
                    }
                });
                _this.emit('patterns_add');
            });
        }
        else {
            return Promise.resolve();
        }
    };
    ChartLayoutModel.prototype.stopPulseUpdate = function () {
        this._loading = false;
        this.emit('loading_end');
        clearTimeout(this._pulseUpdateTimer);
        this._pulseUpdateTimer = null;
    };
    /**
     * 加载更多数据
     */
    ChartLayoutModel.prototype.loadHistory = function () {
        var _this = this;
        var mainDatasource = this.mainDatasource;
        // 主数据源若没有更多的话，停止加载更多
        if (!mainDatasource.hasMoreHistory || this._loading) {
            return Promise.resolve();
        }
        this._loading = true;
        this.emit('loading_start');
        var axisX = this.axisx;
        var datasources = [];
        var requiredNum = ~~(1.5 * axisX.width / axisX.barWidth);
        this.charts.forEach(function (chart) {
            chart.graphs.forEach(function (graph) {
                datasources.push(graph.datasource);
            });
        });
        /*
         * 首先加载主数据源的数据，主数据源加载完成后，再加载其他数据源。因为其他数据源都要跟主数据源对齐
         * 例如：主数据源有停牌的情况发生
         */
        return new Promise(function (resolve, reject) {
            var formerTime = mainDatasource.first() ? mainDatasource.first().time : null;
            mainDatasource
                .loadHistory(requiredNum)
                .then(function () {
                return Promise.all(_.chain(datasources)
                    .without(mainDatasource)
                    .unique()
                    .reduce(function (promises, datasource) {
                    promises.push(datasource.loadTimeRange(mainDatasource.first().time, formerTime ? formerTime : mainDatasource.last().time));
                    return promises;
                }, [])
                    .value())
                    .then(function () {
                    // 加载完成后立即重绘
                    _this.fullUpdate();
                    if (typeof _this._pulseUpdateTimer !== 'number') {
                        _this.pulseUpdate();
                    }
                    _this._loading = false;
                    _this.emit('loading_end');
                    resolve();
                })
                    .catch(function (ex) {
                    _this._loading = false;
                    _this.emit('loading_end');
                });
            })
                .catch(function (ex) {
                _this._loading = false;
                _this.emit('loading_end');
            });
        });
    };
    /**
     * 搏动更新
     */
    ChartLayoutModel.prototype.pulseUpdate = function () {
        var _this = this;
        var mainDatasource = this.mainDatasource;
        var delay = mainDatasource.pulseInterval < 10 ? 10 : mainDatasource.pulseInterval;
        // 使用最后一个bar的时间或者当前时间的前一分钟
        var from = mainDatasource.loaded() ?
            mainDatasource.last().time : mainDatasource.now() - 3600 * 24;
        // 未来一天，因为用户的PC可能进入休眠状态，待恢复时一次性要把休眠错过的数据全部请求过来。
        // 不过极端情况下一天未必会足够
        var to = from + 24 * 3600;
        var datasources = [];
        var reqs = [];
        this.charts.forEach(function (chart) {
            chart.graphs.forEach(function (graph) {
                datasources.push(graph.datasource);
            });
        });
        Promise.all(_.chain(datasources)
            .unique()
            .reduce(function (promises, datasource) {
            promises.push(datasource.loadTimeRange(from, to));
            return promises;
        }, reqs)
            .value())
            .then(function () {
            // 加载完成后立即重绘
            _this.fullUpdate();
            if (mainDatasource.pulseInterval) {
                _this._pulseUpdateTimer = setTimeout(_this.pulseUpdate, delay * 1000);
            }
        })
            .catch(function () { return _this._pulseUpdateTimer = setTimeout(_this.pulseUpdate, 30000); });
    };
    /**
     * 设置解析度
     * @param {ResolutionType} resolution
     */
    ChartLayoutModel.prototype.setResolution = function (resolution) {
        var mainDatasource = this._mainDatasource;
        var oldResolution = mainDatasource.resolution;
        // 股票类型时，分时图显示线形图，其他显示蜡烛图
        if (mainDatasource instanceof datasource_1.StockDatasource) {
            var mainGraph = this.mainChart.mainGraph;
            if (resolution === '1') {
                mainGraph.setShape('line');
                mainGraph.plots[0].shape = 'line';
            }
            else {
                mainGraph.setShape('candle');
                mainGraph.plots[0].shape = 'candle';
            }
        }
        // 批量设置数据源的解析度
        _.unique(this._charts.reduce(function (datasources, chart) {
            return datasources.concat(chart.graphs.map(function (graph) { return graph.datasource; }));
        }, [])).forEach(function (datasource) { return datasource.resolution = resolution; });
        this.clearCache();
        this.switchStudies(oldResolution);
        this.removeAllTools();
        if (resolution !== 'D') {
            this.removeAllPatterns();
        }
        else {
            this.addPatterns();
        }
        this.stopPulseUpdate();
        this.loadHistory();
        this._axisx.resetOffset();
        this.emit('resolution_change', resolution);
    };
    /**
     * 设置股票标示
     * @param {string} symbol [description]
     */
    ChartLayoutModel.prototype.setSymbol = function (symbol) {
        var _this = this;
        var mainDatasource = this._mainDatasource;
        mainDatasource
            .resolveSymbol(symbol)
            .then(function () {
            var symbolInfo = mainDatasource.symbolInfo;
            var recentList = _this.readFromLS('chart.recentlist') || [];
            // 批量设置数据源的symbol
            _.unique(_this._charts.reduce(function (datasources, chart) {
                return datasources.concat(chart.graphs.map(function (graph) { return graph.datasource; }));
            }, [])).forEach(function (datasource) { return datasource.symbol = symbol; });
            _this.clearCache();
            _this.switchStudies();
            _this.removeAllTools();
            _this.removeAllPatterns();
            _this.addPatterns();
            _this.stopPulseUpdate();
            _this.loadHistory();
            _this._axisx.resetOffset();
            if (_.findIndex(recentList, { symbol: symbolInfo.symbol }) === -1) {
                recentList.push(symbolInfo);
                // 最近访问最多存放50条
                if (recentList.length > 50) {
                    recentList.shift();
                }
                _this.saveToLS('chart.recentlist', recentList);
            }
            history.replaceState(null, document.title, "/?symbol=" + symbol);
            _this.emit('symbol_change', symbolInfo);
        });
    };
    /**
     * 设置不复权、前复权
     * @param {number} right 0: 不复权 1: 前复权
     */
    ChartLayoutModel.prototype.setRight = function (right) {
        // 批量设置数据源的解析度
        _.unique(this._charts.reduce(function (datasources, chart) {
            return datasources.concat(chart.graphs.map(function (graph) { return graph.datasource; }));
        }, []))
            .forEach(function (datasource) {
            if (datasource instanceof datasource_1.StockDatasource) {
                datasource.right = right;
            }
        });
        this.clearCache();
        this.removeAllTools();
        this.stopPulseUpdate();
        this.loadHistory();
        this._axisx.resetOffset();
        this.emit('right_change', right);
    };
    /**
     * 设置指针位置
     * @param {Point} point
     */
    ChartLayoutModel.prototype.setCursorPoint = function (point) {
        var oldPoint = this.mainChart.crosshair.point;
        if (oldPoint && point && oldPoint.x === point.x && oldPoint.y === point.y) {
            return;
        }
        this.charts.forEach(function (ch) { return ch.crosshair.point = point; });
        this.emit('cursor_move', point);
    };
    /**
     * 设置默认的指针样式
     * @param {'default' | 'crosshair'} cursor 指针样式
     */
    ChartLayoutModel.prototype.setDefaultCursor = function (cursor) {
        this._defaultCursor = cursor;
        this.emit('cursor_change', cursor);
    };
    ChartLayoutModel.prototype.addChart = function (chart) {
        var point = this._mainChart ? this._mainChart.crosshair.point : { x: 0, y: 0 };
        if (chart.isMain) {
            if (this._mainChart) {
                throw new Error('can only has one main chart');
            }
            this._mainChart = chart;
        }
        chart.crosshair.point = point ? {
            x: point.x,
            y: point.y,
        } : null;
        this._charts.push(chart);
        this.emit('chart_add', chart);
    };
    ChartLayoutModel.prototype.removeChart = function (chart) {
        this._charts.splice(this._charts.indexOf(chart), 1);
        this.emit('chart_remove', chart);
    };
    ChartLayoutModel.prototype.resetStudies = function () {
        var _this = this;
        this.removeAllStudies();
        var mainChart = this._mainChart;
        var datasource = mainChart.datasource;
        var maProps = this.maProps || exports.DEFAULT_MA_PROPS;
        var maStudies = this._maStudies;
        var forceShowMA = !!this.readFromLS('chart.forceMA');
        var showPattern = !!this.readFromLS('chart.showPressureSupport') || !!this.readFromLS('chart.showReverseRelay');
        var showInflection = !!this.readFromLS('chart.showInflection');
        var showPressureSupport = !!this.readFromLS('chart.showPressureSupport');
        maStudies.length = 0;
        if (datasource.resolution === '1') {
            if (datasource instanceof datasource_1.StockDatasource &&
                datasource.symbolInfo &&
                datasource.symbolInfo.type === 'stock') {
                maStudies[0] = new study_1.default(mainChart, '均价');
                mainChart.addGraph(maStudies[0]);
            }
        }
        else {
            maProps.forEach(function (defaultMAProps, i) {
                var ma = new study_1.default(mainChart, 'MA', showPattern && !forceShowMA && datasource.resolution === 'D' ? false : defaultMAProps.isVisible, [defaultMAProps.length], [{
                        color: defaultMAProps.color,
                        lineWidth: 1,
                    }]);
                _this._maStudies.push(ma);
                mainChart.addGraph(ma);
            });
        }
        if (datasource.resolution <= 'D' && showPressureSupport) {
            mainChart.addGraph(new study_1.default(mainChart, '压力支撑'));
        }
        if (datasource.resolution === 'D' && showInflection) {
            mainChart.addGraph(new study_1.default(mainChart, 'inflection'));
            mainChart.addGraph(new study_1.default(mainChart, 'inflection2'));
        }
        mainChart.addGraph(new study_1.default(mainChart, 'VOLUME'));
    };
    ChartLayoutModel.prototype.switchStudies = function (fromResolution) {
        var _this = this;
        var mainChart = this._mainChart;
        var datasource = this._mainDatasource;
        var resolution = datasource.resolution;
        var symbolInfo = datasource.symbolInfo;
        var maStudies = this._maStudies;
        var maProps = this.maProps || exports.DEFAULT_MA_PROPS;
        var reset = +(fromResolution === '1') ^ +(resolution === '1');
        var showPressureSupport = !!this.readFromLS('chart.showPressureSupport');
        var showInflection = !!this.readFromLS('chart.showInflection');
        var forceShowMA = !!this.readFromLS('chart.forceMA');
        var showPattern = !!this.readFromLS('chart.showPressureSupport') || !!this.readFromLS('chart.showReverseRelay');
        // 分时和K线之间切换时，清空所有指标
        if (reset) {
            return this.resetStudies();
        }
        // 移除所有均线类指标
        this.maStudies.forEach(function (ma) { return _this.removeStudy(mainChart, ma.id); });
        if (showPressureSupport) {
            if (fromResolution > 'D' && resolution <= 'D') {
                mainChart.addGraph(new study_1.default(mainChart, '压力支撑'));
            }
            else if (fromResolution <= 'D' && resolution > 'D') {
                // 移除压力支撑指标
                mainChart.graphs
                    .filter(function (grapth) { return grapth instanceof study_1.default && grapth.studyType === '压力支撑'; })
                    .forEach(function (graph) { return mainChart.removeGraph(graph); });
            }
            else {
            }
        }
        if (showInflection) {
            if (fromResolution !== 'D' && resolution === 'D') {
                mainChart.addGraph(new study_1.default(mainChart, 'inflection'));
            }
            else if (fromResolution === 'D' && resolution !== 'D') {
                // 移除拐点指标
                mainChart.graphs
                    .filter(function (grapth) { return grapth instanceof study_1.default && grapth.studyType === 'inflection'; })
                    .forEach(function (graph) { return mainChart.removeGraph(graph); });
            }
            else {
            }
        }
        if (resolution === '1') {
            if (symbolInfo.type === 'stock') {
                maStudies.length = 0;
                maStudies[0] = new study_1.default(mainChart, '均价');
                mainChart.addGraph(maStudies[0]);
            }
            else {
            }
        }
        else {
            maStudies.length = 0;
            maProps.forEach(function (defaultMAProps, i) {
                var ma = new study_1.default(mainChart, 'MA', showPattern && !forceShowMA && datasource.resolution === 'D' ? false : defaultMAProps.isVisible, [defaultMAProps.length], [{
                        color: defaultMAProps.color,
                        lineWidth: 1,
                    }]);
                maStudies.push(ma);
                mainChart.addGraph(ma);
            });
        }
    };
    /**
     * 增加指标
     * @param {StudyType} study
     */
    ChartLayoutModel.prototype.addStudy = function (studyType) {
        var _this = this;
        var config = datasource_1.studyConfig[studyType];
        var mainChart = this._mainChart;
        var mainDatasource = this.mainDatasource;
        if (config.isPrice) {
            var study_2 = new study_1.default(mainChart, studyType);
            if (study_2.datasourceType === 'local') {
                this._mainChart.addGraph(study_2);
                this.emit('graph_add', study_2);
            }
            else {
                if (!!mainDatasource.first()) {
                    this._mainChart.addGraph(study_2);
                    study_2.datasource
                        .loadTimeRange(mainDatasource.first().time, mainDatasource.last().time)
                        .then(function () {
                        _this.emit('graph_add', study_2);
                    });
                }
            }
        }
        else {
            var crosshair = new crosshair_1.default(this);
            var axisX = this.axisx;
            var axisY = new axisy_1.default(mainDatasource, crosshair);
            var chart_2 = new chart_1.default(this, mainDatasource, axisX, axisY, crosshair, config.isPrice);
            var study_3 = new study_1.default(chart_2, studyType);
            axisY.chart = chart_2;
            crosshair.chart = chart_2;
            if (study_3.datasourceType === 'local') {
                chart_2.addGraph(study_3);
                this.addChart(chart_2);
                this.emit('graph_add', study_3);
            }
            else {
                if (!!mainDatasource.first()) {
                    study_3.datasource
                        .loadTimeRange(mainDatasource.first().time, mainDatasource.last().time)
                        .then(function () {
                        chart_2.addGraph(study_3);
                        _this.addChart(chart_2);
                    });
                }
            }
        }
    };
    /**
     * 移除指标
     * @param {StudyType} study
     */
    ChartLayoutModel.prototype.removeStudy = function (chart, studyId) {
        var _this = this;
        if (chart.graphs.some(function (graph) {
            if (graph instanceof study_1.default && graph.id === studyId) {
                chart.removeGraph(graph);
                _this.emit('graph_remove', graph);
                return true;
            }
            else {
                return false;
            }
        })) {
            // 如果此时chart中已经没有其他图形了，则把整个chart都移除
            if (!chart.graphs.length) {
                this.removeChart(chart);
            }
        }
    };
    /**
     * 修改图形参数
     * @param {StudyModel} graph
     * @param {input?: any[], isVisible?: boolean, styles?: ChartStyle[]} config 参数
     */
    ChartLayoutModel.prototype.modifyGraph = function (graph, config) {
        graph.clearCache();
        Object.keys(config).forEach(function (key) { return graph[key] = config[key]; });
        this.emit('graph_modify');
    };
    ChartLayoutModel.prototype.hideMA = function () {
        var _this = this;
        this._maStudies.forEach(function (ma) { return _this.modifyGraph(ma, { isVisible: false }); });
    };
    ChartLayoutModel.prototype.showMA = function () {
        var _this = this;
        this._maStudies.forEach(function (maStudy, i) { return _this.modifyGraph(maStudy, { isVisible: _this.maProps[i].isVisible }); });
    };
    /**
     * 增加对比股票图形
     * @param {string} symbol 对比股票的代码
     */
    ChartLayoutModel.prototype.addComparison = function (symbol) {
        var _this = this;
        var mainDatasource = this.mainDatasource;
        var mainChart = this._mainChart;
        var datasource = new datasource_1.StockDatasource(mainDatasource.defaultSymbol, mainDatasource.resolution, mainDatasource.right, mainDatasource.timeDiff);
        var stockModel = new stock_1.default(datasource, mainChart, false, false, true, 'line', {
            color: randomColor({
                luminosity: 'bright',
                hue: 'random',
            }),
            lineWidth: 1,
        });
        datasource
            .resolveSymbol(symbol)
            .then(function () {
            datasource
                .loadTimeRange(mainDatasource.first().time, mainDatasource.last().time + 24 * 3600)
                .then(function () {
                mainChart.addGraph(stockModel);
                _this.emit('graph_add', stockModel);
            });
        });
        return stockModel.id;
    };
    ChartLayoutModel.prototype.removeComparison = function (graphId) {
        var _this = this;
        this._mainChart.graphs.some(function (graph) {
            if (graph.isComparison && graph.id === graphId) {
                _this._mainChart.removeGraph(graph);
                _this.emit('graph_remove', graph);
                return true;
            }
            else {
                return false;
            }
        });
    };
    /**
     * 前往指定日期
     * @param {number} time 指定的日期时间
     */
    ChartLayoutModel.prototype.goToDate = function (time) {
        var _this = this;
        var mainDatasource = this._mainDatasource;
        var axisX = this._axisx;
        if (mainDatasource.loaded() === 0) {
            return;
        }
        var index = time < mainDatasource.last().time ?
            mainDatasource.search(time) : mainDatasource.loaded() - 1;
        // 如果已经没有更多历史数据了，则将定位至最左端的数据bar
        if (index === -1 && !mainDatasource.hasMoreHistory) {
            index = 0;
        }
        if (index !== -1) {
            // TODO
            axisX.offset = (mainDatasource.loaded() - 1.5 - index) * axisX.barWidth; // - axisX.width / 2
        }
        else {
            var datasources_1 = [];
            this.charts.forEach(function (chart) {
                chart.graphs.forEach(function (graph) {
                    datasources_1.push(graph.datasource);
                });
            });
            Promise.all(_.chain(datasources_1)
                .unique()
                .reduce(function (promises, datasource) {
                promises.push(datasource.loadTimeRange(time, mainDatasource.first().time));
                return promises;
            }, [])
                .value())
                .then(function () { return _this.goToDate(mainDatasource.first().time); });
        }
    };
    ChartLayoutModel.prototype.setTimeRange = function (range) {
        var resolution = perferredResolution[exports.preferredTimeRange.indexOf(range)];
        var mainDatasource = this.mainDatasource;
        var axisX = this.axisx;
        var thisMoment = moment(mainDatasource.now() * 1000);
        var openMoment = moment({ hour: constant_1.OPEN_HOUR, minute: constant_1.OPEN_MINUTE });
        var closeMoment = moment({ hour: constant_1.CLOSE_HOUR, minute: constant_1.CLOSE_MINUTE });
        var toTime = ~~(thisMoment.toDate().getTime() / 1000 + 24 * 3600);
        var fromTime = ~~(function () {
            switch (range) {
                case '1天':
                    return thisMoment.isAfter(closeMoment) ?
                        openMoment.toDate().getTime() :
                        openMoment.subtract(1, 'days').toDate().getTime();
                case '5天':
                    var retMoment = thisMoment.isAfter(closeMoment) ?
                        openMoment :
                        openMoment.subtract(1, 'days');
                    var loop = 4;
                    while (loop--) {
                        retMoment.subtract(1, 'days');
                        if (constant_1.OPEN_DAYS.indexOf(retMoment.day()) === -1) {
                            loop++;
                        }
                    }
                    return retMoment.toDate().getTime();
                case '1月':
                    return openMoment.subtract(1, 'months').toDate().getTime();
                case '1年':
                    return openMoment.subtract(1, 'years').toDate().getTime();
                case '全部':
                    return moment('2000-01-01').toDate().getTime();
                default:
                    throw 'unsupport range type';
            }
        }() / 1000);
        if (resolution !== this.mainDatasource.resolution) {
            this.setResolution(resolution);
        }
        var fromIndex = mainDatasource.search(fromTime);
        if (fromIndex === -1) {
            mainDatasource.loadTimeRange(fromTime, toTime)
                .then(function (bars) {
                if (bars.length) {
                    axisX.barWidth = (axisX.width - axisx_1.INITIAL_OFFSET) / bars.length;
                }
                else {
                    // 加载不到数据说明有停牌的可能因此之间返回
                    return;
                }
            });
        }
        else {
            axisX.barWidth = (axisX.width - axisx_1.INITIAL_OFFSET) / (mainDatasource.loaded() - fromIndex);
        }
        axisX.resetOffset();
    };
    ChartLayoutModel.prototype.addSelfSelect = function (symbolInfo) {
        var selfSelectList = this.readFromLS('qchart.selfselectlist') || [];
        selfSelectList.push(symbolInfo);
        this.saveToLS('qchart.selfselectlist', selfSelectList);
        this.emit('self_select_add');
    };
    ChartLayoutModel.prototype.deleteSelfSelect = function (symbolInfo) {
        var selfSelectList = this.readFromLS('qchart.selfselectlist') || [];
        this.saveToLS('qchart.selfselectlist', _.reject(selfSelectList, function (el) { return el.symbol === symbolInfo.symbol; }));
        this.emit('self_select_delete');
    };
    ChartLayoutModel.prototype.toggleAbout = function (showAbout) {
        this._component.setState({ showAbout: showAbout });
    };
    ChartLayoutModel.prototype.showAnalysisSidebarTab = function () {
        this._component.setState({ sidebarFolded: false, sidebarActiveIndex: 4 });
    };
    ChartLayoutModel.prototype.toggleGoToDate = function (showGoToDate) {
        this._component.setState({ showGoToDate: showGoToDate });
    };
    ChartLayoutModel.prototype.setContextMenu = function (contextMenuConfig) {
        this._component.setState({ contextMenuConfig: contextMenuConfig });
    };
    ChartLayoutModel.prototype.setGapVisibility = function (visible) {
        this.saveToLS('chart.showGap', visible);
        this.mainChart.mainGraph.showGap = visible;
        this.emit('gap_visibility_change', visible);
    };
    ChartLayoutModel.prototype.setWaveVisibility = function (visible) {
        var patterns = this.mainChart.patterns;
        var forceShowMA = this.readFromLS('chart.forceMA');
        var showReverseRelay = this.readFromLS('chart.showReverseRelay');
        this.saveToLS('chart.showWaveForm', visible);
        if (visible) {
            if (patterns.length) {
                this.mainChart.setPatternVisibility(true, visible);
                this.emit('pattern_modify', visible);
            }
            else {
                this.addPatterns();
            }
            if (!forceShowMA && this.mainDatasource.resolution === 'D') {
                this.hideMA();
            }
        }
        else {
            this.mainChart.setPatternVisibility(true, visible);
            this.emit('pattern_modify', visible);
            if (!showReverseRelay) {
                this.showMA();
            }
        }
    };
    ChartLayoutModel.prototype.setReverseRelayVisibility = function (visible) {
        var patterns = this.mainChart.patterns;
        var forceShowMA = this.readFromLS('chart.forceMA');
        var showWaveForm = this.readFromLS('chart.showWaveForm');
        this.saveToLS('chart.showReverseRelay', visible);
        if (visible) {
            if (patterns.length) {
                this.mainChart.setPatternVisibility(false, visible);
                this.emit('pattern_modify');
            }
            else {
                this.addPatterns();
            }
            if (!forceShowMA && this.mainDatasource.resolution === 'D') {
                this.hideMA();
            }
        }
        else {
            this.mainChart.setPatternVisibility(false, visible);
            this.emit('pattern_modify');
            if (!showWaveForm) {
                this.showMA();
            }
        }
    };
    /**
     * 清理chart的所有缓存
     */
    ChartLayoutModel.prototype.clearCache = function () {
        this._charts.forEach(function (chart) {
            chart.graphs.forEach(function (graph) {
                graph.clearCache();
                graph.datasource.clearCache();
            });
        });
    };
    /**
     * 移除所有指标
     */
    ChartLayoutModel.prototype.removeAllStudies = function () {
        var _this = this;
        // 移除所有study
        this.charts.reverse().forEach(function (chart) {
            chart.graphs
                .filter(function (graph) { return graph instanceof study_1.default; })
                .forEach(function (study) { return _this.removeStudy(chart, study.id); });
        });
    };
    /**
     * 移除所有画线工具
     */
    ChartLayoutModel.prototype.removeAllTools = function () {
        this._charts.forEach(function (chart) {
            chart.removeAllTools();
        });
    };
    ChartLayoutModel.prototype.removeAllPatterns = function () {
        this.mainChart.removeAllPatterns();
        this.emit('patterns_remove');
    };
    /**
     * 是否需要加载更多数据来覆盖显示屏区域
     * @return {boolean} 是否需要更多数据
     */
    ChartLayoutModel.prototype.needMoreData = function () {
        var axisX = this.axisx;
        var totalWidth = this.mainDatasource.loaded() * axisX.barWidth;
        var visibleWidth = axisX.width;
        // 当预加载的数据只剩余不足一屏时，执行预加载加载更多的数据以备展示
        return totalWidth - visibleWidth - axisX.offset < visibleWidth;
    };
    return ChartLayoutModel;
}(EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChartLayoutModel;


/***/ }),

/***/ "./src/model/crosshair.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventEmitter = __webpack_require__("./node_modules/eventemitter3/index.js");
var crosshair_1 = __webpack_require__("./src/graphic/crosshair.ts");
var CrosshairModel = (function (_super) {
    __extends(CrosshairModel, _super);
    function CrosshairModel(chartLayout) {
        _super.call(this);
        this._chartLayout = chartLayout;
        this._graphic = new crosshair_1.default(this);
    }
    Object.defineProperty(CrosshairModel.prototype, "point", {
        get: function () {
            return this._point;
        },
        set: function (point) {
            if (!this._point ||
                !point ||
                point.x !== this._point.x ||
                point.y !== this._point.y) {
                this._point = point;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairModel.prototype, "graphic", {
        get: function () {
            return this._graphic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairModel.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (chart) {
            this._chart = chart;
        },
        enumerable: true,
        configurable: true
    });
    CrosshairModel.prototype.draw = function () {
        this.graphic.draw();
    };
    return CrosshairModel;
}(EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CrosshairModel;


/***/ }),

/***/ "./src/model/graph.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var sequence = 1;
var GraphModel = (function () {
    function GraphModel(datasource, chart, priority, isPrice, isRemovable, isMain, isComparison, isVisible, styles, adapter, calc, input) {
        if (input === void 0) { input = null; }
        this._isValid = true;
        this._hover = false;
        this._selected = false;
        this._datasource = datasource;
        this._chart = chart;
        this._priority = priority;
        this._isPrice = isPrice;
        this._isRemovable = isRemovable;
        this._isMain = isMain;
        this._isComparison = isComparison;
        this._isVisible = isVisible;
        this._styles = styles;
        this._adapter = adapter;
        this._calc = calc;
        this._input = input;
        this._id = sequence++;
        this._plots = [];
        this._cache = {};
    }
    Object.defineProperty(GraphModel.prototype, "input", {
        get: function () {
            return this._input;
        },
        set: function (input) {
            this._input = input;
            this._isValid = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "styles", {
        get: function () {
            return this._styles;
        },
        set: function (styles) {
            this._styles = styles;
            this._plots.forEach(function (plot, i) { return plot.style = styles[i]; });
            this._isValid = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "isPrice", {
        get: function () {
            return this._isPrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "isRemovable", {
        get: function () {
            return this._isRemovable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "isMain", {
        get: function () {
            return this._isMain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "isComparison", {
        get: function () {
            return this._isComparison;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            if (this._selected !== selected) {
                this._selected = selected;
                this._isValid = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (visible) {
            this._isVisible = visible;
            this._isValid = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "hover", {
        get: function () {
            return this._hover;
        },
        set: function (hover) {
            if (this._hover !== hover) {
                this._hover = hover;
                this._isValid = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "plots", {
        get: function () {
            return this._plots.slice(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "datasource", {
        get: function () {
            return this._datasource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphModel.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        enumerable: true,
        configurable: true
    });
    GraphModel.prototype.draw = function (ctx) {
        this._plots.forEach(function (plot) { return plot.draw(ctx); });
        this._isValid = true;
    };
    GraphModel.prototype.getPrevBar = function () {
        var point = this._chart.crosshair.point;
        if (!point) {
            return null;
        }
        var axisX = this._chart.axisX;
        var timeBar = axisX.findTimeBarByX(point.x - axisX.barWidth);
        if (!timeBar) {
            return null;
        }
        return this._cache[timeBar.time];
    };
    GraphModel.prototype.getCurBar = function () {
        var point = this._chart.crosshair.point;
        if (!point) {
            return null;
        }
        var timeBar = this._chart.axisX.findTimeBarByX(point.x);
        if (!timeBar) {
            return null;
        }
        return this._cache[timeBar.time];
    };
    GraphModel.prototype.getNextBar = function () {
        var point = this._chart.crosshair.point;
        if (!point) {
            return null;
        }
        var axisX = this._chart.axisX;
        var timeBar = axisX.findTimeBarByX(point.x + axisX.barWidth);
        if (!timeBar) {
            return null;
        }
        return this._cache[timeBar.time];
    };
    GraphModel.prototype.getRangeY = function () {
        return this._plots.reduce(function (range, plot) {
            var r = plot.graphic.calcRangeY();
            if (!r) {
                return range;
            }
            if (!range) {
                return {
                    max: r.max,
                    min: r.min,
                };
            }
            if (r.max > range.max) {
                range.max = r.max;
            }
            if (r.min < range.min) {
                range.min = r.min;
            }
            return range;
        }, null);
    };
    GraphModel.prototype.hitTest = function (select) {
        if (select === void 0) { select = false; }
        for (var i = this._plots.length - 1; i >= 0; i--) {
            if (this._plots[i].hitTest()) {
                if (select) {
                    this.selected = true;
                }
                return this.hover = true;
            }
        }
        if (select) {
            this.selected = false;
        }
        return this.hover = false;
    };
    /**
     * 获取所有可见范围内的bar数据
     * @return {IBar[]}
     */
    GraphModel.prototype.getVisibleBars = function () {
        if (this._visibleBarCache) {
            return this._visibleBarCache;
        }
        var datasource = this._datasource;
        // const loaded = datasource.loaded()
        var timeBars = this._chart.axisX.getVisibleTimeBars();
        var firstTimeBar = timeBars[0];
        var lastTimeBar = timeBars[timeBars.length - 1];
        if (!firstTimeBar || !lastTimeBar) {
            return [];
        }
        var bars = datasource.range(firstTimeBar.time, lastTimeBar.time);
        if (!bars.length) {
            return [];
        }
        var data = [];
        datasource_1.setContext(datasource, this._adapter);
        for (var i_1 = 0, len_1 = bars.length, bar = void 0, start = datasource.search(bars[0].time), cache = void 0; i_1 < len_1; i_1++, start++) {
            bar = bars[i_1];
            cache = this._cache[bar.time];
            // 纠结，😖这里没法直接永久缓存
            // 1. 指标计算时，历史数据可能还没加载足够，这时候即使缓存了数据，也是不正确的
            // 2. pulse update来新数据的时候，指标需要重新计算，因此必须使得lastBar的缓存失效
            cache = this._calc(this._adapter(bar), start, this._input);
            this._cache[bar.time] = cache;
            data.push(cache);
        }
        datasource_1.clearContext();
        var visibleBars = [];
        var i = 0;
        var j = 0;
        var curData;
        var curBar;
        var timeBar;
        var len = timeBars.length;
        var dataLength = data.length;
        // 对齐时间轴，以主数据源的timebar为准，timebars中不存在的time要忽略掉
        while (i < len && j < dataLength) {
            curData = data[j];
            curBar = curData ? curData[0] : null;
            timeBar = timeBars[i];
            if (!curBar) {
                i++;
                j++;
            }
            else if (curBar[1] === timeBar.time) {
                for (var k = 0, cbar = curData, klen = cbar.length; k < klen; k++) {
                    if (cbar[k]) {
                        cbar[k][0] = timeBar.x;
                    }
                }
                visibleBars.push(curData);
                i++;
                j++;
            }
            else if (curBar[1] > timeBar.time) {
                i++;
            }
            else {
                j++;
            }
        }
        return this._visibleBarCache = visibleBars;
    };
    GraphModel.prototype.clearCache = function () {
        this._visibleBarCache = null;
        this._cache = {};
    };
    return GraphModel;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GraphModel;


/***/ }),

/***/ "./src/model/pattern.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var pattern_1 = __webpack_require__("./src/graphic/pattern/index.ts");
var Pattern = (function () {
    function Pattern(chart, type, _a) {
        var bwPoints = _a.bwPoints, swPoints = _a.swPoints, trendLines = _a.trendLines, points = _a.points;
        this._isValid = true;
        this._type = type;
        switch (type) {
            case 'wave':
                this._renderer = new pattern_1.WavePatternRenderer(chart, bwPoints, swPoints);
                this._isVisible = !!chart.chartLayout.readFromLS('chart.showWaveForm');
                break;
            case 'mhead':
            case 'whead':
            case 'hsp':
            case 'hsb':
            case 'triangle':
                this._renderer = new pattern_1.ShapePatternRenderer(chart, points, trendLines);
                this._isVisible = !!chart.chartLayout.readFromLS('chart.showReverseRelay');
                break;
            default:
                break;
        }
    }
    Object.defineProperty(Pattern.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (isVisible) {
            if (this._isVisible !== isVisible) {
                this._isVisible = isVisible;
                this._isValid = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pattern.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pattern.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    Pattern.prototype.draw = function (ctx) {
        this._renderer.draw(ctx);
        this._isValid = true;
    };
    Pattern.prototype.isNowVisible = function () {
        return this._renderer.isNowVisible();
    };
    return Pattern;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Pattern;


/***/ }),

/***/ "./src/model/plot.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var diagram_1 = __webpack_require__("./src/graphic/diagram/index.ts");
var PlotModel = (function () {
    function PlotModel(graph, index, shape, style) {
        this.priceLabels = [];
        this._graph = graph;
        this._index = index;
        this._style = style;
        this._originalShape = shape;
        this.shape = shape;
    }
    Object.defineProperty(PlotModel.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (style) {
            this._style = style;
            this._graphic.style = style;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlotModel.prototype, "shape", {
        get: function () {
            return this._shape;
        },
        set: function (shape) {
            var style = shape === this._originalShape ? this._style : {};
            this._shape = shape;
            switch (shape) {
                case 'line':
                    this._graphic = new diagram_1.LineChartRenderer(this, style);
                    break;
                case 'mountain':
                    this._graphic = new diagram_1.MountainChartRenderer(this, style);
                    break;
                case 'column':
                    this._graphic = new diagram_1.ColumnChartRenderer(this, style);
                    break;
                case 'candle':
                    this._graphic = new diagram_1.CandleChartRenderer(this, style);
                    break;
                case 'histogram':
                    this._graphic = new diagram_1.HistogramChartRenderer(this, style);
                    break;
                case 'band':
                    this._graphic = new diagram_1.BandRenderer(this, style);
                    break;
                case 'inflection':
                    this._graphic = new diagram_1.InflectionRenderer(this);
                    break;
                case 'inflection2':
                    this._graphic = new diagram_1.InflectionRenderer(this);
                    break;
                default:
                    throw 'unsupported chart shape';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlotModel.prototype, "graphic", {
        get: function () {
            return this._graphic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlotModel.prototype, "graph", {
        get: function () {
            return this._graph;
        },
        enumerable: true,
        configurable: true
    });
    PlotModel.prototype.draw = function (ctx) {
        ctx.save();
        this._graphic.draw(ctx);
        ctx.restore();
        if (this._graph.selected) {
            this._graphic.drawSelection();
        }
    };
    PlotModel.prototype.hitTest = function () {
        return this._graphic.hitTest();
    };
    PlotModel.prototype.getVisibleBars = function () {
        var visibleBars = this._graph.isVisible ? this._graph.getVisibleBars() : [];
        var results = [];
        for (var i = 0, len = visibleBars.length, index = this._index, bar = void 0; i < len; i++) {
            bar = visibleBars[i][index];
            if (bar) {
                results.push(bar);
            }
        }
        return results;
    };
    PlotModel.prototype.getPrevBar = function () {
        var bar = this._graph.getPrevBar();
        if (!bar) {
            return null;
        }
        return bar[this._index];
    };
    PlotModel.prototype.getCurBar = function () {
        var bar = this._graph.getCurBar();
        if (!bar) {
            return null;
        }
        return bar[this._index];
    };
    PlotModel.prototype.getNextBar = function () {
        var bar = this._graph.getNextBar();
        if (!bar) {
            return null;
        }
        return bar[this._index];
    };
    return PlotModel;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlotModel;


/***/ }),

/***/ "./src/model/stock.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var plot_1 = __webpack_require__("./src/model/plot.ts");
var graph_1 = __webpack_require__("./src/model/graph.ts");
var gap_1 = __webpack_require__("./src/graphic/gap.ts");
var adaptorFuncs = {
    line: function (bar) {
        var b = bar;
        return [0, b.time, b.close];
    },
    candle: function (bar) {
        var b = bar;
        return [0, b.time, b.open, b.close, b.high, b.low];
    },
    mountain: function (bar) {
        var b = bar;
        return [0, b.time, b.close];
    },
    column: function (bar) {
        var b = bar;
        return [0, b.time, b.close, b.open > b.close];
    },
};
var StockModel = (function (_super) {
    __extends(StockModel, _super);
    function StockModel(datasource, chart, isPrice, isMain, isComparison, shape, styles) {
        _super.call(this, datasource, chart, isMain ? 99999 : 1, isPrice, isComparison ? true : false, isMain, isComparison, true, !!styles ? [styles] : null, adaptorFuncs[shape], function (bar) { return [bar]; });
        this._plots.push(new plot_1.default(this, 0, shape, _.extend({}, styles ? styles : {})));
        if (isMain) {
            this._showGap = !!chart.chartLayout.readFromLS('chart.showGap');
            this._gapRenderer = new gap_1.default(this);
        }
    }
    Object.defineProperty(StockModel.prototype, "showGap", {
        get: function () {
            return this._showGap;
        },
        set: function (show) {
            if (this._showGap !== show) {
                this._showGap = show;
                this._isValid = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    StockModel.prototype.setShape = function (shape) {
        this._adapter = adaptorFuncs[shape];
    };
    StockModel.prototype.draw = function () {
        var ctx = this._chart.ctx;
        _super.prototype.draw.call(this, ctx);
        if (this._isMain && this._showGap && this._datasource.resolution > '1') {
            this._gapRenderer.draw(ctx);
        }
    };
    StockModel.prototype.clearCache = function () {
        _super.prototype.clearCache.call(this);
        if (this._isMain) {
            this._gapRenderer.clearCache();
        }
    };
    return StockModel;
}(graph_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StockModel;


/***/ }),

/***/ "./src/model/study.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var datasource_1 = __webpack_require__("./src/datasource/index.ts");
var plot_1 = __webpack_require__("./src/model/plot.ts");
var graph_1 = __webpack_require__("./src/model/graph.ts");
var StudyModel = (function (_super) {
    __extends(StudyModel, _super);
    function StudyModel(chart, study, visible, input, styles) {
        var _this = this;
        if (visible === void 0) { visible = true; }
        var config = datasource_1.studyConfig[study];
        var mainDatasource = chart.chartLayout.mainDatasource;
        var symbol = mainDatasource.symbol;
        var resolution = mainDatasource.resolution;
        var timeDif = mainDatasource.timeDiff;
        var datasource = null;
        switch (study) {
            case '压力支撑':
                datasource = new datasource_1.PressureSupportDatasource(symbol, resolution, timeDif);
                break;
            case 'inflection':
                datasource = new datasource_1.InflectionDatasource(symbol, resolution, 1, timeDif);
                break;
            case 'inflection2':
                datasource = new datasource_1.InflectionDatasource(symbol, resolution, 2, timeDif);
                break;
            default:
                datasource = chart.datasource;
                break;
        }
        styles = styles || _.pluck(config.plots, 'style');
        _super.call(this, datasource, chart, config.priority, config.isPrice, config.isRemovable, false, false, visible, styles, config.adapter, config.output, input || config.input);
        this._studyType = study;
        this._datasourceType = config.datasourceType;
        this._inputLabels = config.inputLabels || [];
        this._noLegend = !!config.noLegend;
        config.plots.forEach(function (plotConfig, index) {
            _this._plots.push(new plot_1.default(_this, index, plotConfig.shape, _.extend({}, plotConfig.style, styles ? styles[index] : {})));
        });
    }
    Object.defineProperty(StudyModel.prototype, "noLegend", {
        get: function () {
            return this._noLegend;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyModel.prototype, "studyType", {
        get: function () {
            return this._studyType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyModel.prototype, "datasourceType", {
        get: function () {
            return this._datasourceType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyModel.prototype, "inputLabels", {
        get: function () {
            return this._inputLabels;
        },
        enumerable: true,
        configurable: true
    });
    return StudyModel;
}(graph_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StudyModel;


/***/ }),

/***/ "./src/model/xtickmark.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var util_1 = __webpack_require__("./src/util/index.ts");
var TICK_MARK_MIN_SPACE = 50;
var XTickMark = (function () {
    function XTickMark(axis) {
        this._axis = axis;
    }
    XTickMark.prototype.clearTickmarks = function () {
        this._tickmarks = null;
    };
    XTickMark.prototype.getTickMarksByTimeBars = function (timeBars) {
        if (this._tickmarks) {
            return this._tickmarks;
        }
        var tickmarks = [];
        if (!timeBars.length) {
            return tickmarks;
        }
        var resolution = this._axis.datasource.resolution;
        var barWidth = this._axis.barWidth;
        var minTickSpan = '1';
        switch (resolution) {
            case '1':
                if (barWidth >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '1';
                }
                else if (barWidth * 5 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '5';
                }
                else if (barWidth * 10 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '10';
                }
                else if (barWidth * 15 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '15';
                }
                else if (barWidth * 30 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '30';
                }
                else if (barWidth * 60 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '60';
                }
                else if (barWidth * 24 * 60 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'D';
                }
                else if (barWidth * 30 * 24 * 60 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'M';
                }
                else if (barWidth * 360 * 24 * 60 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'Y';
                }
                else {
                    minTickSpan = 'Y';
                }
                break;
            case '5':
                if (barWidth >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '5';
                }
                else if (barWidth * 6 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '30';
                }
                else if (barWidth * 12 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '60';
                }
                else if (barWidth * 24 * 12 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'D';
                }
                else if (barWidth * 30 * 24 * 12 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'M';
                }
                else if (barWidth * 360 * 24 * 12 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'Y';
                }
                else {
                    minTickSpan = 'Y';
                }
                break;
            case '15':
                if (barWidth >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '15';
                }
                else if (barWidth * 2 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '30';
                }
                else if (barWidth * 4 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '60';
                }
                else if (barWidth * 24 * 60 / 15 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'D';
                }
                else if (barWidth * 30 * 24 * 60 / 15 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'M';
                }
                else if (barWidth * 360 * 24 * 60 / 15 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'Y';
                }
                else {
                    minTickSpan = 'Y';
                }
                break;
            case '30':
                if (barWidth >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '30';
                }
                else if (barWidth * 2 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '60';
                }
                else if (barWidth * 24 * 2 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'D';
                }
                else if (barWidth * 30 * 24 * 2 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'M';
                }
                else if (barWidth * 360 * 24 * 2 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'Y';
                }
                else {
                    minTickSpan = 'Y';
                }
                break;
            case '60':
                if (barWidth >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = '60';
                }
                else if (barWidth * 24 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'D';
                }
                else if (barWidth * 30 * 24 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'M';
                }
                else if (barWidth * 360 * 24 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'Y';
                }
                else {
                    minTickSpan = 'Y';
                }
                break;
            case 'D':
                if (barWidth >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'D';
                }
                else if (barWidth * 30 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'M';
                }
                else if (barWidth * 360 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'Y';
                }
                else {
                    minTickSpan = 'Y';
                }
                break;
            case 'W':
                if (barWidth >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'D';
                }
                else if (barWidth * 4 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'M';
                }
                else if (barWidth * 51 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'Y';
                }
                else {
                    minTickSpan = 'Y';
                }
                break;
            case 'M':
                if (barWidth >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'M';
                }
                else if (barWidth * 12 >= TICK_MARK_MIN_SPACE) {
                    minTickSpan = 'Y';
                }
                else {
                    minTickSpan = 'Y';
                }
                break;
            default:
                throw 'unsupported resolution';
        }
        var passedSpan = TICK_MARK_MIN_SPACE;
        for (var i = 1, len = timeBars.length; i < len; i++) {
            var bar = timeBars[i];
            var _a = (function (d) {
                return [
                    d.getFullYear(),
                    d.getMonth() + 1,
                    d.getDate(),
                    d.getHours(),
                ];
            })(new Date(timeBars[i - 1].time * 1000)), prevYear = _a[0], prevMonth = _a[1], prevDate = _a[2], prevHours = _a[3];
            var _b = (function (d) {
                return [
                    d.getFullYear(),
                    d.getMonth() + 1,
                    d.getDate(),
                    d.getHours(),
                    d.getMinutes(),
                ];
            })(new Date(timeBars[i].time * 1000)), curYear = _b[0], curMonth = _b[1], curDate = _b[2], curHours = _b[3], curMinutes = _b[4];
            passedSpan += barWidth;
            var curTickMark = tickmarks[tickmarks.length - 1];
            if (prevYear !== curYear) {
                // 去掉之前的tickmark，因为年份变化的展示优先级更高
                if (passedSpan < TICK_MARK_MIN_SPACE && curTickMark.type < 'Y') {
                    tickmarks.pop();
                    passedSpan = TICK_MARK_MIN_SPACE;
                }
                if (minTickSpan < 'Y' || passedSpan >= TICK_MARK_MIN_SPACE) {
                    tickmarks.push({
                        bold: true,
                        time: curYear.toString(),
                        type: 'Y',
                        x: bar.x,
                    });
                    passedSpan = 0;
                }
            }
            else if (prevMonth !== curMonth) {
                // 去掉之前的tickmark，因为月份变化的展示优先级更高
                if (passedSpan < TICK_MARK_MIN_SPACE && curTickMark.type < 'M') {
                    tickmarks.pop();
                    passedSpan = TICK_MARK_MIN_SPACE;
                }
                if (minTickSpan < 'M' || passedSpan >= TICK_MARK_MIN_SPACE) {
                    tickmarks.push({
                        bold: true,
                        time: curMonth + '月',
                        type: 'M',
                        x: bar.x,
                    });
                    passedSpan = 0;
                }
            }
            else if (prevDate !== curDate) {
                if (passedSpan < TICK_MARK_MIN_SPACE && curTickMark.type < 'D') {
                    tickmarks.pop();
                    passedSpan = TICK_MARK_MIN_SPACE;
                }
                if (minTickSpan < 'D' || passedSpan >= TICK_MARK_MIN_SPACE) {
                    tickmarks.push({
                        bold: true,
                        time: curDate.toString(),
                        type: 'D',
                        x: bar.x,
                    });
                    passedSpan = 0;
                }
            }
            else if (prevHours !== curHours ||
                curMinutes === 30 ||
                curMinutes % 15 === 0 ||
                curMinutes % 10 === 0 ||
                curMinutes % 5 === 0) {
                var type = 1;
                if (prevHours !== curHours) {
                    type = 60;
                }
                else if (curMinutes === 30) {
                    type = 30;
                }
                else if (curMinutes % 15 === 0) {
                    type = 15;
                }
                else if (curMinutes % 10 === 0) {
                    type = 10;
                }
                else if (curMinutes % 5 === 0) {
                    type = 5;
                }
                if (passedSpan < TICK_MARK_MIN_SPACE && +curTickMark.type < type) {
                    tickmarks.pop();
                    passedSpan = TICK_MARK_MIN_SPACE;
                }
                if (passedSpan >= TICK_MARK_MIN_SPACE) {
                    tickmarks.push({
                        bold: false,
                        time: util_1.pad(curHours.toString(), 2) + ':' + util_1.pad(curMinutes.toString(), 2),
                        type: type.toString(),
                        x: bar.x,
                    });
                    passedSpan = 0;
                }
            }
        }
        this._tickmarks = tickmarks;
        return tickmarks;
    };
    return XTickMark;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = XTickMark;


/***/ }),

/***/ "./src/model/ytickmark.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__("./node_modules/underscore/underscore.js");
var util_1 = __webpack_require__("./src/util/index.ts");
var TICK_SPAN = 30;
var precision = 2;
var YTickMark = (function () {
    function YTickMark(axisY) {
        this._axisY = axisY;
    }
    YTickMark.prototype.clearTickmarks = function () {
        this._tickmarks = null;
    };
    YTickMark.prototype.getTickMarksByTimeBars = function () {
        if (this._tickmarks) {
            return this._tickmarks;
        }
        var tickmarks = [];
        var axisY = this._axisY;
        if (!axisY.range) {
            return tickmarks;
        }
        var min = axisY.range.min;
        var max = axisY.range.max;
        if (!_.isFinite(min) || !_.isFinite(max)) {
            return tickmarks;
        }
        if (min === max) {
            max += 0.1;
        }
        var height = axisY.chart.height;
        var diff1 = max - min;
        var diff2 = diff1 * height / (height - 2 * axisY.margin);
        var margin = (diff2 - diff1) / 2;
        min -= margin;
        max += margin;
        var span = this.normalizeTickSpan(diff2 / (height / TICK_SPAN));
        min -= (min % span);
        while (min <= max) {
            tickmarks.push({
                value: min,
                y: axisY.getYByValue(min),
            });
            min += span;
        }
        this._tickmarks = tickmarks;
        return tickmarks;
    };
    /**
     * 计算合适的刻度距离，以便展示的美观性
     * @param {number} span 数值间距
     */
    YTickMark.prototype.normalizeTickSpan = function (span) {
        var array = span + '';
        var carry = 0;
        var arr = [];
        span = +array;
        for (var i = 0, len = array.length, cur = void 0; i < len; i++) {
            cur = array[i];
            if (cur === '.') {
                arr.push(cur);
            }
            else {
                cur = +cur;
                if (cur === 0) {
                    arr.push(cur);
                }
                else if (cur < 5) {
                    if (cur < 3) {
                        arr.push(cur + 1);
                        break;
                    }
                    else {
                        arr.push(5);
                        break;
                    }
                }
                else {
                    if (i - 1 >= 0) {
                        if (arr[i - 1] === '.') {
                            arr[i - 2] += 1;
                        }
                        else {
                            arr[i - 1] += 1;
                        }
                        arr.push(0);
                    }
                    else {
                        arr.push(1);
                        arr.push(0);
                        carry = 1;
                    }
                    break;
                }
            }
        }
        var re = +arr.join('');
        var padLength = 1;
        while (span >= 10) {
            padLength++;
            span /= 10;
        }
        if (re < 1 / Math.pow(10, precision)) {
            re = 1 / Math.pow(10, precision);
        }
        return +util_1.padRight(re + '', padLength + carry);
    };
    return YTickMark;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = YTickMark;


/***/ }),

/***/ "./src/provider.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__("./node_modules/react/react.js");
var chartlayout_1 = __webpack_require__("./src/model/chartlayout.ts");
var Provider = (function (_super) {
    __extends(Provider, _super);
    function Provider(props, context) {
        _super.call(this, props, context);
        this.chartLayout = props.chartLayout;
    }
    Provider.prototype.getChildContext = function () {
        return { chartLayout: this.chartLayout };
    };
    Provider.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    Provider.childContextTypes = {
        chartLayout: React.PropTypes.instanceOf(chartlayout_1.default),
    };
    return Provider;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Provider;


/***/ }),

/***/ "./src/style/btn.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/style/common.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/style/normalize.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/style/popup_menu.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/style/table.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/util/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function cloneObj(source) {
    return JSON.parse(JSON.stringify(source));
}
exports.cloneObj = cloneObj;
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)')
        .exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
exports.getParameterByName = getParameterByName;
function darkenRGB(rgbColor) {
    var matches = rgbColor.match(/\((.*?)\)/);
    if (!matches) {
        throw new Error('rgbColor is not a valid rgb color string.');
    }
    var params = matches[1].split(',');
    var colors = params.slice(0, 3).map(function (color) { return (+color - 50 > 0 ? +color - 50 : 0) + ''; });
    if (params.length === 4) {
        colors.push(params[3]);
    }
    return 'rgb(' + colors.join(',') + ')';
}
exports.darkenRGB = darkenRGB;
function pad(n, width, z) {
    if (n === void 0) { n = ''; }
    if (z === void 0) { z = '0'; }
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
exports.pad = pad;
function padRight(n, width, z) {
    if (n === void 0) { n = ''; }
    if (z === void 0) { z = '0'; }
    return n.length >= width ? n : n + new Array(width - n.length + 1).join(z);
}
exports.padRight = padRight;
function clientOffset(dom) {
    var top = 0;
    var left = 0;
    while (dom !== document.body) {
        top += dom.offsetTop;
        left += dom.offsetLeft;
        dom = dom.offsetParent;
    }
    return {
        top: top,
        left: left,
    };
}
exports.clientOffset = clientOffset;
function formatNumber(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (Math.abs(num / 1e12) >= 1) {
        return (num / 1e12).toFixed(precision) + '万亿';
    }
    else if (Math.abs(num / 1e8) >= 1) {
        return (num / 1e8).toFixed(precision) + '亿';
    }
    else if (Math.abs(num / 1e4) >= 1) {
        return (num / 1e4).toFixed(precision) + '万';
    }
    else {
        return num.toFixed(precision);
    }
}
exports.formatNumber = formatNumber;
function pointToSegDist(x, y, x1, y1, x2, y2) {
    var cross = (x2 - x1) * (x - x1) + (y2 - y1) * (y - y1);
    if (cross <= 0) {
        return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
    }
    var d2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (cross >= d2) {
        return Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
    }
    var r = cross / d2;
    var px = x1 + (x2 - x1) * r;
    var py = y1 + (y2 - y1) * r;
    return Math.sqrt((x - px) * (x - px) + (y - py) * (y - py));
}
exports.pointToSegDist = pointToSegDist;
function isPointInRect(x0, y0, x1, y1, x2, y2) {
    return (x0 >= Math.min(x1, x2)) && (x0 <= Math.max(x1, x2)) &&
        (y0 >= Math.min(y1, y2)) && (y0 <= Math.max(y1, y2));
}
exports.isPointInRect = isPointInRect;
function getCanvasHeight(canvas) {
    return canvas.style.height ? parseInt(canvas.style.height) : canvas.height;
}
exports.getCanvasHeight = getCanvasHeight;
function getCanvasWidth(canvas) {
    return canvas.style.width ? parseInt(canvas.style.width) : canvas.width;
}
exports.getCanvasWidth = getCanvasWidth;
function animationQueue() {
    var q = {
        _itvl: 0,
        _queue: [],
        delay: function (millis) {
            q._queue.push(['delay', millis]);
            q._go();
            return q;
        },
        enqueue: function (action) {
            q._queue.push(['action', action]);
            q._go();
            return q;
        },
        _go: function () {
            clearTimeout(q._itvl);
            q._itvl = setTimeout(function () {
                var job = q._queue.shift();
                if (!!job) {
                    if (job[0] === 'delay') {
                        setTimeout(function () { return q._go(); }, job[1]);
                    }
                    else if (job[0] === 'action') {
                        job[1]();
                        setTimeout(function () { return q._go(); }, 0);
                    }
                }
            }, 0);
        },
    };
    return q;
}
exports.animationQueue = animationQueue;
/**
 * 标准化 requestFullscreen 方法
 * @param {DOM} elem 要全屏显示的元素(webkit下只要是DOM即可，Firefox下必须是文档中的DOM元素)
 */
function requestFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
    else if (elem.webkitRequestFullScreen) {
        // 对 Chrome 特殊处理，
        // 参数 Element.ALLOW_KEYBOARD_INPUT 使全屏状态中可以键盘输入。
        if (window.navigator.userAgent.toUpperCase().indexOf('CHROME') >= 0) {
            elem.webkitRequestFullScreen();
        }
        else {
            elem.webkitRequestFullScreen();
        }
    }
    else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }
}
exports.requestFullscreen = requestFullscreen;
function exitFullscreen() {
    ['exitFullscreen', 'mozCancelFullScreen', 'mozExitFullscreen', 'webkitExitFullscreen', 'msExitFullscreen']
        .some(function (funcName) {
        if ('function' === typeof document[funcName]) {
            return document[funcName](), true;
        }
    });
}
exports.exitFullscreen = exitFullscreen;
function getFullScreenElement() {
    var fullscreenElement = null;
    var propNames = ['fullscreenElement', 'webkitFullscreenElement', 'mozFullscreenElement', 'msFullscreenElement'];
    propNames.some(function (propName) {
        if (propName in document) {
            fullscreenElement = document[propName];
            return true;
        }
    });
    return fullscreenElement;
}
exports.getFullScreenElement = getFullScreenElement;


/***/ })

},["./src/index.tsx"]);