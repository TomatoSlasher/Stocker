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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTE1YWNlODY0MDlmMzkyNjEzNTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNTSxTQUFtQixHQUFHLE1BQU07QUFBQTs7QUFDaEMsUUFBTUMsTUFBTSxHQUFHSCx3REFBVyxDQUFFSSxLQUFELElBQStCO0FBQ3hELFdBQU9BLEtBQUssQ0FBQ0QsTUFBYjtBQUNELEdBRnlCLENBQTFCO0FBR0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBRUEsUUFBTTtBQUFBLE9BQUNJLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTVksZ0JBQWdCLEdBQUcsTUFBT0MsSUFBUCxJQUF3QjtBQUMvQyxZQUFNQyxTQUFTLEdBQUcsTUFBTUMsS0FBSyxDQUMxQixpREFBZ0RULE1BQU8sd0VBRDdCLENBQTdCO0FBSUEsWUFBTVUsSUFBSSxHQUFHLE1BQU1GLFNBQVMsQ0FBQ0csSUFBVixFQUFuQjtBQUVBLFlBQU1DLGFBQWEsR0FBR0YsSUFBSSxDQUFDRyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJQLElBQXJCLENBQXRCO0FBRUEsWUFBTVEsb0JBQW9CLEdBQUdILGFBQWEsQ0FBQ0ksR0FBZCxDQUMxQkMsR0FBRCxJQUd1QztBQUNyQyxlQUFPO0FBQUVDLFVBQUFBLElBQUksRUFBRUQsR0FBRyxDQUFDRSxRQUFaO0FBQXNCQyxVQUFBQSxLQUFLLEVBQUVILEdBQUcsQ0FBQ0k7QUFBakMsU0FBUDtBQUNELE9BTjBCLENBQTdCO0FBUUFOLE1BQUFBLG9CQUFvQixDQUFDTyxPQUFyQjtBQUNBLFlBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFwQjtBQUVBLFlBQU1DLFlBQWlCLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUN4Qix1QkFEd0IsQ0FBMUI7O0FBSUEsVUFBSUosV0FBSixFQUFpQjtBQUNmQSxRQUFBQSxXQUFXLENBQUNLLE1BQVo7QUFDRDs7QUFFRCxZQUFNQyxLQUFVLEdBQUdqQywrREFBVyxDQUFDOEIsWUFBRCxFQUFlO0FBQzNDSSxRQUFBQSxLQUFLLEVBQUUsR0FEb0M7QUFFM0NDLFFBQUFBLE1BQU0sRUFBRTtBQUZtQyxPQUFmLENBQTlCLENBNUIrQyxDQWdDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFlBQU1DLFVBQVUsR0FBR0gsS0FBSyxDQUFDSSxhQUFOLEVBQW5CO0FBQ0FELE1BQUFBLFVBQVUsQ0FBQ0UsT0FBWCxDQUFtQm5CLG9CQUFuQixFQXhEK0MsQ0F5RC9DO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQWhGRDs7QUFpRkFULElBQUFBLGdCQUFnQixDQUFDRixVQUFELENBQWhCO0FBQ0QsR0FuRlEsRUFtRk4sQ0FBQ0osTUFBRCxFQUFTSSxVQUFULENBbkZNLENBQVQ7QUFxRkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVOLHVGQUFoQjtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxFQUFFQSxxRkFEYjtBQUVFLFFBQUUsRUFBQyx1QkFGTDtBQUFBLDZCQUlFO0FBQUksaUJBQVMsRUFBRUEsZ0ZBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVBLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNTyxhQUFhLENBQUMsQ0FBRCxDQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQ0UsbUJBQVMsRUFBRVAsNkVBRGI7QUFFRSxpQkFBTyxFQUFFLE1BQU1PLGFBQWEsQ0FBQyxFQUFELENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBYUU7QUFDRSxtQkFBUyxFQUFFUCw2RUFEYjtBQUVFLGlCQUFPLEVBQUUsTUFBTU8sYUFBYSxDQUFDLEtBQUssQ0FBTixDQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixlQW1CRTtBQUNFLG1CQUFTLEVBQUVQLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNTyxhQUFhLENBQUMsS0FBSyxDQUFOLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CRixlQXlCRTtBQUNFLG1CQUFTLEVBQUVQLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNTyxhQUFhLENBQUMsS0FBSyxFQUFOLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpCRixlQStCRTtBQUNFLG1CQUFTLEVBQUVQLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNTyxhQUFhLENBQUMsS0FBSyxFQUFMLEdBQVUsQ0FBWCxDQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQStDRCxDQTVJRDs7R0FBTU47VUFDV0Y7OztLQURYRTtBQTZJTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGFydERhdGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNoYXJ0IH0gZnJvbSBcImxpZ2h0d2VpZ2h0LWNoYXJ0c1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2hhcnREYXRlLm1vZHVsZS5jc3NcIjtcclxuY29uc3QgQ2hhcnREYXRlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB0aWNrZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHsgdGlja2VyOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnRpY2tlcjtcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyh0aWNrZXIpO1xyXG5cclxuICBjb25zdCBbZGF0ZUNoYW5nZSwgc2V0RGF0ZUNoYW5nZV0gPSB1c2VTdGF0ZSgyMSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGFIYW5kbGVyID0gYXN5bmMgKGRhdGU6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkudHdlbHZlZGF0YS5jb20vdGltZV9zZXJpZXM/c3ltYm9sPSR7dGlja2VyfSZpbnRlcnZhbD0xZGF5Jm91dHB1dHNpemU9MjAwMCZhcGlrZXk9YTI0OTcwYzk1NjZjNDk3MzllODAwOWNkYjNhNjM5ZjBgXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGFTaXhNb250aHMgPSBkYXRhLnZhbHVlcy5zbGljZSgwLCBkYXRlKTtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zZm9ybVRvR3JhcGhEYXRhID0gZGF0YVNpeE1vbnRocy5tYXAoXHJcbiAgICAgICAgKHZhbDoge1xyXG4gICAgICAgICAgZGF0ZXRpbWU6IHN0cmluZztcclxuICAgICAgICAgIGNsb3NlOiBudW1iZXI7XHJcbiAgICAgICAgfSk6IHsgdGltZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgdGltZTogdmFsLmRhdGV0aW1lLCB2YWx1ZTogdmFsLmNsb3NlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICB0cmFuc2Zvcm1Ub0dyYXBoRGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgIGNvbnN0IGNoYXJ0Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50di1saWdodHdlaWdodC1jaGFydHNcIik7XHJcblxyXG4gICAgICBjb25zdCBjaGFydENhbnZhczE6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIFwiY2hhcnQtZGF0ZXMtY29udGFpbmVyXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChjaGFydENhbnZhcykge1xyXG4gICAgICAgIGNoYXJ0Q2FudmFzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjaGFydDogYW55ID0gY3JlYXRlQ2hhcnQoY2hhcnRDYW52YXMxLCB7XHJcbiAgICAgICAgd2lkdGg6IDU3MCxcclxuICAgICAgICBoZWlnaHQ6IDI1MCxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGNoYXJ0LmFwcGx5T3B0aW9ucyh7XHJcbiAgICAgIC8vICAgaGFuZGxlU2Nyb2xsOiBmYWxzZSxcclxuICAgICAgLy8gICBoYW5kbGVTY2FsZTogZmFsc2UsXHJcbiAgICAgIC8vICAgcHJpY2VTY2FsZToge1xyXG4gICAgICAvLyAgICAgYXV0b1NjYWxlOiB0cnVlLFxyXG4gICAgICAvLyAgICAgYm9yZGVyVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIC8vICAgfSxcclxuXHJcbiAgICAgIC8vICAgZ3JpZDoge1xyXG4gICAgICAvLyAgICAgdmVydExpbmVzOiB7XHJcbiAgICAgIC8vICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAvLyAgICAgfSxcclxuICAgICAgLy8gICAgIGhvcnpMaW5lczoge1xyXG4gICAgICAvLyAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgLy8gICAgIH0sXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBsYXlvdXQ6IHtcclxuICAgICAgLy8gICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgLy8gICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIC8vIGNoYXJ0LnRpbWVTY2FsZSgpLmZpdENvbnRlbnQoKTtcclxuICAgICAgY29uc3QgYXJlYVNlcmllcyA9IGNoYXJ0LmFkZEFyZWFTZXJpZXMoKTtcclxuICAgICAgYXJlYVNlcmllcy5zZXREYXRhKHRyYW5zZm9ybVRvR3JhcGhEYXRhKTtcclxuICAgICAgLy8gYXJlYVNlcmllcy5hcHBseU9wdGlvbnMoe1xyXG4gICAgICAvLyAgIHByaWNlTGluZVdpZHRoOiAwLFxyXG5cclxuICAgICAgLy8gICBwcmljZUxpbmVTdHlsZTogMixcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIC8vIGNvbnN0IGRhdGFMYXN0RWwgPSBkYXRhU2l4TW9udGhzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAvLyBpZiAoK2RhdGFTaXhNb250aHNbMF0uY2xvc2UgPiArZGF0YVNpeE1vbnRoc1tkYXRhTGFzdEVsXS5jbG9zZSkge1xyXG4gICAgICAvLyAgIGFyZWFTZXJpZXMuYXBwbHlPcHRpb25zKHtcclxuICAgICAgLy8gICAgIGxpbmVDb2xvcjogXCIjMzRBODUzXCIsXHJcbiAgICAgIC8vICAgICB0b3BDb2xvcjogXCJyZ2JhKDUyLCAxNjgsIDgzLCAwLjQpXCIsXHJcbiAgICAgIC8vICAgICBib3R0b21Db2xvcjogXCJyZ2JhKDUyLCAxNjgsIDgzLCAwKVwiLFxyXG5cclxuICAgICAgLy8gICAgIGxpbmVXaWR0aDogMyxcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gICBhcmVhU2VyaWVzLmFwcGx5T3B0aW9ucyh7XHJcbiAgICAgIC8vICAgICBsaW5lQ29sb3I6IFwiI0VBNDMzNVwiLFxyXG4gICAgICAvLyAgICAgdG9wQ29sb3I6IFwicmdiYSgyMzQsIDY3LCA1MywgMC40KVwiLFxyXG4gICAgICAvLyAgICAgYm90dG9tQ29sb3I6IFwicmdiYSgyMzQsIDY3LCA1MywgMClcIixcclxuICAgICAgLy8gICAgIGxpbmVXaWR0aDogMyxcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YUhhbmRsZXIoZGF0ZUNoYW5nZSk7XHJcbiAgfSwgW3RpY2tlciwgZGF0ZUNoYW5nZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlcy1jb250YWluZXJcIl19PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXMtd3JhcHBlclwiXX1cclxuICAgICAgICBpZD1cImNoYXJ0LWRhdGVzLWNvbnRhaW5lclwiXHJcbiAgICAgID5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXMtdWxcIl19PlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAxMERcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoMjEpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAxTVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDMpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAzTVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDYpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA2TVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDEyKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgMVlcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoMjEgKiAxMiAqIDQpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA0WVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0RGF0ZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDaGFydCIsInVzZVNlbGVjdG9yIiwiY2xhc3NlcyIsIkNoYXJ0RGF0ZSIsInRpY2tlciIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImRhdGVDaGFuZ2UiLCJzZXREYXRlQ2hhbmdlIiwiZmV0Y2hEYXRhSGFuZGxlciIsImRhdGUiLCJmZXRjaERhdGEiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGF0YVNpeE1vbnRocyIsInZhbHVlcyIsInNsaWNlIiwidHJhbnNmb3JtVG9HcmFwaERhdGEiLCJtYXAiLCJ2YWwiLCJ0aW1lIiwiZGF0ZXRpbWUiLCJ2YWx1ZSIsImNsb3NlIiwicmV2ZXJzZSIsImNoYXJ0Q2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhcnRDYW52YXMxIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJjaGFydCIsIndpZHRoIiwiaGVpZ2h0IiwiYXJlYVNlcmllcyIsImFkZEFyZWFTZXJpZXMiLCJzZXREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==