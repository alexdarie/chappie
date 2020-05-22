(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/main/item-details/item-details.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/main/item-details/item-details.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  This section will contain more information on how to pair and what to expect from pairing a new device.\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/second/item-details/item-details.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/second/item-details/item-details.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Order no. {{ loadedItem.id }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar *ngIf=\"showProgressBar\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"floating\">Status</ion-label>\n        <ion-input [(ngModel)]=\"loadedItem.status\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"onUpdate()\"><ion-icon name=\"brush\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/second/new-item/new-item.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/second/new-item/new-item.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sync with Strava</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar *ngIf=\"showProgressBar\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n  <ion-list style=\"margin-bottom: 2rem;\">\n    <ion-item-divider>\n      <ion-label>\n        This feature will be available in a future version.\n      </ion-label>\n    </ion-item-divider>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/third/item-details/item-details.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/third/item-details/item-details.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ loadedItem.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar *ngIf=\"showProgressBar\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"floating\">Height</ion-label>\n        <ion-input [(ngModel)]=\"loadedItem.id\" required></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"onUpdate()\"><ion-icon name=\"brush\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"end\">\n      <ion-fab-button (click)=\"onRemove()\"><ion-icon name=\"trash\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/third/new-item/new-item.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/third/new-item/new-item.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create new recipe</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCreate()\"\n        ><ion-icon name=\"checkmark-circle-outline\"></ion-icon\n      ></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar *ngIf=\"showProgressBar\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n  <ion-list style=\"margin-bottom: 2rem;\">\n    <ion-item-divider>\n      <ion-label>\n        Recipe information\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input [(ngModel)]=\"canvasItem.name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Details</ion-label>\n      <ion-input [(ngModel)]=\"canvasItem.details\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Time</ion-label>\n      <ion-input [(ngModel)]=\"canvasItem.time\" type=\"number\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Type</ion-label>\n      <ion-input [(ngModel)]=\"canvasItem.type\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Rating</ion-label>\n      <ion-input [(ngModel)]=\"canvasItem.rating\" type=\"number\" required></ion-input>\n    </ion-item>\n\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/main/item-details/item-details-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tabs/main/item-details/item-details-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ItemDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageRoutingModule", function() { return ItemDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/main/item-details/item-details.page.ts");




var routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsPage"]
    }
];
var ItemDetailsPageRoutingModule = /** @class */ (function () {
    function ItemDetailsPageRoutingModule() {
    }
    ItemDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ItemDetailsPageRoutingModule);
    return ItemDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/main/item-details/item-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/tabs/main/item-details/item-details.module.ts ***!
  \***************************************************************/
/*! exports provided: ItemDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageModule", function() { return ItemDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-routing.module */ "./src/app/tabs/main/item-details/item-details-routing.module.ts");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/main/item-details/item-details.page.ts");







var ItemDetailsPageModule = /** @class */ (function () {
    function ItemDetailsPageModule() {
    }
    ItemDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsPageRoutingModule"]
            ],
            declarations: [_item_details_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsPage"]]
        })
    ], ItemDetailsPageModule);
    return ItemDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/main/item-details/item-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/tabs/main/item-details/item-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvbWFpbi9pdGVtLWRldGFpbHMvaXRlbS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tabs/main/item-details/item-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/tabs/main/item-details/item-details.page.ts ***!
  \*************************************************************/
/*! exports provided: ItemDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPage", function() { return ItemDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");








var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(activatedRoute, router, toast, network, http, backend, localStorage) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toast = toast;
        this.network = network;
        this.http = http;
        this.backend = backend;
        this.localStorage = localStorage;
        this.loadedItem = {
            id: -1,
            table: '',
            details: '',
            status: '',
            time: null,
            type: ''
        };
        this.URI = this.backend.URI;
        this.showProgressBar = false;
    }
    ItemDetailsPage.prototype.ngOnInit = function () {
        // this.activatedRoute.paramMap.subscribe(paramMap => {
        //   if (!paramMap.has('id')) {
        //     this.router.navigate(['/tabs/tab1']);
        //     return;
        //   }
        //   const itemId = Number(paramMap.get('id'));
        //   const promise = this.http.get(this.URI + '/order/' + itemId).toPromise();
        //   promise.then((resp) => {
        //     this.loadedItem = resp as Order;
        //   });
        // });
    };
    ItemDetailsPage.prototype.presentOkToast = function (myMessage) {
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
    };
    ItemDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
    ]; };
    ItemDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-details',
            template: __webpack_require__(/*! raw-loader!./item-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/main/item-details/item-details.page.html"),
            styles: [__webpack_require__(/*! ./item-details.page.scss */ "./src/app/tabs/main/item-details/item-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());



/***/ }),

/***/ "./src/app/tabs/second/item-details/item-details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tabs/second/item-details/item-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ItemDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageRoutingModule", function() { return ItemDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/second/item-details/item-details.page.ts");




var routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsPage"]
    }
];
var ItemDetailsPageRoutingModule = /** @class */ (function () {
    function ItemDetailsPageRoutingModule() {
    }
    ItemDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ItemDetailsPageRoutingModule);
    return ItemDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/second/item-details/item-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tabs/second/item-details/item-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: ItemDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageModule", function() { return ItemDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-routing.module */ "./src/app/tabs/second/item-details/item-details-routing.module.ts");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/second/item-details/item-details.page.ts");







var ItemDetailsPageModule = /** @class */ (function () {
    function ItemDetailsPageModule() {
    }
    ItemDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsPageRoutingModule"]
            ],
            declarations: [_item_details_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsPage"]]
        })
    ], ItemDetailsPageModule);
    return ItemDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/second/item-details/item-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tabs/second/item-details/item-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2Vjb25kL2l0ZW0tZGV0YWlscy9pdGVtLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tabs/second/item-details/item-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/tabs/second/item-details/item-details.page.ts ***!
  \***************************************************************/
/*! exports provided: ItemDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPage", function() { return ItemDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");








var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(activatedRoute, router, toast, network, http, backend, localStorage) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toast = toast;
        this.network = network;
        this.http = http;
        this.backend = backend;
        this.localStorage = localStorage;
        this.loadedItem = {
            id: -1,
            table: '',
            details: '',
            status: '',
            time: null,
            type: ''
        };
        this.URI = this.backend.URI;
        this.showProgressBar = false;
    }
    ItemDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('id')) {
                _this.router.navigate(['/tabs/tab2']);
                return;
            }
            var itemId = Number(paramMap.get('id'));
            var promise = _this.http.get(_this.URI + '/order/' + itemId).toPromise();
            promise.then(function (resp) {
                _this.loadedItem = resp;
            });
        });
    };
    ItemDetailsPage.prototype.onUpdate = function () {
        var _this = this;
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.presentOkToast('No internet connection.');
            // offline actions
        }
        else {
            this.showProgressBar = true;
            var promise = this.http.post(this.URI + '/status', this.loadedItem).toPromise();
            promise.then(function (resp) {
                console.log('main.item-details: response onUpdate: ', resp);
                _this.localStorage.at('recorded').then(function (items) {
                    items = items.filter(function (item) { return item.id !== resp.id; });
                    _this.localStorage.append('recorded', items);
                    _this.router.navigate(['/tabs/tab2']);
                });
            })
                .catch(function (err) {
                _this.presentOkToast(err.message);
            });
        }
    };
    ItemDetailsPage.prototype.presentOkToast = function (myMessage) {
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
    };
    ItemDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
    ]; };
    ItemDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-details',
            template: __webpack_require__(/*! raw-loader!./item-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/second/item-details/item-details.page.html"),
            styles: [__webpack_require__(/*! ./item-details.page.scss */ "./src/app/tabs/second/item-details/item-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());



/***/ }),

/***/ "./src/app/tabs/second/new-item/new-item-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tabs/second/new-item/new-item-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageRoutingModule", function() { return NewItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/second/new-item/new-item.page.ts");




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

/***/ "./src/app/tabs/second/new-item/new-item.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/tabs/second/new-item/new-item.module.ts ***!
  \*********************************************************/
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
/* harmony import */ var _new_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item-routing.module */ "./src/app/tabs/second/new-item/new-item-routing.module.ts");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/second/new-item/new-item.page.ts");







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

/***/ "./src/app/tabs/second/new-item/new-item.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/tabs/second/new-item/new-item.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2Vjb25kL25ldy1pdGVtL25ldy1pdGVtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tabs/second/new-item/new-item.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/tabs/second/new-item/new-item.page.ts ***!
  \*******************************************************/
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







var NewItemPage = /** @class */ (function () {
    function NewItemPage(http, router, toast, backend, localStorage) {
        this.http = http;
        this.router = router;
        this.toast = toast;
        this.backend = backend;
        this.localStorage = localStorage;
        this.showProgressBar = false;
        this.URI = this.backend.URI;
        this.ws = this.backend.ws;
        this.canvasItem = {
            id: -1,
            name: '',
            details: '',
            time: 1,
            type: '',
            rating: null
        };
    }
    NewItemPage.prototype.ngOnInit = function () {
    };
    NewItemPage.prototype.onCreate = function () {
        // console.log('main.new-item: onCreate');
        // this.showProgressBar = true;
        // setTimeout(() => {
        //   const pBook = this.http.post(this.URI + '/recipe', this.canvasItem).toPromise();
        //   pBook.then((resp) => {
        //     this.presentOkToast('Succesfully created.');
        //     this.router.navigate(['/tabs/tab1']);
        //   })
        //   .catch((err) => {
        //     this.presentOkToast('Error while adding.');
        //     this.router.navigate(['/tabs/tab1']);
        //   });
        // }, 1000);
    };
    NewItemPage.prototype.presentOkToast = function (myMessage) {
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
    };
    NewItemPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
    ]; };
    NewItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-item',
            template: __webpack_require__(/*! raw-loader!./new-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/second/new-item/new-item.page.html"),
            styles: [__webpack_require__(/*! ./new-item.page.scss */ "./src/app/tabs/second/new-item/new-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
    ], NewItemPage);
    return NewItemPage;
}());



/***/ }),

/***/ "./src/app/tabs/third/item-details/item-details-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/tabs/third/item-details/item-details-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ItemDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageRoutingModule", function() { return ItemDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/third/item-details/item-details.page.ts");




var routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsPage"]
    }
];
var ItemDetailsPageRoutingModule = /** @class */ (function () {
    function ItemDetailsPageRoutingModule() {
    }
    ItemDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ItemDetailsPageRoutingModule);
    return ItemDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/third/item-details/item-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/tabs/third/item-details/item-details.module.ts ***!
  \****************************************************************/
/*! exports provided: ItemDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageModule", function() { return ItemDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-routing.module */ "./src/app/tabs/third/item-details/item-details-routing.module.ts");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/third/item-details/item-details.page.ts");







var ItemDetailsPageModule = /** @class */ (function () {
    function ItemDetailsPageModule() {
    }
    ItemDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsPageRoutingModule"]
            ],
            declarations: [_item_details_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsPage"]]
        })
    ], ItemDetailsPageModule);
    return ItemDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/third/item-details/item-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/tabs/third/item-details/item-details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGhpcmQvaXRlbS1kZXRhaWxzL2l0ZW0tZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/third/item-details/item-details.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/tabs/third/item-details/item-details.page.ts ***!
  \**************************************************************/
/*! exports provided: ItemDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPage", function() { return ItemDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");








var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(activatedRoute, router, toast, network, http, backend, localStorage) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toast = toast;
        this.network = network;
        this.http = http;
        this.backend = backend;
        this.localStorage = localStorage;
        this.loadedItem = {
            id: -1,
            table: '',
            details: '',
            status: '',
            time: null,
            type: ''
        };
        this.URI = this.backend.URI;
        this.showProgressBar = false;
    }
    ItemDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('id')) {
                _this.router.navigate(['/tabs/tab3']);
                return;
            }
            var itemId = Number(paramMap.get('id'));
            _this.loadedItem.id = itemId;
        });
    };
    ItemDetailsPage.prototype.onUpdate = function () {
        var _this = this;
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.presentOkToast('No internet connection.');
            // offline actions
        }
        else {
            this.showProgressBar = true;
            var promise = this.http.post(this.URI + '/height', this.loadedItem).toPromise();
            promise.then(function (resp) {
                console.log('main.item-details: response onUpdate: ', resp);
                _this.localStorage.at(resp.type).then(function (items) {
                    items.forEach(function (element) {
                        if (element.id === resp.id) {
                            // element.height = (resp as Order).height;
                            _this.presentOkToast('Succesfully updated.');
                        }
                    });
                    _this.localStorage.append(resp.type, items);
                    _this.router.navigate(['/tabs/tab3']);
                });
            })
                .catch(function (err) {
                _this.presentOkToast(err.message);
            });
        }
    };
    ItemDetailsPage.prototype.onRemove = function () {
        var _this = this;
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.presentOkToast('No internet connection.');
            // offline actions
        }
        else {
            this.showProgressBar = true;
            var promise = this.http.delete(this.URI + '/Order/' + this.loadedItem.id).toPromise();
            promise.then(function (resp) {
                console.log('main.item-details: response onRemove: ', resp);
                _this.localStorage.at(resp.type).then(function (items) {
                    items = items.filter(function (item) { return item.id !== resp.id; });
                    _this.localStorage.append(resp.type, items);
                    setTimeout(function () { _this.router.navigate(['/tabs/tab3']); }, 1000);
                });
            })
                .catch(function (err) {
                _this.presentOkToast(err.message);
            });
        }
    };
    ItemDetailsPage.prototype.presentOkToast = function (myMessage) {
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
    };
    ItemDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
    ]; };
    ItemDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-details',
            template: __webpack_require__(/*! raw-loader!./item-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/third/item-details/item-details.page.html"),
            styles: [__webpack_require__(/*! ./item-details.page.scss */ "./src/app/tabs/third/item-details/item-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());



/***/ }),

/***/ "./src/app/tabs/third/new-item/new-item-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/tabs/third/new-item/new-item-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: NewItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageRoutingModule", function() { return NewItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/third/new-item/new-item.page.ts");




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

/***/ "./src/app/tabs/third/new-item/new-item.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tabs/third/new-item/new-item.module.ts ***!
  \********************************************************/
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
/* harmony import */ var _new_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item-routing.module */ "./src/app/tabs/third/new-item/new-item-routing.module.ts");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/third/new-item/new-item.page.ts");







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

/***/ "./src/app/tabs/third/new-item/new-item.page.scss":
/*!********************************************************!*\
  !*** ./src/app/tabs/third/new-item/new-item.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGhpcmQvbmV3LWl0ZW0vbmV3LWl0ZW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tabs/third/new-item/new-item.page.ts":
/*!******************************************************!*\
  !*** ./src/app/tabs/third/new-item/new-item.page.ts ***!
  \******************************************************/
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







var NewItemPage = /** @class */ (function () {
    function NewItemPage(http, router, toast, backend, localStorage) {
        this.http = http;
        this.router = router;
        this.toast = toast;
        this.backend = backend;
        this.localStorage = localStorage;
        this.showProgressBar = false;
        this.URI = this.backend.URI;
        this.ws = this.backend.ws;
        this.canvasItem = {
            id: -1,
            name: '',
            details: '',
            time: 1,
            type: '',
            rating: null
        };
    }
    NewItemPage.prototype.ngOnInit = function () {
    };
    NewItemPage.prototype.onCreate = function () {
        // console.log('main.new-item: onCreate');
        // this.showProgressBar = true;
        // setTimeout(() => {
        //   const pBook = this.http.post(this.URI + '/recipe', this.canvasItem).toPromise();
        //   pBook.then((resp) => {
        //     this.presentOkToast('Succesfully created.');
        //     this.router.navigate(['/tabs/tab3']);
        //   })
        //   .catch((err) => {
        //     this.presentOkToast('Error while adding.');
        //     this.router.navigate(['/tabs/tab3']);
        //   });
        // }, 1000);
    };
    NewItemPage.prototype.presentOkToast = function (myMessage) {
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
    };
    NewItemPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
    ]; };
    NewItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-item',
            template: __webpack_require__(/*! raw-loader!./new-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/third/new-item/new-item.page.html"),
            styles: [__webpack_require__(/*! ./new-item.page.scss */ "./src/app/tabs/third/new-item/new-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
    ], NewItemPage);
    return NewItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map