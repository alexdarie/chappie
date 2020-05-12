(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/ng2-google-charts/fesm5/ng2-google-charts.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-google-charts/fesm5/ng2-google-charts.js ***!
  \*******************************************************************/
/*! exports provided: ChartHTMLTooltip, GoogleChartComponent, GoogleChartsControlComponent, GoogleChartsDashboardComponent, GoogleChartsLoaderService, Ng2GoogleChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return ChartHTMLTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsControlComponent", function() { return GoogleChartsControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsDashboardComponent", function() { return GoogleChartsDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function() { return GoogleChartsLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return Ng2GoogleChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var GoogleChartsLoaderService = /** @class */ (function () {
    function GoogleChartsLoaderService(localeId, googleChartsSettings) {
        var _this = this;
        this.googleChartsSettings = googleChartsSettings;
        this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
        this.loadGoogleChartsScriptPromise = new Promise(function (resolve, reject) {
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!_this.googleScriptIsLoading) {
                _this.googleScriptIsLoading = true;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    }
    GoogleChartsLoaderService.prototype.load = function (settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadGoogleChartsScriptPromise];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                if (!settings) {
                                    settings = Object.create(_this.googleChartsSettings);
                                }
                                if (!settings) {
                                    settings = {};
                                }
                                if (!settings.language) {
                                    settings.language = _this.localeId;
                                }
                                if (!settings.googleChartsVersion) {
                                    settings.googleChartsVersion = '47';
                                }
                                var _settings = settings;
                                _settings.callback = resolve;
                                google.charts.load(settings.googleChartsVersion, _settings);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleChartsLoaderService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['googleChartsSettings',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    GoogleChartsLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GoogleChartsLoaderService_Factory() { return new GoogleChartsLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("googleChartsSettings", 8)); }, token: GoogleChartsLoaderService, providedIn: "root" });
    GoogleChartsLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('googleChartsSettings')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
    ], GoogleChartsLoaderService);
    return GoogleChartsLoaderService;
}());

var GoogleChartsDataTable = /** @class */ (function () {
    function GoogleChartsDataTable(opt) {
        this.opt = opt;
        this.dataTableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (opt) {
            this._setDataTable(opt.dataTable, opt.firstRowIsData);
        }
    }
    GoogleChartsDataTable.prototype.send = function () {
        var _this = this;
        if (this.query === undefined) {
            return;
        }
        this.query.send(function (queryResponse) {
            _this.setDataTable(queryResponse.getDataTable());
            if (_this.opt.queryCallback) {
                _this.opt.queryCallback(queryResponse);
            }
        });
    };
    GoogleChartsDataTable.prototype.init = function (opt) {
        var _this = this;
        if (opt) {
            this.opt = opt;
        }
        if (this.tid !== undefined) {
            // doesn't work, see https://github.com/google/google-visualization-issues/issues/2381
            // this.query.abort();
            window.clearInterval(this.tid);
            this.tid = undefined;
        }
        if (this.opt.dataSourceUrl) {
            this.query = new google.visualization.Query(this.opt.dataSourceUrl);
            if (this.opt.query) {
                this.query.setQuery(this.opt.query);
            }
            if (this.opt.timeout !== undefined) {
                this.query.setTimeout(this.opt.timeout);
            }
            if (this.opt.refreshInterval) {
                // this.query.setRefreshInterval(this.opt.refreshInterval);
                this.tid = window.setInterval(function () {
                    _this.send();
                }, this.opt.refreshInterval * 1000);
            }
            this.send();
        }
        else {
            this.setDataTable(this.opt.dataTable);
        }
    };
    /**
     * @returns Underlying google.visualization.DataTable
     */
    GoogleChartsDataTable.prototype.getDataTable = function () {
        return this.dataTable;
    };
    GoogleChartsDataTable.prototype.setDataTable = function (dt, firstRowIsData) {
        if (firstRowIsData === undefined) {
            firstRowIsData = this.opt.firstRowIsData;
        }
        this._setDataTable(dt, firstRowIsData);
        this.dataTableChanged.emit(this.dataTable);
    };
    GoogleChartsDataTable.prototype._setDataTable = function (dt, firstRowIsData) {
        if (Array.isArray(dt)) {
            dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
        }
        this.dataTable = dt;
        this.reformat();
    };
    /**
     * Applies formatters to data columns, if defined
     */
    GoogleChartsDataTable.prototype.reformat = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var dt = this.dataTable;
        if (dt === undefined) {
            return;
        }
        if (this.opt.formatters === undefined) {
            return;
        }
        try {
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.opt.formatters), _e = _d.next(); !_e.done; _e = _d.next()) {
                var formatterConfig = _e.value;
                var formatter = void 0;
                if (formatterConfig.type === 'PatternFormat') {
                    var fmtOptions = formatterConfig.options;
                    formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
                    formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
                    continue;
                }
                var formatterConstructor = google.visualization[formatterConfig.type];
                var formatterOptions = formatterConfig.options;
                formatter = new formatterConstructor(formatterOptions);
                if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                    var fmtOptions = formatterOptions;
                    try {
                        for (var _f = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(fmtOptions.ranges)), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var range = _g.value;
                            if (typeof (range.fromBgColor) !== 'undefined'
                                && typeof (range.toBgColor) !== 'undefined') {
                                formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                            }
                            else {
                                formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                try {
                    for (var _h = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(formatterConfig.columns)), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var col = _j.value;
                        formatter.format(dt, col);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartsDataTable.prototype, "dataTableChanged", void 0);
    return GoogleChartsDataTable;
}());

var ChartHTMLTooltip = /** @class */ (function () {
    function ChartHTMLTooltip(el) {
        this.tooltipDOMElement = el;
    }
    ChartHTMLTooltip.prototype.setPosition = function (x, y) {
        this.tooltipDOMElement.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.tooltipDOMElement.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    };
    ChartHTMLTooltip.prototype.getDOMElement = function () {
        return this.tooltipDOMElement;
    };
    ChartHTMLTooltip.PIXELS = 'px';
    return ChartHTMLTooltip;
}());

var GoogleChartComponent = /** @class */ (function () {
    function GoogleChartComponent(el, loaderService) {
        var _this = this;
        this.el = el;
        this.mouseOverListener = function (item) {
            var event = _this.parseMouseEvent(item);
            event.tooltip = _this.getHTMLTooltip();
            return event;
        };
        this.mouseOutListener = function (item) {
            var event = _this.parseMouseEvent(item);
            return event;
        };
        this.selectListener = function () {
            var event = {
                message: 'select',
                row: null,
                column: null,
                selectedRowValues: [],
                selectedRowFormattedValues: [],
                columnLabel: ''
            };
            var s = _this.wrapper.visualization.getSelection();
            var gs = s[s.length - 1];
            if (!gs) {
                event.message = 'deselect';
                return event;
            }
            var selection = gs;
            if (gs.row != null) {
                event.row = selection.row;
                var selectedRowValues = [];
                var selectedRowFormattedValues = [];
                var dataTable = _this.wrapper.getDataTable();
                var numberOfColumns = dataTable.getNumberOfColumns();
                for (var i = 0; i < numberOfColumns; i++) {
                    selectedRowValues.push(dataTable.getValue(selection.row, i));
                    selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                }
                event.selectedRowValues = selectedRowValues;
                event.selectedRowFormattedValues = selectedRowFormattedValues;
            }
            if (selection.column != null) {
                event.column = selection.column;
                event.columnLabel = _this.getColumnLabelAtPosition(selection);
            }
            if (gs.name) {
                event.columnLabel = gs.name;
            }
            return event;
        };
        this.loaderService = loaderService;
        this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionClickOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GoogleChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HTMLel = this.el.nativeElement.querySelector('div');
        this.data.component = this;
        this.options = this.data.options;
        this.init().then(function () {
            _this.draw();
        });
    };
    GoogleChartComponent.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loaderService.load()];
                    case 1:
                        _a.sent();
                        this.recreateWrapper();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleChartComponent.prototype.recreateWrapper = function () {
        var _this = this;
        if (this.wrapper === undefined || this.wrapper.getChartType() !== this.data.chartType) {
            this.dataTable = new GoogleChartsDataTable(this.data);
            this.dataTable.dataTableChanged.subscribe(function (dt) {
                _this._draw();
            });
            // see dataTable in https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
            var temp = this.data;
            if (this.data.firstRowIsData) {
                temp = Object.assign(temp, this.data);
                temp.dataTable = this.dataTable.getDataTable();
            }
            this.wrapper = new google.visualization.ChartWrapper(temp);
            this.registerChartWrapperEvents();
            /* Calling draw even without data is the only way to pass the HTMl element
               when using the chart in a dashboard. Don't do this in all other cases:
               it breaks formatters with remote data source, hence the conditional. */
            if (temp.dataTable === undefined && temp.dataSourceUrl === undefined) {
                try {
                    this.wrapper.draw(this.HTMLel);
                }
                catch (err) { }
            }
        }
    };
    GoogleChartComponent.prototype._draw = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var dt;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                dt = this.dataTable.getDataTable();
                if (dt === undefined) {
                    return [2 /*return*/];
                }
                this.convertOptions();
                this.recreateWrapper();
                this.wrapper.setOptions(this.options);
                this.wrapper.setDataTable(dt);
                this.wrapper.draw(this.HTMLel);
                return [2 /*return*/];
            });
        });
    };
    GoogleChartComponent.prototype.getDataTable = function () {
        return this.dataTable;
    };
    GoogleChartComponent.prototype.draw = function (value) {
        if (value === undefined) {
            value = this.data;
        }
        this.options = value.options;
        this.dataTable.init(value);
    };
    GoogleChartComponent.prototype.getSelectorBySeriesType = function (seriesType) {
        var selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        var selector = selectors[seriesType];
        return selector;
    };
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    GoogleChartComponent.prototype.getSeriesByColumn = function (column) {
        var series = 0;
        var dataTable = this.wrapper.getDataTable();
        for (var i = column - 1; i >= 0; i--) {
            var role = dataTable.getColumnRole(i);
            var type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    };
    GoogleChartComponent.prototype.getBoundingBoxForItem = function (item) {
        var boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            var column = item.column;
            var series = this.getSeriesByColumn(column);
            var row = item.row;
            var seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    var box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    };
    GoogleChartComponent.prototype.getValueAtPosition = function (position) {
        if (position.row == null) {
            return null;
        }
        var dataTable = this.wrapper.getDataTable();
        var value = dataTable.getValue(position.row, position.column);
        return value;
    };
    GoogleChartComponent.prototype.getColumnTypeAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnType(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getColumnLabelAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnLabel(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getHTMLTooltip = function () {
        var tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new ChartHTMLTooltip(tooltipER);
    };
    GoogleChartComponent.prototype.parseMouseEvent = function (item) {
        var chartType = this.wrapper.getChartType();
        var eventColumn = item.column;
        if (eventColumn == null) {
            switch (chartType) {
                case 'Timeline':
                    eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                    break;
                default:
                    eventColumn = 0;
            }
        }
        var eventRow = item.row;
        var myItem = {
            row: eventRow,
            column: eventColumn
        };
        var event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(myItem),
            value: this.getValueAtPosition(myItem),
            columnType: this.getColumnTypeAtPosition(myItem),
            columnLabel: this.getColumnLabelAtPosition(myItem)
        };
        return event;
    };
    GoogleChartComponent.prototype.unregisterEvents = function () {
        google.visualization.events.removeAllListeners(this.wrapper.getChart());
        google.visualization.events.removeAllListeners(this.wrapper);
    };
    GoogleChartComponent.prototype.registerChartEvents = function () {
        var _this = this;
        var chart = this.wrapper.getChart();
        this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;
        if (this.mouseOver.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOver.emit(event);
            });
        }
        if (this.mouseOverOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOverOneTime.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOut.emit(event);
            });
        }
        if (this.mouseOutOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOutOneTime.emit(event);
            });
        }
        if (this.data.chartType === 'GeoChart') {
            if (this.regionClick.observers.length > 0) {
                google.visualization.events.addListener(chart, 'regionClick', function (item) {
                    _this.regionClick.emit(item);
                });
            }
            if (this.regionClickOneTime.observers.length > 0) {
                google.visualization.events.addOneTimeListener(chart, 'regionClick', function (item) {
                    _this.regionClick.emit(item);
                });
            }
        }
    };
    GoogleChartComponent.prototype.registerChartWrapperEvents = function () {
        var _this = this;
        google.visualization.events.addListener(this.wrapper, 'ready', function () {
            _this.chartReady.emit({ message: 'Chart ready' });
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'ready', function () {
            _this.chartReadyOneTime.emit({ message: 'Chart ready (one time)' });
            _this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', function (error) {
            _this.chartError.emit(error);
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'error', function (error) {
            _this.chartErrorOneTime.emit(error);
        });
        this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
        this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
    };
    GoogleChartComponent.prototype.addListener = function (source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addListener(source, eventType, function () {
            evEmitter.emit(listenerFn());
        });
    };
    GoogleChartComponent.prototype.addOneTimeListener = function (source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addOneTimeListener(source, eventType, function () {
            evEmitter.emit(listenerFn());
        });
    };
    GoogleChartComponent.prototype.convertOptions = function () {
        try {
            this.options = google.charts[this.data.chartType].convertOptions(this.options);
        }
        catch (error) {
            return;
        }
    };
    GoogleChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GoogleChartsLoaderService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GoogleChartComponent.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "chartReady", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "chartError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "chartSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "regionClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoogleChartComponent.prototype, "regionClickOneTime", void 0);
    GoogleChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'google-chart',
            template: '<div></div>'
        })
    ], GoogleChartComponent);
    return GoogleChartComponent;
}());

var GoogleChartsDashboardComponent = /** @class */ (function () {
    function GoogleChartsDashboardComponent(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
    }
    GoogleChartsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.component = this;
        this.init().then(function () {
            if (!_this.dataTable) {
                _this.dataTable = new GoogleChartsDataTable(_this.data);
                _this.dataTable.dataTableChanged.subscribe(function (dt) {
                    _this._draw();
                });
            }
            _this.draw();
        });
    };
    GoogleChartsDashboardComponent.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b, b, controls, charts, controls_1, controls_1_1, c, e_1_1, charts_1, charts_1_1, c, data, e_2_1, e_3_1;
            var e_3, _c, e_1, _d, e_2, _e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.loaderService.load({ packages: ['controls'] })];
                    case 1:
                        _f.sent();
                        this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector('div'));
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 21, 22, 23]);
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.data.bind), _b = _a.next();
                        _f.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 20];
                        b = _b.value;
                        controls = b[0];
                        charts = b[1];
                        if (!(controls instanceof Array)) {
                            controls = [controls];
                        }
                        if (!(charts instanceof Array)) {
                            charts = [charts];
                        }
                        _f.label = 4;
                    case 4:
                        _f.trys.push([4, 9, 10, 11]);
                        controls_1 = (e_1 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(controls)), controls_1_1 = controls_1.next();
                        _f.label = 5;
                    case 5:
                        if (!!controls_1_1.done) return [3 /*break*/, 8];
                        c = controls_1_1.value;
                        return [4 /*yield*/, c.component.ensureInit()];
                    case 6:
                        _f.sent();
                        _f.label = 7;
                    case 7:
                        controls_1_1 = controls_1.next();
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (controls_1_1 && !controls_1_1.done && (_d = controls_1.return)) _d.call(controls_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 11:
                        _f.trys.push([11, 16, 17, 18]);
                        charts_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(charts)), charts_1_1 = charts_1.next();
                        _f.label = 12;
                    case 12:
                        if (!!charts_1_1.done) return [3 /*break*/, 15];
                        c = charts_1_1.value;
                        return [4 /*yield*/, c.component.init()];
                    case 13:
                        _f.sent();
                        data = c.component.data;
                        if (data.dataTable !== undefined || data.dataSourceUrl !== undefined) {
                            throw Error('dataTable and dataSourceUrl cannot be specified when ' +
                                'chart is drawn in a Dashboard');
                        }
                        _f.label = 14;
                    case 14:
                        charts_1_1 = charts_1.next();
                        return [3 /*break*/, 12];
                    case 15: return [3 /*break*/, 18];
                    case 16:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 18];
                    case 17:
                        try {
                            if (charts_1_1 && !charts_1_1.done && (_e = charts_1.return)) _e.call(charts_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 18:
                        this.dashboard.bind(controls.map(function (x) { return x.component.wrapper; }), charts.map(function (x) { return x.component.wrapper; }));
                        _f.label = 19;
                    case 19:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 20: return [3 /*break*/, 23];
                    case 21:
                        e_3_1 = _f.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 23];
                    case 22:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 23: return [2 /*return*/];
                }
            });
        });
    };
    GoogleChartsDashboardComponent.prototype.draw = function (value) {
        this.dataTable.init(value);
    };
    GoogleChartsDashboardComponent.prototype._draw = function () {
        this.dashboard.draw(this.dataTable.getDataTable());
    };
    GoogleChartsDashboardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GoogleChartsLoaderService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GoogleChartsDashboardComponent.prototype, "data", void 0);
    GoogleChartsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'google-charts-dashboard',
            template: '<div></div>'
        })
    ], GoogleChartsDashboardComponent);
    return GoogleChartsDashboardComponent;
}());

var GoogleChartsControlComponent = /** @class */ (function () {
    function GoogleChartsControlComponent(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
    }
    GoogleChartsControlComponent.prototype.ngOnInit = function () {
        this.data.component = this;
    };
    GoogleChartsControlComponent.prototype.ensureInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var opt;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.wrapper) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loaderService.load({ packages: ['controls'] })];
                    case 1:
                        _a.sent();
                        opt = Object.create(this.data);
                        opt.containerId = this.el.nativeElement.querySelector('div');
                        this.wrapper = new google.visualization.ControlWrapper(opt);
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleChartsControlComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GoogleChartsLoaderService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GoogleChartsControlComponent.prototype, "data", void 0);
    GoogleChartsControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'google-charts-control',
            template: '<div></div>'
        })
    ], GoogleChartsControlComponent);
    return GoogleChartsControlComponent;
}());

var Ng2GoogleChartsModule = /** @class */ (function () {
    function Ng2GoogleChartsModule() {
    }
    Ng2GoogleChartsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                GoogleChartComponent,
                GoogleChartsDashboardComponent,
                GoogleChartsControlComponent,
            ],
            providers: [
                GoogleChartsLoaderService
            ],
            exports: [
                GoogleChartComponent,
                GoogleChartsDashboardComponent,
                GoogleChartsControlComponent,
            ]
        })
    ], Ng2GoogleChartsModule);
    return Ng2GoogleChartsModule;
}());

/*
 * Public API Surface of ng2-google-charts
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-google-charts.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/main/main.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/main/main.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Weather</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button [routerLink]=\"['/tabs/tab1/new']\">\n        <ion-icon name=\"git-compare\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-fab horizontal=\"start\" vertical=\"top\" slot=\"fixed\" style=\"margin-left: 120px;\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropdown\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"end\">\n      <ion-fab-button color=\"light\" (click)=\"changeMeasurement('temp')\">\n        <ion-icon name=\"thermometer\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" (click)=\"changeMeasurement('aprs')\">\n        <ion-icon name=\"partly-sunny\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" (click)=\"changeMeasurement('lght')\">\n        <ion-icon name=\"sunny\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" (click)=\"changeMeasurement('colr')\">\n        <ion-icon name=\"brush\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" (click)=\"changeMeasurement('all')\">\n        <ion-icon name=\"stats\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-list style=\"padding-top: 10px;\">\n    <ion-list-header style=\"background-color: white;\">\n      <h5>Measurements</h5>\n    </ion-list-header>\n    <ion-item lines=\"none\">\n      <h1 style=\"margin-right: 30px;\" *ngIf=\"measurementName != 'Color'\">{{measurementValue}}</h1>\n      <div style=\"margin-right: 30px;\" [style.background-color]=\"measurementValue\" class=\"dot\" *ngIf=\"measurementName == 'Color'\"></div>\n      <ion-label>\n        <h2>{{measurementName}}</h2>\n        <p>{{measurementUnit}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" style=\"width: 115vw; margin: auto; z-index: -1; margin-top: -20px;\">\n      <google-chart [data]=\"chart\"\n      style=\"width: 115vw; margin-left: -7.5vw;\"\n      ></google-chart>\n    </ion-item>\n  </ion-list>\n\n  <ion-list style=\"margin-top: -10px;\">\n    <ion-radio-group [(ngModel)]=\"currentDisplay\">\n      <ion-list-header>\n        Display settings\n      </ion-list-header>\n  \n      <ion-item lines=\"none\" style=\"margin-right: 15px; margin-top: -10px;\" *ngFor=\"let m of measurementDisplayFaces.settings\">\n        <ion-label>\n          <h2>{{m.title}}</h2>\n          <p>{{m.description}}</p>\n        </ion-label>\n        <ion-radio slot=\"start\" [value]=\"m.title\" (click)=\"saveDisplayOption(m.title, m.code)\"></ion-radio>\n        <ion-icon [name]=\"m.icon\"></ion-icon>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <div style=\"width: 100%; position: absolute; bottom: 0;\">\n    <img src=\"../../../assets/icon/run1.jpg\" style=\"height: auto; width: 100%;\">\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/main/main-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tabs/main/main-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/tabs/main/main.page.ts");




var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    },
    {
        path: 'item-details',
        loadChildren: function () { return __webpack_require__.e(/*! import() | item-details-item-details-module */ "common").then(__webpack_require__.bind(null, /*! ./item-details/item-details.module */ "./src/app/tabs/main/item-details/item-details.module.ts")).then(function (m) { return m.ItemDetailsPageModule; }); }
    },
    {
        path: 'new-item',
        loadChildren: function () { return Promise.all(/*! import() | new-item-new-item-module */[__webpack_require__.e("default~main-new-item-new-item-module~new-item-new-item-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./new-item/new-item.module */ "./src/app/tabs/main/new-item/new-item.module.ts")).then(function (m) { return m.NewItemPageModule; }); }
    }
];
var MainPageRoutingModule = /** @class */ (function () {
    function MainPageRoutingModule() {
    }
    MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MainPageRoutingModule);
    return MainPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/main/main.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/main/main.module.ts ***!
  \******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/tabs/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/tabs/main/main.page.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/fesm5/ng2-google-charts.js");








var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__["Ng2GoogleChartsModule"]
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/main/main.page.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/main/main.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  display: top;\n  --box-shadow: 0;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated-opacity: transparent;\n  --background-focused-opacity: 0;\n  --background-hover: transparent;\n  --color: gray;\n}\n\n.dot {\n  height: 45px;\n  width: 45px;\n  border: 1px solid black;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZGFyaWUvRG9jdW1lbnRzL3NvbHV0aW9uL3NyYy9hcHAvdGFicy9tYWluL21haW4ucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWJzL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogdG9wO1xuICAgIC0tYm94LXNoYWRvdzogMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiBncmF5O1xufVxuXG4uZG90IHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSIsImlvbi1mYWItYnV0dG9uIHtcbiAgZGlzcGxheTogdG9wO1xuICAtLWJveC1zaGFkb3c6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogZ3JheTtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tabs/main/main.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/main/main.page.ts ***!
  \****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/backend-server.service */ "./src/app/services/backend-server.service.ts");







var MainPage = /** @class */ (function () {
    function MainPage(http, localStorage, network, toast, backend, platform) {
        var _this = this;
        this.http = http;
        this.localStorage = localStorage;
        this.network = network;
        this.toast = toast;
        this.backend = backend;
        this.platform = platform;
        this.itemTypes = [];
        this.filter = null;
        this.curentlySelectedM = 'temp';
        this.chart = {
            chartType: 'LineChart',
            dataTable: [
                ['Hour', 'Value'],
                ['0', 0]
            ],
            options: {
                curveType: 'function',
                legend: 'none',
            },
        };
        this.measurement = {
            temp: {
                name: 'Temperature histogram',
                value: 0,
                unit: 'Celsius',
                chart: {
                    chartType: 'LineChart',
                    dataTable: [
                        ['Hour', 'Value'],
                        ['0', 0]
                    ],
                    options: {
                        curveType: 'function',
                        legend: 'none'
                    },
                },
                settings: [
                    {
                        icon: 'eye',
                        title: 'Celsius',
                        description: 'Ambiental temperature',
                        code: 1,
                    },
                    {
                        icon: 'eye-off',
                        title: 'Silent',
                        description: 'Display will be turned off',
                        code: 5
                    }
                ]
            },
            aprs: {
                name: 'Air pressure histogram',
                value: 0,
                unit: 'hPa',
                chart: {
                    chartType: 'LineChart',
                    dataTable: [
                        ['Hour', 'Value'],
                        ['0', 0]
                    ],
                    options: {
                        curveType: 'function',
                        legend: 'none'
                    },
                },
                settings: [
                    {
                        icon: 'eye',
                        title: 'hPa',
                        description: 'Air pressure',
                        code: 2
                    },
                    {
                        icon: 'eye-off',
                        title: 'Silent',
                        description: 'Display will be turned off',
                        code: 5
                    }
                ]
            },
            lght: {
                name: 'Light histogram',
                value: 0,
                unit: 'Lumens',
                chart: {
                    chartType: 'LineChart',
                    dataTable: [
                        ['Hour', 'Value'],
                        ['0', 0]
                    ],
                    options: {
                        curveType: 'function',
                        legend: 'none'
                    },
                },
                settings: [
                    {
                        icon: 'eye',
                        title: 'Lumens',
                        description: 'Ambietal light intensity',
                        code: 3
                    },
                    {
                        icon: 'eye-off',
                        title: 'Silent',
                        description: 'Display will be turned off',
                        code: 5
                    }
                ]
            },
            colr: {
                name: 'Color',
                value: '',
                unit: 'Real time RGBC',
                chart: {
                    chartType: 'ColumnChart',
                    dataTable: [
                        ['Value', 'Density', { role: 'style' }],
                        ['Red', 0, '#eb4034'],
                        ['Green', 0, '#eb4034'],
                        ['Blue', 0, '#eb4034'],
                        ['Clear', 0, 'gray'],
                    ],
                    options: {
                        legend: 'none'
                    },
                },
                settings: [
                    {
                        icon: 'eye',
                        title: 'RGB',
                        description: 'Ambiental color',
                        code: 4
                    },
                    {
                        icon: 'eye-off',
                        title: 'Silent',
                        description: 'Display will be turned off',
                        code: 5
                    }
                ]
            },
            all: {
                name: 'Histogram',
                value: '',
                unit: 'last update',
                chart: {
                    chartType: 'LineChart',
                    dataTable: [
                        ['Hour', 'Temperature', 'Light', 'Pressure'],
                        ['0', 0, 0, 0]
                    ],
                    options: {
                        curveType: 'function',
                        legend: {
                            position: 'bottom'
                        }
                    },
                },
                settings: [
                    {
                        icon: 'eye',
                        title: 'Alternative',
                        description: 'Alternattive view',
                        code: 0
                    },
                    {
                        icon: 'eye-off',
                        title: 'Silent',
                        description: 'Display will be turned off',
                        code: 5
                    }
                ]
            }
        };
        this.measurementName = this.measurement.temp.name;
        this.measurementValue = this.measurement.temp.value;
        this.measurementUnit = this.measurement.temp.unit;
        this.measurementDisplayFaces = this.measurement.temp;
        this.currentDisplay = this.measurement.temp.settings[0].title;
        this.savedDisplay = [];
        this.temperature = [];
        this.light = [];
        this.airPressure = [];
        this.allValues = [];
        this.URI = this.backend.URI;
        this.ws = this.backend.ws;
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                // App is put in background
                _this.platform.pause.subscribe(function () {
                    _this.closeStream();
                });
                // App is put in foreground
                _this.platform.resume.subscribe(function () {
                    _this.openStream();
                });
            }
        });
        var chartDataPromise = this.http.get('http://161.35.76.247:4001/weather-graph').toPromise();
        chartDataPromise.then(function (resp) {
            console.log(resp['data']);
            _this.temperature = [['Hour', 'Value']];
            _this.light = [['Hour', 'Value']];
            _this.airPressure = [['Hour', 'Value']];
            _this.allValues = [['Hour', 'Temperature', 'Light', 'Pressure']];
            for (var _i = 0, _a = resp['data']; _i < _a.length; _i++) {
                var event_1 = _a[_i];
                _this.temperature.push([new Date(event_1['event_time']).toISOString(), event_1['temperature']]);
                _this.light.push([new Date(event_1['event_time']).toISOString(), event_1['light']]);
                _this.airPressure.push([new Date(event_1['event_time']).toISOString(), event_1['air_pressure']]);
                _this.allValues.push([new Date(event_1['event_time']).toISOString(), event_1['temperature'] / 20, event_1['light'] / 1600, event_1['air_pressure'] / 970]);
            }
            _this.measurement.temp.chart.dataTable = _this.temperature;
            _this.measurement.aprs.chart.dataTable = _this.airPressure;
            _this.measurement.lght.chart.dataTable = _this.light;
            _this.measurement.all.chart.dataTable = _this.allValues;
            var dd = new Date(_this.allValues[_this.allValues.length - 1][0]);
            _this.measurement.all.value = dd.toISOString().substr(11, 5);
            _this.chart.dataTable = _this.measurement[_this.curentlySelectedM].chart.dataTable;
            _this.chart.chartType = _this.measurement[_this.curentlySelectedM].chart.chartType;
            _this.chart.options = _this.measurement[_this.curentlySelectedM].chart.options;
            _this.chart.component.draw();
        });
    }
    MainPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('main.main: ngOnInit');
        this.openStream();
        this.localStorage.at('savedDisplay').then(function (resp) {
            console.log('here2');
            console.log(resp);
            if (resp != null) {
                _this.savedDisplay = resp;
                _this.currentDisplay = resp[0][0];
            }
            else {
                _this.savedDisplay = [_this.measurement.temp.settings[0].title, _this.measurement.temp.settings[0].code];
            }
        });
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.localStorage.get().then(function (resp) {
                _this.items = resp;
            });
        }
        else {
            // Asking the server for a list of resources
            // const pItems = this.http.get(this.URI + '/orders').toPromise();
            // pItems.then((resp) => {
            //   this.localStorage.set(this.items);
            // });
        }
        // Watch network for a disconnection.
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.presentOkToast('No internet connection.');
            _this.localStorage.get().then(function (resp) {
                _this.items = resp;
            });
        });
        // Watch network for a connection.
        var connectSubscription = this.network.onConnect().subscribe(function () {
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    _this.presentOkToast('Wifi network detected.');
                }
                else {
                    _this.presentOkToast(_this.network.type + ' network detected.');
                    _this.localStorage.get().then(function (resp) {
                        _this.items = resp;
                    });
                }
            }, 3000);
        });
    };
    MainPage.prototype.doRefresh = function (event) {
        console.log('main.main: doRefresh');
        // Actions per refresh
        if (this.network.type === this.network.Connection.NONE) {
            // No internet connection
            this.presentOkToast('No internet connection.');
            event.target.complete();
        }
        else if (this.network.type === 'wifi') {
            // Over Wi-fi
            // const pBooks = this.http.get(this.URI + '/orders').toPromise();
            // pBooks
            // .then((resp) => {
            //   this.items = resp as Order[];
            //   event.target.complete();
            // })
            // .catch((err) => {
            //   this.presentOkToast('Server down');
            //   event.target.complete();
            // });
        }
        else {
            // Over 4G
            this.presentOkToast('Not connected to Local Area Network');
            event.target.complete();
        }
    };
    MainPage.prototype.presentOkToast = function (myMessage) {
        this.toast.create({
            message: myMessage,
            duration: 2000,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel'
                }
            ]
        }).then(function (t) { t.present(); });
    };
    MainPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.localStorage.get().then(function (resp) {
            _this.items = resp;
        });
    };
    MainPage.prototype.ionViewWillLeave = function () {
    };
    MainPage.prototype.openStream = function () {
        var _this = this;
        // this.presentOkToast('Listening on port: ' + this.backend.port);
        this.ws.getDataStream().subscribe(function (msg) {
            msg = JSON.parse(msg.data);
            console.log(msg);
            if (msg.temperature != null) {
                _this.measurement.temp.value = msg.temperature;
                _this.measurement.aprs.value = msg.air_pressure;
                _this.measurement.lght.value = msg.light;
                _this.measurementValue = _this.measurement[_this.curentlySelectedM].value;
                _this.measurement.colr.value = 'rgb(' + msg.color.red + ', ' + msg.color.green + ', ' + msg.color.blue + ')';
                _this.measurement.colr.chart.dataTable = [
                    ['Value', 'Density', { role: 'style' }],
                    ['Red', msg.color.red, 'lightgray'],
                    ['Green', msg.color.green, 'lightgray'],
                    ['Blue', msg.color.blue, 'lightgray'],
                    ['Clear', msg.color.clear, 'lightgray'],
                ];
                if (_this.curentlySelectedM === 'colr') {
                    _this.chart.dataTable = _this.measurement.colr.chart.dataTable;
                    _this.chart.chartType = _this.measurement.colr.chart.chartType;
                    _this.chart.options = _this.measurement.colr.chart.options;
                    _this.chart.component.draw();
                }
                _this.localStorage.at('recorded').then(function (resp) {
                    // const localItems = resp as Order[];
                    // localItems.push(msg);
                    // this.localStorage.append('recorded', localItems);
                    // this.presentOkToast('New Order: ' + msg);
                });
            }
        }, function (msg) {
            console.log('main.main: openStream: error', msg);
        }, function () {
            console.log('main.main: openStream: complete');
        });
    };
    MainPage.prototype.closeStream = function () {
        console.log('main.main: closeStream');
        this.presentOkToast('Stop listening on port: ' + this.backend.port);
        this.ws.close(false);
    };
    MainPage.prototype.changeMeasurement = function (x) {
        this.curentlySelectedM = x;
        this.measurementName = this.measurement[x].name;
        this.measurementValue = this.measurement[x].value;
        this.measurementUnit = this.measurement[x].unit;
        this.measurementDisplayFaces = this.measurement[x];
        this.chart.dataTable = this.measurement[x].chart.dataTable;
        this.chart.chartType = this.measurement[x].chart.chartType;
        this.chart.options = this.measurement[x].chart.options;
        this.chart.component.draw();
        console.log(this.savedDisplay[0]);
        this.currentDisplay = this.savedDisplay[0].toString();
    };
    MainPage.prototype.saveDisplayOption = function (title, code) {
        var _this = this;
        this.savedDisplay = [title, code];
        this.localStorage.append('savedDisplay', [this.savedDisplay]);
        this.backend.ws.send(JSON.stringify({ displayCode: code })).subscribe(function (msg) {
            console.log('next', msg.data);
        }, function (msg) {
            console.log('error', msg);
            if (msg.includes('Socket connection has been closed')) {
                _this.presentOkToast('Weather device cannot be reached');
            }
            else {
                _this.presentOkToast('Cannot connect to weather device');
            }
        }, function () {
            console.log('complete');
        });
    };
    MainPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/tabs/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module-es5.js.map