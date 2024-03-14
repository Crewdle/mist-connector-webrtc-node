import { RTCPeerConnection } from 'node-datachannel/polyfill';

import { WebSocket } from 'ws';

import { WebRTCBrowserPeerConnectionConnector } from '@crewdle/mist-connector-webrtc-browser';

global.RTCPeerConnection = RTCPeerConnection;
global.WebSocket = WebSocket as any;

export class WebRTCNodePeerConnectionConnector extends WebRTCBrowserPeerConnectionConnector {}
