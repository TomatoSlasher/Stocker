"use strict";
self["webpackHotUpdate_N_E"]("src_components_ChartDate_tsx",{

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
      });
      chart.applyOptions({
        handleScroll: false,
        handleScale: false,
        priceScale: {
          autoScale: true,
          borderVisible: false
        },
        grid: {
          vertLines: {
            visible: false
          },
          horzLines: {
            visible: false
          }
        },
        layout: {
          fontSize: 16,
          fontFamily: "Arial"
        }
      });
      chart.timeScale().fitContent();
      const areaSeries = chart.addAreaSeries();
      areaSeries.setData(transformToGraphData);
      areaSeries.applyOptions({
        priceLineWidth: 0,
        priceLineStyle: 2
      });
      const dataLastEl = dataSixMonths.length - 1;

      if (+dataSixMonths[0].close > +dataSixMonths[dataLastEl].close) {
        areaSeries.applyOptions({
          lineColor: "#34A853",
          topColor: "rgba(52, 168, 83, 0.4)",
          bottomColor: "rgba(52, 168, 83, 0)",
          lineWidth: 3
        });
      } else {
        areaSeries.applyOptions({
          lineColor: "#EA4335",
          topColor: "rgba(234, 67, 53, 0.4)",
          bottomColor: "rgba(234, 67, 53, 0)",
          lineWidth: 3
        });
      }
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3JjX2NvbXBvbmVudHNfQ2hhcnREYXRlX3RzeC5hMTg5N2Q4ZWMyNjM5YjY1ZDAxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLE1BQU1NLFNBQW1CLEdBQUcsTUFBTTtBQUFBOztBQUNoQyxRQUFNQyxNQUFNLEdBQUdILHdEQUFXLENBQUVJLEtBQUQsSUFBK0I7QUFDeEQsV0FBT0EsS0FBSyxDQUFDRCxNQUFiO0FBQ0QsR0FGeUIsQ0FBMUI7QUFHQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFFQSxRQUFNO0FBQUEsT0FBQ0ksVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJWLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNWSxnQkFBZ0IsR0FBRyxNQUFPQyxJQUFQLElBQXdCO0FBQy9DLFlBQU1DLFNBQVMsR0FBRyxNQUFNQyxLQUFLLENBQzFCLGlEQUFnRFQsTUFBTyx3RUFEN0IsQ0FBN0I7QUFJQSxZQUFNVSxJQUFJLEdBQUcsTUFBTUYsU0FBUyxDQUFDRyxJQUFWLEVBQW5CO0FBRUEsWUFBTUMsYUFBYSxHQUFHRixJQUFJLENBQUNHLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQlAsSUFBckIsQ0FBdEI7QUFFQSxZQUFNUSxvQkFBb0IsR0FBR0gsYUFBYSxDQUFDSSxHQUFkLENBQzFCQyxHQUFELElBR3VDO0FBQ3JDLGVBQU87QUFBRUMsVUFBQUEsSUFBSSxFQUFFRCxHQUFHLENBQUNFLFFBQVo7QUFBc0JDLFVBQUFBLEtBQUssRUFBRUgsR0FBRyxDQUFDSTtBQUFqQyxTQUFQO0FBQ0QsT0FOMEIsQ0FBN0I7QUFRQU4sTUFBQUEsb0JBQW9CLENBQUNPLE9BQXJCO0FBQ0EsWUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIs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UEYsZUFhRTtBQUNFLG1CQUFTLEVBQUVQLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNTyxhQUFhLENBQUMsS0FBSyxDQUFOLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLGVBbUJFO0FBQ0UsbUJBQVMsRUFBRVAsNkVBRGI7QUFFRSxpQkFBTyxFQUFFLE1BQU1PLGFBQWEsQ0FBQyxLQUFLLENBQU4sQ0FGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkJGLGVBeUJFO0FBQ0UsbUJBQVMsRUFBRVAsNkVBRGI7QUFFRSxpQkFBTyxFQUFFLE1BQU1PLGFBQWEsQ0FBQyxLQUFLLEVBQU4sQ0FGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJGLGVBK0JFO0FBQ0UsbUJBQVMsRUFBRVAsNkVBRGI7QUFFRSxpQkFBTyxFQUFFLE1BQU1PLGFBQWEsQ0FBQyxLQUFLLEVBQUwsR0FBVSxDQUFYLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBK0NELENBNUlEOztHQUFNTjtVQUNXRjs7O0tBRFhFO0FBNklOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXJ0RGF0ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2hhcnQgfSBmcm9tIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DaGFydERhdGUubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBDaGFydERhdGU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpY2tlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogeyB0aWNrZXI6IHN0cmluZyB9KSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUudGlja2VyO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKHRpY2tlcik7XHJcblxyXG4gIGNvbnN0IFtkYXRlQ2hhbmdlLCBzZXREYXRlQ2hhbmdlXSA9IHVzZVN0YXRlKDIxKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YUhhbmRsZXIgPSBhc3luYyAoZGF0ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS50d2VsdmVkYXRhLmNvbS90aW1lX3Nlcmllcz9zeW1ib2w9JHt0aWNrZXJ9JmludGVydmFsPTFkYXkmb3V0cHV0c2l6ZT0yMDAwJmFwaWtleT1hMjQ5NzBjOTU2NmM0OTczOWU4MDA5Y2RiM2E2MzlmMGBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YVNpeE1vbnRocyA9IGRhdGEudmFsdWVzLnNsaWNlKDAsIGRhdGUpO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmb3JtVG9HcmFwaERhdGEgPSBkYXRhU2l4TW9udGhzLm1hcChcclxuICAgICAgICAodmFsOiB7XHJcbiAgICAgICAgICBkYXRldGltZTogc3RyaW5nO1xyXG4gICAgICAgICAgY2xvc2U6IG51bWJlcjtcclxuICAgICAgICB9KTogeyB0aW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyB0aW1lOiB2YWwuZGF0ZXRpbWUsIHZhbHVlOiB2YWwuY2xvc2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHRyYW5zZm9ybVRvR3JhcGhEYXRhLnJldmVyc2UoKTtcclxuICAgICAgY29uc3QgY2hhcnRDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR2LWxpZ2h0d2VpZ2h0LWNoYXJ0c1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0Q2FudmFzMTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJjaGFydC1kYXRlcy1jb250YWluZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGNoYXJ0Q2FudmFzKSB7XHJcbiAgICAgICAgY2hhcnRDYW52YXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0OiBhbnkgPSBjcmVhdGVDaGFydChjaGFydENhbnZhczEsIHtcclxuICAgICAgICB3aWR0aDogNTcwLFxyXG4gICAgICAgIGhlaWdodDogMjUwLFxyXG4gICAgICB9KTtcclxuICAgICAgY2hhcnQuYXBwbHlPcHRpb25zKHtcclxuICAgICAgICBoYW5kbGVTY3JvbGw6IGZhbHNlLFxyXG4gICAgICAgIGhhbmRsZVNjYWxlOiBmYWxzZSxcclxuICAgICAgICBwcmljZVNjYWxlOiB7XHJcbiAgICAgICAgICBhdXRvU2NhbGU6IHRydWUsXHJcbiAgICAgICAgICBib3JkZXJWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICB2ZXJ0TGluZXM6IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaG9yekxpbmVzOiB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY2hhcnQudGltZVNjYWxlKCkuZml0Q29udGVudCgpO1xyXG4gICAgICBjb25zdCBhcmVhU2VyaWVzID0gY2hhcnQuYWRkQXJlYVNlcmllcygpO1xyXG4gICAgICBhcmVhU2VyaWVzLnNldERhdGEodHJhbnNmb3JtVG9HcmFwaERhdGEpO1xyXG4gICAgICBhcmVhU2VyaWVzLmFwcGx5T3B0aW9ucyh7XHJcbiAgICAgICAgcHJpY2VMaW5lV2lkdGg6IDAsXHJcblxyXG4gICAgICAgIHByaWNlTGluZVN0eWxlOiAyLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YUxhc3RFbCA9IGRhdGFTaXhNb250aHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgIGlmICgrZGF0YVNpeE1vbnRoc1swXS5jbG9zZSA+ICtkYXRhU2l4TW9udGhzW2RhdGFMYXN0RWxdLmNsb3NlKSB7XHJcbiAgICAgICAgYXJlYVNlcmllcy5hcHBseU9wdGlvbnMoe1xyXG4gICAgICAgICAgbGluZUNvbG9yOiBcIiMzNEE4NTNcIixcclxuICAgICAgICAgIHRvcENvbG9yOiBcInJnYmEoNTIsIDE2OCwgODMsIDAuNClcIixcclxuICAgICAgICAgIGJvdHRvbUNvbG9yOiBcInJnYmEoNTIsIDE2OCwgODMsIDApXCIsXHJcblxyXG4gICAgICAgICAgbGluZVdpZHRoOiAzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFyZWFTZXJpZXMuYXBwbHlPcHRpb25zKHtcclxuICAgICAgICAgIGxpbmVDb2xvcjogXCIjRUE0MzM1XCIsXHJcbiAgICAgICAgICB0b3BDb2xvcjogXCJyZ2JhKDIzNCwgNjcsIDUzLCAwLjQpXCIsXHJcbiAgICAgICAgICBib3R0b21Db2xvcjogXCJyZ2JhKDIzNCwgNjcsIDUzLCAwKVwiLFxyXG4gICAgICAgICAgbGluZVdpZHRoOiAzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhSGFuZGxlcihkYXRlQ2hhbmdlKTtcclxuICB9LCBbdGlja2VyLCBkYXRlQ2hhbmdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlcy13cmFwcGVyXCJdfVxyXG4gICAgICAgIGlkPVwiY2hhcnQtZGF0ZXMtY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlcy11bFwiXX0+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoOCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDEwRFxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDFNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogMyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDNNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogNil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDZNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogMTIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAxWVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDEyICogNCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDRZXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnREYXRlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNoYXJ0IiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQ2hhcnREYXRlIiwidGlja2VyIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGF0ZUNoYW5nZSIsInNldERhdGVDaGFuZ2UiLCJmZXRjaERhdGFIYW5kbGVyIiwiZGF0ZSIsImZldGNoRGF0YSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJkYXRhU2l4TW9udGhzIiwidmFsdWVzIiwic2xpY2UiLCJ0cmFuc2Zvcm1Ub0dyYXBoRGF0YSIsIm1hcCIsInZhbCIsInRpbWUiLCJkYXRldGltZSIsInZhbHVlIiwiY2xvc2UiLCJyZXZlcnNlIiwiY2hhcnRDYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGFydENhbnZhczEiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNoYXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJhcHBseU9wdGlvbnMiLCJoYW5kbGVTY3JvbGwiLCJoYW5kbGVTY2FsZSIsInByaWNlU2NhbGUiLCJhdXRvU2NhbGUiLCJib3JkZXJWaXNpYmxlIiwiZ3JpZCIsInZlcnRMaW5lcyIsInZpc2libGUiLCJob3J6TGluZXMiLCJsYXlvdXQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJ0aW1lU2NhbGUiLCJmaXRDb250ZW50IiwiYXJlYVNlcmllcyIsImFkZEFyZWFTZXJpZXMiLCJzZXREYXRhIiwicHJpY2VMaW5lV2lkdGgiLCJwcmljZUxpbmVTdHlsZSIsImRhdGFMYXN0RWwiLCJsZW5ndGgiLCJsaW5lQ29sb3IiLCJ0b3BDb2xvciIsImJvdHRvbUNvbG9yIiwibGluZVdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==