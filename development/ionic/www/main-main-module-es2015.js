(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/tabs/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    },
    {
        path: 'item-details',
        loadChildren: () => __webpack_require__.e(/*! import() | item-details-item-details-module */ "common").then(__webpack_require__.bind(null, /*! ./item-details/item-details.module */ "./src/app/tabs/main/item-details/item-details.module.ts")).then(m => m.ItemDetailsPageModule)
    },
    {
        path: 'new-item',
        loadChildren: () => __webpack_require__.e(/*! import() | new-item-new-item-module */ "common").then(__webpack_require__.bind(null, /*! ./new-item/new-item.module */ "./src/app/tabs/main/new-item/new-item.module.ts")).then(m => m.NewItemPageModule)
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/tabs/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/tabs/main/main.page.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/fesm2015/ng2-google-charts.js");








let MainPageModule = class MainPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/backend-server.service */ "./src/app/services/backend-server.service.ts");







let MainPage = class MainPage {
    constructor(http, localStorage, network, toast, backend, platform) {
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
        platform.ready().then(() => {
            if (platform.is('cordova')) {
                // App is put in background
                this.platform.pause.subscribe(() => {
                    this.closeStream();
                });
                // App is put in foreground
                this.platform.resume.subscribe(() => {
                    this.openStream();
                });
            }
        });
        const chartDataPromise = this.http.get('http://161.35.76.247:4001/weather-graph').toPromise();
        chartDataPromise.then((resp) => {
            console.log(resp['data']);
            this.temperature = [['Hour', 'Value']];
            this.light = [['Hour', 'Value']];
            this.airPressure = [['Hour', 'Value']];
            this.allValues = [['Hour', 'Temperature', 'Light', 'Pressure']];
            for (const event of resp['data']) {
                this.temperature.push([new Date(event['event_time']).toISOString(), event['temperature']]);
                this.light.push([new Date(event['event_time']).toISOString(), event['light']]);
                this.airPressure.push([new Date(event['event_time']).toISOString(), event['air_pressure']]);
                this.allValues.push([new Date(event['event_time']).toISOString(), event['temperature'] / 20, event['light'] / 1600, event['air_pressure'] / 970]);
            }
            this.measurement.temp.chart.dataTable = this.temperature;
            this.measurement.aprs.chart.dataTable = this.airPressure;
            this.measurement.lght.chart.dataTable = this.light;
            this.measurement.all.chart.dataTable = this.allValues;
            const dd = new Date(this.allValues[this.allValues.length - 1][0]);
            this.measurement.all.value = dd.toISOString().substr(11, 5);
            this.chart.dataTable = this.measurement[this.curentlySelectedM].chart.dataTable;
            this.chart.chartType = this.measurement[this.curentlySelectedM].chart.chartType;
            this.chart.options = this.measurement[this.curentlySelectedM].chart.options;
            this.chart.component.draw();
        });
    }
    ngOnInit() {
        console.log('main.main: ngOnInit');
        this.openStream();
        this.localStorage.at('savedDisplay').then((resp) => {
            console.log('here2');
            console.log(resp);
            if (resp != null) {
                this.savedDisplay = resp;
                this.currentDisplay = resp[0][0];
            }
            else {
                this.savedDisplay = [this.measurement.temp.settings[0].title, this.measurement.temp.settings[0].code];
            }
        });
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.localStorage.get().then((resp) => {
                this.items = resp;
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
        const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            this.presentOkToast('No internet connection.');
            this.localStorage.get().then((resp) => {
                this.items = resp;
            });
        });
        // Watch network for a connection.
        const connectSubscription = this.network.onConnect().subscribe(() => {
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    this.presentOkToast('Wifi network detected.');
                }
                else {
                    this.presentOkToast(this.network.type + ' network detected.');
                    this.localStorage.get().then((resp) => {
                        this.items = resp;
                    });
                }
            }, 3000);
        });
    }
    doRefresh(event) {
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
    }
    presentOkToast(myMessage) {
        this.toast.create({
            message: myMessage,
            duration: 2000,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel'
                }
            ]
        }).then(t => { t.present(); });
    }
    ionViewWillEnter() {
        this.localStorage.get().then((resp) => {
            this.items = resp;
        });
    }
    ionViewWillLeave() {
    }
    openStream() {
        // this.presentOkToast('Listening on port: ' + this.backend.port);
        this.ws.getDataStream().subscribe((msg) => {
            msg = JSON.parse(msg.data);
            console.log(msg);
            if (msg.temperature != null) {
                this.measurement.temp.value = msg.temperature;
                this.measurement.aprs.value = msg.air_pressure;
                this.measurement.lght.value = msg.light;
                this.measurementValue = this.measurement[this.curentlySelectedM].value;
                this.measurement.colr.value = 'rgb(' + msg.color.red + ', ' + msg.color.green + ', ' + msg.color.blue + ')';
                this.measurement.colr.chart.dataTable = [
                    ['Value', 'Density', { role: 'style' }],
                    ['Red', msg.color.red, 'lightgray'],
                    ['Green', msg.color.green, 'lightgray'],
                    ['Blue', msg.color.blue, 'lightgray'],
                    ['Clear', msg.color.clear, 'lightgray'],
                ];
                if (this.curentlySelectedM === 'colr') {
                    this.chart.dataTable = this.measurement.colr.chart.dataTable;
                    this.chart.chartType = this.measurement.colr.chart.chartType;
                    this.chart.options = this.measurement.colr.chart.options;
                    this.chart.component.draw();
                }
                this.localStorage.at('recorded').then((resp) => {
                    // const localItems = resp as Order[];
                    // localItems.push(msg);
                    // this.localStorage.append('recorded', localItems);
                    // this.presentOkToast('New Order: ' + msg);
                });
            }
        }, (msg) => {
            console.log('main.main: openStream: error', msg);
        }, () => {
            console.log('main.main: openStream: complete');
        });
    }
    closeStream() {
        console.log('main.main: closeStream');
        this.presentOkToast('Stop listening on port: ' + this.backend.port);
        this.ws.close(false);
    }
    changeMeasurement(x) {
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
    }
    saveDisplayOption(title, code) {
        this.savedDisplay = [title, code];
        this.localStorage.append('savedDisplay', [this.savedDisplay]);
        this.backend.ws.send(JSON.stringify({ displayCode: code })).subscribe((msg) => {
            console.log('next', msg.data);
        }, (msg) => {
            console.log('error', msg);
            if (msg.includes('Socket connection has been closed')) {
                this.presentOkToast('Weather device cannot be reached');
            }
            else {
                this.presentOkToast('Cannot connect to weather device');
            }
        }, () => {
            console.log('complete');
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
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



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map