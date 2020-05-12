(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main-new-item-new-item-module~new-item-new-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/main/new-item/new-item.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/main/new-item/new-item.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Connected device</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button [routerLink]=\"['/tabs/tab1/info']\"\n        ><ion-icon name=\"information-circle\" slot=\"icon-only\"></ion-icon\n      ></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list style=\"margin-right: 15px;\">\n    <ion-list-header>\n      <p style=\"font-size: 10px;\">CURRENTLY CONNECTED</p>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let device of currentlyConnected\">\n      <ion-label style=\"margin-left: 10px;\">\n        <h2>{{device.name}}</h2>\n        <h3>{{device.location}}</h3>\n      </ion-label>\n      <ion-icon name=\"cloud-done\" (click)=\"unpair()\"\n      style=\"margin: 0 10px 0 10px; color: greenyellow; font-size: 40px; cursor: pointer\"></ion-icon>\n    </ion-item> \n\n    <ion-item *ngIf=\"currentlyConnected.length == 0\">\n      <ion-label style=\"margin-left: 10px;\">\n        <p> No device is currently connected </p>\n      </ion-label>\n      <ion-icon name=\"pause\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-item style=\"margin-left: 15px; margin-right: 15px;\">\n    <ion-label position=\"floating\">Pair <span style=\"font-size: 12px;\">(serial number)</span></ion-label>\n    <ion-input (keyup.enter)=\"pair()\" [(ngModel)]=\"inputSerialNumber\"></ion-input>\n  </ion-item>\n\n  <ion-list style=\"margin-right: 15px;\" *ngIf=\"previouslyConnected.length > 0\">\n    <ion-list-header>\n      <p style=\"font-size: 10px;\">PREVIOUSLY CONNECTED DEVICES </p>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let device of previouslyConnected\">\n      <ion-label style=\"margin-left: 10px;\">\n        <h2>{{device.name}}</h2>\n        <h3>{{device.location}}</h3>\n      </ion-label>\n      <ion-icon name=\"cloud-outline\" style=\"margin: 0 10px 0 10px; color: gray; font-size: 40px;\"></ion-icon>\n    </ion-item> \n    \n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/main/new-item/new-item-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/tabs/main/new-item/new-item-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NewItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageRoutingModule", function() { return NewItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/main/new-item/new-item.page.ts");




var routes = [
    {
        path: '',
        component: _new_item_page__WEBPACK_IMPORTED_MODULE_3__["NewItemPage"]
    }
];
var NewItemPageRoutingModule = /** @class */ (function () {
    function NewItemPageRoutingModule() {
    }
    NewItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NewItemPageRoutingModule);
    return NewItemPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/main/new-item/new-item.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/tabs/main/new-item/new-item.module.ts ***!
  \*******************************************************/
/*! exports provided: NewItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageModule", function() { return NewItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item-routing.module */ "./src/app/tabs/main/new-item/new-item-routing.module.ts");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/main/new-item/new-item.page.ts");







var NewItemPageModule = /** @class */ (function () {
    function NewItemPageModule() {
    }
    NewItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _new_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewItemPageRoutingModule"]
            ],
            declarations: [_new_item_page__WEBPACK_IMPORTED_MODULE_6__["NewItemPage"]]
        })
    ], NewItemPageModule);
    return NewItemPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/main/new-item/new-item.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/tabs/main/new-item/new-item.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvbWFpbi9uZXctaXRlbS9uZXctaXRlbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/main/new-item/new-item.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/tabs/main/new-item/new-item.page.ts ***!
  \*****************************************************/
/*! exports provided: NewItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPage", function() { return NewItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");









var NewItemPage = /** @class */ (function () {
    function NewItemPage(http, router, toast, backend, localStorage, network, popoverController) {
        this.http = http;
        this.router = router;
        this.toast = toast;
        this.backend = backend;
        this.localStorage = localStorage;
        this.network = network;
        this.popoverController = popoverController;
        this.showProgressBar = false;
        this.URI = this.backend.URI;
        this.ws = this.backend.ws;
        this.canvasItem = {
            id: -1,
            table: '',
            details: '',
            status: 'recorded',
            time: null,
            type: ''
        };
        this.currentlyConnected = [{ name: 'Flotilla', location: '', serialNumber: 1 }];
        this.previouslyConnected = [];
        this.inputSerialNumber = 0;
    }
    NewItemPage.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorage.at('previouslyConnected').then(function (resp) {
            if (resp != null) {
                _this.previouslyConnected = resp;
            }
        });
        this.localStorage.at('currentlyConnected').then(function (resp) {
            if (resp != null) {
                _this.currentlyConnected = resp;
            }
        });
    };
    NewItemPage.prototype.onCreate = function () {
        var _this = this;
        console.log('main.new-item: onCreate');
        this.showProgressBar = true;
        if (this.network.type === this.network.Connection.NONE) {
            this.localStorage.at('offline').then(function (offlineOrders) {
                var foo = offlineOrders;
                if (foo == null) {
                    foo = [];
                }
                else {
                    foo.push(_this.canvasItem);
                }
                _this.localStorage.append('offline', foo);
            });
            this.presentOkToast('Stored offline.');
            this.router.navigate(['/tabs/tab1']);
        }
        else {
            setTimeout(function () {
                var pBook = _this.http.post(_this.URI + '/order', _this.canvasItem).toPromise();
                pBook.then(function (resp) {
                    _this.presentOkToast('Succesfully created.');
                    _this.router.navigate(['/tabs/tab1']);
                })
                    .catch(function (err) {
                    _this.presentOkToast('Error while adding.');
                    _this.router.navigate(['/tabs/tab1']);
                });
            }, 1000);
        }
    };
    NewItemPage.prototype.presentOkToast = function (myMessage) {
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
    NewItemPage.prototype.unpair = function () {
        var _this = this;
        this.backend.ws.send(JSON.stringify({ emit: false })).subscribe(function (msg) {
            console.log('next', msg.data);
        }, function (msg) {
            console.log('error', msg);
        }, function () {
            console.log('complete');
            var toUnpair = _this.currentlyConnected[0];
            _this.currentlyConnected.splice(0, 1);
            _this.previouslyConnected.push(toUnpair);
            _this.localStorage.append('currentlyConnected', _this.currentlyConnected);
            _this.localStorage.append('previouslyConnected', _this.previouslyConnected);
            _this.localStorage.append('paired', [false]);
        });
    };
    NewItemPage.prototype.pair = function () {
        var _this = this;
        console.log(this.inputSerialNumber);
        if (this.currentlyConnected.length > 0 && this.inputSerialNumber == this.currentlyConnected[0].serialNumber) {
            this.presentOkToast('Device already paired');
        }
        else if (this.inputSerialNumber != null) {
            this.backend.ws.send(JSON.stringify({ emit: true })).subscribe(function (msg) {
                console.log('next', msg.data);
            }, function (msg) {
                console.log('error', msg);
            }, function () {
                console.log('complete');
                var index = -1;
                for (var _i = 0, _a = _this.previouslyConnected; _i < _a.length; _i++) {
                    var device = _a[_i];
                    if (device.serialNumber == _this.inputSerialNumber) {
                        index = _this.previouslyConnected.indexOf(device);
                    }
                }
                if (index >= 0) {
                    var toPair = _this.previouslyConnected[index];
                    _this.previouslyConnected.splice(index, 1);
                    _this.currentlyConnected.push(toPair);
                }
                else {
                    _this.currentlyConnected.push({ name: 'Flotilla', location: '', serialNumber: _this.inputSerialNumber });
                }
                _this.localStorage.append('currentlyConnected', _this.currentlyConnected);
                _this.localStorage.append('previouslyConnected', _this.previouslyConnected);
                _this.localStorage.append('paired', [true]);
            });
        }
    };
    NewItemPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    NewItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-item',
            template: __webpack_require__(/*! raw-loader!./new-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/main/new-item/new-item.page.html"),
            styles: [__webpack_require__(/*! ./new-item.page.scss */ "./src/app/tabs/main/new-item/new-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], NewItemPage);
    return NewItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~main-new-item-new-item-module~new-item-new-item-module-es5.js.map