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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixlQW1CRTtBQUNFLG1CQUFTLEVBQUVMLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNSyxhQUFhLENBQUMsS0FBSyxDQUFOLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CRixlQXlCRTtBQUNFLG1CQUFTLEVBQUVMLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNSyxhQUFhLENBQUMsS0FBSyxFQUFOLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpCRixlQStCRTtBQUNFLG1CQUFTLEVBQUVMLDZFQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNSyxhQUFhLENBQUMsS0FBSyxFQUFMLEdBQVUsQ0FBWCxDQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQStDRCxDQTVJRDs7QUE2SUEsaUVBQWVKLFNBQWY7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9DaGFydERhdGUudHN4Iiwid2VicGFjazovL3RzLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ2hhcnREYXRlLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2hhcnQgfSBmcm9tIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DaGFydERhdGUubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBDaGFydERhdGU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpY2tlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogeyB0aWNrZXI6IHN0cmluZyB9KSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUudGlja2VyO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgY29uc3QgW2RhdGVDaGFuZ2UsIHNldERhdGVDaGFuZ2VdID0gdXNlU3RhdGUoMjEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhSGFuZGxlciA9IGFzeW5jIChkYXRlOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLnR3ZWx2ZWRhdGEuY29tL3RpbWVfc2VyaWVzP3N5bWJvbD0ke3RpY2tlcn0maW50ZXJ2YWw9MWRheSZvdXRwdXRzaXplPTIwMDAmYXBpa2V5PWEyNDk3MGM5NTY2YzQ5NzM5ZTgwMDljZGIzYTYzOWYwYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhU2l4TW9udGhzID0gZGF0YS52YWx1ZXMuc2xpY2UoMCwgZGF0ZSk7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2Zvcm1Ub0dyYXBoRGF0YSA9IGRhdGFTaXhNb250aHMubWFwKFxyXG4gICAgICAgICh2YWw6IHtcclxuICAgICAgICAgIGRhdGV0aW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICBjbG9zZTogbnVtYmVyO1xyXG4gICAgICAgIH0pOiB7IHRpbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9ID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IHRpbWU6IHZhbC5kYXRldGltZSwgdmFsdWU6IHZhbC5jbG9zZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgdHJhbnNmb3JtVG9HcmFwaERhdGEucmV2ZXJzZSgpO1xyXG4gICAgICBjb25zdCBjaGFydENhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHYtbGlnaHR3ZWlnaHQtY2hhcnRzXCIpO1xyXG5cclxuICAgICAgY29uc3QgY2hhcnRDYW52YXMxOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcImNoYXJ0LWRhdGVzLWNvbnRhaW5lclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoY2hhcnRDYW52YXMpIHtcclxuICAgICAgICBjaGFydENhbnZhcy5yZW1vdmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2hhcnQ6IGFueSA9IGNyZWF0ZUNoYXJ0KGNoYXJ0Q2FudmFzMSwge1xyXG4gICAgICAgIHdpZHRoOiA1NzAsXHJcbiAgICAgICAgaGVpZ2h0OiAyNTAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjaGFydC5hcHBseU9wdGlvbnMoe1xyXG4gICAgICAgIGhhbmRsZVNjcm9sbDogZmFsc2UsXHJcbiAgICAgICAgaGFuZGxlU2NhbGU6IGZhbHNlLFxyXG4gICAgICAgIHByaWNlU2NhbGU6IHtcclxuICAgICAgICAgIGF1dG9TY2FsZTogdHJ1ZSxcclxuICAgICAgICAgIGJvcmRlclZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgIHZlcnRMaW5lczoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBob3J6TGluZXM6IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGF5b3V0OiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjaGFydC50aW1lU2NhbGUoKS5maXRDb250ZW50KCk7XHJcbiAgICAgIGNvbnN0IGFyZWFTZXJpZXMgPSBjaGFydC5hZGRBcmVhU2VyaWVzKCk7XHJcbiAgICAgIGFyZWFTZXJpZXMuc2V0RGF0YSh0cmFuc2Zvcm1Ub0dyYXBoRGF0YSk7XHJcbiAgICAgIGFyZWFTZXJpZXMuYXBwbHlPcHRpb25zKHtcclxuICAgICAgICBwcmljZUxpbmVXaWR0aDogMCxcclxuXHJcbiAgICAgICAgcHJpY2VMaW5lU3R5bGU6IDIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhTGFzdEVsID0gZGF0YVNpeE1vbnRocy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgaWYgKCtkYXRhU2l4TW9udGhzWzBdLmNsb3NlID4gK2RhdGFTaXhNb250aHNbZGF0YUxhc3RFbF0uY2xvc2UpIHtcclxuICAgICAgICBhcmVhU2VyaWVzLmFwcGx5T3B0aW9ucyh7XHJcbiAgICAgICAgICBsaW5lQ29sb3I6IFwiIzM0QTg1M1wiLFxyXG4gICAgICAgICAgdG9wQ29sb3I6IFwicmdiYSg1MiwgMTY4LCA4MywgMC40KVwiLFxyXG4gICAgICAgICAgYm90dG9tQ29sb3I6IFwicmdiYSg1MiwgMTY4LCA4MywgMClcIixcclxuXHJcbiAgICAgICAgICBsaW5lV2lkdGg6IDMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXJlYVNlcmllcy5hcHBseU9wdGlvbnMoe1xyXG4gICAgICAgICAgbGluZUNvbG9yOiBcIiNFQTQzMzVcIixcclxuICAgICAgICAgIHRvcENvbG9yOiBcInJnYmEoMjM0LCA2NywgNTMsIDAuNClcIixcclxuICAgICAgICAgIGJvdHRvbUNvbG9yOiBcInJnYmEoMjM0LCA2NywgNTMsIDApXCIsXHJcbiAgICAgICAgICBsaW5lV2lkdGg6IDMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGFIYW5kbGVyKGRhdGVDaGFuZ2UpO1xyXG4gIH0sIFt0aWNrZXIsIGRhdGVDaGFuZ2VdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXMtY29udGFpbmVyXCJdfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzLXdyYXBwZXJcIl19XHJcbiAgICAgICAgaWQ9XCJjaGFydC1kYXRlcy1jb250YWluZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzLXVsXCJdfT5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaGFydC1kYXRlc1wiXX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUNoYW5nZSg4KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgMTBEXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgMU1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoMjEgKiAzKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgM01cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoMjEgKiA2KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgNk1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiY2hhcnQtZGF0ZXNcIl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGVDaGFuZ2UoMjEgKiAxMil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDFZXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNoYXJ0LWRhdGVzXCJdfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRlQ2hhbmdlKDIxICogMTIgKiA0KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgNFlcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaGFydERhdGU7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoYXJ0LWRhdGVzLWNvbnRhaW5lclwiOiBcIkNoYXJ0RGF0ZV9jaGFydC1kYXRlcy1jb250YWluZXJfXzNzSVpHXCIsXG5cdFwiY2hhcnQtZGF0ZXMtdWxcIjogXCJDaGFydERhdGVfY2hhcnQtZGF0ZXMtdWxfXzJjSmJIXCIsXG5cdFwiY2hhcnQtZGF0ZXNcIjogXCJDaGFydERhdGVfY2hhcnQtZGF0ZXNfXzNHd2JUXCJcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNoYXJ0IiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQ2hhcnREYXRlIiwidGlja2VyIiwic3RhdGUiLCJkYXRlQ2hhbmdlIiwic2V0RGF0ZUNoYW5nZSIsImZldGNoRGF0YUhhbmRsZXIiLCJkYXRlIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImRhdGFTaXhNb250aHMiLCJ2YWx1ZXMiLCJzbGljZSIsInRyYW5zZm9ybVRvR3JhcGhEYXRhIiwibWFwIiwidmFsIiwidGltZSIsImRhdGV0aW1lIiwidmFsdWUiLCJjbG9zZSIsInJldmVyc2UiLCJjaGFydENhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoYXJ0Q2FudmFzMSIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiY2hhcnQiLCJ3aWR0aCIsImhlaWdodCIsImFwcGx5T3B0aW9ucyIsImhhbmRsZVNjcm9sbCIsImhhbmRsZVNjYWxlIiwicHJpY2VTY2FsZSIsImF1dG9TY2FsZSIsImJvcmRlclZpc2libGUiLCJncmlkIiwidmVydExpbmVzIiwidmlzaWJsZSIsImhvcnpMaW5lcyIsImxheW91dCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInRpbWVTY2FsZSIsImZpdENvbnRlbnQiLCJhcmVhU2VyaWVzIiwiYWRkQXJlYVNlcmllcyIsInNldERhdGEiLCJwcmljZUxpbmVXaWR0aCIsInByaWNlTGluZVN0eWxlIiwiZGF0YUxhc3RFbCIsImxlbmd0aCIsImxpbmVDb2xvciIsInRvcENvbG9yIiwiYm90dG9tQ29sb3IiLCJsaW5lV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9