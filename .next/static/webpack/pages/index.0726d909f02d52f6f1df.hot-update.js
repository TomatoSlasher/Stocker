"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ChartDate.js":
/*!*************************************!*\
  !*** ./src/components/ChartDate.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightweight-charts */ "./node_modules/lightweight-charts/dist/lightweight-charts.esm.production.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChartDate.module.css */ "./src/components/ChartDate.module.css");
/* harmony import */ var _ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\ChartDate.js",
    _s = $RefreshSig$();






const ChartDate = () => {
  _s();

  const ticker = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => {
    return state.ticker;
  });
  console.log(ticker);
  const {
    0: dateChange,
    1: setDateChange
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(21);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchDataHandler = async date => {
      const fetchData = await fetch(`https://api.twelvedata.com/time_series?symbol=${ticker}&interval=1day&outputsize=2000&apikey=a24970c9566c49739e8009cdb3a639f0`);
      const data = await fetchData.json();
      const dataSixMonths = data.values.slice(0, date);
      const transformToGraphData = dataSixMonths.map(val => {
        return {
          time: val.datetime,
          value: val.close
        };
      });
      transformToGraphData.reverse();
      const chartCanvas = document.querySelector(".tv-lightweight-charts");
      const chartCanvas1 = document.getElementById("chart-dates-container");

      if (chartCanvas) {
        chartCanvas.remove();
      }

      const chart = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_2__.createChart)(chartCanvas1, {
        width: 570,
        height: 250
      }); // chart.applyOptions({
      //   handleScroll: false,
      //   handleScale: false,
      //   priceScale: {
      //     autoScale: true,
      //     borderVisible: false,
      //   },
      //   grid: {
      //     vertLines: {
      //       visible: false,
      //     },
      //     horzLines: {
      //       visible: false,
      //     },
      //   },
      //   layout: {
      //     fontSize: 16,
      //     fontFamily: "Arial",
      //   },
      // });
      // chart.timeScale().fitContent();

      const areaSeries = chart.addAreaSeries();
      areaSeries.setData(transformToGraphData); // areaSeries.applyOptions({
      //   priceLineWidth: 0,
      //   priceLineStyle: 2,
      // });
      // const dataLastEl = dataSixMonths.length - 1;
      // if (+dataSixMonths[0].close > +dataSixMonths[dataLastEl].close) {
      //   areaSeries.applyOptions({
      //     lineColor: "#34A853",
      //     topColor: "rgba(52, 168, 83, 0.4)",
      //     bottomColor: "rgba(52, 168, 83, 0)",
      //     lineWidth: 3,
      //   });
      // } else {
      //   areaSeries.applyOptions({
      //     lineColor: "#EA4335",
      //     topColor: "rgba(234, 67, 53, 0.4)",
      //     bottomColor: "rgba(234, 67, 53, 0)",
      //     lineWidth: 3,
      //   });
      // }
    };

    fetchDataHandler(dateChange);
  }, [ticker, dateChange]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates-container"]),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates-wrapper"]),
      id: "chart-dates-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates-ul"]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(8),
          children: "10D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21),
          children: "1M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21 * 3),
          children: "3M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21 * 6),
          children: "6M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21 * 12),
          children: "1Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21 * 12 * 4),
          children: "4Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, undefined);
};

_s(ChartDate, "wZpMYXZmYhe6jXMu07OSf9MGo0U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = ChartDate;
/* harmony default export */ __webpack_exports__["default"] = (ChartDate);

var _c;

$RefreshReg$(_c, "ChartDate");

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StockCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StockCard */ "./src/components/StockCard.tsx");
/* harmony import */ var _components_ChartDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ChartDate */ "./src/components/ChartDate.js");
/* harmony import */ var _components_StockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StockHeader */ "./src/components/StockHeader.tsx");
/* harmony import */ var _components_StockSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StockSearch */ "./src/components/StockSearch.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index */ "./src/store/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\pages\\index.tsx";







const HomePage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: _store_index__WEBPACK_IMPORTED_MODULE_6__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockSearch__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockHeader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChartDate__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDcyNmQ5MDlmMDJkNTJmNmYxZGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNTSxTQUFTLEdBQUcsTUFBTTtBQUFBOztBQUN0QixRQUFNQyxNQUFNLEdBQUdILHdEQUFXLENBQUVJLEtBQUQsSUFBVztBQUNwQyxXQUFPQSxLQUFLLENBQUNELE1BQWI7QUFDRCxHQUZ5QixDQUExQjtBQUdBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtBQUVBLFFBQU07QUFBQSxPQUFDSSxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QlYsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1ZLGdCQUFnQixHQUFHLE1BQU9DLElBQVAsSUFBZ0I7QUFDdkMsWUFBTUMsU0FBUyxHQUFHLE1BQU1DLEtBQUssQ0FDMUIsaURBQWdEVCxNQUFPLHdFQUQ3QixDQUE3QjtBQUlBLFlBQU1VLElBQUksR0FBRyxNQUFNRixTQUFTLENBQUNHLElBQVYsRUFBbkI7QUFFQSxZQUFNQyxhQUFhLEdBQUdGLElBQUksQ0FBQ0csTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCUCxJQUFyQixDQUF0QjtBQUVBLFlBQU1RLG9CQUFvQixHQUFHSCxhQUFhLENBQUNJLEdBQWQsQ0FBbUJDLEdBQUQsSUFBUztBQUN0RCxlQUFPO0FBQUVDLFVBQUFBLElBQUksRUFBRUQsR0FBRyxDQUFDRSxRQUFaO0FBQXNCQyxVQUFBQSxLQUFLLEVBQUVILEdBQUcsQ0FBQ0k7QUFBakMsU0FBUDtBQUNELE9BRjRCLENBQTdCO0FBR0FOLE1BQUFBLG9CQUFvQixDQUFDTyxPQUFyQjtBQUNBLFlBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFwQjtBQUVBLFlB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QUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBVkQ7O0tBQU1DO0FBV04sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnREYXRlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNoYXJ0IH0gZnJvbSBcImxpZ2h0d2VpZ2h0LWNoYXJ0c1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2hhcnREYXRlLm1vZHVsZS5jc3NcIjtcclxuY29uc3QgQ2hhcnREYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpY2tlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnRpY2tlcjtcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyh0aWNrZXIpO1xyXG5cclxuICBjb25zdCBbZGF0ZUNoYW5nZSwgc2V0RGF0ZUNoYW5nZV0gPSB1c2VTdGF0ZSgyMSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGFIYW5kbGVyID0gYXN5bmMgKGRhdGUpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLnR3ZWx2ZWRhdGEuY29tL3RpbWVfc2VyaWVzP3N5bWJvbD0ke3RpY2tlcn0maW50ZXJ2YWw9MWRheSZvdXRwdXRzaXplPTIwMDAmYXBpa2V5PWEyNDk3MGM5NTY2YzQ5NzM5ZTgwMDljZGIzYTYzOWYwYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhU2l4TW9udGhzID0gZGF0YS52YWx1ZXMuc2xpY2UoMCwgZGF0ZSk7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2Zvcm1Ub0dyYXBoRGF0YSA9IGRhdGFTaXhNb250aHMubWFwKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4geyB0aW1lOiB2YWwuZGF0ZXRpbWUsIHZhbHVlOiB2YWwuY2xvc2UgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRyYW5zZm9ybVRvR3JhcGhEYXRhLnJldmVyc2UoKTtcclxuICAgICAgY29uc3QgY2hhcnRDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR2LWxpZ2h0d2VpZ2h0LWNoYXJ0c1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0Q2FudmFzMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtZGF0ZXMtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgaWYgKGNoYXJ0Q2FudmFzKSB7XHJcbiAgICAgICAgY2hhcnRDYW52YXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0ID0gY3JlYXRlQ2hhcnQoY2hhcnRDYW52YXMxLCB7XHJcbiAgICAgICAgd2lkdGg6IDU3MCxcclxuICAgICAgICBoZWlnaHQ6IDI1MCxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGNoYXJ0LmFwcGx5T3B0aW9ucyh7XHJcbiAgICAgIC8vICAgaGFuZGxlU2Nyb2xsOiBmYWxzZSxcclxuICAgICAgLy8gICBoYW5kbGVTY2FsZTogZmFsc2UsXHJcbiAgICAgIC8vICAgcHJpY2VTY2FsZToge1xyXG4gICAgICAvLyAgICAgYXV0b1NjYWxlOiB0cnVlLFxyXG4gICAgICAvLyAgICAgYm9yZGVyVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIC8vICAgfSxcclxuXHJcbiAgICAgIC8vICAgZ3JpZDoge1xyXG4gICAgICAvLyAgICAgdmVydExpbmVzOiB7XHJcbiAgICAgIC8vICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAvLyAgICAgfSxcclxuICAgICAgLy8gICAgIGhvcnpMaW5lczoge1xyXG4gICAgICAvLyAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgLy8gICAgIH0sXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBsYXlvdXQ6IHtcclxuICAgICAgLy8gICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgLy8gICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIC8vIGNoYXJ0LnRpbWVTY2FsZSgpLmZpdENvbnRlbnQoKTtcclxuICAgICAgY29uc3QgYXJlYVNlcmllcyA9IGNoYXJ0LmFkZEFyZWFTZXJpZXMoKTtcclxuICAgICAgYXJlYVNlcmllcy5zZXREYXRhKHRyYW5zZm9ybVRvR3JhcGhEYXRhKTtcclxuICAgICAgLy8gYXJlYVNlcmllcy5hcHBseU9wdGlvbnMoe1xyXG4gICAgICAvLyAgIHByaWNlTGluZVdpZHRoOiAwLFxyXG5cclxuICAgICAgLy8gICBwcmljZUxpbmVTdHlsZTogMixcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIC8vIGNvbnN0IGRhdGFMYXN0RWwgPSBkYXRhU2l4TW9udGhzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAvLyBpZiAoK2RhdGFTaXhNb250aHNbMF0uY2xvc2UgPiArZGF0YVNpeE1vbnRoc1tkYXRhTGFzdEVsXS5jbG9zZSkge1xyXG4gICAgICAvLyAgIGFyZWFTZXJpZXMuYXBwbHlPcHRpb25zKHtcclxuICAgICAgLy8gICAgIGxpbmVDb2xvcjogXCIjMzRBODUzXCIsXHJcbiAgICAgIC8vICAgICB0b3BDb2xvcjogXCJyZ2JhKDUyLCAxNjgsIDgzLCAwLjQpXCIsXHJcbiAgICAgIC8vICAgICBib3R0b21Db2xvcjogXCJyZ2JhKDUyLCAxNjgsIDgzLCAwKVwiLFxyXG5cclxuICAgICAgLy8gICAgIGxpbmVXaWR0aDogMyxcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gICBhcmVhU2VyaWVzLmFwcGx5T3B0aW9ucyh7XHJcbiAgICAgIC8vICAgICBsaW5lQ29sb3I6IFwiI0VBNDMzNVwiLFxyXG4gICAgICAvLyAgICAgdG9wQ29sb3I6IFwicmdiYSgyMzQsIDY3LCA1MywgMC40KVwiLFxyXG4gICAgICAvLyAgICAgYm90dG9tQ29sb3I6IFwicmdiYSgyMzQsIDY3LCA1MywgMClcIixcclxuICAgICAgLy8gICAgIGxpbmVXaWR0aDogMyxcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YUhhbmRsZXIoZGF0ZUNoYW5nZSk7XHJcbiAgfSwgW3RpY2tlciwgZGF0ZUNoYW5nZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlcy1jb250YWluZXJcIl19PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXMtd3JhcHBlclwiXX1cclxuICAgICAgICBpZD1cImNoYXJ0LWRhdGVzLWNvbnRhaW5lclwiXHJcbiAgICAgID5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXMtdWxcIl19PlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAxMERcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoMjEpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAxTVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDMpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAzTVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDYpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA2TVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDEyKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgMVlcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoMjEgKiAxMiAqIDQpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA0WVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0RGF0ZTtcclxuIiwiaW1wb3J0IFN0b2NrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9ja0NhcmRcIjtcclxuaW1wb3J0IENoYXJ0RGF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFydERhdGVcIjtcclxuaW1wb3J0IFN0b2NrSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1N0b2NrSGVhZGVyXCI7XHJcblxyXG5pbXBvcnQgU3RvY2tTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RvY2tTZWFyY2hcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9pbmRleFwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8U3RvY2tDYXJkPlxyXG4gICAgICAgIDxTdG9ja1NlYXJjaCAvPlxyXG4gICAgICAgIDxTdG9ja0hlYWRlciAvPlxyXG4gICAgICAgIDxDaGFydERhdGUgLz5cclxuICAgICAgPC9TdG9ja0NhcmQ+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNoYXJ0IiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQ2hhcnREYXRlIiwidGlja2VyIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGF0ZUNoYW5nZSIsInNldERhdGVDaGFuZ2UiLCJmZXRjaERhdGFIYW5kbGVyIiwiZGF0ZSIsImZldGNoRGF0YSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJkYXRhU2l4TW9udGhzIiwidmFsdWVzIiwic2xpY2UiLCJ0cmFuc2Zvcm1Ub0dyYXBoRGF0YSIsIm1hcCIsInZhbCIsInRpbWUiLCJkYXRldGltZSIsInZhbHVlIiwiY2xvc2UiLCJyZXZlcnNlIiwiY2hhcnRDYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGFydENhbnZhczEiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNoYXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJhcmVhU2VyaWVzIiwiYWRkQXJlYVNlcmllcyIsInNldERhdGEiLCJTdG9ja0NhcmQiLCJTdG9ja0hlYWRlciIsIlN0b2NrU2VhcmNoIiwiUHJvdmlkZXIiLCJzdG9yZSIsIkhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==