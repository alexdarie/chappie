(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notif-notif-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/notif/notif.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/notif/notif.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tabs/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Logs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list style=\"margin-right: 15px;\">\n      <ion-item lines=\"none\">\n        <ion-label>\n          <h2>Last</h2>\n          <p>action</p>\n        </ion-label>\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/notif/notif-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/notif/notif-routing.module.ts ***!
  \****************************************************/
/*! exports provided: NotifPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPageRoutingModule", function() { return NotifPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notif_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notif.page */ "./src/app/home/notif/notif.page.ts");




var routes = [
    {
        path: '',
        component: _notif_page__WEBPACK_IMPORTED_MODULE_3__["NotifPage"]
    }
];
var NotifPageRoutingModule = /** @class */ (function () {
    function NotifPageRoutingModule() {
    }
    NotifPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotifPageRoutingModule);
    return NotifPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/notif/notif.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/notif/notif.module.ts ***!
  \********************************************/
/*! exports provided: NotifPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPageModule", function() { return NotifPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notif_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notif-routing.module */ "./src/app/home/notif/notif-routing.module.ts");
/* harmony import */ var _notif_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notif.page */ "./src/app/home/notif/notif.page.ts");







var NotifPageModule = /** @class */ (function () {
    function NotifPageModule() {
    }
    NotifPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _notif_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotifPageRoutingModule"]
            ],
            declarations: [_notif_page__WEBPACK_IMPORTED_MODULE_6__["NotifPage"]]
        })
    ], NotifPageModule);
    return NotifPageModule;
}());



/***/ }),

/***/ "./src/app/home/notif/notif.page.scss":
/*!********************************************!*\
  !*** ./src/app/home/notif/notif.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbm90aWYvbm90aWYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/notif/notif.page.ts":
/*!******************************************!*\
  !*** ./src/app/home/notif/notif.page.ts ***!
  \******************************************/
/*! exports provided: NotifPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPage", function() { return NotifPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotifPage = /** @class */ (function () {
    function NotifPage() {
    }
    NotifPage.prototype.ngOnInit = function () {
    };
    NotifPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notif',
            template: __webpack_require__(/*! raw-loader!./notif.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/notif/notif.page.html"),
            styles: [__webpack_require__(/*! ./notif.page.scss */ "./src/app/home/notif/notif.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifPage);
    return NotifPage;
}());



/***/ })

}]);
//# sourceMappingURL=notif-notif-module-es5.js.map