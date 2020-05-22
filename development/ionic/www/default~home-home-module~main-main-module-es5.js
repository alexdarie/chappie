(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~main-main-module"],{

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


/***/ })

}]);
//# sourceMappingURL=default~home-home-module~main-main-module-es5.js.map