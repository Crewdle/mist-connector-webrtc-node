"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRTCNodePeerConnectionConnector = void 0;
const ws_1 = require("ws");
const polyfill_1 = require("node-datachannel/polyfill");
const mist_connector_webrtc_browser_1 = require("@crewdle/mist-connector-webrtc-browser");
global.RTCPeerConnection = polyfill_1.RTCPeerConnection;
global.WebSocket = ws_1.WebSocket;
/**
 * WebRTC connector for the Node.js environment for peer connections.
 * @category Connector
 */
class WebRTCNodePeerConnectionConnector extends mist_connector_webrtc_browser_1.WebRTCBrowserPeerConnectionConnector {
}
exports.WebRTCNodePeerConnectionConnector = WebRTCNodePeerConnectionConnector;
