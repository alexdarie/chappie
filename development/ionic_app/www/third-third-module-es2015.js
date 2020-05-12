(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["third-third-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/third/third.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/third/third.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Client orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label>\n      Table\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-row style=\"width: 90%; margin: auto\">\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"floating\">Filter by name of the table</ion-label>\n        <ion-input [(ngModel)]=\"filter\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-button style=\"height: 3rem; margin-top: 0.5rem\" (click)=\"filterItems()\">\n      Apply\n    </ion-button>\n  </ion-row>\n\n  <ion-item-divider>\n    <ion-label>\n      Orders\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content refreshingSpinner=\"dots\"></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    <ion-card *ngFor=\"let item of items\" [routerLink]=\"['/tabs/tab3/', item.id]\">\n      <ion-card-header>\n        <ion-card-subtitle>{{item.id}}</ion-card-subtitle>\n        <ion-card-title>{{item.details}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>{{item.status}}</ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/third/third-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tabs/third/third-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ThirdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageRoutingModule", function() { return ThirdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _third_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./third.page */ "./src/app/tabs/third/third.page.ts");




const routes = [
    {
        path: '',
        component: _third_page__WEBPACK_IMPORTED_MODULE_3__["ThirdPage"]
    },
    {
        path: 'item-details',
        loadChildren: () => __webpack_require__.e(/*! import() | item-details-item-details-module */ "common").then(__webpack_require__.bind(null, /*! ./item-details/item-details.module */ "./src/app/tabs/third/item-details/item-details.module.ts")).then(m => m.ItemDetailsPageModule)
    },
    {
        path: 'new-item',
        loadChildren: () => __webpack_require__.e(/*! import() | new-item-new-item-module */ "common").then(__webpack_require__.bind(null, /*! ./new-item/new-item.module */ "./src/app/tabs/third/new-item/new-item.module.ts")).then(m => m.NewItemPageModule)
    }
];
let ThirdPageRoutingModule = class ThirdPageRoutingModule {
};
ThirdPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThirdPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/third/third.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/third/third.module.ts ***!
  \********************************************/
/*! exports provided: ThirdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageModule", function() { return ThirdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _third_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./third-routing.module */ "./src/app/tabs/third/third-routing.module.ts");
/* harmony import */ var _third_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./third.page */ "./src/app/tabs/third/third.page.ts");







let ThirdPageModule = class ThirdPageModule {
};
ThirdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _third_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThirdPageRoutingModule"]
        ],
        declarations: [_third_page__WEBPACK_IMPORTED_MODULE_6__["ThirdPage"]]
    })
], ThirdPageModule);



/***/ }),

/***/ "./src/app/tabs/third/third.page.scss":
/*!********************************************!*\
  !*** ./src/app/tabs/third/third.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGhpcmQvdGhpcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tabs/third/third.page.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/third/third.page.ts ***!
  \******************************************/
/*! exports provided: ThirdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPage", function() { return ThirdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/backend-server.service */ "./src/app/services/backend-server.service.ts");







let ThirdPage = class ThirdPage {
    constructor(http, localStorage, network, toast, backend, platform) {
        this.http = http;
        this.localStorage = localStorage;
        this.network = network;
        this.toast = toast;
        this.backend = backend;
        this.platform = platform;
        this.itemTypes = [];
        this.filter = '';
        this.URI = this.backend.URI;
        this.ws = this.backend.ws;
        platform.ready().then(() => {
            if (platform.is('cordova')) {
                // App is put in background
                this.platform.pause.subscribe(() => {
                    // this.closeStream();
                });
                // App is put in foreground
                this.platform.resume.subscribe(() => {
                    // this.openStream();
                });
            }
        });
    }
    ngOnInit() {
        console.log('main.main: ngOnInit');
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.localStorage.at(this.filter).then((resp) => {
                this.items = resp;
            });
        }
        else {
            // Asking the server for a list of resources
            const pItems = this.http.get(this.URI + '/my/' + this.filter).toPromise();
            pItems.then((resp) => {
                this.items = [resp];
                this.localStorage.append(this.filter, this.items);
            });
        }
        // Watch network for a disconnection.
        const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            this.presentOkToast('No internet connection.');
            this.localStorage.at(this.filter).then((resp) => {
                this.items = [resp];
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
                    this.localStorage.at(this.filter).then((resp) => {
                        this.items = [resp];
                    });
                }
            }, 3000);
        });
    }
    filterItems() {
        console.log('main.main: filterItems');
        // Actions per refresh
        if (this.network.type === this.network.Connection.NONE) {
            // No internet connection
            this.presentOkToast('No internet connection.');
        }
        else if (this.network.type === 'wifi') {
            // Over Wi-fi
            const pBooks = this.http.get(this.URI + '/my/' + this.filter).toPromise();
            pBooks
                .then((resp) => {
                this.items = [resp];
            })
                .catch((err) => {
                this.presentOkToast('No results');
            });
        }
        else {
            // Over 4G
            this.presentOkToast('Not connected to Local Area Network');
        }
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
            const pBooks = this.http.get(this.URI + '/my/' + this.filter).toPromise();
            pBooks
                .then((resp) => {
                this.items = [resp];
                event.target.complete();
            })
                .catch((err) => {
                this.presentOkToast('Server down');
                event.target.complete();
            });
        }
        else {
            // Over 4G
            this.presentOkToast('Not connected to Local Area Network');
            event.target.complete();
        }
    }
    presentOkToast(myMessage) {
        // this.toast.create({
        //   message: myMessage,
        //   duration: 2000,
        //   buttons: [
        //     {
        //       text: 'Ok',
        //       role: 'cancel'
        //     }
        //   ]
        // }).then(t => { t.present(); });
    }
    ionViewWillEnter() {
    }
    ionViewWillLeave() {
    }
};
ThirdPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
ThirdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-third',
        template: __webpack_require__(/*! raw-loader!./third.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/third/third.page.html"),
        styles: [__webpack_require__(/*! ./third.page.scss */ "./src/app/tabs/third/third.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], ThirdPage);



/***/ })

}]);
//# sourceMappingURL=third-third-module-es2015.js.map