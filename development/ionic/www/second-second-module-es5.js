(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-second-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/second/second.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/second/second.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Fitness tracker</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"stravaAccess()\">\n        <ion-icon name=\"watch\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>{{currentAthlete.lastname}} {{currentAthlete.firstname}}</ion-card-title>\n      <ion-card-subtitle>{{currentAthlete.country}}, {{currentAthlete.city}}, {{currentAthlete.state}}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n  <div style=\"margin: 0 0 0 15px; font-size: 10px;\">\n  <ion-segment [(ngModel)]=\"currentSegment\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"this-year\">\n      <ion-label>This year</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"all-time\">\n      <ion-label>All time</ion-label>\n    </ion-segment-button>\n    <ion-list-header>\n      <span style=\"margin-left: auto; margin-right: 35px\">Run | Ride</span>\n    </ion-list-header>\n  </ion-segment>\n  </div>\n\n  <ion-list style=\"margin: 0 15px 0 0;\" *ngIf=\"currentSegment === 'this-year'\">\n    <ion-item>\n      <ion-label>Count</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._ytd_run_totals._count}} runs</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._ytd_ride_totals._count}} rides</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Distance</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._ytd_run_totals._distance}} km</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._ytd_ride_totals._distance}} km</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Moving time</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._ytd_run_totals._moving_time}} hours</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._ytd_ride_totals._moving_time}} hours</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Elevation gain</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._ytd_run_totals._elevation_gain}} m</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._ytd_ride_totals._elevation_gain}} m</ion-badge>\n    </ion-item>\n  </ion-list>\n\n  <ion-list style=\"margin-right: 15px\" *ngIf=\"currentSegment === 'all-time'\">\n    <ion-item>\n      <ion-label>Count</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._all_run_totals._count}} runs</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._all_ride_totals._count}} rides</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Distance</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._all_run_totals._distance}} km</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._all_ride_totals._distance}} km</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Moving time</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._all_run_totals._moving_time}} hours</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._all_ride_totals._moving_time}} hours</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Elevation gain</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._all_run_totals._elevation_gain}} m</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._all_ride_totals._elevation_gain}} m</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Average speed</ion-label>\n      <ion-badge color=\"secondary\" style=\"margin-right: 5px\">{{currentAthlete.stats._all_run_totals._distance / currentAthlete.stats._all_run_totals._moving_time | number}} km/h</ion-badge>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._all_ride_totals._distance / currentAthlete.stats._all_ride_totals._moving_time | number}} km/h</ion-badge>\n    </ion-item>\n  </ion-list>\n\n  <ion-list style=\"margin-right: 15px\" *ngIf=\"currentSegment === 'all-time'\">\n    <ion-item>\n      <ion-label>Biggest climb elevation gain</ion-label>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._biggest_climb_elevation_gain}} m</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Longest distance</ion-label>\n      <ion-badge color=\"secondary\">{{currentAthlete.stats._biggest_ride_distance}} km</ion-badge>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/second/second-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/tabs/second/second-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SecondPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageRoutingModule", function() { return SecondPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _second_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second.page */ "./src/app/tabs/second/second.page.ts");




var routes = [
    {
        path: '',
        component: _second_page__WEBPACK_IMPORTED_MODULE_3__["SecondPage"]
    },
    {
        path: 'item-details',
        loadChildren: function () { return __webpack_require__.e(/*! import() | item-details-item-details-module */ "common").then(__webpack_require__.bind(null, /*! ./item-details/item-details.module */ "./src/app/tabs/second/item-details/item-details.module.ts")).then(function (m) { return m.ItemDetailsPageModule; }); }
    },
    {
        path: 'new-item',
        loadChildren: function () { return Promise.all(/*! import() | new-item-new-item-module */[__webpack_require__.e("default~main-new-item-new-item-module~new-item-new-item-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./new-item/new-item.module */ "./src/app/tabs/second/new-item/new-item.module.ts")).then(function (m) { return m.NewItemPageModule; }); }
    }
];
var SecondPageRoutingModule = /** @class */ (function () {
    function SecondPageRoutingModule() {
    }
    SecondPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SecondPageRoutingModule);
    return SecondPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/second/second.module.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/second/second.module.ts ***!
  \**********************************************/
/*! exports provided: SecondPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageModule", function() { return SecondPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _second_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second-routing.module */ "./src/app/tabs/second/second-routing.module.ts");
/* harmony import */ var _second_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second.page */ "./src/app/tabs/second/second.page.ts");







var SecondPageModule = /** @class */ (function () {
    function SecondPageModule() {
    }
    SecondPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _second_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecondPageRoutingModule"]
            ],
            declarations: [_second_page__WEBPACK_IMPORTED_MODULE_6__["SecondPage"]]
        })
    ], SecondPageModule);
    return SecondPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/second/second.page.scss":
/*!**********************************************!*\
  !*** ./src/app/tabs/second/second.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2Vjb25kL3NlY29uZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/second/second.page.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/second/second.page.ts ***!
  \********************************************/
/*! exports provided: SecondPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPage", function() { return SecondPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");








var SecondPage = /** @class */ (function () {
    function SecondPage(http, iab, localStorage, network, toast, backend, platform) {
        var _this = this;
        this.http = http;
        this.iab = iab;
        this.localStorage = localStorage;
        this.network = network;
        this.toast = toast;
        this.backend = backend;
        this.platform = platform;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.currentSegment = 'this-year';
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
        this.appKey = '44984';
        this.redirectURI = 'http://127.0.0.1:8100/tabs/tab2';
        this.url = 'https://www.strava.com/oauth/authorize?client_id='
            + this.appKey + '&redirect_uri=' + this.redirectURI
            + '&response_type=code&approval_prompt=auto&scope=read,profile:read_all,activity:read';
    }
    SecondPage.prototype.ngOnInit = function () {
        var _this = this;
        this.openStream();
        this.currentAthlete = {
            firstname: '',
            lastname: '',
            country: '',
            city: '',
            state: '',
            stats: {
                _all_run_totals: { _distance: 0, _moving_time: 0, _count: 0, _elevation_gain: 0 },
                _all_ride_totals: { _distance: 0, _moving_time: 0, _count: 0, _elevation_gain: 0 },
                _biggest_ride_distance: 0,
                _biggest_climb_elevation_gain: 0,
                _ytd_run_totals: { _distance: 0, _moving_time: 0, _count: 0, _elevation_gain: 0 },
                _ytd_ride_totals: { _distance: 0, _moving_time: 0, _count: 0, _elevation_gain: 0 }
            }
        };
        this.localStorage.at('stravaAthlete').then(function (resp) {
            if (resp != null) {
                // console.log('from ls');
                _this.currentAthlete = resp[0];
            }
        });
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
        }
        else {
            var stravaAthletePromise = this.http.post('http://161.35.76.247:4001/user-strava', null).toPromise();
            stravaAthletePromise.then(function (resp) {
                _this.localStorage.append('stravaAthlete', [resp]);
                _this.currentAthlete = resp;
                _this.currentAthlete.stats._all_run_totals._distance = Math.round(_this.currentAthlete.stats._all_run_totals._distance / 1000);
                _this.currentAthlete.stats._all_run_totals._moving_time = Math.round(_this.currentAthlete.stats._all_run_totals._moving_time / 3600);
                _this.currentAthlete.stats._all_ride_totals._distance = Math.round(_this.currentAthlete.stats._all_ride_totals._distance / 1000);
                _this.currentAthlete.stats._all_ride_totals._moving_time = Math.round(_this.currentAthlete.stats._all_ride_totals._moving_time / 3600);
                _this.currentAthlete.stats._ytd_ride_totals._distance = Math.round(_this.currentAthlete.stats._ytd_ride_totals._distance / 1000);
                _this.currentAthlete.stats._ytd_ride_totals._moving_time = Math.round(_this.currentAthlete.stats._ytd_ride_totals._moving_time / 3600);
                _this.currentAthlete.stats._ytd_run_totals._distance = Math.round(_this.currentAthlete.stats._ytd_run_totals._distance / 1000);
                _this.currentAthlete.stats._ytd_run_totals._moving_time = Math.round(_this.currentAthlete.stats._ytd_run_totals._moving_time / 3600);
                _this.currentAthlete.stats._biggest_ride_distance = Math.round(_this.currentAthlete.stats._biggest_ride_distance / 1000);
                _this.currentAthlete.stats._biggest_climb_elevation_gain = Math.round(_this.currentAthlete.stats._biggest_climb_elevation_gain);
                // console.log('update', resp);
            });
        }
        // Watch network for a disconnection.
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            // this.presentOkToast('No internet connection.');
            _this.localStorage.at('recorded').then(function (resp) {
                // this.items = resp as Order[];
            });
        });
        // Watch network for a connection.
        var connectSubscription = this.network.onConnect().subscribe(function () {
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    // this.presentOkToast('Wifi network detected.');
                }
                else {
                    // this.presentOkToast(this.network.type + ' network detected.');
                    _this.localStorage.at('recorded').then(function (resp) {
                        // this.items = resp as Order[];
                    });
                }
            }, 3000);
        });
    };
    SecondPage.prototype.doRefresh = function (event) {
        // Actions per refresh
        if (this.network.type === this.network.Connection.NONE) {
            // No internet connection
            // this.presentOkToast('No internet connection.');
            event.target.complete();
        }
        else if (this.network.type === 'wifi') {
            // Over Wi-fi
            // this.localStorage.at('offline').then((offlineOrders) => {
            //   this.presentOkToast(offlineOrders);
            //   offlineOrders.forEach(element => {
            //     const pOrder = this.http.post(this.URI + '/order', element).toPromise();
            //     pOrder.then((resp) => {
            //       this.presentOkToast('Succesfully created.');
            //     })
            //     .catch((err) => {
            //       this.presentOkToast('Error while adding.');
            //     });
            //   });
            //   this.localStorage.append('offline', []);
            // });
            // const pBooks = this.http.get(this.URI + '/recorded').toPromise();
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
            // this.presentOkToast('Not connected to Local Area Network');
            event.target.complete();
        }
    };
    SecondPage.prototype.presentOkToast = function (myMessage) {
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
    SecondPage.prototype.ionViewWillEnter = function () {
        // this.localStorage.at('recorded').then((resp) => {
        //   this.items = resp as Order[];
        // });
    };
    SecondPage.prototype.ionViewWillLeave = function () {
    };
    SecondPage.prototype.openStream = function () {
        // this.presentOkToast('Listening on port: ' + this.backend.port);
        // this.ws.getDataStream().subscribe(
        //   (msg) => {
        //     this.presentOkToast('next');
        //     // msg = JSON.parse(msg.data);
        //     // this.items.push(msg);
        //     // this.localStorage.append(this.filter, this.items);
        //   },
        //   (msg) => {
        //       console.log('error', msg);
        //   },
        //   () => {
        //       console.log('complete');
        //   }
        // );
    };
    SecondPage.prototype.closeStream = function () {
        // this.presentOkToast('Stop listening on port: ' + this.backend.port);
        // this.ws.close(false);
    };
    SecondPage.prototype.stravaAccess = function () {
        var _this = this;
        this.doLogin().then(function (code) {
            // console.log(code);
            _this.the_code = code;
            _this.q = code;
            _this.localStorage.append('code', [code]);
            var promise = _this.http.post('https://www.strava.com/api/v3/oauth/token?client_id=' + _this.appKey +
                '&client_secret=cceb00d52819159ea4af338cd681ff0f730709ac&code=' + _this.q +
                '&grant_type=authorization_code', null).toPromise();
            promise.then(function (resp) {
                _this.q = resp;
                // console.log('login', resp);
                _this.presentOkToast('Sync Strava profile as ' + resp['athlete']['firstname'] + ' '
                    + resp['athlete']['lastname']);
                var stravaAthletePromise = _this.http.post('http://161.35.76.247:4001/user-strava', resp).toPromise();
                stravaAthletePromise.then(function (resp) {
                    _this.localStorage.append('stravaAthlete', [resp]);
                    _this.currentAthlete = resp;
                    _this.currentAthlete.stats._all_run_totals._distance = Math.round(_this.currentAthlete.stats._all_run_totals._distance / 1000);
                    _this.currentAthlete.stats._all_run_totals._moving_time = Math.round(_this.currentAthlete.stats._all_run_totals._moving_time / 3600);
                    _this.currentAthlete.stats._all_ride_totals._distance = Math.round(_this.currentAthlete.stats._all_ride_totals._distance / 1000);
                    _this.currentAthlete.stats._all_ride_totals._moving_time =
                        Math.round(_this.currentAthlete.stats._all_ride_totals._moving_time / 3600);
                    _this.currentAthlete.stats._ytd_ride_totals._distance = Math.round(_this.currentAthlete.stats._ytd_ride_totals._distance / 1000);
                    _this.currentAthlete.stats._ytd_ride_totals._moving_time = Math.round(_this.currentAthlete.stats._ytd_ride_totals._moving_time / 3600);
                    _this.currentAthlete.stats._ytd_run_totals._distance = Math.round(_this.currentAthlete.stats._ytd_run_totals._distance / 1000);
                    _this.currentAthlete.stats._ytd_run_totals._moving_time = Math.round(_this.currentAthlete.stats._ytd_run_totals._moving_time / 3600);
                    _this.currentAthlete.stats._biggest_ride_distance = Math.round(_this.currentAthlete.stats._biggest_ride_distance / 1000);
                    _this.currentAthlete.stats._biggest_climb_elevation_gain = Math.round(_this.currentAthlete.stats._biggest_climb_elevation_gain);
                    // console.log('login', resp);
                });
            }, function (err) {
                _this.presentOkToast('Sync Strava profile failed');
            });
        });
        // this.doLogin();
    };
    // The login function
    SecondPage.prototype.doLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var browser = _this.iab.create(_this.url, '_blank', 'location=no');
            var listener = browser.on('loadstart').subscribe(function (event) {
                // Avoid transition pages
                if ((event.url.indexOf('oauth/authorize') > -1) || (event.url.indexOf('oauth/accept_application') > -1)) {
                    return;
                }
                // On unauthorize
                if (event.url.indexOf('?state=&error=access_denied') > -1) {
                    browser.close();
                    alert("You must authorize access to Strava in order to manage your equipment.");
                    return;
                }
                // On authorization success
                if (event.url.indexOf(_this.redirectURI) > -1) {
                    var token = event.url.split('&')[1].split('=')[1];
                    listener.unsubscribe();
                    browser.close();
                    resolve(token);
                }
                else {
                    reject("Could not authenticate");
                }
            });
        });
    };
    SecondPage.prototype.segmentChanged = function (event) {
        // console.log(event);
    };
    SecondPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    SecondPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! raw-loader!./second.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/second/second.page.html"),
            styles: [__webpack_require__(/*! ./second.page.scss */ "./src/app/tabs/second/second.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], SecondPage);
    return SecondPage;
}());



/***/ })

}]);
//# sourceMappingURL=second-second-module-es5.js.map