(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DocumentContext", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
}));
Object.defineProperty(exports, "DocumentInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
}));
Object.defineProperty(exports, "DocumentProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
}));
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _documentContext = __webpack_require__(/*! ../shared/lib/document-context */ "../shared/lib/document-context");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, Object.assign({}, props)));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react).useContext(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\oahwi_000\\Desktop\\Stocker\\src\\pages\\_document.tsx";


class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/document-context":
/*!***********************************************************!*\
  !*** external "next/dist/shared/lib/document-context.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/document-context.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_document.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFO0FBQUEsZ0NBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFnQkQ7O0FBbEIrQjs7QUFxQmxDLGlFQUFleUYsVUFBZjs7Ozs7Ozs7OztBQ3ZCQSxpSEFBa0Q7Ozs7Ozs7Ozs7OztBQ0FsRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaGVhZC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RzLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3RzLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvc2NyaXB0LmpzIiwid2VicGFjazovL3RzLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly90cy1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovL3RzLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovL3RzLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzXCIiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly90cy1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly90cy1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdHMtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3RzLXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90cy1yZWFjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3RzLXJlYWN0L2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGluaXRIZWFkTWFuYWdlcjtcbmV4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXMgPSB2b2lkIDA7XG5jb25zdCBET01BdHRyaWJ1dGVOYW1lcyA9IHtcbiAgICBhY2NlcHRDaGFyc2V0OiAnYWNjZXB0LWNoYXJzZXQnLFxuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICBodG1sRm9yOiAnZm9yJyxcbiAgICBodHRwRXF1aXY6ICdodHRwLWVxdWl2JyxcbiAgICBub01vZHVsZTogJ25vTW9kdWxlJ1xufTtcbmV4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXMgPSBET01BdHRyaWJ1dGVOYW1lcztcbmZ1bmN0aW9uIHJlYWN0RWxlbWVudFRvRE9NKHsgdHlwZSAsIHByb3BzICB9KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvcihjb25zdCBwIGluIHByb3BzKXtcbiAgICAgICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSkgY29udGludWU7XG4gICAgICAgIGlmIChwID09PSAnY2hpbGRyZW4nIHx8IHAgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIGNvbnRpbnVlO1xuICAgICAgICAvLyB3ZSBkb24ndCByZW5kZXIgdW5kZWZpbmVkIHByb3BzIHRvIHRoZSBET01cbiAgICAgICAgaWYgKHByb3BzW3BdID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBhdHRyID0gRE9NQXR0cmlidXRlTmFtZXNbcF0gfHwgcC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3NjcmlwdCcgJiYgKGF0dHIgPT09ICdhc3luYycgfHwgYXR0ciA9PT0gJ2RlZmVyJyB8fCBhdHRyID09PSAnbm9Nb2R1bGUnKSkge1xuICAgICAgICAgICAgZWxbYXR0cl0gPSAhIXByb3BzW3BdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BzW3BdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7IGNoaWxkcmVuICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgIH0gPSBwcm9wcztcbiAgICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmpvaW4oJycpIDogJyc7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKHR5cGUsIGNvbXBvbmVudHMpIHtcbiAgICBjb25zdCBoZWFkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGNvbnN0IGhlYWRDb3VudEVsID0gaGVhZEVsLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJyk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFoZWFkQ291bnRFbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignV2FybmluZzogbmV4dC1oZWFkLWNvdW50IGlzIG1pc3NpbmcuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaGVhZC1jb3VudC1taXNzaW5nJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaGVhZENvdW50ID0gTnVtYmVyKGhlYWRDb3VudEVsLmNvbnRlbnQpO1xuICAgIGNvbnN0IG9sZFRhZ3MgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwLCBqID0gaGVhZENvdW50RWwucHJldmlvdXNFbGVtZW50U2libGluZzsgaSA8IGhlYWRDb3VudDsgaSsrLCBqID0gai5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXtcbiAgICAgICAgaWYgKGoudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0eXBlKSB7XG4gICAgICAgICAgICBvbGRUYWdzLnB1c2goaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbmV3VGFncyA9IGNvbXBvbmVudHMubWFwKHJlYWN0RWxlbWVudFRvRE9NKS5maWx0ZXIoKG5ld1RhZyk9PntcbiAgICAgICAgZm9yKGxldCBrID0gMCwgbGVuID0gb2xkVGFncy5sZW5ndGg7IGsgPCBsZW47IGsrKyl7XG4gICAgICAgICAgICBjb25zdCBvbGRUYWcgPSBvbGRUYWdzW2tdO1xuICAgICAgICAgICAgaWYgKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKSB7XG4gICAgICAgICAgICAgICAgb2xkVGFncy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIG9sZFRhZ3MuZm9yRWFjaCgodCk9PnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KVxuICAgICk7XG4gICAgbmV3VGFncy5mb3JFYWNoKCh0KT0+aGVhZEVsLmluc2VydEJlZm9yZSh0LCBoZWFkQ291bnRFbClcbiAgICApO1xuICAgIGhlYWRDb3VudEVsLmNvbnRlbnQgPSAoaGVhZENvdW50IC0gb2xkVGFncy5sZW5ndGggKyBuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGluaXRIZWFkTWFuYWdlcigpIHtcbiAgICBsZXQgdXBkYXRlUHJvbWlzZSA9IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlczogbmV3IFNldCgpLFxuICAgICAgICB1cGRhdGVIZWFkOiAoaGVhZCk9PntcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB1cGRhdGVQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlICE9PSB1cGRhdGVQcm9taXNlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IHtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGhlYWQuZm9yRWFjaCgoaCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBpdCB3b24ndCBiZSBpbmxpbmVkLiBJbiB0aGlzIGNhc2UgcmV2ZXJ0IHRvIHRoZSBvcmlnaW5hbCBiZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICBoLnR5cGUgPT09ICdsaW5rJyAmJiBoLnByb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLWhyZWY9XCIke2gucHJvcHNbJ2RhdGEtaHJlZiddfVwiXWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoLnByb3BzLmhyZWYgPSBoLnByb3BzWydkYXRhLWhyZWYnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucHJvcHNbJ2RhdGEtaHJlZiddID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0YWdzW2gudHlwZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnc1toLnR5cGVdID0gY29tcG9uZW50cztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUNvbXBvbmVudCA9IHRhZ3MudGl0bGUgPyB0YWdzLnRpdGxlWzBdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiAgfSA9IHRpdGxlQ29tcG9uZW50LnByb3BzO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyBjaGlsZHJlbiA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4uam9pbignJykgOiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSBkb2N1bWVudC50aXRsZSkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICdtZXRhJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Jhc2UnLFxuICAgICAgICAgICAgICAgICAgICAnbGluaycsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZScsXG4gICAgICAgICAgICAgICAgICAgICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgXS5mb3JFYWNoKCh0eXBlKT0+e1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVFbGVtZW50cyh0eXBlLCB0YWdzW3R5cGVdIHx8IFtdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC1tYW5hZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaW5pdFNjcmlwdExvYWRlciA9IGluaXRTY3JpcHRMb2FkZXI7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9oZWFkTWFuYWdlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTtcbnZhciBfaGVhZE1hbmFnZXIgPSByZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXJcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgU2NyaXB0Q2FjaGUgPSBuZXcgTWFwKCk7XG5jb25zdCBMb2FkQ2FjaGUgPSBuZXcgU2V0KCk7XG5jb25zdCBpZ25vcmVQcm9wcyA9IFtcbiAgICAnb25Mb2FkJyxcbiAgICAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLFxuICAgICdjaGlsZHJlbicsXG4gICAgJ29uRXJyb3InLFxuICAgICdzdHJhdGVneScsIFxuXTtcbmNvbnN0IGxvYWRTY3JpcHQgPSAocHJvcHMpPT57XG4gICAgY29uc3QgeyBzcmMgLCBpZCAsIG9uTG9hZCA9KCk9PntcbiAgICB9ICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgLCBjaGlsZHJlbiA9JycgLCBvbkVycm9yICwgIH0gPSBwcm9wcztcbiAgICBjb25zdCBjYWNoZUtleSA9IGlkIHx8IHNyYztcbiAgICAvLyBTY3JpcHQgaGFzIGFscmVhZHkgbG9hZGVkXG4gICAgaWYgKGNhY2hlS2V5ICYmIExvYWRDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ29udGVudHMgb2YgdGhpcyBzY3JpcHQgYXJlIGFscmVhZHkgbG9hZGluZy9sb2FkZWRcbiAgICBpZiAoU2NyaXB0Q2FjaGUuaGFzKHNyYykpIHtcbiAgICAgICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSk7XG4gICAgICAgIC8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cbiAgICAgICAgU2NyaXB0Q2FjaGUuZ2V0KHNyYykudGhlbihvbkxvYWQsIG9uRXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29uc3QgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICAgICAgICAgIG9uTG9hZC5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgIG9uRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3JjKSB7XG4gICAgICAgIFNjcmlwdENhY2hlLnNldChzcmMsIGxvYWRQcm9taXNlKTtcbiAgICB9XG4gICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSk7XG4gICAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJztcbiAgICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IGNoaWxkcmVuIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKCcnKSA6ICcnO1xuICAgIH0gZWxzZSBpZiAoc3JjKSB7XG4gICAgICAgIGVsLnNyYyA9IHNyYztcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSl7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlnbm9yZVByb3BzLmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdHRyID0gX2hlYWRNYW5hZ2VyLkRPTUF0dHJpYnV0ZU5hbWVzW2tdIHx8IGsudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG59O1xuZnVuY3Rpb24gaGFuZGxlQ2xpZW50U2NyaXB0TG9hZChwcm9wcykge1xuICAgIGNvbnN0IHsgc3RyYXRlZ3kgPSdhZnRlckludGVyYWN0aXZlJyAgfSA9IHByb3BzO1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgICAgIGxvYWRTY3JpcHQocHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5T25sb2FkJykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PmxvYWRTY3JpcHQocHJvcHMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb2FkTGF6eVNjcmlwdChwcm9wcykge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+bG9hZFNjcmlwdChwcm9wcylcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PmxvYWRTY3JpcHQocHJvcHMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zKSB7XG4gICAgc2NyaXB0TG9hZGVySXRlbXMuZm9yRWFjaChoYW5kbGVDbGllbnRTY3JpcHRMb2FkKTtcbn1cbmZ1bmN0aW9uIFNjcmlwdChwcm9wcykge1xuICAgIGNvbnN0IHsgc3JjID0nJyAsIG9uTG9hZCA9KCk9PntcbiAgICB9ICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgLCBzdHJhdGVneSA9J2FmdGVySW50ZXJhY3RpdmUnICwgb25FcnJvciAgfSA9IHByb3BzLCByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInNyY1wiLCBcIm9uTG9hZFwiLCBcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIsIFwic3RyYXRlZ3lcIiwgXCJvbkVycm9yXCJdKTtcbiAgICAvLyBDb250ZXh0IGlzIGF2YWlsYWJsZSBvbmx5IGR1cmluZyBTU1JcbiAgICBjb25zdCB7IHVwZGF0ZVNjcmlwdHMgLCBzY3JpcHRzICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgICBsb2FkU2NyaXB0KHByb3BzKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgICAgICAgICBsb2FkTGF6eVNjcmlwdChwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHByb3BzLFxuICAgICAgICBzdHJhdGVneVxuICAgIF0pO1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgICAgICBpZiAodXBkYXRlU2NyaXB0cykge1xuICAgICAgICAgICAgc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSA9IChzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICAgICAgICAgIF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvclxuICAgICAgICAgICAgICAgIH0sIHJlc3RQcm9wcyksIFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB1cGRhdGVTY3JpcHRzKHNjcmlwdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9hZFNjcmlwdChwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG52YXIgX2RlZmF1bHQgPSBTY3JpcHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NyaXB0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRG9jdW1lbnRDb250ZXh0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuRG9jdW1lbnRDb250ZXh0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRG9jdW1lbnRJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5Eb2N1bWVudEluaXRpYWxQcm9wcztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvY3VtZW50UHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5Eb2N1bWVudFByb3BzO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5IdG1sID0gSHRtbDtcbmV4cG9ydHMuTWFpbiA9IE1haW47XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfc2VydmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO1xudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9jb25zdGFudHNcIik7XG52YXIgX2RvY3VtZW50Q29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2RvY3VtZW50LWNvbnRleHRcIik7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG52YXIgX2dldFBhZ2VGaWxlcyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXNcIik7XG52YXIgX3V0aWxzMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvdXRpbHNcIik7XG52YXIgX2h0bWxlc2NhcGUgPSByZXF1aXJlKFwiLi4vc2VydmVyL2h0bWxlc2NhcGVcIik7XG52YXIgX3NjcmlwdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NsaWVudC9zY3JpcHRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gICAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdPYmogPSB7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3T2JqLmRlZmF1bHQgPSBvYmo7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhidWlsZE1hbmlmZXN0LCBwYXRobmFtZSwgaW5BbXBNb2RlKSB7XG4gICAgY29uc3Qgc2hhcmVkRmlsZXMgPSAoMCwgX2dldFBhZ2VGaWxlcykuZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpO1xuICAgIGNvbnN0IHBhZ2VGaWxlcyA9IGluQW1wTW9kZSA/IFtdIDogKDAsIF9nZXRQYWdlRmlsZXMpLmdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCBwYXRobmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hhcmVkRmlsZXMsXG4gICAgICAgIHBhZ2VGaWxlcyxcbiAgICAgICAgYWxsRmlsZXM6IFtcbiAgICAgICAgICAgIC4uLm5ldyBTZXQoW1xuICAgICAgICAgICAgICAgIC4uLnNoYXJlZEZpbGVzLFxuICAgICAgICAgICAgICAgIC4uLnBhZ2VGaWxlc1xuICAgICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRQb2x5ZmlsbFNjcmlwdHMoY29udGV4dCwgcHJvcHMpIHtcbiAgICAvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbiAgICAvLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgYnVpbGRNYW5pZmVzdCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcy5maWx0ZXIoKHBvbHlmaWxsKT0+cG9seWZpbGwuZW5kc1dpdGgoJy5qcycpICYmICFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgKS5tYXAoKHBvbHlmaWxsKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGtleTogcG9seWZpbGwsXG4gICAgICAgICAgICBkZWZlcjogIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXG4gICAgICAgICAgICBub01vZHVsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gXG4gICAgICAgIH0pXG4gICAgKTtcbn1cbmZ1bmN0aW9uIGdldFByZU5leHRTY3JpcHRzKGNvbnRleHQsIHByb3BzKSB7XG4gICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAgfSA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcCgoZmlsZSwgaW5kZXgpPT57XG4gICAgICAgIGNvbnN0IHsgc3RyYXRlZ3kgLCAuLi5zY3JpcHRQcm9wcyB9ID0gZmlsZTtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgc2NyaXB0UHJvcHMsIHtcbiAgICAgICAgICAgIGtleTogc2NyaXB0UHJvcHMuc3JjIHx8IGluZGV4LFxuICAgICAgICAgICAgZGVmZXI6ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgIH0pKSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREeW5hbWljQ2h1bmtzKGNvbnRleHQsIHByb3BzLCBmaWxlcykge1xuICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMgLCBhc3NldFByZWZpeCAsIGlzRGV2ZWxvcG1lbnQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSBjb250ZXh0O1xuICAgIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpPT57XG4gICAgICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoZmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGFzeW5jOiAhaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTY3JpcHRzKGNvbnRleHQsIHByb3BzLCBmaWxlcykge1xuICAgIHZhciByZWY7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGJ1aWxkTWFuaWZlc3QgLCBpc0RldmVsb3BtZW50ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gY29udGV4dDtcbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKT0+ZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICApO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cyA9IChyZWYgPSBidWlsZE1hbmlmZXN0Lmxvd1ByaW9yaXR5RmlsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAuLi5ub3JtYWxTY3JpcHRzLFxuICAgICAgICAuLi5sb3dQcmlvcml0eVNjcmlwdHNcbiAgICBdLm1hcCgoZmlsZSk9PntcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBhc3luYzogIWlzRGV2ZWxvcG1lbnQgJiYgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBkZWZlcjogIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuY2xhc3MgRG9jdW1lbnQxIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4gICAgICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwKT0+e1xuICAgICAgICAgICAgcmV0dXJuIChwcm9wcyk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHAsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHByb3BzKSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBodG1sICwgaGVhZCAgfSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKHtcbiAgICAgICAgICAgIGVuaGFuY2VBcHBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgICAgICAgIC4uLigwLCBfc2VydmVyKS5kZWZhdWx0KClcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBoZWFkLFxuICAgICAgICAgICAgc3R5bGVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyByZW5kZXJEb2N1bWVudChEb2N1bWVudENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IHByb3BzXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChEb2N1bWVudENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIH0sIHByb3BzKSkpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEh0bWwsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWFpbiwgbnVsbCksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChOZXh0U2NyaXB0LCBudWxsKSkpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEb2N1bWVudDE7XG5mdW5jdGlvbiBIdG1sKHByb3BzKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUgLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgLCBsb2NhbGUgIH0gPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtcbiAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuSHRtbCA9IHRydWU7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcHJvcHMsIHtcbiAgICAgICAgbGFuZzogcHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBhbXA6IGluQW1wTW9kZSA/ICcnIDogdW5kZWZpbmVkLFxuICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgfSkpKTtcbn1cbmNsYXNzIEhlYWQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50IHtcbiAgICBnZXRDc3NMaW5rcyhmaWxlcykge1xuICAgICAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkeW5hbWljSW1wb3J0cyAsICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZik9PmYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFyZWRGaWxlcyA9IG5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpO1xuICAgICAgICAvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcbiAgICAgICAgLy8gd2VicGFjayBydW50aW1lIChgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5gKS5cbiAgICAgICAgbGV0IHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KFtdKTtcbiAgICAgICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IEFycmF5LmZyb20obmV3IFNldChkeW5hbWljSW1wb3J0cy5maWx0ZXIoKGZpbGUpPT5maWxlLmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgKSkpO1xuICAgICAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKTtcbiAgICAgICAgICAgIGR5bmFtaWNDc3NGaWxlcyA9IGR5bmFtaWNDc3NGaWxlcy5maWx0ZXIoKGYpPT4hKGV4aXN0aW5nLmhhcyhmKSB8fCBzaGFyZWRGaWxlcy5oYXMoZikpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKTtcbiAgICAgICAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3NzTGlua0VsZW1lbnRzID0gW107XG4gICAgICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpPT57XG4gICAgICAgICAgICBjb25zdCBpc1NoYXJlZEZpbGUgPSBzaGFyZWRGaWxlcy5oYXMoZmlsZSk7XG4gICAgICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MpIHtcbiAgICAgICAgICAgICAgICBjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBgJHtmaWxlfS1wcmVsb2FkYCxcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgICAgIGFzOiBcInN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpc1VubWFuYWdlZEZpbGUgPSB1bm1hbmdlZEZpbGVzLmhhcyhmaWxlKTtcbiAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgICAgICBcImRhdGEtbi1nXCI6IGlzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/ICcnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1uLXBcIjogaXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gdW5kZWZpbmVkIDogJydcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJiBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMpIHtcbiAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cyA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjc3NMaW5rRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50cztcbiAgICB9XG4gICAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMgLCBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpPT57XG4gICAgICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIHNjcmlwdExvYWRlciAsICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBwcmVsb2FkRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGUpPT57XG4gICAgICAgICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aCgnLmpzJyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBmaWxlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC4uLnByZWxvYWRGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSwgXG4gICAgICAgIF07XG4gICAgfVxuICAgIGdldER5bmFtaWNDaHVua3MoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcyk7XG4gICAgfVxuICAgIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgZ2V0U2NyaXB0cyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHNjcmlwdExvYWRlckl0ZW1zID0gW107XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGNoaWxkKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IF9zY3JpcHQuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcy5zdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgPSAoc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFtcbiAgICAgICAgICAgICAgICAgICAgJ2xhenlPbmxvYWQnLFxuICAgICAgICAgICAgICAgICAgICAnYWZ0ZXJJbnRlcmFjdGl2ZSdcbiAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRMb2FkZXJJdGVtcy5wdXNoKGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbHRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXIgPSBzY3JpcHRMb2FkZXJJdGVtcztcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW47XG4gICAgfVxuICAgIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZSkge1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKG5vZGUsIChjKT0+e1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ2xpbmsnICYmIGMucHJvcHNbJ2hyZWYnXSAmJiBfY29uc3RhbnRzLk9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh7IHVybCAgfSk9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybClcbiAgICAgICAgICAgICkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYy5wcm9wcyB8fCB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ107XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYy5wcm9wcyAmJiBjLnByb3BzWydjaGlsZHJlbiddKSB7XG4gICAgICAgICAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0eWxlcyAsIGFtcFBhdGggLCBpbkFtcE1vZGUgLCBoeWJyaWRBbXAgLCBjYW5vbmljYWxCYXNlICwgX19ORVhUX0RBVEFfXyAsIGRhbmdlcm91c0FzUGF0aCAsIGhlYWRUYWdzICwgdW5zdGFibGVfcnVudGltZUpTICwgdW5zdGFibGVfSnNQcmVsb2FkICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGRpc2FibGVKc1ByZWxvYWQgPSB1bnN0YWJsZV9Kc1ByZWxvYWQgPT09IGZhbHNlIHx8ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZztcbiAgICAgICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZTtcbiAgICAgICAgbGV0IHsgaGVhZCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgbGV0IGNzc1ByZWxvYWRzID0gW107XG4gICAgICAgIGxldCBvdGhlckhlYWRFbGVtZW50cyA9IFtdO1xuICAgICAgICBpZiAoaGVhZCkge1xuICAgICAgICAgICAgaGVhZC5mb3JFYWNoKChjKT0+e1xuICAgICAgICAgICAgICAgIGlmIChjICYmIGMudHlwZSA9PT0gJ2xpbmsnICYmIGMucHJvcHNbJ3JlbCddID09PSAncHJlbG9hZCcgJiYgYy5wcm9wc1snYXMnXSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgICAgICAgICBjc3NQcmVsb2Fkcy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhlYWQgPSBjc3NQcmVsb2Fkcy5jb25jYXQob3RoZXJIZWFkRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKT0+e1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNSZWFjdEhlbG1ldCA9IGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmID0gY2hpbGQucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmWydkYXRhLXJlYWN0LWhlbG1ldCddO1xuICAgICAgICAgICAgICAgIGlmICghaXNSZWFjdEhlbG1ldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hpbGQudHlwZSkgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZC50eXBlKSA9PT0gJ21ldGEnICYmIChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSBjaGlsZC5wcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5uYW1lKSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbikgY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiYgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IHRoaXMuaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbik7XG4gICAgICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2U7XG4gICAgICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZTtcbiAgICAgICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgICAgICBoZWFkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCk9PntcbiAgICAgICAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSAsIHByb3BzICB9ID0gY2hpbGQ7XG4gICAgICAgICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhZFByb3AgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgICAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgICAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAgICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSB8fCBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJiAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgICAgICBjb25zdCBjdXJTdHlsZXMgPSBBcnJheS5pc0FycmF5KHN0eWxlcykgPyBzdHlsZXMgOiBbXTtcbiAgICAgICAgaWYgKGluQW1wTW9kZSAmJiBzdHlsZXMgJiYgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICAgIHN0eWxlcy5wcm9wcyAmJiAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWwpPT57XG4gICAgICAgICAgICAgICAgdmFyIHJlZjIsIHJlZjM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsID09PSBudWxsIHx8IGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMiA9IGVsLnByb3BzKSA9PT0gbnVsbCB8fCByZWYyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMyA9IHJlZjIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpID09PSBudWxsIHx8IHJlZjMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjMuX19odG1sO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKT0+e1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCk9Pmhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlcyA9IGdldERvY3VtZW50RmlsZXModGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsIGluQW1wTW9kZSk7XG4gICAgICAgIHZhciBfbm9uY2UsIF9ub25jZTE7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCB0aGlzLnByb3BzKSwgdGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IGluQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwge1xuICAgICAgICAgICAgXCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6IHRydWUsXG4gICAgICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiBpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWRcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkpLCBjaGlsZHJlbiwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJuZXh0LWZvbnQtcHJlY29ubmVjdFwiXG4gICAgICAgIH0pLCBoZWFkLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1oZWFkLWNvdW50XCIsXG4gICAgICAgICAgICBjb250ZW50OiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpXG4gICAgICAgIH0pLCBpbkFtcE1vZGUgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICB9KSwgIWhhc0Nhbm9uaWNhbFJlbCAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgIHJlbDogXCJjYW5vbmljYWxcIixcbiAgICAgICAgICAgIGhyZWY6IGNhbm9uaWNhbEJhc2UgKyAoMCwgX3V0aWxzMSkuY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aClcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgIH0pLCBzdHlsZXMgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJhbXAtY3VzdG9tXCI6IFwiXCIsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzLm1hcCgoc3R5bGUpPT5zdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWxcbiAgICAgICAgICAgICAgICApLmpvaW4oJycpLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCAnJykucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJhbXAtYm9pbGVycGxhdGVcIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIFwiYW1wLWJvaWxlcnBsYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgfSkpLCAhaW5BbXBNb2RlICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgIWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcImFtcGh0bWxcIixcbiAgICAgICAgICAgIGhyZWY6IGNhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aClcbiAgICAgICAgfSksICFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLCAhcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbi1jc3NcIjogKF9ub25jZSA9IHRoaXMucHJvcHMubm9uY2UpICE9PSBudWxsICYmIF9ub25jZSAhPT0gdm9pZCAwID8gX25vbmNlIDogJydcbiAgICAgICAgfSksIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9JTUFHRVMgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcIm5leHQtaW1hZ2UtcHJlbG9hZFwiXG4gICAgICAgIH0pLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiAhZGlzYWJsZUpzUHJlbG9hZCAmJiB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCksICFkaXNhYmxlUnVudGltZUpTICYmICFkaXNhYmxlSnNQcmVsb2FkICYmIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyksIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwge1xuICAgICAgICAgICAgXCJkYXRhLW4tY3NzXCI6IChfbm9uY2UxID0gdGhpcy5wcm9wcy5ub25jZSkgIT09IG51bGwgJiYgX25vbmNlMSAhPT0gdm9pZCAwID8gX25vbmNlMSA6ICcnXG4gICAgICAgIH0pLCB0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwge1xuICAgICAgICAgICAgaWQ6IFwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCJcbiAgICAgICAgfSksIHN0eWxlcyB8fCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCB7XG4gICAgICAgIH0sIC4uLmhlYWRUYWdzIHx8IFtdKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuSGVhZCA9IEhlYWQ7XG5IZWFkLmNvbnRleHRUeXBlID0gX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7XG5mdW5jdGlvbiBNYWluKCkge1xuICAgIGNvbnN0IHsgaW5BbXBNb2RlICwgaHRtbCAsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCAgfSA9ICgwLCBfcmVhY3QpLnVzZUNvbnRleHQoX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQpO1xuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZTtcbiAgICBpZiAoaW5BbXBNb2RlKSByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBfY29uc3RhbnRzLkFNUF9SRU5ERVJfVEFSR0VUKSk7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlkOiBcIl9fbmV4dFwiLFxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgX19odG1sOiBodG1sXG4gICAgICAgIH1cbiAgICB9KSk7XG59XG5jbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudCB7XG4gICAgZ2V0RHluYW1pY0NodW5rcyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXRTY3JpcHRzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyAgfSA9IGRvY3VtZW50UHJvcHM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9odG1sZXNjYXBlKS5odG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NpcmN1bGFyLXN0cnVjdHVyZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGluQW1wTW9kZSAsIGJ1aWxkTWFuaWZlc3QgLCB1bnN0YWJsZV9ydW50aW1lSlMgLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlO1xuICAgICAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdCA9IHRydWU7XG4gICAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcyxcbiAgICAgICAgICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLCBcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiX19ORVhUX0RBVEFfX1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiB0cnVlXG4gICAgICAgICAgICB9KSwgYW1wRGV2RmlsZXMubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKSBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCwgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSwgaW5BbXBNb2RlKTtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgIWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyA/IGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICkgOiBudWxsLCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICBpZDogXCJfX05FWFRfREFUQV9fXCIsXG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcykpKTtcbiAgICB9XG59XG5leHBvcnRzLk5leHRTY3JpcHQgPSBOZXh0U2NyaXB0O1xuTmV4dFNjcmlwdC5jb250ZXh0VHlwZSA9IF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O1xuTmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeCA9ICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOyc7XG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGgsIGFzUGF0aCkge1xuICAgIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2RvY3VtZW50LmpzLm1hcCIsImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuXHJcbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEh0bWw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiaW5pdEhlYWRNYW5hZ2VyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicmVhY3RFbGVtZW50VG9ET00iLCJ0eXBlIiwicHJvcHMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImF0dHIiLCJ0b0xvd2VyQ2FzZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkcmVuIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJfX2h0bWwiLCJ0ZXh0Q29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJ1cGRhdGVFbGVtZW50cyIsImNvbXBvbmVudHMiLCJoZWFkRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWRDb3VudEVsIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsImhlYWRDb3VudCIsIk51bWJlciIsImNvbnRlbnQiLCJvbGRUYWdzIiwiaSIsImoiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsInB1c2giLCJuZXdUYWdzIiwibWFwIiwiZmlsdGVyIiwibmV3VGFnIiwiayIsImxlbiIsImxlbmd0aCIsIm9sZFRhZyIsImlzRXF1YWxOb2RlIiwic3BsaWNlIiwiZm9yRWFjaCIsInQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ0b1N0cmluZyIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwiU2V0IiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidGFncyIsImgiLCJocmVmIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiaW5pdFNjcmlwdExvYWRlciIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwiU2NyaXB0Q2FjaGUiLCJNYXAiLCJMb2FkQ2FjaGUiLCJpZ25vcmVQcm9wcyIsImxvYWRTY3JpcHQiLCJzcmMiLCJvbkxvYWQiLCJvbkVycm9yIiwiY2FjaGVLZXkiLCJoYXMiLCJhZGQiLCJnZXQiLCJsb2FkUHJvbWlzZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2F0Y2giLCJzZXQiLCJlbnRyaWVzIiwiaW5jbHVkZXMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVDbGllbnRTY3JpcHRMb2FkIiwic3RyYXRlZ3kiLCJsb2FkTGF6eVNjcmlwdCIsInJlYWR5U3RhdGUiLCJzY3JpcHRMb2FkZXJJdGVtcyIsIlNjcmlwdCIsInJlc3RQcm9wcyIsInVwZGF0ZVNjcmlwdHMiLCJzY3JpcHRzIiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInVzZUVmZmVjdCIsImJlZm9yZUludGVyYWN0aXZlIiwiX2RlZmF1bHQiLCJfdXRpbHMiLCJEb2N1bWVudENvbnRleHQiLCJEb2N1bWVudEluaXRpYWxQcm9wcyIsIkRvY3VtZW50UHJvcHMiLCJIdG1sIiwiTWFpbiIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NlcnZlciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfY29uc3RhbnRzIiwiX2RvY3VtZW50Q29udGV4dCIsIl9nZXRQYWdlRmlsZXMiLCJfdXRpbHMxIiwiX2h0bWxlc2NhcGUiLCJfc2NyaXB0IiwiX19lc01vZHVsZSIsIm5ld09iaiIsImRlc2MiLCJnZXREb2N1bWVudEZpbGVzIiwiYnVpbGRNYW5pZmVzdCIsInBhdGhuYW1lIiwiaW5BbXBNb2RlIiwic2hhcmVkRmlsZXMiLCJnZXRQYWdlRmlsZXMiLCJwYWdlRmlsZXMiLCJhbGxGaWxlcyIsImdldFBvbHlmaWxsU2NyaXB0cyIsImNvbnRleHQiLCJhc3NldFByZWZpeCIsImRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIiwiZGlzYWJsZU9wdGltaXplZExvYWRpbmciLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJlbmRzV2l0aCIsImRlZmVyIiwibm9uY2UiLCJjcm9zc09yaWdpbiIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJzY3JpcHRMb2FkZXIiLCJmaWxlIiwiaW5kZXgiLCJzY3JpcHRQcm9wcyIsImFzc2lnbiIsImdldER5bmFtaWNDaHVua3MiLCJmaWxlcyIsImR5bmFtaWNJbXBvcnRzIiwiaXNEZXZlbG9wbWVudCIsImFzeW5jIiwiZW5jb2RlVVJJIiwiZ2V0U2NyaXB0cyIsInJlZiIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwiRG9jdW1lbnQxIiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZW5oYW5jZUFwcCIsIkFwcCIsImh0bWwiLCJyZW5kZXJQYWdlIiwic3R5bGVzIiwicmVuZGVyRG9jdW1lbnQiLCJEb2N1bWVudENvbXBvbmVudCIsIlByb3ZpZGVyIiwicmVuZGVyIiwiSGVhZCIsIk5leHRTY3JpcHQiLCJkb2NDb21wb25lbnRzUmVuZGVyZWQiLCJsb2NhbGUiLCJsYW5nIiwiYW1wIiwiZ2V0Q3NzTGlua3MiLCJjc3NGaWxlcyIsImYiLCJ1bm1hbmdlZEZpbGVzIiwiZHluYW1pY0Nzc0ZpbGVzIiwiZnJvbSIsImV4aXN0aW5nIiwiY3NzTGlua0VsZW1lbnRzIiwiaXNTaGFyZWRGaWxlIiwiX19ORVhUX09QVElNSVpFX0NTUyIsInJlbCIsImFzIiwiaXNVbm1hbmFnZWRGaWxlIiwiX19ORVhUX09QVElNSVpFX0ZPTlRTIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zIiwiZmlsdGVyZWRDaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJfX05FWFRfREFUQV9fIiwibm9kZSIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJzb21lIiwidXJsIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwiY2xvbmVFbGVtZW50IiwiYW1wUGF0aCIsImh5YnJpZEFtcCIsImNhbm9uaWNhbEJhc2UiLCJkYW5nZXJvdXNBc1BhdGgiLCJoZWFkVGFncyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsInVuc3RhYmxlX0pzUHJlbG9hZCIsImRpc2FibGVSdW50aW1lSlMiLCJkaXNhYmxlSnNQcmVsb2FkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsInRvQXJyYXkiLCJpc1JlYWN0SGVsbWV0IiwicmVmMSIsIndhcm4iLCJuYW1lIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJwcm9wIiwicGFnZSIsImN1clN0eWxlcyIsImhhc1N0eWxlcyIsInJlZjIiLCJyZWYzIiwiX25vbmNlIiwiX25vbmNlMSIsIkZyYWdtZW50IiwiY291bnQiLCJjbGVhbkFtcFBhdGgiLCJzdHlsZSIsInJlcGxhY2UiLCJnZXRBbXBQYXRoIiwiX19ORVhUX09QVElNSVpFX0lNQUdFUyIsImNvbnRleHRUeXBlIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkb2N1bWVudFByb3BzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodG1sRXNjYXBlSnNvblN0cmluZyIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsImFtcERldkZpbGVzIiwiZGV2RmlsZXMiLCJzYWZhcmlOb21vZHVsZUZpeCIsImFzUGF0aCIsIkRvY3VtZW50IiwiTXlEb2N1bWVudCJdLCJzb3VyY2VSb290IjoiIn0=