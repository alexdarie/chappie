(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
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
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
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
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
    const partA = (3 * p1) * Math.pow(t - 1, 2);
    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    const partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
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
const solveCubicEquation = (a, b, c, d) => {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    const r = Math.sqrt(Math.pow(-(p / 3), 3));
    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    const s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
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
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
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
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-504cdd09-js */ "ios-transition-504cdd09-js").then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-504cdd09.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-fea2bbfb-js */ "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ "./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    let trans;
    try {
        const mod = await __webpack_require__.e(/*! import() | index-69c37885-js */ "index-69c37885-js").then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "./node_modules/@ionic/core/dist/esm/index-69c37885.js"));
        trans = await mod.create(animationBuilder, opts.baseEl, opts);
    }
    catch (err) {
        trans = animationBuilder(opts.baseEl, opts);
    }
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \*********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
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

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/main/new-item/new-item.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/main/new-item/new-item.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHRef=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Connected device</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button [routerLink]=\"['/tabs/tab1/info']\"\n        ><ion-icon name=\"information-circle\" slot=\"icon-only\"></ion-icon\n      ></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list style=\"margin-right: 15px;\">\n    <ion-list-header>\n      <p style=\"font-size: 10px;\">CURRENTLY CONNECTED</p>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let device of currentlyConnected\">\n      <ion-label style=\"margin-left: 10px;\">\n        <h2>{{device.name}}</h2>\n        <h3>{{device.location}}</h3>\n      </ion-label>\n      <ion-icon name=\"cloud-done\" (click)=\"unpair()\"\n      style=\"margin: 0 10px 0 10px; color: greenyellow; font-size: 40px; cursor: pointer\"></ion-icon>\n    </ion-item> \n\n    <ion-item *ngIf=\"currentlyConnected.length == 0\">\n      <ion-label style=\"margin-left: 10px;\">\n        <p> No device is currently connected </p>\n      </ion-label>\n      <ion-icon name=\"pause\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-item style=\"margin-left: 15px; margin-right: 15px;\">\n    <ion-label position=\"floating\">Pair <span style=\"font-size: 12px;\">(serial number)</span></ion-label>\n    <ion-input (keyup.enter)=\"pair()\" [(ngModel)]=\"inputSerialNumber\"></ion-input>\n  </ion-item>\n\n  <ion-list style=\"margin-right: 15px;\" *ngIf=\"previouslyConnected.length > 0\">\n    <ion-list-header>\n      <p style=\"font-size: 10px;\">PREVIOUSLY CONNECTED DEVICES </p>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let device of previouslyConnected\">\n      <ion-label style=\"margin-left: 10px;\">\n        <h2>{{device.name}}</h2>\n        <h3>{{device.location}}</h3>\n      </ion-label>\n      <ion-icon name=\"cloud-outline\" style=\"margin: 0 10px 0 10px; color: gray; font-size: 40px;\"></ion-icon>\n    </ion-item> \n    \n  </ion-list>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/main/item-details/item-details.page.ts");




const routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsPage"]
    }
];
let ItemDetailsPageRoutingModule = class ItemDetailsPageRoutingModule {
};
ItemDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemDetailsPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-routing.module */ "./src/app/tabs/main/item-details/item-details-routing.module.ts");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/main/item-details/item-details.page.ts");







let ItemDetailsPageModule = class ItemDetailsPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");








let ItemDetailsPage = class ItemDetailsPage {
    constructor(activatedRoute, router, toast, network, http, backend, localStorage) {
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
    ngOnInit() {
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
};
ItemDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/main/new-item/new-item.page.ts");




const routes = [
    {
        path: '',
        component: _new_item_page__WEBPACK_IMPORTED_MODULE_3__["NewItemPage"]
    }
];
let NewItemPageRoutingModule = class NewItemPageRoutingModule {
};
NewItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewItemPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item-routing.module */ "./src/app/tabs/main/new-item/new-item-routing.module.ts");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/main/new-item/new-item.page.ts");







let NewItemPageModule = class NewItemPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");









let NewItemPage = class NewItemPage {
    constructor(http, router, toast, backend, localStorage, network, popoverController) {
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
    ngOnInit() {
        this.localStorage.at('previouslyConnected').then((resp) => {
            if (resp != null) {
                this.previouslyConnected = resp;
            }
        });
        this.localStorage.at('currentlyConnected').then((resp) => {
            if (resp != null) {
                this.currentlyConnected = resp;
            }
        });
    }
    onCreate() {
        console.log('main.new-item: onCreate');
        this.showProgressBar = true;
        if (this.network.type === this.network.Connection.NONE) {
            this.localStorage.at('offline').then((offlineOrders) => {
                let foo = offlineOrders;
                if (foo == null) {
                    foo = [];
                }
                else {
                    foo.push(this.canvasItem);
                }
                this.localStorage.append('offline', foo);
            });
            this.presentOkToast('Stored offline.');
            this.router.navigate(['/tabs/tab1']);
        }
        else {
            setTimeout(() => {
                const pBook = this.http.post(this.URI + '/order', this.canvasItem).toPromise();
                pBook.then((resp) => {
                    this.presentOkToast('Succesfully created.');
                    this.router.navigate(['/tabs/tab1']);
                })
                    .catch((err) => {
                    this.presentOkToast('Error while adding.');
                    this.router.navigate(['/tabs/tab1']);
                });
            }, 1000);
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
    unpair() {
        this.backend.ws.send(JSON.stringify({ emit: false })).subscribe((msg) => {
            console.log('next', msg.data);
        }, (msg) => {
            console.log('error', msg);
        }, () => {
            console.log('complete');
            const toUnpair = this.currentlyConnected[0];
            this.currentlyConnected.splice(0, 1);
            this.previouslyConnected.push(toUnpair);
            this.localStorage.append('currentlyConnected', this.currentlyConnected);
            this.localStorage.append('previouslyConnected', this.previouslyConnected);
            this.localStorage.append('paired', [false]);
        });
    }
    pair() {
        console.log(this.inputSerialNumber);
        if (this.currentlyConnected.length > 0 && this.inputSerialNumber == this.currentlyConnected[0].serialNumber) {
            this.presentOkToast('Device already paired');
        }
        else if (this.inputSerialNumber != null) {
            this.backend.ws.send(JSON.stringify({ emit: true })).subscribe((msg) => {
                console.log('next', msg.data);
            }, (msg) => {
                console.log('error', msg);
            }, () => {
                console.log('complete');
                let index = -1;
                for (const device of this.previouslyConnected) {
                    if (device.serialNumber == this.inputSerialNumber) {
                        index = this.previouslyConnected.indexOf(device);
                    }
                }
                if (index >= 0) {
                    const toPair = this.previouslyConnected[index];
                    this.previouslyConnected.splice(index, 1);
                    this.currentlyConnected.push(toPair);
                }
                else {
                    this.currentlyConnected.push({ name: 'Flotilla', location: '', serialNumber: this.inputSerialNumber });
                }
                this.localStorage.append('currentlyConnected', this.currentlyConnected);
                this.localStorage.append('previouslyConnected', this.previouslyConnected);
                this.localStorage.append('paired', [true]);
            });
        }
    }
};
NewItemPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/second/item-details/item-details.page.ts");




const routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsPage"]
    }
];
let ItemDetailsPageRoutingModule = class ItemDetailsPageRoutingModule {
};
ItemDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemDetailsPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-routing.module */ "./src/app/tabs/second/item-details/item-details-routing.module.ts");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/second/item-details/item-details.page.ts");







let ItemDetailsPageModule = class ItemDetailsPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");








let ItemDetailsPage = class ItemDetailsPage {
    constructor(activatedRoute, router, toast, network, http, backend, localStorage) {
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
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('id')) {
                this.router.navigate(['/tabs/tab2']);
                return;
            }
            const itemId = Number(paramMap.get('id'));
            const promise = this.http.get(this.URI + '/order/' + itemId).toPromise();
            promise.then((resp) => {
                this.loadedItem = resp;
            });
        });
    }
    onUpdate() {
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.presentOkToast('No internet connection.');
            // offline actions
        }
        else {
            this.showProgressBar = true;
            const promise = this.http.post(this.URI + '/status', this.loadedItem).toPromise();
            promise.then((resp) => {
                console.log('main.item-details: response onUpdate: ', resp);
                this.localStorage.at('recorded').then((items) => {
                    items = items.filter(item => item.id !== resp.id);
                    this.localStorage.append('recorded', items);
                    this.router.navigate(['/tabs/tab2']);
                });
            })
                .catch((err) => {
                this.presentOkToast(err.message);
            });
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
};
ItemDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/second/new-item/new-item.page.ts");




const routes = [
    {
        path: '',
        component: _new_item_page__WEBPACK_IMPORTED_MODULE_3__["NewItemPage"]
    }
];
let NewItemPageRoutingModule = class NewItemPageRoutingModule {
};
NewItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewItemPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item-routing.module */ "./src/app/tabs/second/new-item/new-item-routing.module.ts");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/second/new-item/new-item.page.ts");







let NewItemPageModule = class NewItemPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");







let NewItemPage = class NewItemPage {
    constructor(http, router, toast, backend, localStorage) {
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
    ngOnInit() {
    }
    onCreate() {
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
};
NewItemPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/third/item-details/item-details.page.ts");




const routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsPage"]
    }
];
let ItemDetailsPageRoutingModule = class ItemDetailsPageRoutingModule {
};
ItemDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemDetailsPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-routing.module */ "./src/app/tabs/third/item-details/item-details-routing.module.ts");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details.page */ "./src/app/tabs/third/item-details/item-details.page.ts");







let ItemDetailsPageModule = class ItemDetailsPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");








let ItemDetailsPage = class ItemDetailsPage {
    constructor(activatedRoute, router, toast, network, http, backend, localStorage) {
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
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('id')) {
                this.router.navigate(['/tabs/tab3']);
                return;
            }
            const itemId = Number(paramMap.get('id'));
            this.loadedItem.id = itemId;
        });
    }
    onUpdate() {
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.presentOkToast('No internet connection.');
            // offline actions
        }
        else {
            this.showProgressBar = true;
            const promise = this.http.post(this.URI + '/height', this.loadedItem).toPromise();
            promise.then((resp) => {
                console.log('main.item-details: response onUpdate: ', resp);
                this.localStorage.at(resp.type).then((items) => {
                    items.forEach(element => {
                        if (element.id === resp.id) {
                            // element.height = (resp as Order).height;
                            this.presentOkToast('Succesfully updated.');
                        }
                    });
                    this.localStorage.append(resp.type, items);
                    this.router.navigate(['/tabs/tab3']);
                });
            })
                .catch((err) => {
                this.presentOkToast(err.message);
            });
        }
    }
    onRemove() {
        // Actions organized on the network status:
        if (this.network.type === this.network.Connection.NONE) {
            this.presentOkToast('No internet connection.');
            // offline actions
        }
        else {
            this.showProgressBar = true;
            const promise = this.http.delete(this.URI + '/Order/' + this.loadedItem.id).toPromise();
            promise.then((resp) => {
                console.log('main.item-details: response onRemove: ', resp);
                this.localStorage.at(resp.type).then((items) => {
                    items = items.filter(item => item.id !== resp.id);
                    this.localStorage.append(resp.type, items);
                    setTimeout(() => { this.router.navigate(['/tabs/tab3']); }, 1000);
                });
            })
                .catch((err) => {
                this.presentOkToast(err.message);
            });
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
};
ItemDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_6__["BackendServerService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/third/new-item/new-item.page.ts");




const routes = [
    {
        path: '',
        component: _new_item_page__WEBPACK_IMPORTED_MODULE_3__["NewItemPage"]
    }
];
let NewItemPageRoutingModule = class NewItemPageRoutingModule {
};
NewItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewItemPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item-routing.module */ "./src/app/tabs/third/new-item/new-item-routing.module.ts");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-item.page */ "./src/app/tabs/third/new-item/new-item.page.ts");







let NewItemPageModule = class NewItemPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/backend-server.service */ "./src/app/services/backend-server.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");







let NewItemPage = class NewItemPage {
    constructor(http, router, toast, backend, localStorage) {
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
    ngOnInit() {
    }
    onCreate() {
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
};
NewItemPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_backend_server_service__WEBPACK_IMPORTED_MODULE_5__["BackendServerService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map