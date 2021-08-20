(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Home-Components/StockCard.tsx":
/*!******************************************************!*\
  !*** ./src/components/Home-Components/StockCard.tsx ***!
  \******************************************************/
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
/* harmony import */ var _StockCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockCard.module.css */ "./src/components/Home-Components/StockCard.module.css");
/* harmony import */ var _StockCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_StockCard_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\Home-Components\\StockCard.tsx";



const ChartCard = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_StockCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartCard);

/***/ }),

/***/ "./src/components/Home-Components/StockHeader.tsx":
/*!********************************************************!*\
  !*** ./src/components/Home-Components/StockHeader.tsx ***!
  \********************************************************/
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
/* harmony import */ var _StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StockHeader.module.css */ "./src/components/Home-Components/StockHeader.module.css");
/* harmony import */ var _StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\Home-Components\\StockHeader.tsx";




const StockHeader = () => {
  const ticker = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => {
    return state.ticker;
  });
  const {
    0: CompanyLogoURL,
    1: setCompanyLogoURL
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: CompanyName,
    1: setCompanyName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: CompanyTicker,
    1: setCompanyTicker
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: CompanyExchange,
    1: setCompanyExchange
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: CompanyPrice,
    1: setCompanyPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchDataHandler = async ticker => {
      const fetchData = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=1e926fa4ba9f6260f956428ecb9f6a63`);
      const data = await fetchData.json();

      if (data.length > 0) {
        setCompanyLogoURL(`${data[0].image}`);
        setCompanyName(`${data[0].companyName}`);
        setCompanyTicker(`${data[0].symbol}`);
        setCompanyExchange(`${data[0].exchangeShortName}`);
        setCompanyPrice(`${data[0].price.toFixed(2)}`);
      }
    };

    fetchDataHandler(ticker);
  }, [ticker]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default()["stock-header-container"]),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default()["image-container"]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: CompanyLogoURL,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default()["company-text-container"]),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default()["company-name"]),
        children: CompanyName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: CompanyPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default()["company-ticker-exchange"]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "company-exchange",
          children: [CompanyExchange, ":"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "company-ticker",
          children: CompanyTicker
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StockHeader);

/***/ }),

/***/ "./src/components/Home-Components/StockSearch.tsx":
/*!********************************************************!*\
  !*** ./src/components/Home-Components/StockSearch.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StockSearch.module.css */ "./src/components/Home-Components/StockSearch.module.css");
/* harmony import */ var _StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.ts");

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\Home-Components\\StockSearch.tsx";





const StockSearch = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const tickerChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const queryLi = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
  const {
    0: tickerData,
    1: setTickerData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: searchQuery,
    1: setSearchQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  let timer;

  const tickerChangeHandler = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const inputText = tickerChangeRef.current.value;
      setSearchQuery(inputText);
    }, 500);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const fetchSearch = async query => {
      const tickerFetch = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=1e926fa4ba9f6260f956428ecb9f6a63`);
      const data = await tickerFetch.json();
      setTickerData(data);
    };

    if (searchQuery) {
      fetchSearch(searchQuery);
    }
  }, [searchQuery]);

  const queryClickHandler = idx => {
    const queryTicker = queryLi.current[idx].getAttribute("value");
    dispatch(_store_index__WEBPACK_IMPORTED_MODULE_3__.tickerActions.getTicker(queryTicker));
    setTickerData([]);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["ticker-search"]),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search-form"]),
      onChange: tickerChangeHandler,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search-input-container"]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search-btn"]),
          typeof: "submit",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search-input"]),
          type: "text",
          placeholder: "search company",
          ref: tickerChangeRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), searchQuery ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search-dropdown"]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: tickerData.map((data, idx) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            value: data.symbol,
            ref: ref => queryLi.current[idx] = ref,
            onClick: () => queryClickHandler(idx),
            className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search-li"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["ticker-name"]),
              children: data.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default()["exchange-container"]),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "search-exchange",
                children: [data.exchangeShortName, ":"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "search-ticker",
                children: data.symbol
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 19
            }, undefined)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, undefined) : ""]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StockSearch);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Components_StockCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home-Components/StockCard */ "./src/components/Home-Components/StockCard.tsx");
/* harmony import */ var _components_Home_Components_StockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home-Components/StockHeader */ "./src/components/Home-Components/StockHeader.tsx");
/* harmony import */ var _components_Home_Components_StockSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home-Components/StockSearch */ "./src/components/Home-Components/StockSearch.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ "./src/store/index.ts");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\pages\\index.tsx";
 // import ChartDate from "../components/ChartDate";






const ChartDate = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/*! import() */ "src_components_Home-Components_ChartDate_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Home-Components/ChartDate */ "./src/components/Home-Components/ChartDate.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/Home-Components/ChartDate */ "./src/components/Home-Components/ChartDate.tsx")],
    modules: ["index.tsx -> " + "../components/Home-Components/ChartDate"]
  }
});

const HomePage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: _store_index__WEBPACK_IMPORTED_MODULE_5__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Components_StockCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Components_StockSearch__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Components_StockHeader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChartDate, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tickerActions": () => (/* binding */ tickerActions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  ticker: "AAPL"
};
const tickerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "ticker",
  initialState,
  reducers: {
    getTicker(state, action) {
      state.ticker = action.payload;
    }

  }
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: tickerSlice.reducer
});
const tickerActions = tickerSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/components/Home-Components/StockCard.module.css":
/*!*************************************************************!*\
  !*** ./src/components/Home-Components/StockCard.module.css ***!
  \*************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"card": "StockCard_card__3m2Ou"
};


/***/ }),

/***/ "./src/components/Home-Components/StockHeader.module.css":
/*!***************************************************************!*\
  !*** ./src/components/Home-Components/StockHeader.module.css ***!
  \***************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"stock-header-container": "StockHeader_stock-header-container__pCPyU",
	"image-container": "StockHeader_image-container__3-5EP",
	"company-text-container": "StockHeader_company-text-container__3RW7D",
	"company-ticker-exchange": "StockHeader_company-ticker-exchange__5Hi6L",
	"company-name": "StockHeader_company-name__1t0fe"
};


/***/ }),

/***/ "./src/components/Home-Components/StockSearch.module.css":
/*!***************************************************************!*\
  !*** ./src/components/Home-Components/StockSearch.module.css ***!
  \***************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"ticker-search": "StockSearch_ticker-search__3Tcu8",
	"search-input-container": "StockSearch_search-input-container__29NeE",
	"search-input": "StockSearch_search-input__1bI-7",
	"search-btn": "StockSearch_search-btn__B2U5k",
	"search-dropdown": "StockSearch_search-dropdown__3qPXe",
	"search-li": "StockSearch_search-li__37Fl8",
	"ticker-name": "StockSearch_ticker-name__1B9DB",
	"exchange-container": "StockSearch_exchange-container__3qCD9"
};


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "lightweight-charts":
/*!*************************************!*\
  !*** external "lightweight-charts" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lightweight-charts");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEM7QUFFUCxpRUFBZWIsS0FBZjs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Ib21lLUNvbXBvbmVudHMvU3RvY2tDYXJkLnRzeCIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0hvbWUtQ29tcG9uZW50cy9TdG9ja0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Ib21lLUNvbXBvbmVudHMvU3RvY2tTZWFyY2gudHN4Iiwid2VicGFjazovL3RzLXJlYWN0Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0hvbWUtQ29tcG9uZW50cy9TdG9ja0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0hvbWUtQ29tcG9uZW50cy9TdG9ja0hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovL3RzLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvSG9tZS1Db21wb25lbnRzL1N0b2NrU2VhcmNoLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvZXh0ZXJuYWwgXCJsaWdodHdlaWdodC1jaGFydHNcIiIsIndlYnBhY2s6Ly90cy1yZWFjdC9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3RzLXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90cy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1N0b2NrQ2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDaGFydENhcmQ6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q2FyZDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9TdG9ja0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBTdG9ja0hlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGlja2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiB7IHRpY2tlcjogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS50aWNrZXI7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtDb21wYW55TG9nb1VSTCwgc2V0Q29tcGFueUxvZ29VUkxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0NvbXBhbnlOYW1lLCBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbQ29tcGFueVRpY2tlciwgc2V0Q29tcGFueVRpY2tlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbQ29tcGFueUV4Y2hhbmdlLCBzZXRDb21wYW55RXhjaGFuZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0NvbXBhbnlQcmljZSwgc2V0Q29tcGFueVByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhSGFuZGxlciA9IGFzeW5jICh0aWNrZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9maW5hbmNpYWxtb2RlbGluZ3ByZXAuY29tL2FwaS92My9wcm9maWxlLyR7dGlja2VyfT9hcGlrZXk9MWU5MjZmYTRiYTlmNjI2MGY5NTY0MjhlY2I5ZjZhNjNgXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcclxuICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldENvbXBhbnlMb2dvVVJMKGAke2RhdGFbMF0uaW1hZ2V9YCk7XHJcbiAgICAgICAgc2V0Q29tcGFueU5hbWUoYCR7ZGF0YVswXS5jb21wYW55TmFtZX1gKTtcclxuICAgICAgICBzZXRDb21wYW55VGlja2VyKGAke2RhdGFbMF0uc3ltYm9sfWApO1xyXG4gICAgICAgIHNldENvbXBhbnlFeGNoYW5nZShgJHtkYXRhWzBdLmV4Y2hhbmdlU2hvcnROYW1lfWApO1xyXG4gICAgICAgIHNldENvbXBhbnlQcmljZShgJHtkYXRhWzBdLnByaWNlLnRvRml4ZWQoMil9YCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGFIYW5kbGVyKHRpY2tlcik7XHJcbiAgfSwgW3RpY2tlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJzdG9jay1oZWFkZXItY29udGFpbmVyXCJdfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJpbWFnZS1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxpbWcgc3JjPXtDb21wYW55TG9nb1VSTH0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNvbXBhbnktdGV4dC1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNvbXBhbnktbmFtZVwiXX0+e0NvbXBhbnlOYW1lfTwvcD5cclxuICAgICAgICA8aDE+e0NvbXBhbnlQcmljZX08L2gxPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcImNvbXBhbnktdGlja2VyLWV4Y2hhbmdlXCJdfT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktZXhjaGFuZ2VcIj57Q29tcGFueUV4Y2hhbmdlfTo8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LXRpY2tlclwiPntDb21wYW55VGlja2VyfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0hlYWRlcjtcclxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vU3RvY2tTZWFyY2gubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHRpY2tlckFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvaW5kZXhcIjtcclxuXHJcbmNvbnN0IFN0b2NrU2VhcmNoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB0aWNrZXJDaGFuZ2VSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgcXVlcnlMaTogYW55ID0gdXNlUmVmKFtdKTtcclxuICBjb25zdCBbdGlja2VyRGF0YSwgc2V0VGlja2VyRGF0YV06IGFueSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBsZXQgdGltZXI6IGFueTtcclxuICBjb25zdCB0aWNrZXJDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0VGV4dCA9IHRpY2tlckNoYW5nZVJlZi5jdXJyZW50IS52YWx1ZTtcclxuICAgICAgc2V0U2VhcmNoUXVlcnkoaW5wdXRUZXh0KTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoU2VhcmNoID0gYXN5bmMgKHF1ZXJ5OiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgdGlja2VyRmV0Y2ggPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9maW5hbmNpYWxtb2RlbGluZ3ByZXAuY29tL2FwaS92My9zZWFyY2g/cXVlcnk9JHtxdWVyeX0mbGltaXQ9MTAmZXhjaGFuZ2U9TkFTREFRJmFwaWtleT0xZTkyNmZhNGJhOWY2MjYwZjk1NjQyOGVjYjlmNmE2M2BcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRpY2tlckZldGNoLmpzb24oKTtcclxuICAgICAgc2V0VGlja2VyRGF0YShkYXRhKTtcclxuICAgIH07XHJcbiAgICBpZiAoc2VhcmNoUXVlcnkpIHtcclxuICAgICAgZmV0Y2hTZWFyY2goc2VhcmNoUXVlcnkpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWFyY2hRdWVyeV0pO1xyXG5cclxuICBjb25zdCBxdWVyeUNsaWNrSGFuZGxlcjogYW55ID0gKGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeVRpY2tlciA9IHF1ZXJ5TGkuY3VycmVudFtpZHhdLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xyXG4gICAgZGlzcGF0Y2godGlja2VyQWN0aW9ucy5nZXRUaWNrZXIocXVlcnlUaWNrZXIpKTtcclxuICAgIHNldFRpY2tlckRhdGEoW10pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInRpY2tlci1zZWFyY2hcIl19PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXNbXCJzZWFyY2gtZm9ybVwiXX0gb25DaGFuZ2U9e3RpY2tlckNoYW5nZUhhbmRsZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wic2VhcmNoLWlucHV0LWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc1tcInNlYXJjaC1idG5cIl19IHR5cGVvZj1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcInNlYXJjaC1pbnB1dFwiXX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBjb21wYW55XCJcclxuICAgICAgICAgICAgcmVmPXt0aWNrZXJDaGFuZ2VSZWZ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtzZWFyY2hRdWVyeSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInNlYXJjaC1kcm9wZG93blwiXX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHt0aWNrZXJEYXRhLm1hcCgoZGF0YTogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgcmVmPXsocmVmKSA9PiAocXVlcnlMaS5jdXJyZW50W2lkeF0gPSByZWYpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBxdWVyeUNsaWNrSGFuZGxlcihpZHgpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJzZWFyY2gtbGlcIl19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlc1tcInRpY2tlci1uYW1lXCJdfT57ZGF0YS5uYW1lfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wiZXhjaGFuZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWFyY2gtZXhjaGFuZ2VcIj57ZGF0YS5leGNoYW5nZVNob3J0TmFtZX06PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlYXJjaC10aWNrZXJcIj57ZGF0YS5zeW1ib2x9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrU2VhcmNoO1xyXG4iLCJpbXBvcnQgU3RvY2tDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUtQ29tcG9uZW50cy9TdG9ja0NhcmRcIjtcclxuLy8gaW1wb3J0IENoYXJ0RGF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFydERhdGVcIjtcclxuaW1wb3J0IFN0b2NrSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUtQ29tcG9uZW50cy9TdG9ja0hlYWRlclwiO1xyXG5cclxuaW1wb3J0IFN0b2NrU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUtQ29tcG9uZW50cy9TdG9ja1NlYXJjaFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmNvbnN0IENoYXJ0RGF0ZSA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9Ib21lLUNvbXBvbmVudHMvQ2hhcnREYXRlXCIpLFxyXG4gIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8U3RvY2tDYXJkPlxyXG4gICAgICAgIDxTdG9ja1NlYXJjaCAvPlxyXG4gICAgICAgIDxTdG9ja0hlYWRlciAvPlxyXG4gICAgICAgIDxDaGFydERhdGUgLz5cclxuICAgICAgPC9TdG9ja0NhcmQ+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyB0aWNrZXI6IFwiQUFQTFwiIH07XHJcblxyXG5jb25zdCB0aWNrZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInRpY2tlclwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgZ2V0VGlja2VyKHN0YXRlLCBhY3Rpb246IGFueSkge1xyXG4gICAgICBzdGF0ZS50aWNrZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHsgcmVkdWNlcjogdGlja2VyU2xpY2UucmVkdWNlciB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCB0aWNrZXJBY3Rpb25zID0gdGlja2VyU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiU3RvY2tDYXJkX2NhcmRfXzNtMk91XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdG9jay1oZWFkZXItY29udGFpbmVyXCI6IFwiU3RvY2tIZWFkZXJfc3RvY2staGVhZGVyLWNvbnRhaW5lcl9fcENQeVVcIixcblx0XCJpbWFnZS1jb250YWluZXJcIjogXCJTdG9ja0hlYWRlcl9pbWFnZS1jb250YWluZXJfXzMtNUVQXCIsXG5cdFwiY29tcGFueS10ZXh0LWNvbnRhaW5lclwiOiBcIlN0b2NrSGVhZGVyX2NvbXBhbnktdGV4dC1jb250YWluZXJfXzNSVzdEXCIsXG5cdFwiY29tcGFueS10aWNrZXItZXhjaGFuZ2VcIjogXCJTdG9ja0hlYWRlcl9jb21wYW55LXRpY2tlci1leGNoYW5nZV9fNUhpNkxcIixcblx0XCJjb21wYW55LW5hbWVcIjogXCJTdG9ja0hlYWRlcl9jb21wYW55LW5hbWVfXzF0MGZlXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aWNrZXItc2VhcmNoXCI6IFwiU3RvY2tTZWFyY2hfdGlja2VyLXNlYXJjaF9fM1RjdThcIixcblx0XCJzZWFyY2gtaW5wdXQtY29udGFpbmVyXCI6IFwiU3RvY2tTZWFyY2hfc2VhcmNoLWlucHV0LWNvbnRhaW5lcl9fMjlOZUVcIixcblx0XCJzZWFyY2gtaW5wdXRcIjogXCJTdG9ja1NlYXJjaF9zZWFyY2gtaW5wdXRfXzFiSS03XCIsXG5cdFwic2VhcmNoLWJ0blwiOiBcIlN0b2NrU2VhcmNoX3NlYXJjaC1idG5fX0IyVTVrXCIsXG5cdFwic2VhcmNoLWRyb3Bkb3duXCI6IFwiU3RvY2tTZWFyY2hfc2VhcmNoLWRyb3Bkb3duX18zcVBYZVwiLFxuXHRcInNlYXJjaC1saVwiOiBcIlN0b2NrU2VhcmNoX3NlYXJjaC1saV9fMzdGbDhcIixcblx0XCJ0aWNrZXItbmFtZVwiOiBcIlN0b2NrU2VhcmNoX3RpY2tlci1uYW1lX18xQjlEQlwiLFxuXHRcImV4Y2hhbmdlLWNvbnRhaW5lclwiOiBcIlN0b2NrU2VhcmNoX2V4Y2hhbmdlLWNvbnRhaW5lcl9fM3FDRDlcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGlnaHR3ZWlnaHQtY2hhcnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NlcyIsIkNoYXJ0Q2FyZCIsInByb3BzIiwiY2FyZCIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIlN0b2NrSGVhZGVyIiwidGlja2VyIiwic3RhdGUiLCJDb21wYW55TG9nb1VSTCIsInNldENvbXBhbnlMb2dvVVJMIiwiQ29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsIkNvbXBhbnlUaWNrZXIiLCJzZXRDb21wYW55VGlja2VyIiwiQ29tcGFueUV4Y2hhbmdlIiwic2V0Q29tcGFueUV4Y2hhbmdlIiwiQ29tcGFueVByaWNlIiwic2V0Q29tcGFueVByaWNlIiwiZmV0Y2hEYXRhSGFuZGxlciIsImZldGNoRGF0YSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJsZW5ndGgiLCJpbWFnZSIsImNvbXBhbnlOYW1lIiwic3ltYm9sIiwiZXhjaGFuZ2VTaG9ydE5hbWUiLCJwcmljZSIsInRvRml4ZWQiLCJ1c2VEaXNwYXRjaCIsInVzZVJlZiIsInRpY2tlckFjdGlvbnMiLCJTdG9ja1NlYXJjaCIsImRpc3BhdGNoIiwidGlja2VyQ2hhbmdlUmVmIiwicXVlcnlMaSIsInRpY2tlckRhdGEiLCJzZXRUaWNrZXJEYXRhIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInRpbWVyIiwidGlja2VyQ2hhbmdlSGFuZGxlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJpbnB1dFRleHQiLCJjdXJyZW50IiwidmFsdWUiLCJmZXRjaFNlYXJjaCIsInF1ZXJ5IiwidGlja2VyRmV0Y2giLCJxdWVyeUNsaWNrSGFuZGxlciIsImlkeCIsInF1ZXJ5VGlja2VyIiwiZ2V0QXR0cmlidXRlIiwiZ2V0VGlja2VyIiwibWFwIiwicmVmIiwibmFtZSIsIlN0b2NrQ2FyZCIsIlByb3ZpZGVyIiwic3RvcmUiLCJkeW5hbWljIiwiQ2hhcnREYXRlIiwic3NyIiwiSG9tZVBhZ2UiLCJjcmVhdGVTbGljZSIsImNvbmZpZ3VyZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwidGlja2VyU2xpY2UiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=