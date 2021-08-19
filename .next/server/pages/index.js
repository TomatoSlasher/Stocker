(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/StockCard.tsx":
/*!**************************************!*\
  !*** ./src/components/StockCard.tsx ***!
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
/* harmony import */ var _StockCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockCard.module.css */ "./src/components/StockCard.module.css");
/* harmony import */ var _StockCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_StockCard_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\StockCard.tsx";



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

/***/ "./src/components/StockHeader.tsx":
/*!****************************************!*\
  !*** ./src/components/StockHeader.tsx ***!
  \****************************************/
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
/* harmony import */ var _StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StockHeader.module.css */ "./src/components/StockHeader.module.css");
/* harmony import */ var _StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_StockHeader_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\StockHeader.tsx";




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

/***/ "./src/components/StockSearch.tsx":
/*!****************************************!*\
  !*** ./src/components/StockSearch.tsx ***!
  \****************************************/
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
/* harmony import */ var _StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StockSearch.module.css */ "./src/components/StockSearch.module.css");
/* harmony import */ var _StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_StockSearch_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ "./src/store/index.ts");

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\components\\StockSearch.tsx";





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
/* harmony import */ var _components_StockCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StockCard */ "./src/components/StockCard.tsx");
/* harmony import */ var _components_StockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StockHeader */ "./src/components/StockHeader.tsx");
/* harmony import */ var _components_StockSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StockSearch */ "./src/components/StockSearch.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ "./src/store/index.ts");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\pages\\index.tsx";
 // import ChartDate from "../components/ChartDate";






const ChartDate = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/*! import() */ "src_components_ChartDate_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/ChartDate */ "./src/components/ChartDate.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/ChartDate */ "./src/components/ChartDate.tsx")],
    modules: ["index.tsx -> " + "../components/ChartDate"]
  }
});

const HomePage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: _store_index__WEBPACK_IMPORTED_MODULE_5__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockSearch__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockHeader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChartDate, {}, void 0, false, {
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

/***/ "./src/components/StockCard.module.css":
/*!*********************************************!*\
  !*** ./src/components/StockCard.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"card": "StockCard_card__28Q6Z"
};


/***/ }),

/***/ "./src/components/StockHeader.module.css":
/*!***********************************************!*\
  !*** ./src/components/StockHeader.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"stock-header-container": "StockHeader_stock-header-container__31xJg",
	"image-container": "StockHeader_image-container__1qEou",
	"company-text-container": "StockHeader_company-text-container__yVMMu",
	"company-ticker-exchange": "StockHeader_company-ticker-exchange__2A30D",
	"company-name": "StockHeader_company-name__yC26g"
};


/***/ }),

/***/ "./src/components/StockSearch.module.css":
/*!***********************************************!*\
  !*** ./src/components/StockSearch.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"ticker-search": "StockSearch_ticker-search__K8bmb",
	"search-input-container": "StockSearch_search-input-container__27Hcj",
	"search-input": "StockSearch_search-input__3R3Cs",
	"search-btn": "StockSearch_search-btn__5kOVx",
	"search-dropdown": "StockSearch_search-dropdown__3u5UW",
	"search-li": "StockSearch_search-li__2-gbF",
	"ticker-name": "StockSearch_ticker-name__42D1T",
	"exchange-container": "StockSearch_exchange-container__3lvDT"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQWxDO0FBRVAsaUVBQWViLEtBQWY7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU3RvY2tDYXJkLnRzeCIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1N0b2NrSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1N0b2NrU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TdG9ja0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1N0b2NrSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TdG9ja1NlYXJjaC5tb2R1bGUuY3NzIiwid2VicGFjazovL3RzLXJlYWN0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3RzLXJlYWN0L2V4dGVybmFsIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCIiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly90cy1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RzLXJlYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9TdG9ja0NhcmQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ2hhcnRDYXJkOiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaGFydENhcmQ7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vU3RvY2tIZWFkZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgU3RvY2tIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpY2tlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogeyB0aWNrZXI6IHN0cmluZyB9KSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUudGlja2VyO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbQ29tcGFueUxvZ29VUkwsIHNldENvbXBhbnlMb2dvVVJMXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtDb21wYW55TmFtZSwgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0NvbXBhbnlUaWNrZXIsIHNldENvbXBhbnlUaWNrZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0NvbXBhbnlFeGNoYW5nZSwgc2V0Q29tcGFueUV4Y2hhbmdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtDb21wYW55UHJpY2UsIHNldENvbXBhbnlQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YUhhbmRsZXIgPSBhc3luYyAodGlja2VyOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZmluYW5jaWFsbW9kZWxpbmdwcmVwLmNvbS9hcGkvdjMvcHJvZmlsZS8ke3RpY2tlcn0/YXBpa2V5PTFlOTI2ZmE0YmE5ZjYyNjBmOTU2NDI4ZWNiOWY2YTYzYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YS5qc29uKCk7XHJcbiAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRDb21wYW55TG9nb1VSTChgJHtkYXRhWzBdLmltYWdlfWApO1xyXG4gICAgICAgIHNldENvbXBhbnlOYW1lKGAke2RhdGFbMF0uY29tcGFueU5hbWV9YCk7XHJcbiAgICAgICAgc2V0Q29tcGFueVRpY2tlcihgJHtkYXRhWzBdLnN5bWJvbH1gKTtcclxuICAgICAgICBzZXRDb21wYW55RXhjaGFuZ2UoYCR7ZGF0YVswXS5leGNoYW5nZVNob3J0TmFtZX1gKTtcclxuICAgICAgICBzZXRDb21wYW55UHJpY2UoYCR7ZGF0YVswXS5wcmljZS50b0ZpeGVkKDIpfWApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhSGFuZGxlcih0aWNrZXIpO1xyXG4gIH0sIFt0aWNrZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wic3RvY2staGVhZGVyLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wiaW1hZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8aW1nIHNyYz17Q29tcGFueUxvZ29VUkx9IGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJjb21wYW55LXRleHQtY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXNbXCJjb21wYW55LW5hbWVcIl19PntDb21wYW55TmFtZX08L3A+XHJcbiAgICAgICAgPGgxPntDb21wYW55UHJpY2V9PC9oMT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJjb21wYW55LXRpY2tlci1leGNoYW5nZVwiXX0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LWV4Y2hhbmdlXCI+e0NvbXBhbnlFeGNoYW5nZX06PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS10aWNrZXJcIj57Q29tcGFueVRpY2tlcn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tIZWFkZXI7XHJcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1N0b2NrU2VhcmNoLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB0aWNrZXJBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcblxyXG5jb25zdCBTdG9ja1NlYXJjaCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdGlja2VyQ2hhbmdlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHF1ZXJ5TGk6IGFueSA9IHVzZVJlZihbXSk7XHJcbiAgY29uc3QgW3RpY2tlckRhdGEsIHNldFRpY2tlckRhdGFdOiBhbnkgPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgbGV0IHRpbWVyOiBhbnk7XHJcbiAgY29uc3QgdGlja2VyQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFRleHQgPSB0aWNrZXJDaGFuZ2VSZWYuY3VycmVudCEudmFsdWU7XHJcbiAgICAgIHNldFNlYXJjaFF1ZXJ5KGlucHV0VGV4dCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFNlYXJjaCA9IGFzeW5jIChxdWVyeTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpY2tlckZldGNoID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZmluYW5jaWFsbW9kZWxpbmdwcmVwLmNvbS9hcGkvdjMvc2VhcmNoP3F1ZXJ5PSR7cXVlcnl9JmxpbWl0PTEwJmV4Y2hhbmdlPU5BU0RBUSZhcGlrZXk9MWU5MjZmYTRiYTlmNjI2MGY5NTY0MjhlY2I5ZjZhNjNgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aWNrZXJGZXRjaC5qc29uKCk7XHJcbiAgICAgIHNldFRpY2tlckRhdGEoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHNlYXJjaFF1ZXJ5KSB7XHJcbiAgICAgIGZldGNoU2VhcmNoKHNlYXJjaFF1ZXJ5KTtcclxuICAgIH1cclxuICB9LCBbc2VhcmNoUXVlcnldKTtcclxuXHJcbiAgY29uc3QgcXVlcnlDbGlja0hhbmRsZXI6IGFueSA9IChpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgcXVlcnlUaWNrZXIgPSBxdWVyeUxpLmN1cnJlbnRbaWR4XS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgIGRpc3BhdGNoKHRpY2tlckFjdGlvbnMuZ2V0VGlja2VyKHF1ZXJ5VGlja2VyKSk7XHJcbiAgICBzZXRUaWNrZXJEYXRhKFtdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJ0aWNrZXItc2VhcmNoXCJdfT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzW1wic2VhcmNoLWZvcm1cIl19IG9uQ2hhbmdlPXt0aWNrZXJDaGFuZ2VIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInNlYXJjaC1pbnB1dC1jb250YWluZXJcIl19PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXNbXCJzZWFyY2gtYnRuXCJdfSB0eXBlb2Y9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJzZWFyY2gtaW5wdXRcIl19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggY29tcGFueVwiXHJcbiAgICAgICAgICAgIHJlZj17dGlja2VyQ2hhbmdlUmVmfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7c2VhcmNoUXVlcnkgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJzZWFyY2gtZHJvcGRvd25cIl19PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7dGlja2VyRGF0YS5tYXAoKGRhdGE6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17KHJlZikgPT4gKHF1ZXJ5TGkuY3VycmVudFtpZHhdID0gcmVmKX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcXVlcnlDbGlja0hhbmRsZXIoaWR4KX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wic2VhcmNoLWxpXCJdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXNbXCJ0aWNrZXItbmFtZVwiXX0+e2RhdGEubmFtZX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcImV4Y2hhbmdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VhcmNoLWV4Y2hhbmdlXCI+e2RhdGEuZXhjaGFuZ2VTaG9ydE5hbWV9OjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWFyY2gtdGlja2VyXCI+e2RhdGEuc3ltYm9sfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9ja1NlYXJjaDtcclxuIiwiaW1wb3J0IFN0b2NrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9ja0NhcmRcIjtcclxuLy8gaW1wb3J0IENoYXJ0RGF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFydERhdGVcIjtcclxuaW1wb3J0IFN0b2NrSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1N0b2NrSGVhZGVyXCI7XHJcblxyXG5pbXBvcnQgU3RvY2tTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RvY2tTZWFyY2hcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9pbmRleFwiO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5jb25zdCBDaGFydERhdGUgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvQ2hhcnREYXRlXCIpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxTdG9ja0NhcmQ+XHJcbiAgICAgICAgPFN0b2NrU2VhcmNoIC8+XHJcbiAgICAgICAgPFN0b2NrSGVhZGVyIC8+XHJcbiAgICAgICAgPENoYXJ0RGF0ZSAvPlxyXG4gICAgICA8L1N0b2NrQ2FyZD5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IHRpY2tlcjogXCJBQVBMXCIgfTtcclxuXHJcbmNvbnN0IHRpY2tlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidGlja2VyXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBnZXRUaWNrZXIoc3RhdGUsIGFjdGlvbjogYW55KSB7XHJcbiAgICAgIHN0YXRlLnRpY2tlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoeyByZWR1Y2VyOiB0aWNrZXJTbGljZS5yZWR1Y2VyIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpY2tlckFjdGlvbnMgPSB0aWNrZXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJTdG9ja0NhcmRfY2FyZF9fMjhRNlpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN0b2NrLWhlYWRlci1jb250YWluZXJcIjogXCJTdG9ja0hlYWRlcl9zdG9jay1oZWFkZXItY29udGFpbmVyX18zMXhKZ1wiLFxuXHRcImltYWdlLWNvbnRhaW5lclwiOiBcIlN0b2NrSGVhZGVyX2ltYWdlLWNvbnRhaW5lcl9fMXFFb3VcIixcblx0XCJjb21wYW55LXRleHQtY29udGFpbmVyXCI6IFwiU3RvY2tIZWFkZXJfY29tcGFueS10ZXh0LWNvbnRhaW5lcl9feVZNTXVcIixcblx0XCJjb21wYW55LXRpY2tlci1leGNoYW5nZVwiOiBcIlN0b2NrSGVhZGVyX2NvbXBhbnktdGlja2VyLWV4Y2hhbmdlX18yQTMwRFwiLFxuXHRcImNvbXBhbnktbmFtZVwiOiBcIlN0b2NrSGVhZGVyX2NvbXBhbnktbmFtZV9feUMyNmdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpY2tlci1zZWFyY2hcIjogXCJTdG9ja1NlYXJjaF90aWNrZXItc2VhcmNoX19LOGJtYlwiLFxuXHRcInNlYXJjaC1pbnB1dC1jb250YWluZXJcIjogXCJTdG9ja1NlYXJjaF9zZWFyY2gtaW5wdXQtY29udGFpbmVyX18yN0hjalwiLFxuXHRcInNlYXJjaC1pbnB1dFwiOiBcIlN0b2NrU2VhcmNoX3NlYXJjaC1pbnB1dF9fM1IzQ3NcIixcblx0XCJzZWFyY2gtYnRuXCI6IFwiU3RvY2tTZWFyY2hfc2VhcmNoLWJ0bl9fNWtPVnhcIixcblx0XCJzZWFyY2gtZHJvcGRvd25cIjogXCJTdG9ja1NlYXJjaF9zZWFyY2gtZHJvcGRvd25fXzN1NVVXXCIsXG5cdFwic2VhcmNoLWxpXCI6IFwiU3RvY2tTZWFyY2hfc2VhcmNoLWxpX18yLWdiRlwiLFxuXHRcInRpY2tlci1uYW1lXCI6IFwiU3RvY2tTZWFyY2hfdGlja2VyLW5hbWVfXzQyRDFUXCIsXG5cdFwiZXhjaGFuZ2UtY29udGFpbmVyXCI6IFwiU3RvY2tTZWFyY2hfZXhjaGFuZ2UtY29udGFpbmVyX18zbHZEVFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsaWdodHdlaWdodC1jaGFydHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwiQ2hhcnRDYXJkIiwicHJvcHMiLCJjYXJkIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiU3RvY2tIZWFkZXIiLCJ0aWNrZXIiLCJzdGF0ZSIsIkNvbXBhbnlMb2dvVVJMIiwic2V0Q29tcGFueUxvZ29VUkwiLCJDb21wYW55TmFtZSIsInNldENvbXBhbnlOYW1lIiwiQ29tcGFueVRpY2tlciIsInNldENvbXBhbnlUaWNrZXIiLCJDb21wYW55RXhjaGFuZ2UiLCJzZXRDb21wYW55RXhjaGFuZ2UiLCJDb21wYW55UHJpY2UiLCJzZXRDb21wYW55UHJpY2UiLCJmZXRjaERhdGFIYW5kbGVyIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImxlbmd0aCIsImltYWdlIiwiY29tcGFueU5hbWUiLCJzeW1ib2wiLCJleGNoYW5nZVNob3J0TmFtZSIsInByaWNlIiwidG9GaXhlZCIsInVzZURpc3BhdGNoIiwidXNlUmVmIiwidGlja2VyQWN0aW9ucyIsIlN0b2NrU2VhcmNoIiwiZGlzcGF0Y2giLCJ0aWNrZXJDaGFuZ2VSZWYiLCJxdWVyeUxpIiwidGlja2VyRGF0YSIsInNldFRpY2tlckRhdGEiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwidGltZXIiLCJ0aWNrZXJDaGFuZ2VIYW5kbGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImlucHV0VGV4dCIsImN1cnJlbnQiLCJ2YWx1ZSIsImZldGNoU2VhcmNoIiwicXVlcnkiLCJ0aWNrZXJGZXRjaCIsInF1ZXJ5Q2xpY2tIYW5kbGVyIiwiaWR4IiwicXVlcnlUaWNrZXIiLCJnZXRBdHRyaWJ1dGUiLCJnZXRUaWNrZXIiLCJtYXAiLCJyZWYiLCJuYW1lIiwiU3RvY2tDYXJkIiwiUHJvdmlkZXIiLCJzdG9yZSIsImR5bmFtaWMiLCJDaGFydERhdGUiLCJzc3IiLCJIb21lUGFnZSIsImNyZWF0ZVNsaWNlIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ0aWNrZXJTbGljZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==