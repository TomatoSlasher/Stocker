exports.id = "src_components_ChartDate_tsx";
exports.ids = ["src_components_ChartDate_tsx"];
exports.modules = {

/***/ "./src/components/ChartDate.tsx":
/*!**************************************!*\
  !*** ./src/components/ChartDate.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightweight-charts */ "lightweight-charts");
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lightweight_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChartDate.module.css */ "./src/components/ChartDate.module.css");
/* harmony import */ var _ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ChartDate_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\ChartDate.tsx";





const ChartDate = () => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartDate);

/***/ }),

/***/ "./src/components/ChartDate.module.css":
/*!*********************************************!*\
  !*** ./src/components/ChartDate.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"chart-dates-container": "ChartDate_chart-dates-container__3sIZG",
	"chart-dates-ul": "ChartDate_chart-dates-ul__2cJbH",
	"chart-dates": "ChartDate_chart-dates__3GwbT"
};


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TU8sYUFBYSxDQUFDLEtBQUssQ0FBTixDQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixlQW1CRTtBQUNFLG1CQUFTLEVBQUVQLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNTyxhQUFhLENBQUMsS0FBSyxDQUFOLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CRixlQXlCRTtBQUNFLG1CQUFTLEVBQUVQLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNTyxhQUFhLENBQUMsS0FBSyxFQUFOLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpCRixlQStCRTtBQUNFLG1CQUFTLEVBQUVQLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNTyxhQUFhLENBQUMsS0FBSyxFQUFMLEdBQVUsQ0FBWCxDQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQStDRCxDQTVJRDs7QUE2SUEsaUVBQWVOLFNBQWY7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9DaGFydERhdGUudHN4Iiwid2VicGFjazovL3RzLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ2hhcnREYXRlLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2hhcnQgfSBmcm9tIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DaGFydERhdGUubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBDaGFydERhdGU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpY2tlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogeyB0aWNrZXI6IHN0cmluZyB9KSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUudGlja2VyO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKHRpY2tlcik7XHJcblxyXG4gIGNvbnN0IFtkYXRlQ2hhbmdlLCBzZXREYXRlQ2hhbmdlXSA9IHVzZVN0YXRlKDIxKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YUhhbmRsZXIgPSBhc3luYyAoZGF0ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS50d2VsdmVkYXRhLmNvbS90aW1lX3Nlcmllcz9zeW1ib2w9JHt0aWNrZXJ9JmludGVydmFsPTFkYXkmb3V0cHV0c2l6ZT0yMDAwJmFwaWtleT1hMjQ5NzBjOTU2NmM0OTczOWU4MDA5Y2RiM2E2MzlmMGBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YVNpeE1vbnRocyA9IGRhdGEudmFsdWVzLnNsaWNlKDAsIGRhdGUpO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmb3JtVG9HcmFwaERhdGEgPSBkYXRhU2l4TW9udGhzLm1hcChcclxuICAgICAgICAodmFsOiB7XHJcbiAgICAgICAgICBkYXRldGltZTogc3RyaW5nO1xyXG4gICAgICAgICAgY2xvc2U6IG51bWJlcjtcclxuICAgICAgICB9KTogeyB0aW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyB0aW1lOiB2YWwuZGF0ZXRpbWUsIHZhbHVlOiB2YWwuY2xvc2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHRyYW5zZm9ybVRvR3JhcGhEYXRhLnJldmVyc2UoKTtcclxuICAgICAgY29uc3QgY2hhcnRDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR2LWxpZ2h0d2VpZ2h0LWNoYXJ0c1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0Q2FudmFzMTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJjaGFydC1kYXRlcy1jb250YWluZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGNoYXJ0Q2FudmFzKSB7XHJcbiAgICAgICAgY2hhcnRDYW52YXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0OiBhbnkgPSBjcmVhdGVDaGFydChjaGFydENhbnZhczEsIHtcclxuICAgICAgICB3aWR0aDogNTcwLFxyXG4gICAgICAgIGhlaWdodDogMjUwLFxyXG4gICAgICB9KTtcclxuICAgICAgY2hhcnQuYXBwbHlPcHRpb25zKHtcclxuICAgICAgICBoYW5kbGVTY3JvbGw6IGZhbHNlLFxyXG4gICAgICAgIGhhbmRsZVNjYWxlOiBmYWxzZSxcclxuICAgICAgICBwcmljZVNjYWxlOiB7XHJcbiAgICAgICAgICBhdXRvU2NhbGU6IHRydWUsXHJcbiAgICAgICAgICBib3JkZXJWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICB2ZXJ0TGluZXM6IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaG9yekxpbmVzOiB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY2hhcnQudGltZVNjYWxlKCkuZml0Q29udGVudCgpO1xyXG4gICAgICBjb25zdCBhcmVhU2VyaWVzID0gY2hhcnQuYWRkQXJlYVNlcmllcygpO1xyXG4gICAgICBhcmVhU2VyaWVzLnNldERhdGEodHJhbnNmb3JtVG9HcmFwaERhdGEpO1xyXG4gICAgICBhcmVhU2VyaWVzLmFwcGx5T3B0aW9ucyh7XHJcbiAgICAgICAgcHJpY2VMaW5lV2lkdGg6IDAsXHJcblxyXG4gICAgICAgIHByaWNlTGluZVN0eWxlOiAyLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YUxhc3RFbCA9IGRhdGFTaXhNb250aHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgIGlmICgrZGF0YVNpeE1vbnRoc1swXS5jbG9zZSA+ICtkYXRhU2l4TW9udGhzW2RhdGFMYXN0RWxdLmNsb3NlKSB7XHJcbiAgICAgICAgYXJlYVNlcmllcy5hcHBseU9wdGlvbnMoe1xyXG4gICAgICAgICAgbGluZUNvbG9yOiBcIiMzNEE4NTNcIixcclxuICAgICAgICAgIHRvcENvbG9yOiBcInJnYmEoNTIsIDE2OCwgODMsIDAuNClcIixcclxuICAgICAgICAgIGJvdHRvbUNvbG9yOiBcInJnYmEoNTIsIDE2OCwgODMsIDApXCIsXHJcblxyXG4gICAgICAgICAgbGluZVdpZHRoOiAzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFyZWFTZXJpZXMuYXBwbHlPcHRpb25zKHtcclxuICAgICAgICAgIGxpbmVDb2xvcjogXCIjRUE0MzM1XCIsXHJcbiAgICAgICAgICB0b3BDb2xvcjogXCJyZ2JhKDIzNCwgNjcsIDUzLCAwLjQpXCIsXHJcbiAgICAgICAgICBib3R0b21Db2xvcjogXCJyZ2JhKDIzNCwgNjcsIDUzLCAwKVwiLFxyXG4gICAgICAgICAgbGluZVdpZHRoOiAzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhSGFuZGxlcihkYXRlQ2hhbmdlKTtcclxuICB9LCBbdGlja2VyLCBkYXRlQ2hhbmdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlcy13cmFwcGVyXCJdfVxyXG4gICAgICAgIGlkPVwiY2hhcnQtZGF0ZXMtY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlcy11bFwiXX0+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoOCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDEwRFxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDFNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogMyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDNNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogNil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDZNXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogMTIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAxWVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSgyMSAqIDEyICogNCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDRZXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnREYXRlO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGFydC1kYXRlcy1jb250YWluZXJcIjogXCJDaGFydERhdGVfY2hhcnQtZGF0ZXMtY29udGFpbmVyX18zc0laR1wiLFxuXHRcImNoYXJ0LWRhdGVzLXVsXCI6IFwiQ2hhcnREYXRlX2NoYXJ0LWRhdGVzLXVsX18yY0piSFwiLFxuXHRcImNoYXJ0LWRhdGVzXCI6IFwiQ2hhcnREYXRlX2NoYXJ0LWRhdGVzX18zR3diVFwiXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDaGFydCIsInVzZVNlbGVjdG9yIiwiY2xhc3NlcyIsIkNoYXJ0RGF0ZSIsInRpY2tlciIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImRhdGVDaGFuZ2UiLCJzZXREYXRlQ2hhbmdlIiwiZmV0Y2hEYXRhSGFuZGxlciIsImRhdGUiLCJmZXRjaERhdGEiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGF0YVNpeE1vbnRocyIsInZhbHVlcyIsInNsaWNlIiwidHJhbnNmb3JtVG9HcmFwaERhdGEiLCJtYXAiLCJ2YWwiLCJ0aW1lIiwiZGF0ZXRpbWUiLCJ2YWx1ZSIsImNsb3NlIiwicmV2ZXJzZSIsImNoYXJ0Q2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhcnRDYW52YXMxIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJjaGFydCIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwbHlPcHRpb25zIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlU2NhbGUiLCJwcmljZVNjYWxlIiwiYXV0b1NjYWxlIiwiYm9yZGVyVmlzaWJsZSIsImdyaWQiLCJ2ZXJ0TGluZXMiLCJ2aXNpYmxlIiwiaG9yekxpbmVzIiwibGF5b3V0IiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwidGltZVNjYWxlIiwiZml0Q29udGVudCIsImFyZWFTZXJpZXMiLCJhZGRBcmVhU2VyaWVzIiwic2V0RGF0YSIsInByaWNlTGluZVdpZHRoIiwicHJpY2VMaW5lU3R5bGUiLCJkYXRhTGFzdEVsIiwibGVuZ3RoIiwibGluZUNvbG9yIiwidG9wQ29sb3IiLCJib3R0b21Db2xvciIsImxpbmVXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=