self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/shared/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options); // coming from build/babel/plugins/react-loadable-plugin.js

  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/loadable-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/loadable-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const LoadableContext = _react.default.createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/loadable.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/loadable.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/shared/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const ALL_INITIALIZERS = [];
const READY_INITIALIZERS = [];
let initialized = false;

function load(loader) {
  let promise = loader();
  let state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(loaded => {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(err => {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  let opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    webpack: null,
    modules: null
  }, options);
  let subscription = null;

  function init() {
    if (!subscription) {
      const sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function' && "function" === 'function') {
    const moduleIds = opts.webpack();
    READY_INITIALIZERS.push(ids => {
      for (const moduleId of moduleIds) {
        if (ids.indexOf(moduleId) !== -1) {
          return init();
        }
      }
    });
  }

  const LoadableComponent = (props, ref) => {
    _s();

    init();

    const context = _react.default.useContext(_loadableContext.LoadableContext);

    const state = (0, _useSubscription).useSubscription(subscription);

    _react.default.useImperativeHandle(ref, () => ({
      retry: subscription.retry
    }), []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(moduleName => {
        context(moduleName);
      });
    }

    return _react.default.useMemo(() => {
      if (state.loading || state.error) {
        return _react.default.createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return _react.default.createElement(resolve(state.loaded), props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "JtITP7ezdiMOXETwxX2mQsR5YT8=", true);

  LoadableComponent.preload = () => init();

  LoadableComponent.displayName = 'LoadableComponent';
  return _react.default.forwardRef(LoadableComponent);
}

class LoadableSubscription {
  constructor(loadFn, opts) {
    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  promise() {
    return this._res.promise;
  }

  retry() {
    this._clearTimeouts();

    this._res = this._loadFn(this._opts.loader);
    this._state = {
      pastDelay: false,
      timedOut: false
    };
    const {
      _res: res,
      _opts: opts1
    } = this;

    if (res.loading) {
      if (typeof opts1.delay === 'number') {
        if (opts1.delay === 0) {
          this._state.pastDelay = true;
        } else {
          this._delay = setTimeout(() => {
            this._update({
              pastDelay: true
            });
          }, opts1.delay);
        }
      }

      if (typeof opts1.timeout === 'number') {
        this._timeout = setTimeout(() => {
          this._update({
            timedOut: true
          });
        }, opts1.timeout);
      }
    }

    this._res.promise.then(() => {
      this._update({});

      this._clearTimeouts();
    }).catch(_err => {
      this._update({});

      this._clearTimeouts();
    });

    this._update({});
  }

  _update(partial) {
    this._state = _objectSpread(_objectSpread({}, this._state), {}, {
      error: this._res.error,
      loaded: this._res.loaded,
      loading: this._res.loading
    }, partial);

    this._callbacks.forEach(callback => callback());
  }

  _clearTimeouts() {
    clearTimeout(this._delay);
    clearTimeout(this._timeout);
  }

  getCurrentValue() {
    return this._state;
  }

  subscribe(callback) {
    this._callbacks.add(callback);

    return () => {
      this._callbacks.delete(callback);
    };
  }

}

function Loadable(opts1) {
  return createLoadableComponent(load, opts1);
}

_c = Loadable;

function flushInitializers(initializers, ids) {
  let promises = [];

  while (initializers.length) {
    let init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(() => {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = () => {
  return new Promise((resolveInitializers, reject) => {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = (ids = []) => {
  return new Promise(resolvePreload => {
    const res = () => {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Loadable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StockCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StockCard */ "./src/components/StockCard.tsx");
/* harmony import */ var _components_ChartDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ChartDate */ "./src/components/ChartDate.tsx");
/* harmony import */ var _components_StockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StockHeader */ "./src/components/StockHeader.tsx");
/* harmony import */ var _components_StockSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StockSearch */ "./src/components/StockSearch.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index */ "./src/store/index.ts");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\pages\\index.tsx";







const CoinPriceChart = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../components/ChartDate */ "./src/components/ChartDate.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/ChartDate */ "./src/components/ChartDate.tsx")],
    modules: ["index.tsx -> " + "../components/ChartDate"]
  }
});
_c2 = CoinPriceChart;

const HomePage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: _store_index__WEBPACK_IMPORTED_MODULE_6__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockSearch__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockHeader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChartDate__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

_c3 = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c, _c2, _c3;

$RefreshReg$(_c, "CoinPriceChart$dynamic");
$RefreshReg$(_c2, "CoinPriceChart");
$RefreshReg$(_c3, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDg1NDI3OTI3Yjk4ZDQ2M2ZiMGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7Ozs7Ozs7O0FBQ2JBLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGFBQUEsR0FBZ0JFLEtBQWhCO0FBQ0FGLGVBQUEsR0FBa0JJLE9BQWxCOztBQUNBLElBQUlDLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxTQUFTLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG1FQUFELENBQVIsQ0FBdEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NHLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ04sSUFBQUEsT0FBTyxFQUFFTTtBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU1FLFlBQVksUUFBbEI7O0FBQ0EsU0FBU1QsS0FBVCxDQUFlVSxtQkFBZixFQUFvQ0MsZUFBcEMsRUFBcUQ7QUFDakQ7QUFDQSxTQUFPQSxlQUFlLENBQUNDLE9BQXZCO0FBQ0EsU0FBT0QsZUFBZSxDQUFDRSxPQUF2QixDQUhpRCxDQUlqRDs7QUFDQSxNQUFJLENBQUNKLFlBQUwsRUFBbUI7QUFDZixXQUFPQyxtQkFBbUIsQ0FBQ0MsZUFBRCxDQUExQjtBQUNIOztBQUNELFFBQU1HLE9BQU8sR0FBR0gsZUFBZSxDQUFDSSxPQUFoQyxDQVJpRCxDQVNqRDs7QUFDQSxTQUFPLE1BQUksYUFBY1osTUFBTSxDQUFDRixPQUFQLENBQWVlLGFBQWYsQ0FBNkJGLE9BQTdCLEVBQXNDO0FBQ3ZERyxJQUFBQSxLQUFLLEVBQUUsSUFEZ0Q7QUFFdkRDLElBQUFBLFNBQVMsRUFBRSxJQUY0QztBQUd2REMsSUFBQUEsU0FBUyxFQUFFLEtBSDRDO0FB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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsaUNBQWlDOztBQUVwQztBQUNBOztBQUVBLHVCQUF1QjtBQUN2QixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQzFIYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsd0pBQWlFO0FBQ25FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvbG9hZGFibGUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSlcbiAgICA7XG59XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAoeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSk9PntcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zXG4gICAgICAgIDtcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmR5bmFtaWNPcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxvYWRhYmxlQ29udGV4dCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBMb2FkYWJsZUNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0cy5Mb2FkYWJsZUNvbnRleHQgPSBMb2FkYWJsZUNvbnRleHQ7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIExvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbnRleHQnO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkYWJsZS1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdXNlU3Vic2NyaXB0aW9uID0gcmVxdWlyZShcInVzZS1zdWJzY3JpcHRpb25cIik7XG52YXIgX2xvYWRhYmxlQ29udGV4dCA9IHJlcXVpcmUoXCIuL2xvYWRhYmxlLWNvbnRleHRcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBBTExfSU5JVElBTElaRVJTID0gW107XG5jb25zdCBSRUFEWV9JTklUSUFMSVpFUlMgPSBbXTtcbmxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuZnVuY3Rpb24gbG9hZChsb2FkZXIpIHtcbiAgICBsZXQgcHJvbWlzZSA9IGxvYWRlcigpO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgbG9hZGVkOiBudWxsLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgIH07XG4gICAgc3RhdGUucHJvbWlzZSA9IHByb21pc2UudGhlbigobG9hZGVkKT0+e1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxvYWRlZCA9IGxvYWRlZDtcbiAgICAgICAgcmV0dXJuIGxvYWRlZDtcbiAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmVycm9yID0gZXJyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gcmVzb2x2ZShvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqLmRlZmF1bHQgOiBvYmo7XG59XG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBsb2FkZXI6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICAgIHdlYnBhY2s6IG51bGwsXG4gICAgICAgIG1vZHVsZXM6IG51bGxcbiAgICB9LCBvcHRpb25zKTtcbiAgICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgY29uc3Qgc3ViID0gbmV3IExvYWRhYmxlU3Vic2NyaXB0aW9uKGxvYWRGbiwgb3B0cyk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFZhbHVlOiBzdWIuZ2V0Q3VycmVudFZhbHVlLmJpbmQoc3ViKSxcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmU6IHN1Yi5zdWJzY3JpYmUuYmluZChzdWIpLFxuICAgICAgICAgICAgICAgIHJldHJ5OiBzdWIucmV0cnkuYmluZChzdWIpLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IHN1Yi5wcm9taXNlLmJpbmQoc3ViKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnByb21pc2UoKTtcbiAgICB9XG4gICAgLy8gU2VydmVyIG9ubHlcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgQUxMX0lOSVRJQUxJWkVSUy5wdXNoKGluaXQpO1xuICAgIH1cbiAgICAvLyBDbGllbnQgb25seVxuICAgIGlmICghaW5pdGlhbGl6ZWQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG9wdHMud2VicGFjayA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZS5yZXNvbHZlV2VhayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBtb2R1bGVJZHMgPSBvcHRzLndlYnBhY2soKTtcbiAgICAgICAgUkVBRFlfSU5JVElBTElaRVJTLnB1c2goKGlkcyk9PntcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgbW9kdWxlSWRzKXtcbiAgICAgICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YobW9kdWxlSWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRhYmxlQ29tcG9uZW50ID0gKHByb3BzLCByZWYpPT57XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX2xvYWRhYmxlQ29udGV4dC5Mb2FkYWJsZUNvbnRleHQpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9ICgwLCBfdXNlU3Vic2NyaXB0aW9uKS51c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgX3JlYWN0LmRlZmF1bHQudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpPT4oe1xuICAgICAgICAgICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICwgW10pO1xuICAgICAgICBpZiAoY29udGV4dCAmJiBBcnJheS5pc0FycmF5KG9wdHMubW9kdWxlcykpIHtcbiAgICAgICAgICAgIG9wdHMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGVOYW1lKT0+e1xuICAgICAgICAgICAgICAgIGNvbnRleHQobW9kdWxlTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICAgICAgaWYgKHN0YXRlLmxvYWRpbmcgfHwgc3RhdGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChvcHRzLmxvYWRpbmcsIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICBwYXN0RGVsYXk6IHN0YXRlLnBhc3REZWxheSxcbiAgICAgICAgICAgICAgICAgICAgdGltZWRPdXQ6IHN0YXRlLnRpbWVkT3V0LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShzdGF0ZS5sb2FkZWQpLCBwcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgIF0pO1xuICAgIH07XG4gICAgTG9hZGFibGVDb21wb25lbnQucHJlbG9hZCA9ICgpPT5pbml0KClcbiAgICA7XG4gICAgTG9hZGFibGVDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb21wb25lbnQnO1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKExvYWRhYmxlQ29tcG9uZW50KTtcbn1cbmNsYXNzIExvYWRhYmxlU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2FkRm4sIG9wdHMpe1xuICAgICAgICB0aGlzLl9sb2FkRm4gPSBsb2FkRm47XG4gICAgICAgIHRoaXMuX29wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuX2RlbGF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMucmV0cnkoKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlcy5wcm9taXNlO1xuICAgIH1cbiAgICByZXRyeSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xuICAgICAgICB0aGlzLl9yZXMgPSB0aGlzLl9sb2FkRm4odGhpcy5fb3B0cy5sb2FkZXIpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBfcmVzOiByZXMgLCBfb3B0czogb3B0czEgIH0gPSB0aGlzO1xuICAgICAgICBpZiAocmVzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0czEuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMxLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlLnBhc3REZWxheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVsYXkgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3REZWxheTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdHMxLmRlbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMxLnRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVkT3V0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIG9wdHMxLnRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlcy5wcm9taXNlLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKTtcbiAgICAgICAgfSkuY2F0Y2goKF9lcnIpPT57XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3VwZGF0ZShwYXJ0aWFsKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgICAgICAgLi4udGhpcy5fc3RhdGUsXG4gICAgICAgICAgICBlcnJvcjogdGhpcy5fcmVzLmVycm9yLFxuICAgICAgICAgICAgbG9hZGVkOiB0aGlzLl9yZXMubG9hZGVkLFxuICAgICAgICAgICAgbG9hZGluZzogdGhpcy5fcmVzLmxvYWRpbmcsXG4gICAgICAgICAgICAuLi5wYXJ0aWFsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjayk9PmNhbGxiYWNrKClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgX2NsZWFyVGltZW91dHMoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICB9XG4gICAgZ2V0Q3VycmVudFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBMb2FkYWJsZShvcHRzMSkge1xuICAgIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkLCBvcHRzMSk7XG59XG5mdW5jdGlvbiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsIGlkcykge1xuICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgIHdoaWxlKGluaXRpYWxpemVycy5sZW5ndGgpe1xuICAgICAgICBsZXQgaW5pdCA9IGluaXRpYWxpemVycy5wb3AoKTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChpbml0KGlkcykpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCk9PntcbiAgICAgICAgaWYgKGluaXRpYWxpemVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsIGlkcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbkxvYWRhYmxlLnByZWxvYWRBbGwgPSAoKT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZUluaXRpYWxpemVycywgcmVqZWN0KT0+e1xuICAgICAgICBmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmVJbml0aWFsaXplcnMsIHJlamVjdCk7XG4gICAgfSk7XG59O1xuTG9hZGFibGUucHJlbG9hZFJlYWR5ID0gKGlkcyA9IFtdKT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByZWxvYWQpPT57XG4gICAgICAgIGNvbnN0IHJlcyA9ICgpPT57XG4gICAgICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByZWxvYWQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2UgYWx3YXlzIHdpbGwgcmVzb2x2ZSwgZXJyb3JzIHNob3VsZCBiZSBoYW5kbGVkIHdpdGhpbiBsb2FkaW5nIFVJcy5cbiAgICAgICAgZmx1c2hJbml0aWFsaXplcnMoUkVBRFlfSU5JVElBTElaRVJTLCBpZHMpLnRoZW4ocmVzLCByZXMpO1xuICAgIH0pO1xufTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5fX05FWFRfUFJFTE9BRFJFQURZID0gTG9hZGFibGUucHJlbG9hZFJlYWR5O1xufVxudmFyIF9kZWZhdWx0ID0gTG9hZGFibGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9hZGFibGUuanMubWFwIiwiaW1wb3J0IFN0b2NrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9ja0NhcmRcIjtcclxuaW1wb3J0IENoYXJ0RGF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFydERhdGVcIjtcclxuaW1wb3J0IFN0b2NrSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1N0b2NrSGVhZGVyXCI7XHJcblxyXG5pbXBvcnQgU3RvY2tTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RvY2tTZWFyY2hcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9pbmRleFwiO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5jb25zdCBDb2luUHJpY2VDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9DaGFydERhdGVcIiksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFN0b2NrQ2FyZD5cclxuICAgICAgICA8U3RvY2tTZWFyY2ggLz5cclxuICAgICAgICA8U3RvY2tIZWFkZXIgLz5cclxuICAgICAgICA8Q2hhcnREYXRlIC8+XHJcbiAgICAgIDwvU3RvY2tDYXJkPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdnVuZGVmaW5lZFxuICogdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy9cbi8vIEluIG9yZGVyIHRvIGF2b2lkIHJlbW92aW5nIGFuZCByZS1hZGRpbmcgc3Vic2NyaXB0aW9ucyBlYWNoIHRpbWUgdGhpcyBob29rIGlzIGNhbGxlZCxcbi8vIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGlzIGhvb2sgc2hvdWxkIGJlIG1lbW9pemVkIGluIHNvbWUgd2F54oCTXG4vLyBlaXRoZXIgYnkgd3JhcHBpbmcgdGhlIGVudGlyZSBwYXJhbXMgb2JqZWN0IHdpdGggdXNlTWVtbygpXG4vLyBvciBieSB3cmFwcGluZyB0aGUgaW5kaXZpZHVhbCBjYWxsYmFja3Mgd2l0aCB1c2VDYWxsYmFjaygpLlxuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oX3JlZikge1xuICB2YXIgZ2V0Q3VycmVudFZhbHVlID0gX3JlZi5nZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmUgPSBfcmVmLnN1YnNjcmliZTtcblxuICAvLyBSZWFkIHRoZSBjdXJyZW50IHZhbHVlIGZyb20gb3VyIHN1YnNjcmlwdGlvbi5cbiAgLy8gV2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMsIHdlJ2xsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAvLyBJdCdzIGltcG9ydGFudCB0byBhbHNvIHN0b3JlIHRoZSBob29rIHBhcmFtcyBzbyB0aGF0IHdlIGNhbiBjaGVjayBmb3Igc3RhbGVuZXNzLlxuICAvLyAoU2VlIHRoZSBjb21tZW50IGluIGNoZWNrRm9yVXBkYXRlcygpIGJlbG93IGZvciBtb3JlIGluZm8uKVxuICB2YXIgX3VzZVN0YXRlID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IGdldEN1cnJlbnRWYWx1ZSgpXG4gICAgfTtcbiAgfSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB2YWx1ZVRvUmV0dXJuID0gc3RhdGUudmFsdWU7IC8vIElmIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkIHNpbmNlIG91ciBsYXN0IHJlbmRlciwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggaXRzIGN1cnJlbnQgdmFsdWUuXG5cbiAgaWYgKHN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgLy8gSWYgdGhlIHN1YnNjcmlwdGlvbiBoYXMgYmVlbiB1cGRhdGVkLCB3ZSdsbCBzY2hlZHVsZSBhbm90aGVyIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAgIC8vIFJlYWN0IHdpbGwgcHJvY2VzcyB0aGlzIHVwZGF0ZSBpbW1lZGlhdGVseSwgc28gdGhlIG9sZCBzdWJzY3JpcHRpb24gdmFsdWUgd29uJ3QgYmUgY29tbWl0dGVkLlxuICAgIC8vIEl0IGlzIHN0aWxsIG5pY2UgdG8gYXZvaWQgcmV0dXJuaW5nIGEgbWlzbWF0Y2hlZCB2YWx1ZSB0aG91Z2gsIHNvIGxldCdzIG92ZXJyaWRlIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgdmFsdWVUb1JldHVybiA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogdmFsdWVUb1JldHVyblxuICAgIH0pO1xuICB9IC8vIERpc3BsYXkgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIHRoaXMgaG9vayBpbiBSZWFjdCBEZXZUb29scy5cblxuXG4gIHJlYWN0LnVzZURlYnVnVmFsdWUodmFsdWVUb1JldHVybik7IC8vIEl0IGlzIGltcG9ydGFudCBub3QgdG8gc3Vic2NyaWJlIHdoaWxlIHJlbmRlcmluZyBiZWNhdXNlIHRoaXMgY2FuIGxlYWQgdG8gbWVtb3J5IGxlYWtzLlxuICAvLyAoTGVhcm4gbW9yZSBhdCByZWFjdGpzLm9yZy9kb2NzL3N0cmljdC1tb2RlLmh0bWwjZGV0ZWN0aW5nLXVuZXhwZWN0ZWQtc2lkZS1lZmZlY3RzKVxuICAvLyBJbnN0ZWFkLCB3ZSB3YWl0IHVudGlsIHRoZSBjb21taXQgcGhhc2UgdG8gYXR0YWNoIG91ciBoYW5kbGVyLlxuICAvL1xuICAvLyBXZSBpbnRlbnRpb25hbGx5IHVzZSBhIHBhc3NpdmUgZWZmZWN0ICh1c2VFZmZlY3QpIHJhdGhlciB0aGFuIGEgc3luY2hyb25vdXMgb25lICh1c2VMYXlvdXRFZmZlY3QpXG4gIC8vIHNvIHRoYXQgd2UgZG9uJ3Qgc3RyZXRjaCB0aGUgY29tbWl0IHBoYXNlLlxuICAvLyBUaGlzIGFsc28gaGFzIGFuIGFkZGVkIGJlbmVmaXQgd2hlbiBtdWx0aXBsZSBjb21wb25lbnRzIGFyZSBzdWJzY3JpYmVkIHRvIHRoZSBzYW1lIHNvdXJjZTpcbiAgLy8gSXQgYWxsb3dzIGVhY2ggb2YgdGhlIGV2ZW50IGhhbmRsZXJzIHRvIHNhZmVseSBzY2hlZHVsZSB3b3JrIHdpdGhvdXQgcG90ZW50aWFsbHkgcmVtb3ZpbmcgYW4gYW5vdGhlciBoYW5kbGVyLlxuICAvLyAoTGVhcm4gbW9yZSBhdCBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvazB5dnI1OTcwbylcblxuICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuXG4gICAgdmFyIGNoZWNrRm9yVXBkYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBldmVuIGFmdGVyIGJlaW5nIHVuc3Vic2NyaWJlZCxcbiAgICAgIC8vIGlmIGl0J3MgcmVtb3ZlZCBhcyBhIHJlc3VsdCBvZiBhIHN1YnNjcmlwdGlvbiBldmVudC91cGRhdGUuXG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIFJlYWN0IHdpbGwgbG9nIGEgREVWIHdhcm5pbmcgYWJvdXQgYW4gdXBkYXRlIGZyb20gYW4gdW5tb3VudGVkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIGNhbiBhdm9pZCB0cmlnZ2VyaW5nIHRoYXQgd2FybmluZyB3aXRoIHRoaXMgY2hlY2suXG4gICAgICBpZiAoZGlkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXZSB1c2UgYSBzdGF0ZSB1cGRhdGVyIGZ1bmN0aW9uIHRvIGF2b2lkIHNjaGVkdWxpbmcgd29yayBmb3IgYSBzdGFsZSBzb3VyY2UuXG4gICAgICAvLyBIb3dldmVyIGl0J3MgaW1wb3J0YW50IHRvIGVhZ2VybHkgcmVhZCB0aGUgY3VycmVudGx5IHZhbHVlLFxuICAgICAgLy8gc28gdGhhdCBhbGwgc2NoZWR1bGVkIHdvcmsgc2hhcmVzIHRoZSBzYW1lIHZhbHVlIChpbiB0aGUgZXZlbnQgb2YgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucykuXG4gICAgICAvLyBUaGlzIGF2b2lkcyB2aXN1YWwgXCJ0ZWFyaW5nXCIgd2hlbiBhIG11dGF0aW9uIGhhcHBlbnMgZHVyaW5nIGEgKGNvbmN1cnJlbnQpIHJlbmRlci5cblxuXG4gICAgICB2YXIgdmFsdWUgPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHZhbHVlcyBmcm9tIHN0YWxlIHNvdXJjZXMhXG4gICAgICAgIC8vIFNpbmNlIHdlIHN1YnNjcmliZSBhbiB1bnN1YnNjcmliZSBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZm9yIGEgc3RhbGUgKHByZXZpb3VzKSBzdWJzY3JpcHRpb24uXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgYXZvaWRzIHNjaGVkdWxpbmcgYW4gdXBkYXRlIGZvciB0aGF0IHN0YWxlIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBwcmV2U3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9IC8vIFNvbWUgc3Vic2NyaXB0aW9ucyB3aWxsIGF1dG8taW52b2tlIHRoZSBoYW5kbGVyLCBldmVuIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZC5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLCBubyB1cGRhdGUgaXMgbmVlZGVkLlxuICAgICAgICAvLyBSZXR1cm4gc3RhdGUgYXMtaXMgc28gUmVhY3QgY2FuIGJhaWwgb3V0IGFuZCBhdm9pZCBhbiB1bm5lY2Vzc2FyeSByZW5kZXIuXG5cblxuICAgICAgICBpZiAocHJldlN0YXRlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShjaGVja0ZvclVwZGF0ZXMpOyAvLyBCZWNhdXNlIHdlJ3JlIHN1YnNjcmliaW5nIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGFuIHVwZGF0ZSBoYXMgb2NjdXJyZWQgYmV0d2VlbiByZW5kZXIgYW5kIG91ciBlZmZlY3QgaGFuZGxlci5cbiAgICAvLyBDaGVjayBmb3IgdGhpcyBhbmQgc2NoZWR1bGUgYW4gdXBkYXRlIGlmIHdvcmsgaGFzIG9jY3VycmVkLlxuXG4gICAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW2dldEN1cnJlbnRWYWx1ZSwgc3Vic2NyaWJlXSk7IC8vIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBmb3Igb3VyIGNhbGxlciB0byB1c2Ugd2hpbGUgcmVuZGVyaW5nLlxuXG4gIHJldHVybiB2YWx1ZVRvUmV0dXJuO1xufVxuXG5leHBvcnRzLnVzZVN1YnNjcmlwdGlvbiA9IHVzZVN1YnNjcmlwdGlvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5vU1NSIiwiZGVmYXVsdCIsImR5bmFtaWMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciIsIkxvYWRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIl91c2VTdWJzY3JpcHRpb24iLCJfbG9hZGFibGVDb250ZXh0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwibG9hZCIsInByb21pc2UiLCJzdGF0ZSIsImxvYWRlZCIsInRoZW4iLCJjYXRjaCIsImVyciIsInJlc29sdmUiLCJjcmVhdGVMb2FkYWJsZUNvbXBvbmVudCIsImxvYWRGbiIsIm9wdHMiLCJhc3NpZ24iLCJkZWxheSIsInRpbWVvdXQiLCJzdWJzY3JpcHRpb24iLCJpbml0Iiwic3ViIiwiTG9hZGFibGVTdWJzY3JpcHRpb24iLCJnZXRDdXJyZW50VmFsdWUiLCJiaW5kIiwic3Vic2NyaWJlIiwicmV0cnkiLCJwdXNoIiwicmVzb2x2ZVdlYWsiLCJtb2R1bGVJZHMiLCJpZHMiLCJtb2R1bGVJZCIsImluZGV4T2YiLCJMb2FkYWJsZUNvbXBvbmVudCIsInByb3BzIiwicmVmIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdWJzY3JpcHRpb24iLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm1vZHVsZU5hbWUiLCJ1c2VNZW1vIiwicHJlbG9hZCIsImZvcndhcmRSZWYiLCJjb25zdHJ1Y3RvciIsIl9sb2FkRm4iLCJfb3B0cyIsIl9jYWxsYmFja3MiLCJTZXQiLCJfZGVsYXkiLCJfdGltZW91dCIsIl9yZXMiLCJfY2xlYXJUaW1lb3V0cyIsIl9zdGF0ZSIsInJlcyIsIm9wdHMxIiwic2V0VGltZW91dCIsIl91cGRhdGUiLCJfZXJyIiwicGFydGlhbCIsImNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiYWRkIiwiZGVsZXRlIiwiTG9hZGFibGUiLCJmbHVzaEluaXRpYWxpemVycyIsImluaXRpYWxpemVycyIsInByb21pc2VzIiwibGVuZ3RoIiwicG9wIiwiYWxsIiwicHJlbG9hZEFsbCIsInJlc29sdmVJbml0aWFsaXplcnMiLCJyZWplY3QiLCJwcmVsb2FkUmVhZHkiLCJyZXNvbHZlUHJlbG9hZCIsIndpbmRvdyIsIl9fTkVYVF9QUkVMT0FEUkVBRFkiLCJfZGVmYXVsdCIsIlN0b2NrQ2FyZCIsIkNoYXJ0RGF0ZSIsIlN0b2NrSGVhZGVyIiwiU3RvY2tTZWFyY2giLCJQcm92aWRlciIsInN0b3JlIiwiQ29pblByaWNlQ2hhcnQiLCJIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=