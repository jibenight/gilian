// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jbJ92":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "79e8fbb7b1922540";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5ErDU":[function(require,module,exports) {
var global = arguments[3];
function _assertThisInitialized(self1) {
    if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self1;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
/*!
 * Splide.js
 * Version  : 0.8.0
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ (function(factory) {
    typeof define === "function" && define.amd ? define(factory) : factory();
})(function() {
    "use strict";
    function empty(array) {
        array.length = 0;
    }
    function slice$1(arrayLike, start, end) {
        return Array.prototype.slice.call(arrayLike, start, end);
    }
    function apply$1(func) {
        return func.bind.apply(func, [
            null
        ].concat(slice$1(arguments, 1)));
    }
    function typeOf$1(type, subject) {
        return typeof subject === type;
    }
    var isArray$1 = Array.isArray;
    apply$1(typeOf$1, "function");
    apply$1(typeOf$1, "string");
    apply$1(typeOf$1, "undefined");
    function toArray$1(value) {
        return isArray$1(value) ? value : [
            value
        ];
    }
    function forEach$1(values, iteratee) {
        toArray$1(values).forEach(iteratee);
    }
    function includes(array, value) {
        return array.indexOf(value) > -1;
    }
    var ownKeys$1 = Object.keys;
    function forOwn$1(object, iteratee, right) {
        if (object) {
            var keys = ownKeys$1(object);
            keys = right ? keys.reverse() : keys;
            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                if (key !== "__proto__") {
                    if (iteratee(object[key], key) === false) break;
                }
            }
        }
        return object;
    }
    function assign$1(object) {
        slice$1(arguments, 1).forEach(function(source) {
            forOwn$1(source, function(value, key) {
                object[key] = source[key];
            });
        });
        return object;
    }
    var PROJECT_CODE$1 = "splide";
    function EventBinder() {
        var listeners = [];
        function bind(targets, events, callback, options) {
            forEachEvent(targets, events, function(target, event, namespace) {
                var isEventTarget = "addEventListener" in target;
                var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
                isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
                listeners.push([
                    target,
                    event,
                    namespace,
                    callback,
                    remover
                ]);
            });
        }
        function unbind(targets, events, callback) {
            forEachEvent(targets, events, function(target, event, namespace) {
                listeners = listeners.filter(function(listener) {
                    if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
                        listener[4]();
                        return false;
                    }
                    return true;
                });
            });
        }
        function dispatch(target, type, detail) {
            var e;
            var bubbles = true;
            if (typeof CustomEvent === "function") e = new CustomEvent(type, {
                bubbles: bubbles,
                detail: detail
            });
            else {
                e = document.createEvent("CustomEvent");
                e.initCustomEvent(type, bubbles, false, detail);
            }
            target.dispatchEvent(e);
            return e;
        }
        function forEachEvent(targets, events, iteratee) {
            forEach$1(targets, function(target) {
                target && forEach$1(events, function(events2) {
                    events2.split(" ").forEach(function(eventNS) {
                        var fragment = eventNS.split(".");
                        iteratee(target, fragment[0], fragment[1]);
                    });
                });
            });
        }
        function destroy() {
            listeners.forEach(function(data) {
                data[4]();
            });
            empty(listeners);
        }
        return {
            bind: bind,
            unbind: unbind,
            dispatch: dispatch,
            destroy: destroy
        };
    }
    var EVENT_MOUNTED = "mounted";
    var EVENT_MOVE = "move";
    var EVENT_MOVED = "moved";
    var EVENT_DRAG = "drag";
    var EVENT_DRAGGING = "dragging";
    var EVENT_SCROLL = "scroll";
    var EVENT_SCROLLED = "scrolled";
    var EVENT_DESTROY = "destroy";
    function EventInterface(Splide2) {
        var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
        var binder = EventBinder();
        function on(events, callback) {
            binder.bind(bus, toArray$1(events).join(" "), function(e) {
                callback.apply(callback, isArray$1(e.detail) ? e.detail : []);
            });
        }
        function emit(event) {
            binder.dispatch(bus, event, slice$1(arguments, 1));
        }
        if (Splide2) Splide2.event.on(EVENT_DESTROY, binder.destroy);
        return assign$1(binder, {
            bus: bus,
            on: on,
            off: apply$1(binder.unbind, bus),
            emit: emit
        });
    }
    function State(initialState) {
        var state = initialState;
        function set(value) {
            state = value;
        }
        function is(states) {
            return includes(toArray$1(states), state);
        }
        return {
            set: set,
            is: is
        };
    }
    var CLASS_SLIDE = PROJECT_CODE$1 + "__slide";
    var CLASS_CONTAINER = CLASS_SLIDE + "__container";
    function slice(arrayLike, start, end) {
        return Array.prototype.slice.call(arrayLike, start, end);
    }
    function find(arrayLike, predicate) {
        return slice(arrayLike).filter(predicate)[0];
    }
    function apply(func) {
        return func.bind.apply(func, [
            null
        ].concat(slice(arguments, 1)));
    }
    function typeOf(type, subject) {
        return typeof subject === type;
    }
    function isObject(subject) {
        return !isNull(subject) && typeOf("object", subject);
    }
    var isArray = Array.isArray;
    var isFunction = apply(typeOf, "function");
    var isString = apply(typeOf, "string");
    var isUndefined = apply(typeOf, "undefined");
    function isNull(subject) {
        return subject === null;
    }
    function isHTMLElement(subject) {
        return subject instanceof HTMLElement;
    }
    function toArray(value) {
        return isArray(value) ? value : [
            value
        ];
    }
    function forEach(values, iteratee) {
        toArray(values).forEach(iteratee);
    }
    function toggleClass(elm, classes, add) {
        if (elm) forEach(classes, function(name) {
            if (name) elm.classList[add ? "add" : "remove"](name);
        });
    }
    function addClass(elm, classes) {
        toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
    }
    function append(parent, children) {
        forEach(children, parent.appendChild.bind(parent));
    }
    function matches(elm, selector) {
        return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
    }
    function children(parent, selector) {
        var children2 = parent ? slice(parent.children) : [];
        return selector ? children2.filter(function(child) {
            return matches(child, selector);
        }) : children2;
    }
    function child(parent, selector) {
        return selector ? children(parent, selector)[0] : parent.firstElementChild;
    }
    var ownKeys = Object.keys;
    function forOwn(object, iteratee, right) {
        if (object) {
            var keys = ownKeys(object);
            keys = right ? keys.reverse() : keys;
            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                if (key !== "__proto__") {
                    if (iteratee(object[key], key) === false) break;
                }
            }
        }
        return object;
    }
    function assign(object) {
        slice(arguments, 1).forEach(function(source) {
            forOwn(source, function(value, key) {
                object[key] = source[key];
            });
        });
        return object;
    }
    function merge(object) {
        slice(arguments, 1).forEach(function(source) {
            forOwn(source, function(value, key) {
                if (isArray(value)) object[key] = value.slice();
                else if (isObject(value)) object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
                else object[key] = value;
            });
        });
        return object;
    }
    function removeAttribute(elms, attrs) {
        forEach(elms, function(elm) {
            forEach(attrs, function(attr) {
                elm && elm.removeAttribute(attr);
            });
        });
    }
    function setAttribute(elms, attrs, value) {
        if (isObject(attrs)) forOwn(attrs, function(value2, name) {
            setAttribute(elms, name, value2);
        });
        else forEach(elms, function(elm) {
            isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
        });
    }
    function _create(tag, attrs, parent) {
        var elm = document.createElement(tag);
        if (attrs) isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
        parent && append(parent, elm);
        return elm;
    }
    function style(elm, prop, value) {
        if (isUndefined(value)) return getComputedStyle(elm)[prop];
        if (!isNull(value)) elm.style[prop] = "" + value;
    }
    function display(elm, display2) {
        style(elm, "display", display2);
    }
    function getAttribute(elm, attr) {
        return elm.getAttribute(attr);
    }
    function hasClass(elm, className) {
        return elm && elm.classList.contains(className);
    }
    function remove(nodes) {
        forEach(nodes, function(node) {
            if (node && node.parentNode) node.parentNode.removeChild(node);
        });
    }
    function queryAll(parent, selector) {
        return selector ? slice(parent.querySelectorAll(selector)) : [];
    }
    function removeClass(elm, classes) {
        toggleClass(elm, classes, false);
    }
    var PROJECT_CODE = "splide";
    function error(message) {
        console.error("[" + PROJECT_CODE + "] " + message);
    }
    var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
    function clamp(number, x, y) {
        var minimum = min(x, y);
        var maximum = max(x, y);
        return min(max(minimum, number), maximum);
    }
    var CLASS_VIDEO = "splide__video";
    var CLASS_VIDEO_WRAPPER = CLASS_VIDEO + "__wrapper";
    var CLASS_VIDEO_PLAY_BUTTON = CLASS_VIDEO + "__play";
    var CLASS_PLAYING = "is-playing";
    var CLASS_ERROR = "is-error";
    var CLASS_VIDEO_DISABLED = "is-video-disabled";
    var MODIFIER_HAS_VIDEO = "--has-video";
    var YOUTUBE_DATA_ATTRIBUTE = "data-splide-youtube";
    var VIMEO_DATA_ATTRIBUTE = "data-splide-vimeo";
    var HTML_VIDEO__DATA_ATTRIBUTE = "data-splide-html-video";
    var DEFAULTS = {
        hideControls: false,
        loop: false,
        mute: false,
        volume: 0.2
    };
    var EVENT_VIDEO_PLAY = "video:play";
    var EVENT_VIDEO_PAUSE = "video:pause";
    var EVENT_VIDEO_ENDED = "video:ended";
    var EVENT_VIDEO_ERROR = "video:error";
    var EVENT_VIDEO_CLICK = "video:click";
    var NOT_INITIALIZED = 1;
    var INITIALIZING = 2;
    var INITIALIZED = 3;
    var PENDING_PLAY = 4;
    var IDLE = 5;
    var LOADING = 6;
    var PLAY_REQUEST_ABORTED = 7;
    var PLAYING = 8;
    var ERROR = 9;
    var AbstractVideoPlayer = /*#__PURE__*/ function() {
        function AbstractVideoPlayer(target, videoId, options) {
            this.state = State(NOT_INITIALIZED);
            this.event = EventInterface();
            this.target = target;
            this.videoId = videoId;
            this.options = options || {};
            this.onPlay = this.onPlay.bind(this);
            this.onPause = this.onPause.bind(this);
            this.onEnded = this.onEnded.bind(this);
            this.onPlayerReady = this.onPlayerReady.bind(this);
            this.onError = this.onError.bind(this);
        }
        var _proto = AbstractVideoPlayer.prototype;
        _proto.on = function on(events, callback) {
            this.event.on(events, callback);
        };
        _proto.play = function play() {
            var state = this.state;
            if (state.is(ERROR)) {
                error("Can not play this video.");
                return;
            }
            this.event.emit("play");
            if (state.is(INITIALIZING)) return state.set(PENDING_PLAY);
            if (state.is(INITIALIZED)) {
                this.player = this.createPlayer(this.videoId);
                return state.set(PENDING_PLAY);
            }
            if (state.is([
                PENDING_PLAY,
                PLAYING
            ])) return;
            if (state.is(IDLE)) {
                state.set(LOADING);
                this.playVideo();
            }
        };
        _proto.pause = function pause() {
            var state = this.state;
            if (state.is(ERROR)) return;
            this.event.emit("pause");
            if (state.is(PENDING_PLAY)) return state.set(INITIALIZING);
            if (state.is(LOADING)) return state.set(PLAY_REQUEST_ABORTED);
            if (state.is(PLAYING)) {
                this.pauseVideo();
                this.state.set(IDLE);
            }
        };
        _proto.isPaused = function isPaused() {
            return !this.state.is(PLAYING);
        };
        _proto.destroy = function destroy() {
            this.event.destroy();
        };
        _proto.onPlayerReady = function onPlayerReady() {
            var state = this.state;
            var isPending = state.is(PENDING_PLAY);
            state.set(IDLE);
            if (isPending) this.play();
        };
        _proto.onPlay = function onPlay() {
            var state = this.state;
            var aborted = state.is(PLAY_REQUEST_ABORTED);
            state.set(PLAYING);
            if (aborted) this.pause();
            else this.event.emit("played");
        };
        _proto.onPause = function onPause() {
            this.state.set(IDLE);
            this.event.emit("paused");
        };
        _proto.onEnded = function onEnded() {
            this.state.set(IDLE);
            this.event.emit("ended");
        };
        _proto.onError = function onError() {
            this.state.set(ERROR);
            this.event.emit("error");
        };
        return AbstractVideoPlayer;
    }();
    var HTMLVideoPlayer = /*#__PURE__*/ function(_AbstractVideoPlayer) {
        _inheritsLoose(HTMLVideoPlayer, _AbstractVideoPlayer);
        function HTMLVideoPlayer(target, videoId, options) {
            var _this6;
            if (options === void 0) options = {};
            _this6 = _AbstractVideoPlayer.call(this, target, videoId, options) || this;
            _this6.state.set(INITIALIZED);
            return _this6;
        }
        var _proto2 = HTMLVideoPlayer.prototype;
        _proto2.createPlayer = function createPlayer(videoId) {
            var options = this.options, _this$options$playerO = this.options.playerOptions, playerOptions = _this$options$playerO === void 0 ? {} : _this$options$playerO;
            var player = _create("video", {
                src: videoId
            }, this.target);
            var on = player.addEventListener.bind(player);
            assign(player, {
                controls: !options.hideControls,
                loop: options.loop,
                volume: clamp(options.volume, 0, 1),
                muted: options.mute
            }, playerOptions.htmlVideo || {});
            on("play", this.onPlay);
            on("pause", this.onPause);
            on("ended", this.onEnded);
            on("loadeddata", this.onPlayerReady);
            on("error", this.onError);
            return player;
        };
        _proto2.playVideo = function playVideo() {
            var promise = this.player.play();
            promise && promise["catch"](this.onError.bind(this));
        };
        _proto2.pauseVideo = function pauseVideo() {
            this.player.pause();
        };
        _proto2.onError = function onError() {
            if (this.state.is(PLAY_REQUEST_ABORTED)) this.state.set(IDLE);
            else _AbstractVideoPlayer.prototype.onError.call(this);
        };
        _proto2.destroy = function destroy() {
            _AbstractVideoPlayer.prototype.destroy.call(this);
            var player = this.player;
            var off = player.addEventListener.bind(player);
            off("play", this.onPlay);
            off("pause", this.onPause);
            off("ended", this.onEnded);
            off("loadeddata", this.onPlayerReady);
        };
        return HTMLVideoPlayer;
    }(AbstractVideoPlayer);
    /*! @vimeo/player v2.17.1 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */ function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    /**
   * @module lib/functions
   */ /**
   * Check to see this is a node environment.
   * @type {Boolean}
   */ /* global global */ var isNode = typeof global !== "undefined" && ({}).toString.call(global) === "[object global]";
    /**
   * Get the name of the method for a given getter or setter.
   *
   * @param {string} prop The name of the property.
   * @param {string} type Either “get” or “set”.
   * @return {string}
   */ function getMethodName(prop, type) {
        if (prop.indexOf(type.toLowerCase()) === 0) return prop;
        return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
    }
    /**
   * Check to see if the object is a DOM Element.
   *
   * @param {*} element The object to check.
   * @return {boolean}
   */ function isDomElement(element) {
        return Boolean(element && element.nodeType === 1 && "nodeName" in element && element.ownerDocument && element.ownerDocument.defaultView);
    }
    /**
   * Check to see whether the value is a number.
   *
   * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
   * @param {*} value The value to check.
   * @param {boolean} integer Check if the value is an integer.
   * @return {boolean}
   */ function isInteger(value) {
        // eslint-disable-next-line eqeqeq
        return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
    }
    /**
   * Check to see if the URL is a Vimeo url.
   *
   * @param {string} url The url string.
   * @return {boolean}
   */ function isVimeoUrl(url) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
    }
    /**
   * Check to see if the URL is for a Vimeo embed.
   *
   * @param {string} url The url string.
   * @return {boolean}
   */ function isVimeoEmbed(url) {
        var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
        return expr.test(url);
    }
    /**
   * Get the Vimeo URL from an element.
   * The element must have either a data-vimeo-id or data-vimeo-url attribute.
   *
   * @param {object} oEmbedParameters The oEmbed parameters.
   * @return {string}
   */ function getVimeoUrl() {
        var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var id = oEmbedParameters.id;
        var url = oEmbedParameters.url;
        var idOrUrl = id || url;
        if (!idOrUrl) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (isInteger(idOrUrl)) return "https://vimeo.com/".concat(idOrUrl);
        if (isVimeoUrl(idOrUrl)) return idOrUrl.replace("http:", "https:");
        if (id) throw new TypeError("“".concat(id, "” is not a valid video id."));
        throw new TypeError("“".concat(idOrUrl, "” is not a vimeo.com url."));
    }
    var arrayIndexOfSupport = typeof Array.prototype.indexOf !== "undefined";
    var postMessageSupport = typeof window !== "undefined" && typeof window.postMessage !== "undefined";
    if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function createCommonjsModule(fn, module) {
        return module = {
            exports: {}
        }, fn(module, module.exports), module.exports;
    }
    /*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */ (function(self1) {
        if (self1.WeakMap) return;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasDefine = Object.defineProperty && function() {
            try {
                // Avoid IE8's broken Object.defineProperty
                return Object.defineProperty({}, "x", {
                    value: 1
                }).x === 1;
            } catch (e) {}
        }();
        var defineProperty = function defineProperty(object, name, value) {
            if (hasDefine) Object.defineProperty(object, name, {
                configurable: true,
                writable: true,
                value: value
            });
            else object[name] = value;
        };
        self1.WeakMap = function() {
            // ECMA-262 23.3 WeakMap Objects
            function WeakMap1() {
                if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
                defineProperty(this, "_id", genId("_WeakMap")); // ECMA-262 23.3.1.1 WeakMap([iterable])
                if (arguments.length > 0) // Currently, WeakMap `iterable` argument is not supported
                throw new TypeError("WeakMap iterable is not supported");
            } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
            defineProperty(WeakMap1.prototype, "delete", function(key) {
                checkInstance(this, "delete");
                if (!isObject(key)) return false;
                var entry = key[this._id];
                if (entry && entry[0] === key) {
                    delete key[this._id];
                    return true;
                }
                return false;
            }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
            defineProperty(WeakMap1.prototype, "get", function(key) {
                checkInstance(this, "get");
                if (!isObject(key)) return void 0;
                var entry = key[this._id];
                if (entry && entry[0] === key) return entry[1];
                return void 0;
            }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
            defineProperty(WeakMap1.prototype, "has", function(key) {
                checkInstance(this, "has");
                if (!isObject(key)) return false;
                var entry = key[this._id];
                if (entry && entry[0] === key) return true;
                return false;
            }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
            defineProperty(WeakMap1.prototype, "set", function(key, value) {
                checkInstance(this, "set");
                if (!isObject(key)) throw new TypeError("Invalid value used as weak map key");
                var entry = key[this._id];
                if (entry && entry[0] === key) {
                    entry[1] = value;
                    return this;
                }
                defineProperty(key, this._id, [
                    key,
                    value
                ]);
                return this;
            });
            function checkInstance(x, methodName) {
                if (!isObject(x) || !hasOwnProperty.call(x, "_id")) throw new TypeError(methodName + " method called on incompatible receiver " + typeof x);
            }
            function genId(prefix) {
                return prefix + "_" + rand() + "." + rand();
            }
            function rand() {
                return Math.random().toString().substring(2);
            }
            defineProperty(WeakMap1, "_polyfill", true);
            return WeakMap1;
        }();
        function isObject(x) {
            return Object(x) === x;
        }
    })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
    var npo_src = createCommonjsModule(function(module) {
        /*! Native Promise Only
        v0.8.1 (c) Kyle Simpson
        MIT License: http://getify.mit-license.org
    */ (function UMD(name, context, definition) {
            // special form of UMD for polyfilling across evironments
            context[name] = context[name] || definition();
            if (module.exports) module.exports = context[name];
        })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
            var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer(fn) {
                return setImmediate(fn);
            } : setTimeout; // dammit, IE8.
            try {
                Object.defineProperty({}, "x", {});
                builtInProp = function builtInProp(obj, name, val, config) {
                    return Object.defineProperty(obj, name, {
                        value: val,
                        writable: true,
                        configurable: config !== false
                    });
                };
            } catch (err) {
                builtInProp = function builtInProp(obj, name, val) {
                    obj[name] = val;
                    return obj;
                };
            } // Note: using a queue instead of array for efficiency
            scheduling_queue = function Queue() {
                var first, last, item;
                function Item(fn, self1) {
                    this.fn = fn;
                    this.self = self1;
                    this.next = void 0;
                }
                return {
                    add: function add(fn, self1) {
                        item = new Item(fn, self1);
                        if (last) last.next = item;
                        else first = item;
                        last = item;
                        item = void 0;
                    },
                    drain: function drain() {
                        var f = first;
                        first = last = cycle = void 0;
                        while(f){
                            f.fn.call(f.self);
                            f = f.next;
                        }
                    }
                };
            }();
            function schedule(fn, self1) {
                scheduling_queue.add(fn, self1);
                if (!cycle) cycle = timer(scheduling_queue.drain);
            } // promise duck typing
            function isThenable(o) {
                var _then, o_type = typeof o;
                if (o != null && (o_type == "object" || o_type == "function")) _then = o.then;
                return typeof _then == "function" ? _then : false;
            }
            function notify() {
                for(var i = 0; i < this.chain.length; i++)notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
                this.chain.length = 0;
            } // NOTE: This is a separate function to isolate
            // the `try..catch` so that other code can be
            // optimized better
            function notifyIsolated(self1, cb, chain) {
                var ret, _then;
                try {
                    if (cb === false) chain.reject(self1.msg);
                    else {
                        if (cb === true) ret = self1.msg;
                        else ret = cb.call(void 0, self1.msg);
                        if (ret === chain.promise) chain.reject(TypeError("Promise-chain cycle"));
                        else if (_then = isThenable(ret)) _then.call(ret, chain.resolve, chain.reject);
                        else chain.resolve(ret);
                    }
                } catch (err) {
                    chain.reject(err);
                }
            }
            function resolve(msg) {
                var _then, self1 = this; // already triggered?
                if (self1.triggered) return;
                self1.triggered = true; // unwrap
                if (self1.def) self1 = self1.def;
                try {
                    if (_then = isThenable(msg)) schedule(function() {
                        var def_wrapper = new MakeDefWrapper(self1);
                        try {
                            _then.call(msg, function $resolve$() {
                                resolve.apply(def_wrapper, arguments);
                            }, function $reject$() {
                                reject.apply(def_wrapper, arguments);
                            });
                        } catch (err) {
                            reject.call(def_wrapper, err);
                        }
                    });
                    else {
                        self1.msg = msg;
                        self1.state = 1;
                        if (self1.chain.length > 0) schedule(notify, self1);
                    }
                } catch (err) {
                    reject.call(new MakeDefWrapper(self1), err);
                }
            }
            function reject(msg) {
                var self1 = this; // already triggered?
                if (self1.triggered) return;
                self1.triggered = true; // unwrap
                if (self1.def) self1 = self1.def;
                self1.msg = msg;
                self1.state = 2;
                if (self1.chain.length > 0) schedule(notify, self1);
            }
            function iteratePromises(Constructor, arr, resolver, rejecter) {
                for(var idx = 0; idx < arr.length; idx++)(function IIFE(idx) {
                    Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
                        resolver(idx, msg);
                    }, rejecter);
                })(idx);
            }
            function MakeDefWrapper(self1) {
                this.def = self1;
                this.triggered = false;
            }
            function MakeDef(self1) {
                this.promise = self1;
                this.state = 0;
                this.triggered = false;
                this.chain = [];
                this.msg = void 0;
            }
            function Promise1(executor) {
                if (typeof executor != "function") throw TypeError("Not a function");
                if (this.__NPO__ !== 0) throw TypeError("Not a promise");
                 // instance shadowing the inherited "brand"
                // to signal an already "initialized" promise
                this.__NPO__ = 1;
                var def = new MakeDef(this);
                this["then"] = function then(success, failure) {
                    var o = {
                        success: typeof success == "function" ? success : true,
                        failure: typeof failure == "function" ? failure : false
                    }; // Note: `then(..)` itself can be borrowed to be used against
                    // a different promise constructor for making the chained promise,
                    // by substituting a different `this` binding.
                    o.promise = new this.constructor(function extractChain(resolve, reject) {
                        if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                        o.resolve = resolve;
                        o.reject = reject;
                    });
                    def.chain.push(o);
                    if (def.state !== 0) schedule(notify, def);
                    return o.promise;
                };
                this["catch"] = function $catch$(failure) {
                    return this.then(void 0, failure);
                };
                try {
                    executor.call(void 0, function publicResolve(msg) {
                        resolve.call(def, msg);
                    }, function publicReject(msg) {
                        reject.call(def, msg);
                    });
                } catch (err) {
                    reject.call(def, err);
                }
            }
            var PromisePrototype = builtInProp({}, "constructor", Promise1, /*configurable=*/ false); // Note: Android 4 cannot use `Object.defineProperty(..)` here
            Promise1.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise
            builtInProp(PromisePrototype, "__NPO__", 0, /*configurable=*/ false);
            builtInProp(Promise1, "resolve", function Promise$resolve(msg) {
                var Constructor = this; // spec mandated checks
                // note: best "isPromise" check that's practical for now
                if (msg && typeof msg == "object" && msg.__NPO__ === 1) return msg;
                return new Constructor(function executor(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    resolve(msg);
                });
            });
            builtInProp(Promise1, "reject", function Promise$reject(msg) {
                return new this(function executor(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    reject(msg);
                });
            });
            builtInProp(Promise1, "all", function Promise$all(arr) {
                var Constructor = this; // spec mandated checks
                if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
                if (arr.length === 0) return Constructor.resolve([]);
                return new Constructor(function executor(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    var len = arr.length, msgs = Array(len), count = 0;
                    iteratePromises(Constructor, arr, function resolver(idx, msg) {
                        msgs[idx] = msg;
                        if (++count === len) resolve(msgs);
                    }, reject);
                });
            });
            builtInProp(Promise1, "race", function Promise$race(arr) {
                var Constructor = this; // spec mandated checks
                if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
                return new Constructor(function executor(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    iteratePromises(Constructor, arr, function resolver(idx, msg) {
                        resolve(msg);
                    }, reject);
                });
            });
            return Promise1;
        });
    });
    /**
   * @module lib/callbacks
   */ var callbackMap = new WeakMap();
    /**
   * Store a callback for a method or event for a player.
   *
   * @param {Player} player The player object.
   * @param {string} name The method or event name.
   * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
   *        The callback to call or an object with resolve and reject functions for a promise.
   * @return {void}
   */ function storeCallback(player, name, callback) {
        var playerCallbacks = callbackMap.get(player.element) || {};
        if (!(name in playerCallbacks)) playerCallbacks[name] = [];
        playerCallbacks[name].push(callback);
        callbackMap.set(player.element, playerCallbacks);
    }
    /**
   * Get the callbacks for a player and event or method.
   *
   * @param {Player} player The player object.
   * @param {string} name The method or event name
   * @return {function[]}
   */ function getCallbacks(player, name) {
        var playerCallbacks = callbackMap.get(player.element) || {};
        return playerCallbacks[name] || [];
    }
    /**
   * Remove a stored callback for a method or event for a player.
   *
   * @param {Player} player The player object.
   * @param {string} name The method or event name
   * @param {function} [callback] The specific callback to remove.
   * @return {boolean} Was this the last callback?
   */ function removeCallback(player, name, callback) {
        var playerCallbacks = callbackMap.get(player.element) || {};
        if (!playerCallbacks[name]) return true;
         // If no callback is passed, remove all callbacks for the event
        if (!callback) {
            playerCallbacks[name] = [];
            callbackMap.set(player.element, playerCallbacks);
            return true;
        }
        var index = playerCallbacks[name].indexOf(callback);
        if (index !== -1) playerCallbacks[name].splice(index, 1);
        callbackMap.set(player.element, playerCallbacks);
        return playerCallbacks[name] && playerCallbacks[name].length === 0;
    }
    /**
   * Return the first stored callback for a player and event or method.
   *
   * @param {Player} player The player object.
   * @param {string} name The method or event name.
   * @return {function} The callback, or false if there were none
   */ function shiftCallbacks(player, name) {
        var playerCallbacks = getCallbacks(player, name);
        if (playerCallbacks.length < 1) return false;
        var callback = playerCallbacks.shift();
        removeCallback(player, name, callback);
        return callback;
    }
    /**
   * Move callbacks associated with an element to another element.
   *
   * @param {HTMLElement} oldElement The old element.
   * @param {HTMLElement} newElement The new element.
   * @return {void}
   */ function swapCallbacks(oldElement, newElement) {
        var playerCallbacks = callbackMap.get(oldElement);
        callbackMap.set(newElement, playerCallbacks);
        callbackMap["delete"](oldElement);
    }
    /**
   * @module lib/postmessage
   */ /**
   * Parse a message received from postMessage.
   *
   * @param {*} data The data received from postMessage.
   * @return {object}
   */ function parseMessageData(data) {
        if (typeof data === "string") try {
            data = JSON.parse(data);
        } catch (error) {
            // If the message cannot be parsed, throw the error as a warning
            console.warn(error);
            return {};
        }
        return data;
    }
    /**
   * Post a message to the specified target.
   *
   * @param {Player} player The player object to use.
   * @param {string} method The API method to call.
   * @param {object} params The parameters to send to the player.
   * @return {void}
   */ function postMessage(player, method, params) {
        if (!player.element.contentWindow || !player.element.contentWindow.postMessage) return;
        var message = {
            method: method
        };
        if (params !== undefined) message.value = params;
         // IE 8 and 9 do not support passing messages, so stringify them
        var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
        if (ieVersion >= 8 && ieVersion < 10) message = JSON.stringify(message);
        player.element.contentWindow.postMessage(message, player.origin);
    }
    /**
   * Parse the data received from a message event.
   *
   * @param {Player} player The player that received the message.
   * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
   * @return {void}
   */ function processData(player, data) {
        data = parseMessageData(data);
        var callbacks = [];
        var param;
        if (data.event) {
            if (data.event === "error") {
                var promises = getCallbacks(player, data.data.method);
                promises.forEach(function(promise) {
                    var error = new Error(data.data.message);
                    error.name = data.data.name;
                    promise.reject(error);
                    removeCallback(player, data.data.method, promise);
                });
            }
            callbacks = getCallbacks(player, "event:".concat(data.event));
            param = data.data;
        } else if (data.method) {
            var callback = shiftCallbacks(player, data.method);
            if (callback) {
                callbacks.push(callback);
                param = data.value;
            }
        }
        callbacks.forEach(function(callback) {
            try {
                if (typeof callback === "function") {
                    callback.call(player, param);
                    return;
                }
                callback.resolve(param);
            } catch (e) {}
        });
    }
    /**
   * @module lib/embed
   */ var oEmbedParameters = [
        "autopause",
        "autoplay",
        "background",
        "byline",
        "color",
        "controls",
        "dnt",
        "height",
        "id",
        "interactive_params",
        "keyboard",
        "loop",
        "maxheight",
        "maxwidth",
        "muted",
        "playsinline",
        "portrait",
        "responsive",
        "speed",
        "texttrack",
        "title",
        "transparent",
        "url",
        "width"
    ];
    /**
   * Get the 'data-vimeo'-prefixed attributes from an element as an object.
   *
   * @param {HTMLElement} element The element.
   * @param {Object} [defaults={}] The default values to use.
   * @return {Object<string, string>}
   */ function getOEmbedParameters(element) {
        var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return oEmbedParameters.reduce(function(params, param) {
            var value = element.getAttribute("data-vimeo-".concat(param));
            if (value || value === "") params[param] = value === "" ? 1 : value;
            return params;
        }, defaults);
    }
    /**
   * Create an embed from oEmbed data inside an element.
   *
   * @param {object} data The oEmbed data.
   * @param {HTMLElement} element The element to put the iframe in.
   * @return {HTMLIFrameElement} The iframe embed.
   */ function createEmbed(_ref, element) {
        var html = _ref.html;
        if (!element) throw new TypeError("An element must be provided");
        if (element.getAttribute("data-vimeo-initialized") !== null) return element.querySelector("iframe");
        var div = document.createElement("div");
        div.innerHTML = html;
        element.appendChild(div.firstChild);
        element.setAttribute("data-vimeo-initialized", "true");
        return element.querySelector("iframe");
    }
    /**
   * Make an oEmbed call for the specified URL.
   *
   * @param {string} videoUrl The vimeo.com url for the video.
   * @param {Object} [params] Parameters to pass to oEmbed.
   * @param {HTMLElement} element The element.
   * @return {Promise}
   */ function getOEmbedData(videoUrl) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var element = arguments.length > 2 ? arguments[2] : undefined;
        return new Promise(function(resolve, reject) {
            if (!isVimeoUrl(videoUrl)) throw new TypeError("“".concat(videoUrl, "” is not a vimeo.com url."));
            var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));
            for(var param in params)if (params.hasOwnProperty(param)) url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
            var xhr = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function() {
                if (xhr.status === 404) {
                    reject(new Error("“".concat(videoUrl, "” was not found.")));
                    return;
                }
                if (xhr.status === 403) {
                    reject(new Error("“".concat(videoUrl, "” is not embeddable.")));
                    return;
                }
                try {
                    var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed
                    if (json.domain_status_code === 403) {
                        // We still want to create the embed to give users visual feedback
                        createEmbed(json, element);
                        reject(new Error("“".concat(videoUrl, "” is not embeddable.")));
                        return;
                    }
                    resolve(json);
                } catch (error) {
                    reject(error);
                }
            };
            xhr.onerror = function() {
                var status = xhr.status ? " (".concat(xhr.status, ")") : "";
                reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
            };
            xhr.send();
        });
    }
    /**
   * Initialize all embeds within a specific element
   *
   * @param {HTMLElement} [parent=document] The parent element.
   * @return {void}
   */ function initializeEmbeds() {
        var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
        var elements = [].slice.call(parent.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
        var handleError = function handleError(error) {
            if ("console" in window && console.error) console.error("There was an error creating an embed: ".concat(error));
        };
        elements.forEach(function(element) {
            try {
                // Skip any that have data-vimeo-defer
                if (element.getAttribute("data-vimeo-defer") !== null) return;
                var params = getOEmbedParameters(element);
                var url = getVimeoUrl(params);
                getOEmbedData(url, params, element).then(function(data) {
                    return createEmbed(data, element);
                })["catch"](handleError);
            } catch (error) {
                handleError(error);
            }
        });
    }
    /**
   * Resize embeds when messaged by the player.
   *
   * @param {HTMLElement} [parent=document] The parent element.
   * @return {void}
   */ function resizeEmbeds() {
        var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document; // Prevent execution if users include the player.js script multiple times.
        if (window.VimeoPlayerResizeEmbeds_) return;
        window.VimeoPlayerResizeEmbeds_ = true;
        var onMessage = function onMessage(event) {
            if (!isVimeoUrl(event.origin)) return;
             // 'spacechange' is fired only on embeds with cards
            if (!event.data || event.data.event !== "spacechange") return;
            var iframes = parent.querySelectorAll("iframe");
            for(var i = 0; i < iframes.length; i++){
                if (iframes[i].contentWindow !== event.source) continue;
                 // Change padding-bottom of the enclosing div to accommodate
                // card carousel without distorting aspect ratio
                var space = iframes[i].parentElement;
                space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
                break;
            }
        };
        window.addEventListener("message", onMessage);
    }
    /**
   * Add chapters to existing metadata for Google SEO
   *
   * @param {HTMLElement} [parent=document] The parent element.
   * @return {void}
   */ function initAppendVideoMetadata() {
        var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document; //  Prevent execution if users include the player.js script multiple times.
        if (window.VimeoSeoMetadataAppended) return;
        window.VimeoSeoMetadataAppended = true;
        var onMessage = function onMessage(event) {
            if (!isVimeoUrl(event.origin)) return;
            var data = parseMessageData(event.data);
            if (!data || data.event !== "ready") return;
            var iframes = parent.querySelectorAll("iframe");
            for(var i = 0; i < iframes.length; i++){
                var iframe = iframes[i]; // Initiate appendVideoMetadata if iframe is a Vimeo embed
                var isValidMessageSource = iframe.contentWindow === event.source;
                if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
                    var player = new Player$1(iframe);
                    player.callMethod("appendVideoMetadata", window.location.href);
                }
            }
        };
        window.addEventListener("message", onMessage);
    }
    /* MIT License
   Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  Terms */ function initializeScreenfull() {
        var fn = function() {
            var val;
            var fnMap = [
                [
                    "requestFullscreen",
                    "exitFullscreen",
                    "fullscreenElement",
                    "fullscreenEnabled",
                    "fullscreenchange",
                    "fullscreenerror"
                ],
                [
                    "webkitRequestFullscreen",
                    "webkitExitFullscreen",
                    "webkitFullscreenElement",
                    "webkitFullscreenEnabled",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror"
                ],
                [
                    "webkitRequestFullScreen",
                    "webkitCancelFullScreen",
                    "webkitCurrentFullScreenElement",
                    "webkitCancelFullScreen",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror"
                ],
                [
                    "mozRequestFullScreen",
                    "mozCancelFullScreen",
                    "mozFullScreenElement",
                    "mozFullScreenEnabled",
                    "mozfullscreenchange",
                    "mozfullscreenerror"
                ],
                [
                    "msRequestFullscreen",
                    "msExitFullscreen",
                    "msFullscreenElement",
                    "msFullscreenEnabled",
                    "MSFullscreenChange",
                    "MSFullscreenError"
                ]
            ];
            var i = 0;
            var l = fnMap.length;
            var ret = {};
            for(; i < l; i++){
                val = fnMap[i];
                if (val && val[1] in document) {
                    for(i = 0; i < val.length; i++)ret[fnMap[0][i]] = val[i];
                    return ret;
                }
            }
            return false;
        }();
        var eventNameMap = {
            fullscreenchange: fn.fullscreenchange,
            fullscreenerror: fn.fullscreenerror
        };
        var screenfull = {
            request: function request(element) {
                return new Promise(function(resolve, reject) {
                    var onFullScreenEntered = function onFullScreenEntered() {
                        screenfull.off("fullscreenchange", onFullScreenEntered);
                        resolve();
                    };
                    screenfull.on("fullscreenchange", onFullScreenEntered);
                    element = element || document.documentElement;
                    var returnPromise = element[fn.requestFullscreen]();
                    if (returnPromise instanceof Promise) returnPromise.then(onFullScreenEntered)["catch"](reject);
                });
            },
            exit: function exit() {
                return new Promise(function(resolve, reject) {
                    if (!screenfull.isFullscreen) {
                        resolve();
                        return;
                    }
                    var onFullScreenExit = function onFullScreenExit() {
                        screenfull.off("fullscreenchange", onFullScreenExit);
                        resolve();
                    };
                    screenfull.on("fullscreenchange", onFullScreenExit);
                    var returnPromise = document[fn.exitFullscreen]();
                    if (returnPromise instanceof Promise) returnPromise.then(onFullScreenExit)["catch"](reject);
                });
            },
            on: function on(event, callback) {
                var eventName = eventNameMap[event];
                if (eventName) document.addEventListener(eventName, callback);
            },
            off: function off(event, callback) {
                var eventName = eventNameMap[event];
                if (eventName) document.removeEventListener(eventName, callback);
            }
        };
        Object.defineProperties(screenfull, {
            isFullscreen: {
                get: function get() {
                    return Boolean(document[fn.fullscreenElement]);
                }
            },
            element: {
                enumerable: true,
                get: function get() {
                    return document[fn.fullscreenElement];
                }
            },
            isEnabled: {
                enumerable: true,
                get: function get() {
                    // Coerce to boolean in case of old WebKit
                    return Boolean(document[fn.fullscreenEnabled]);
                }
            }
        });
        return screenfull;
    }
    var playerMap = new WeakMap();
    var readyMap = new WeakMap();
    var screenfull = {};
    var Player$1 = /*#__PURE__*/ function() {
        /**
     * Create a Player.
     *
     * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
     *        player iframe, and id, or a jQuery object.
     * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
     * @return {Player}
     */ function Player(element) {
            var _this = this;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, Player);
            /* global jQuery */ if (window.jQuery && element instanceof jQuery) {
                if (element.length > 1 && window.console && console.warn) console.warn("A jQuery object with multiple elements was passed, using the first element.");
                element = element[0];
            } // Find an element by ID
            if (typeof document !== "undefined" && typeof element === "string") element = document.getElementById(element);
             // Not an element!
            if (!isDomElement(element)) throw new TypeError("You must pass either a valid element or a valid id.");
             // Already initialized an embed in this div, so grab the iframe
            if (element.nodeName !== "IFRAME") {
                var iframe = element.querySelector("iframe");
                if (iframe) element = iframe;
            } // iframe url is not a Vimeo url
            if (element.nodeName === "IFRAME" && !isVimeoUrl(element.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
             // If there is already a player object in the map, return that
            if (playerMap.has(element)) return playerMap.get(element);
            this._window = element.ownerDocument.defaultView;
            this.element = element;
            this.origin = "*";
            var readyPromise = new npo_src(function(resolve, reject) {
                _this._onMessage = function(event) {
                    if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) return;
                    if (_this.origin === "*") _this.origin = event.origin;
                    var data = parseMessageData(event.data);
                    var isError = data && data.event === "error";
                    var isReadyError = isError && data.data && data.data.method === "ready";
                    if (isReadyError) {
                        var error = new Error(data.data.message);
                        error.name = data.data.name;
                        reject(error);
                        return;
                    }
                    var isReadyEvent = data && data.event === "ready";
                    var isPingResponse = data && data.method === "ping";
                    if (isReadyEvent || isPingResponse) {
                        _this.element.setAttribute("data-ready", "true");
                        resolve();
                        return;
                    }
                    processData(_this, data);
                };
                _this._window.addEventListener("message", _this._onMessage);
                if (_this.element.nodeName !== "IFRAME") {
                    var params = getOEmbedParameters(element, options);
                    var url = getVimeoUrl(params);
                    getOEmbedData(url, params, element).then(function(data) {
                        var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
                        // but store reference to the original element
                        _this.element = iframe;
                        _this._originalElement = element;
                        swapCallbacks(element, iframe);
                        playerMap.set(_this.element, _this);
                        return data;
                    })["catch"](reject);
                }
            }); // Store a copy of this Player in the map
            readyMap.set(this, readyPromise);
            playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
            // the player is already ready.
            if (this.element.nodeName === "IFRAME") postMessage(this, "ping");
            if (screenfull.isEnabled) {
                var exitFullscreen = function exitFullscreen() {
                    return screenfull.exit();
                };
                this.fullscreenchangeHandler = function() {
                    if (screenfull.isFullscreen) storeCallback(_this, "event:exitFullscreen", exitFullscreen);
                    else removeCallback(_this, "event:exitFullscreen", exitFullscreen);
                     // eslint-disable-next-line
                    _this.ready().then(function() {
                        postMessage(_this, "fullscreenchange", screenfull.isFullscreen);
                    });
                };
                screenfull.on("fullscreenchange", this.fullscreenchangeHandler);
            }
            return this;
        }
        /**
     * Get a promise for a method.
     *
     * @param {string} name The API method to call.
     * @param {Object} [args={}] Arguments to send via postMessage.
     * @return {Promise}
     */ _createClass(Player, [
            {
                key: "callMethod",
                value: function callMethod(name) {
                    var _this2 = this;
                    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    return new npo_src(function(resolve, reject) {
                        // We are storing the resolve/reject handlers to call later, so we
                        // can’t return here.
                        // eslint-disable-next-line promise/always-return
                        return _this2.ready().then(function() {
                            storeCallback(_this2, name, {
                                resolve: resolve,
                                reject: reject
                            });
                            postMessage(_this2, name, args);
                        })["catch"](reject);
                    });
                }
            },
            {
                key: "get",
                value: function get(name) {
                    var _this3 = this;
                    return new npo_src(function(resolve, reject) {
                        name = getMethodName(name, "get"); // We are storing the resolve/reject handlers to call later, so we
                        // can’t return here.
                        // eslint-disable-next-line promise/always-return
                        return _this3.ready().then(function() {
                            storeCallback(_this3, name, {
                                resolve: resolve,
                                reject: reject
                            });
                            postMessage(_this3, name);
                        })["catch"](reject);
                    });
                }
            },
            {
                key: "set",
                value: function set(name, value) {
                    var _this4 = this;
                    return new npo_src(function(resolve, reject) {
                        name = getMethodName(name, "set");
                        if (value === undefined || value === null) throw new TypeError("There must be a value to set.");
                         // We are storing the resolve/reject handlers to call later, so we
                        // can’t return here.
                        // eslint-disable-next-line promise/always-return
                        return _this4.ready().then(function() {
                            storeCallback(_this4, name, {
                                resolve: resolve,
                                reject: reject
                            });
                            postMessage(_this4, name, value);
                        })["catch"](reject);
                    });
                }
            },
            {
                key: "on",
                value: function on(eventName, callback) {
                    if (!eventName) throw new TypeError("You must pass an event name.");
                    if (!callback) throw new TypeError("You must pass a callback function.");
                    if (typeof callback !== "function") throw new TypeError("The callback must be a function.");
                    var callbacks = getCallbacks(this, "event:".concat(eventName));
                    if (callbacks.length === 0) this.callMethod("addEventListener", eventName)["catch"](function() {
                    // will trigger the error callback if they are listening.
                    });
                    storeCallback(this, "event:".concat(eventName), callback);
                }
            },
            {
                key: "off",
                value: function off(eventName, callback) {
                    if (!eventName) throw new TypeError("You must pass an event name.");
                    if (callback && typeof callback !== "function") throw new TypeError("The callback must be a function.");
                    var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener
                    if (lastCallback) this.callMethod("removeEventListener", eventName)["catch"](function(e) {
                    // will trigger the error callback if they are listening.
                    });
                }
            },
            {
                key: "loadVideo",
                value: function loadVideo(options) {
                    return this.callMethod("loadVideo", options);
                }
            },
            {
                key: "ready",
                value: function ready() {
                    var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
                        reject(new Error("Unknown player. Probably unloaded."));
                    });
                    return npo_src.resolve(readyPromise);
                }
            },
            {
                key: "addCuePoint",
                value: function addCuePoint(time) {
                    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    return this.callMethod("addCuePoint", {
                        time: time,
                        data: data
                    });
                }
            },
            {
                key: "removeCuePoint",
                value: function removeCuePoint(id) {
                    return this.callMethod("removeCuePoint", id);
                }
            },
            {
                key: "enableTextTrack",
                value: function enableTextTrack(language, kind) {
                    if (!language) throw new TypeError("You must pass a language.");
                    return this.callMethod("enableTextTrack", {
                        language: language,
                        kind: kind
                    });
                }
            },
            {
                key: "disableTextTrack",
                value: function disableTextTrack() {
                    return this.callMethod("disableTextTrack");
                }
            },
            {
                key: "pause",
                value: function pause() {
                    return this.callMethod("pause");
                }
            },
            {
                key: "play",
                value: function play() {
                    return this.callMethod("play");
                }
            },
            {
                key: "requestFullscreen",
                value: function requestFullscreen() {
                    if (screenfull.isEnabled) return screenfull.request(this.element);
                    return this.callMethod("requestFullscreen");
                }
            },
            {
                key: "exitFullscreen",
                value: function exitFullscreen() {
                    if (screenfull.isEnabled) return screenfull.exit();
                    return this.callMethod("exitFullscreen");
                }
            },
            {
                key: "getFullscreen",
                value: function getFullscreen() {
                    if (screenfull.isEnabled) return npo_src.resolve(screenfull.isFullscreen);
                    return this.get("fullscreen");
                }
            },
            {
                key: "requestPictureInPicture",
                value: function requestPictureInPicture() {
                    return this.callMethod("requestPictureInPicture");
                }
            },
            {
                key: "exitPictureInPicture",
                value: function exitPictureInPicture() {
                    return this.callMethod("exitPictureInPicture");
                }
            },
            {
                key: "getPictureInPicture",
                value: function getPictureInPicture() {
                    return this.get("pictureInPicture");
                }
            },
            {
                key: "unload",
                value: function unload() {
                    return this.callMethod("unload");
                }
            },
            {
                key: "destroy",
                value: function destroy() {
                    var _this5 = this;
                    return new npo_src(function(resolve) {
                        readyMap["delete"](_this5);
                        playerMap["delete"](_this5.element);
                        if (_this5._originalElement) {
                            playerMap["delete"](_this5._originalElement);
                            _this5._originalElement.removeAttribute("data-vimeo-initialized");
                        }
                        if (_this5.element && _this5.element.nodeName === "IFRAME" && _this5.element.parentNode) {
                            // If we've added an additional wrapper div, remove that from the DOM.
                            // If not, just remove the iframe element.
                            if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
                            else _this5.element.parentNode.removeChild(_this5.element);
                        } // If the clip is private there is a case where the element stays the
                        // div element. Destroy should reset the div and remove the iframe child.
                        if (_this5.element && _this5.element.nodeName === "DIV" && _this5.element.parentNode) {
                            _this5.element.removeAttribute("data-vimeo-initialized");
                            var iframe = _this5.element.querySelector("iframe");
                            if (iframe && iframe.parentNode) {
                                // If we've added an additional wrapper div, remove that from the DOM.
                                // If not, just remove the iframe element.
                                if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                                else iframe.parentNode.removeChild(iframe);
                            }
                        }
                        _this5._window.removeEventListener("message", _this5._onMessage);
                        if (screenfull.isEnabled) screenfull.off("fullscreenchange", _this5.fullscreenchangeHandler);
                        resolve();
                    });
                }
            },
            {
                key: "getAutopause",
                value: function getAutopause() {
                    return this.get("autopause");
                }
            },
            {
                key: "setAutopause",
                value: function setAutopause(autopause) {
                    return this.set("autopause", autopause);
                }
            },
            {
                key: "getBuffered",
                value: function getBuffered() {
                    return this.get("buffered");
                }
            },
            {
                key: "getCameraProps",
                value: function getCameraProps() {
                    return this.get("cameraProps");
                }
            },
            {
                key: "setCameraProps",
                value: function setCameraProps(camera) {
                    return this.set("cameraProps", camera);
                }
            },
            {
                key: "getChapters",
                value: function getChapters() {
                    return this.get("chapters");
                }
            },
            {
                key: "getCurrentChapter",
                value: function getCurrentChapter() {
                    return this.get("currentChapter");
                }
            },
            {
                key: "getColor",
                value: function getColor() {
                    return this.get("color");
                }
            },
            {
                key: "setColor",
                value: function setColor(color) {
                    return this.set("color", color);
                }
            },
            {
                key: "getCuePoints",
                value: function getCuePoints() {
                    return this.get("cuePoints");
                }
            },
            {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                    return this.get("currentTime");
                }
            },
            {
                key: "setCurrentTime",
                value: function setCurrentTime(currentTime) {
                    return this.set("currentTime", currentTime);
                }
            },
            {
                key: "getDuration",
                value: function getDuration() {
                    return this.get("duration");
                }
            },
            {
                key: "getEnded",
                value: function getEnded() {
                    return this.get("ended");
                }
            },
            {
                key: "getLoop",
                value: function getLoop() {
                    return this.get("loop");
                }
            },
            {
                key: "setLoop",
                value: function setLoop(loop) {
                    return this.set("loop", loop);
                }
            },
            {
                key: "setMuted",
                value: function setMuted(muted) {
                    return this.set("muted", muted);
                }
            },
            {
                key: "getMuted",
                value: function getMuted() {
                    return this.get("muted");
                }
            },
            {
                key: "getPaused",
                value: function getPaused() {
                    return this.get("paused");
                }
            },
            {
                key: "getPlaybackRate",
                value: function getPlaybackRate() {
                    return this.get("playbackRate");
                }
            },
            {
                key: "setPlaybackRate",
                value: function setPlaybackRate(playbackRate) {
                    return this.set("playbackRate", playbackRate);
                }
            },
            {
                key: "getPlayed",
                value: function getPlayed() {
                    return this.get("played");
                }
            },
            {
                key: "getQualities",
                value: function getQualities() {
                    return this.get("qualities");
                }
            },
            {
                key: "getQuality",
                value: function getQuality() {
                    return this.get("quality");
                }
            },
            {
                key: "setQuality",
                value: function setQuality(quality) {
                    return this.set("quality", quality);
                }
            },
            {
                key: "getSeekable",
                value: function getSeekable() {
                    return this.get("seekable");
                }
            },
            {
                key: "getSeeking",
                value: function getSeeking() {
                    return this.get("seeking");
                }
            },
            {
                key: "getTextTracks",
                value: function getTextTracks() {
                    return this.get("textTracks");
                }
            },
            {
                key: "getVideoEmbedCode",
                value: function getVideoEmbedCode() {
                    return this.get("videoEmbedCode");
                }
            },
            {
                key: "getVideoId",
                value: function getVideoId() {
                    return this.get("videoId");
                }
            },
            {
                key: "getVideoTitle",
                value: function getVideoTitle() {
                    return this.get("videoTitle");
                }
            },
            {
                key: "getVideoWidth",
                value: function getVideoWidth() {
                    return this.get("videoWidth");
                }
            },
            {
                key: "getVideoHeight",
                value: function getVideoHeight() {
                    return this.get("videoHeight");
                }
            },
            {
                key: "getVideoUrl",
                value: function getVideoUrl() {
                    return this.get("videoUrl");
                }
            },
            {
                key: "getVolume",
                value: function getVolume() {
                    return this.get("volume");
                }
            },
            {
                key: "setVolume",
                value: function setVolume(volume) {
                    return this.set("volume", volume);
                }
            }
        ]);
        return Player;
    }(); // Setup embed only if this is not a node environment
    if (!isNode) {
        screenfull = initializeScreenfull();
        initializeEmbeds();
        resizeEmbeds();
        initAppendVideoMetadata();
    }
    var VimeoPlayer = /*#__PURE__*/ function(_AbstractVideoPlayer2) {
        _inheritsLoose(VimeoPlayer, _AbstractVideoPlayer2);
        function VimeoPlayer(target, videoId, options) {
            var _this7;
            if (options === void 0) options = {};
            _this7 = _AbstractVideoPlayer2.call(this, target, videoId, options) || this;
            _this7.state.set(INITIALIZED);
            return _this7;
        }
        var _proto3 = VimeoPlayer.prototype;
        _proto3.createPlayer = function createPlayer(videoId) {
            var options = this.options, _this$options$playerO2 = this.options.playerOptions, playerOptions = _this$options$playerO2 === void 0 ? {} : _this$options$playerO2;
            var vimeoOptions = videoId.indexOf("http") === 0 ? {
                url: videoId
            } : {
                id: +videoId
            };
            var player = new Player$1(this.target, assign(vimeoOptions, {
                controls: !options.hideControls,
                loop: options.loop,
                muted: options.mute
            }, playerOptions.vimeo || {}));
            player.on("play", this.onPlay);
            player.on("pause", this.onPause);
            player.on("ended", this.onEnded);
            player.ready().then(this.onPlayerReady, this.onError);
            if (!player.getMuted()) player.setVolume(clamp(options.volume, 0, 1));
            return player;
        };
        _proto3.playVideo = function playVideo() {
            var _this8 = this;
            this.player.play()["catch"](function() {
                if (_this8.state.is(PLAY_REQUEST_ABORTED)) _this8.state.set(IDLE);
            });
        };
        _proto3.pauseVideo = function pauseVideo() {
            this.player.pause();
        };
        return VimeoPlayer;
    }(AbstractVideoPlayer);
    var YOUTUBE_API_SRC = "//www.youtube.com/player_api";
    var YouTubeIframeAPILoader = /*#__PURE__*/ function() {
        function YouTubeIframeAPILoader() {}
        var _proto4 = YouTubeIframeAPILoader.prototype;
        _proto4.load = function load(callback) {
            if (window.YT && isFunction(window.YT.Player)) return callback();
            this.attachCallback(callback);
            if (this.shouldLoad()) _create("script", {
                src: "" + location.protocol + YOUTUBE_API_SRC
            }, document.head);
        };
        _proto4.shouldLoad = function shouldLoad() {
            return !queryAll(document, "script").some(function(script) {
                return script.src.replace(/^https?:/, "") === YOUTUBE_API_SRC;
            });
        };
        _proto4.attachCallback = function attachCallback(callback) {
            var oldCallback;
            if (!isUndefined(window.onYouTubeIframeAPIReady)) oldCallback = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function() {
                oldCallback && oldCallback();
                callback();
            };
        };
        return YouTubeIframeAPILoader;
    }();
    var YouTubePlayer = /*#__PURE__*/ function(_AbstractVideoPlayer3) {
        _inheritsLoose(YouTubePlayer, _AbstractVideoPlayer3);
        function YouTubePlayer(target, videoId, options) {
            var _this9;
            if (options === void 0) options = {};
            _this9 = _AbstractVideoPlayer3.call(this, target, videoId, options) || this;
            _this9.videoId = _this9.parseVideoId(videoId);
            if (_this9.videoId) {
                _this9.state.set(INITIALIZING);
                new YouTubeIframeAPILoader().load(_this9.onAPIReady.bind(_assertThisInitialized(_this9)));
            }
            return _this9;
        }
        var _proto5 = YouTubePlayer.prototype;
        _proto5.onAPIReady = function onAPIReady() {
            var state = this.state;
            var isPending = state.is(PENDING_PLAY);
            state.set(INITIALIZED);
            if (isPending) this.play();
        };
        _proto5.createPlayer = function createPlayer(videoId) {
            var options = this.options, _this$options$playerO3 = this.options.playerOptions, playerOptions = _this$options$playerO3 === void 0 ? {} : _this$options$playerO3;
            return new YT.Player(this.target, {
                videoId: videoId,
                host: options.host,
                playerVars: assign({
                    controls: options.hideControls ? 0 : 1,
                    iv_load_policy: 3,
                    loop: options.loop ? 1 : 0,
                    playlist: options.loop ? videoId : void 0,
                    rel: 0,
                    autoplay: 0,
                    mute: options.mute ? 1 : 0
                }, playerOptions.youtube || {}),
                events: {
                    onReady: this.onPlayerReady.bind(this),
                    onStateChange: this.onPlayerStateChange.bind(this),
                    onError: this.onError.bind(this)
                }
            });
        };
        _proto5.onPlayerReady = function onPlayerReady() {
            _AbstractVideoPlayer3.prototype.onPlayerReady.call(this);
            this.player.setVolume(clamp(this.options.volume, 0, 1) * 100);
        };
        _proto5.onPlayerStateChange = function onPlayerStateChange(e) {
            var _YT$PlayerState = YT.PlayerState, PLAYING = _YT$PlayerState.PLAYING, PAUSED = _YT$PlayerState.PAUSED, ENDED = _YT$PlayerState.ENDED;
            switch(true){
                case e.data === PLAYING:
                    this.onPlay();
                    break;
                case e.data === PAUSED:
                    this.onPause();
                    break;
                case e.data === ENDED:
                    this.onEnded();
                    break;
            }
        };
        _proto5.playVideo = function playVideo() {
            this.player.playVideo();
        };
        _proto5.pauseVideo = function pauseVideo() {
            this.player.pauseVideo();
        };
        _proto5.parseVideoId = function parseVideoId(id) {
            return id.indexOf("http") === 0 ? this.parseUrl(id) : id;
        };
        _proto5.parseUrl = function parseUrl(url) {
            var _url$split = url.split(/[#?]/), search = _url$split[1];
            var query = find(search.split("&"), function(query2) {
                return query2.indexOf("v=") === 0;
            });
            return query && query.replace("v=", "");
        };
        return YouTubePlayer;
    }(AbstractVideoPlayer);
    var I18N = {
        playVideo: "Play Video"
    };
    var PlayerUI = /*#__PURE__*/ function() {
        function PlayerUI(Splide2, slide) {
            this.event = EventInterface();
            this.Splide = Splide2;
            this.slide = slide;
            this.container = child(this.slide, "." + CLASS_CONTAINER);
            this.parent = this.container || this.slide;
            this.init();
            this.create();
            this.show();
            this.listen();
        }
        var _proto6 = PlayerUI.prototype;
        _proto6.init = function init() {
            addClass(this.slide, "" + CLASS_SLIDE + MODIFIER_HAS_VIDEO);
            addClass(this.container, "" + CLASS_CONTAINER + MODIFIER_HAS_VIDEO);
        };
        _proto6.create = function create() {
            this.video = _create("div", CLASS_VIDEO, this.parent);
            this.playButton = _create("button", {
                "class": CLASS_VIDEO_PLAY_BUTTON,
                type: "button",
                "aria-label": this.Splide.options.i18n.playVideo || I18N.playVideo
            }, this.video);
            this.wrapper = _create("div", CLASS_VIDEO_WRAPPER, this.video);
            this.placeholder = _create("div", null, this.wrapper);
        };
        _proto6.listen = function listen() {
            var _this10 = this;
            this.parent.addEventListener("click", function() {
                _this10.event.emit("click");
            });
        };
        _proto6.toggleButton = function toggleButton(show) {
            display(this.playButton, show ? "" : "none");
        };
        _proto6.toggleWrapper = function toggleWrapper(show) {
            display(this.wrapper, show ? "" : "none");
        };
        _proto6.getPlaceholder = function getPlaceholder() {
            return this.placeholder;
        };
        _proto6.hide = function hide() {
            this.toggleButton(false);
            this.toggleWrapper(true);
        };
        _proto6.show = function show() {
            if (!this.disabled) this.toggleButton(true);
            this.toggleWrapper(false);
        };
        _proto6.disable = function disable(disabled) {
            this.disabled = disabled;
            if (disabled) this.toggleButton(false);
        };
        _proto6.on = function on(events, callback) {
            this.event.on(events, callback);
        };
        _proto6.destroy = function destroy() {
            removeClass(this.slide, "" + CLASS_SLIDE + MODIFIER_HAS_VIDEO);
            removeClass(this.container, "" + CLASS_CONTAINER + MODIFIER_HAS_VIDEO);
            remove(this.video);
            this.event.destroy();
        };
        return PlayerUI;
    }();
    var VIDEO_PLAYER_MAP = [
        [
            YOUTUBE_DATA_ATTRIBUTE,
            YouTubePlayer
        ],
        [
            VIMEO_DATA_ATTRIBUTE,
            VimeoPlayer
        ],
        [
            HTML_VIDEO__DATA_ATTRIBUTE,
            HTMLVideoPlayer
        ]
    ];
    var Player = /*#__PURE__*/ function() {
        function Player(Splide2, slide) {
            this.Splide = Splide2;
            this.slide = slide;
            this.event = EventInterface(Splide2);
            this.options = merge(merge({}, DEFAULTS), this.Splide.options.video);
            this.createPlayer(slide);
            if (this.player) this.listen();
        }
        var _proto7 = Player.prototype;
        _proto7.createPlayer = function createPlayer(slide) {
            var _this11 = this;
            VIDEO_PLAYER_MAP.forEach(function(_ref2) {
                var attr = _ref2[0], Constructor = _ref2[1];
                var id = getAttribute(slide, attr);
                if (id) {
                    _this11.ui = new PlayerUI(_this11.Splide, slide);
                    _this11.player = new Constructor(_this11.ui.getPlaceholder(), id, _this11.options);
                    _this11.ui.disable(_this11.options.disableOverlayUI);
                }
            });
        };
        _proto7.listen = function listen() {
            var _this12 = this;
            var player = this.player, event = this.event;
            this.ui.on("click", this.onClick.bind(this));
            player.on("play", this.onPlay.bind(this));
            player.on("played", this.onPlayed.bind(this));
            player.on("pause", this.onPause.bind(this));
            player.on("paused", this.onPaused.bind(this));
            player.on("ended", this.onEnded.bind(this));
            player.on("error", this.onError.bind(this));
            event.on([
                EVENT_MOVE,
                EVENT_SCROLL
            ], this.pause.bind(this));
            event.on(EVENT_VIDEO_CLICK, this.onVideoClick.bind(this));
            event.on(EVENT_DRAG, function() {
                event.off(EVENT_DRAGGING);
                event.on(EVENT_DRAGGING, function() {
                    _this12.pause();
                    event.off(EVENT_DRAGGING);
                });
            });
            if (this.options.autoplay) event.on([
                EVENT_MOUNTED,
                EVENT_MOVED,
                EVENT_SCROLLED
            ], this.onAutoplayRequested.bind(this));
        };
        _proto7.onClick = function onClick() {
            this.isPaused() ? this.play() : this.pause();
            this.event.emit(EVENT_VIDEO_CLICK, this);
        };
        _proto7.onVideoClick = function onVideoClick(player) {
            if (this !== player) this.pause();
        };
        _proto7.onPlay = function onPlay() {
            this.ui.hide();
        };
        _proto7.onPlayed = function onPlayed() {
            this.ui.hide();
            this.togglePlaying(true);
            this.event.emit(EVENT_VIDEO_PLAY, this);
        };
        _proto7.onPause = function onPause() {
            this.ui.show();
        };
        _proto7.onPaused = function onPaused() {
            this.togglePlaying(false);
            this.event.emit(EVENT_VIDEO_PAUSE, this);
        };
        _proto7.onEnded = function onEnded() {
            this.togglePlaying(false);
            this.event.emit(EVENT_VIDEO_ENDED, this);
        };
        _proto7.onError = function onError() {
            addClass(this.slide, CLASS_ERROR);
            this.ui.show();
            this.event.emit(EVENT_VIDEO_ERROR, this);
        };
        _proto7.onAutoplayRequested = function onAutoplayRequested() {
            var activeSlide = this.Splide.Components.Slides.getAt(this.Splide.index);
            if (activeSlide.slide === this.slide) this.play();
        };
        _proto7.togglePlaying = function togglePlaying(add) {
            toggleClass(this.Splide.root, CLASS_PLAYING, add);
        };
        _proto7.play = function play() {
            if (this.player && !this.disabled) this.player.play();
        };
        _proto7.pause = function pause() {
            if (this.player && !this.disabled) this.player.pause();
        };
        _proto7.destroy = function destroy() {
            if (this.player) {
                this.ui.destroy();
                this.player.destroy();
            }
            this.disable(false);
        };
        _proto7.disable = function disable(disabled) {
            this.disabled = disabled;
            toggleClass(this.Splide.root, CLASS_VIDEO_DISABLED, disabled);
        };
        _proto7.isPaused = function isPaused() {
            return this.player.isPaused();
        };
        return Player;
    }();
    function Video(Splide2, Components2) {
        var _EventInterface = EventInterface(Splide2), on = _EventInterface.on;
        var Slides = Components2.Slides;
        var players = {};
        function mount() {
            create();
            on("refresh", create);
        }
        function create() {
            Slides.forEach(function(Slide) {
                var slide = Slide.slide;
                if (!hasClass(slide, "" + CLASS_SLIDE + MODIFIER_HAS_VIDEO)) players[Slide.index] = new Player(Splide2, slide);
            });
            Slides.update();
        }
        function destroy() {
            forOwn(players, function(player) {
                player.destroy();
            });
        }
        function play(index) {
            if (index === void 0) index = Splide2.index;
            var player = players[index];
            if (player) player.play();
        }
        function pause() {
            forOwn(players, function(player) {
                player.pause();
            });
        }
        function disable(disabled) {
            forOwn(players, function(player) {
                player.disable(disabled);
            });
        }
        return {
            mount: mount,
            destroy: destroy,
            play: play,
            pause: pause,
            disable: disable
        };
    }
    if (typeof window !== "undefined") {
        window.splide = window.splide || {};
        window.splide.Extensions = window.splide.Extensions || {};
        window.splide.Extensions.Video = Video;
    }
});

},{}]},["jbJ92","5ErDU"], "5ErDU", "parcelRequireaf7b")

//# sourceMappingURL=index.b1922540.js.map
