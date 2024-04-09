(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WebRTCNodePeerConnectionConnector: () => (/* binding */ WebRTCNodePeerConnectionConnector)
});

;// CONCATENATED MODULE: external "node-datachannel/polyfill"
const polyfill_namespaceObject = require("node-datachannel/polyfill");
;// CONCATENATED MODULE: external "ws"
const external_ws_namespaceObject = require("ws");
;// CONCATENATED MODULE: external "@crewdle/mist-connector-webrtc-browser"
const mist_connector_webrtc_browser_namespaceObject = require("@crewdle/mist-connector-webrtc-browser");
;// CONCATENATED MODULE: ./src/index.ts



global.RTCPeerConnection = polyfill_namespaceObject.RTCPeerConnection;
global.WebSocket = external_ws_namespaceObject.WebSocket;
/**
 * WebRTC connector for the Node.js environment for peer connections.
 * @category Connector
 */
class WebRTCNodePeerConnectionConnector extends mist_connector_webrtc_browser_namespaceObject.WebRTCBrowserPeerConnectionConnector {
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});