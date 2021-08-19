"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ChartDate.tsx":
/*!**************************************!*\
  !*** ./src/components/ChartDate.tsx ***!
  \**************************************/
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


var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\ChartDate.tsx",
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
          lineNumber: 106,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21),
          children: "1M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21 * 3),
          children: "3M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21 * 6),
          children: "6M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21 * 12),
          children: "1Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default()["chart-dates"]),
          onClick: () => setDateChange(21 * 12 * 4),
          children: "4Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
/* harmony import */ var _components_ChartDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ChartDate */ "./src/components/ChartDate.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2E1NmEzMGI1M2YwYjA2NTYzYmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNTSxTQUFtQixHQUFHLE1BQU07QUFBQTs7QUFDaEMsUUFBTUMsTUFBTSxHQUFHSCx3REFBVyxDQUFFSSxLQUFELElBQStCO0FBQ3hELFdBQU9BLEtBQUssQ0FBQ0QsTUFBYjtBQUNELEdBRnlCLENBQTFCO0FBR0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBRUEsUUFBTTtBQUFBLE9BQUNJLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTVksZ0JBQWdCLEdBQUcsTUFBT0MsSUFBUCxJQUF3QjtBQUMvQyxZQUFNQyxTQUFTLEdBQUcsTUFBTUMsS0FBSyxDQUMxQixpREFBZ0RULE1BQU8sd0VBRDdCLENBQTdCO0FBSUEsWUFBTVUsSUFBSSxHQUFHLE1BQU1GLFNBQVMsQ0FBQ0csSUFBVixFQUFuQjtBQUVBLFlBQU1DLGFBQWEsR0FBR0YsSUFBSSxDQUFDRyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJQLElBQXJCLENBQXRCO0FBRUEsWUFBTVEsb0JBQW9CLEdBQUdILGFBQWEsQ0FBQ0ksR0FBZCxDQUMxQkMsR0FBRCxJQUd1QztBQUNyQyxlQUFPO0FBQUVDLFVBQUFBLElBQUksRUFBRUQsR0FBRyxDQUFDRSxRQUFaO0FBQXNCQyxVQUFBQSxLQUFLLEVBQUVILEdBQUcsQ0FBQ0k7QUFBakMsU0FBUDtBQUNELE9BTjBCLENBQTdCO0FBUUFOLE1BQUFBLG9CQUFvQixDQUFDTyxPQUFyQjtBQUNBLFlBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFwQjtBQUVB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LDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxDQVZEOztLQUFNQztBQVdOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXJ0RGF0ZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2hhcnQgfSBmcm9tIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DaGFydERhdGUubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBDaGFydERhdGU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpY2tlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogeyB0aWNrZXI6IHN0cmluZyB9KSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUudGlja2VyO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKHRpY2tlcik7XHJcblxyXG4gIGNvbnN0IFtkYXRlQ2hhbmdlLCBzZXREYXRlQ2hhbmdlXSA9IHVzZVN0YXRlKDIxKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YUhhbmRsZXIgPSBhc3luYyAoZGF0ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS50d2VsdmVkYXRhLmNvbS90aW1lX3Nlcmllcz9zeW1ib2w9JHt0aWNrZXJ9JmludGVydmFsPTFkYXkmb3V0cHV0c2l6ZT0yMDAwJmFwaWtleT1hMjQ5NzBjOTU2NmM0OTczOWU4MDA5Y2RiM2E2MzlmMGBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YVNpeE1vbnRocyA9IGRhdGEudmFsdWVzLnNsaWNlKDAsIGRhdGUpO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmb3JtVG9HcmFwaERhdGEgPSBkYXRhU2l4TW9udGhzLm1hcChcclxuICAgICAgICAodmFsOiB7XHJcbiAgICAgICAgICBkYXRldGltZTogc3RyaW5nLFxyXG4gICAgICAgICAgY2xvc2U6IG51bWJlcixcclxuICAgICAgICB9KTogeyB0aW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyB0aW1lOiB2YWwuZGF0ZXRpbWUsIHZhbHVlOiB2YWwuY2xvc2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHRyYW5zZm9ybVRvR3JhcGhEYXRhLnJldmVyc2UoKTtcclxuICAgICAgY29uc3QgY2hhcnRDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR2LWxpZ2h0d2VpZ2h0LWNoYXJ0c1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0Q2FudmFzMTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJjaGFydC1kYXRlcy1jb250YWluZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGNoYXJ0Q2FudmFzKSB7XHJcbiAgICAgICAgY2hhcnRDYW52YXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0OiBhbnkgPSBjcmVhdGVDaGFydChjaGFydENhbnZhczEsIHtcclxuICAgICAgICB3aWR0aDogNTcwLFxyXG4gICAgICAgIGhlaWdodDogMjUwLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gY2hhcnQuYXBwbHlPcHRpb25zKHtcclxuICAgICAgLy8gICBoYW5kbGVTY3JvbGw6IGZhbHNlLFxyXG4gICAgICAvLyAgIGhhbmRsZVNjYWxlOiBmYWxzZSxcclxuICAgICAgLy8gICBwcmljZVNjYWxlOiB7XHJcbiAgICAgIC8vICAgICBhdXRvU2NhbGU6IHRydWUsXHJcbiAgICAgIC8vICAgICBib3JkZXJWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgLy8gICB9LFxyXG5cclxuICAgICAgLy8gICBncmlkOiB7XHJcbiAgICAgIC8vICAgICB2ZXJ0TGluZXM6IHtcclxuICAgICAgLy8gICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIC8vICAgICB9LFxyXG4gICAgICAvLyAgICAgaG9yekxpbmVzOiB7XHJcbiAgICAgIC8vICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAvLyAgICAgfSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIGxheW91dDoge1xyXG4gICAgICAvLyAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAvLyAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgLy8gY2hhcnQudGltZVNjYWxlKCkuZml0Q29udGVudCgpO1xyXG4gICAgICBjb25zdCBhcmVhU2VyaWVzID0gY2hhcnQuYWRkQXJlYVNlcmllcygpO1xyXG4gICAgICBhcmVhU2VyaWVzLnNldERhdGEodHJhbnNmb3JtVG9HcmFwaERhdGEpO1xyXG4gICAgICAvLyBhcmVhU2VyaWVzLmFwcGx5T3B0aW9ucyh7XHJcbiAgICAgIC8vICAgcHJpY2VMaW5lV2lkdGg6IDAsXHJcblxyXG4gICAgICAvLyAgIHByaWNlTGluZVN0eWxlOiAyLFxyXG4gICAgICAvLyB9KTtcclxuICAgICAgLy8gY29uc3QgZGF0YUxhc3RFbCA9IGRhdGFTaXhNb250aHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgIC8vIGlmICgrZGF0YVNpeE1vbnRoc1swXS5jbG9zZSA+ICtkYXRhU2l4TW9udGhzW2RhdGFMYXN0RWxdLmNsb3NlKSB7XHJcbiAgICAgIC8vICAgYXJlYVNlcmllcy5hcHBseU9wdGlvbnMoe1xyXG4gICAgICAvLyAgICAgbGluZUNvbG9yOiBcIiMzNEE4NTNcIixcclxuICAgICAgLy8gICAgIHRvcENvbG9yOiBcInJnYmEoNTIsIDE2OCwgODMsIDAuNClcIixcclxuICAgICAgLy8gICAgIGJvdHRvbUNvbG9yOiBcInJnYmEoNTIsIDE2OCwgODMsIDApXCIsXHJcblxyXG4gICAgICAvLyAgICAgbGluZVdpZHRoOiAzLFxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgIGFyZWFTZXJpZXMuYXBwbHlPcHRpb25zKHtcclxuICAgICAgLy8gICAgIGxpbmVDb2xvcjogXCIjRUE0MzM1XCIsXHJcbiAgICAgIC8vICAgICB0b3BDb2xvcjogXCJyZ2JhKDIzNCwgNjcsIDUzLCAwLjQpXCIsXHJcbiAgICAgIC8vICAgICBib3R0b21Db2xvcjogXCJyZ2JhKDIzNCwgNjcsIDUzLCAwKVwiLFxyXG4gICAgICAvLyAgICAgbGluZVdpZHRoOiAzLFxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhSGFuZGxlcihkYXRlQ2hhbmdlKTtcclxuICB9LCBbdGlja2VyLCBkYXRlQ2hhbmdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlcy13cmFwcGVyXCJdfVxyXG4gICAgICAgIGlkPVwiY2hhcnQtZGF0ZXMtY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlcy11bFwiXX0+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoOCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDEwRFxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDFNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogMyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDNNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogNil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDZNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogMTIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAxWVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDEyICogNCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDRZXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnREYXRlO1xyXG4iLCJpbXBvcnQgU3RvY2tDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1N0b2NrQ2FyZFwiO1xyXG5pbXBvcnQgQ2hhcnREYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0RGF0ZVwiO1xyXG5pbXBvcnQgU3RvY2tIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RvY2tIZWFkZXJcIjtcclxuXHJcbmltcG9ydCBTdG9ja1NlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9ja1NlYXJjaFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxTdG9ja0NhcmQ+XHJcbiAgICAgICAgPFN0b2NrU2VhcmNoIC8+XHJcbiAgICAgICAgPFN0b2NrSGVhZGVyIC8+XHJcbiAgICAgICAgPENoYXJ0RGF0ZSAvPlxyXG4gICAgICA8L1N0b2NrQ2FyZD5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ2hhcnQiLCJ1c2VTZWxlY3RvciIsImNsYXNzZXMiLCJDaGFydERhdGUiLCJ0aWNrZXIiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRlQ2hhbmdlIiwic2V0RGF0ZUNoYW5nZSIsImZldGNoRGF0YUhhbmRsZXIiLCJkYXRlIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImRhdGFTaXhNb250aHMiLCJ2YWx1ZXMiLCJzbGljZSIsInRyYW5zZm9ybVRvR3JhcGhEYXRhIiwibWFwIiwidmFsIiwidGltZSIsImRhdGV0aW1lIiwidmFsdWUiLCJjbG9zZSIsInJldmVyc2UiLCJjaGFydENhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoYXJ0Q2FudmFzMSIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiY2hhcnQiLCJ3aWR0aCIsImhlaWdodCIsImFyZWFTZXJpZXMiLCJhZGRBcmVhU2VyaWVzIiwic2V0RGF0YSIsIlN0b2NrQ2FyZCIsIlN0b2NrSGVhZGVyIiwiU3RvY2tTZWFyY2giLCJQcm92aWRlciIsInN0b3JlIiwiSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9