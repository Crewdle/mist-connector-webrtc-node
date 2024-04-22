import { RTCPeerConnection } from 'node-datachannel/polyfill';

import { WebSocket } from 'ws';

import { WebRTCBrowserPeerConnectionConnector } from '@crewdle/mist-connector-webrtc-browser';

global.RTCPeerConnection = RTCPeerConnection;
global.WebSocket = WebSocket as any;

/**
 * WebRTC connector for the Node.js environment for peer connections.
 * @category Connector
 */
class WebRTCNodePeerConnectionConnector extends WebRTCBrowserPeerConnectionConnector {}

export { WebRTCNodePeerConnectionConnector };
