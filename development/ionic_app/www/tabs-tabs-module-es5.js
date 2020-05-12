(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar>\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"pulse\"></ion-icon>\n      <ion-label>Habits</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"umbrella\"></ion-icon>\n      <ion-label>Monitor</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"finger-print\"></ion-icon>\n      <ion-label>Athlete</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
                    },
                    {
                        path: 'notif',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | home-notif-notif-module */ "notif-notif-module").then(__webpack_require__.bind(null, /*! ../home/notif/notif.module */ "./src/app/home/notif/notif.module.ts")).then(function (m) { return m.NotifPageModule; }); }
                    }
                ]
            },
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | main-main-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("main-main-module")]).then(__webpack_require__.bind(null, /*! ./main/main.module */ "./src/app/tabs/main/main.module.ts")).then(function (m) { return m.MainPageModule; }); }
                    },
                    {
                        path: 'new',
                        loadChildren: function () { return Promise.all(/*! import() | main-new-item-new-item-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("default~main-new-item-new-item-module~new-item-new-item-module")]).then(__webpack_require__.bind(null, /*! ./main/new-item/new-item.module */ "./src/app/tabs/main/new-item/new-item.module.ts")).then(function (m) { return m.NewItemPageModule; }); }
                    },
                    {
                        path: 'info',
                        loadChildren: function () { return Promise.all(/*! import() | main-item-details-item-details-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./main/item-details/item-details.module */ "./src/app/tabs/main/item-details/item-details.module.ts")).then(function (m) { return m.ItemDetailsPageModule; }); }
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | second-second-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("second-second-module")]).then(__webpack_require__.bind(null, /*! ./second/second.module */ "./src/app/tabs/second/second.module.ts")).then(function (m) { return m.SecondPageModule; }); }
                    },
                    {
                        path: 'new',
                        loadChildren: function () { return Promise.all(/*! import() | second-new-item-new-item-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./second/new-item/new-item.module */ "./src/app/tabs/second/new-item/new-item.module.ts")).then(function (m) { return m.NewItemPageModule; }); }
                    },
                    {
                        path: ':id',
                        loadChildren: function () { return Promise.all(/*! import() | second-item-details-item-details-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./second/item-details/item-details.module */ "./src/app/tabs/second/item-details/item-details.module.ts")).then(function (m) { return m.ItemDetailsPageModule; }); }
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | third-third-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("third-third-module")]).then(__webpack_require__.bind(null, /*! ./third/third.module */ "./src/app/tabs/third/third.module.ts")).then(function (m) { return m.ThirdPageModule; }); }
                    },
                    {
                        path: 'new',
                        loadChildren: function () { return Promise.all(/*! import() | third-new-item-new-item-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./third/new-item/new-item.module */ "./src/app/tabs/third/new-item/new-item.module.ts")).then(function (m) { return m.NewItemPageModule; }); }
                    },
                    {
                        path: ':id',
                        loadChildren: function () { return Promise.all(/*! import() | third-item-details-item-details-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./third/item-details/item-details.module */ "./src/app/tabs/third/item-details/item-details.module.ts")).then(function (m) { return m.ItemDetailsPageModule; }); }
                    }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    },
    {
        path: 'second',
        loadChildren: function () { return Promise.all(/*! import() | second-second-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("second-second-module")]).then(__webpack_require__.bind(null, /*! ./second/second.module */ "./src/app/tabs/second/second.module.ts")).then(function (m) { return m.SecondPageModule; }); }
    },
    {
        path: 'third',
        loadChildren: function () { return Promise.all(/*! import() | third-third-module */[__webpack_require__.e("default~main-item-details-item-details-module~main-main-module~main-new-item-new-item-module~second-~2ebd18c1"), __webpack_require__.e("third-third-module")]).then(__webpack_require__.bind(null, /*! ./third/third.module */ "./src/app/tabs/third/third.module.ts")).then(function (m) { return m.ThirdPageModule; }); }
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map