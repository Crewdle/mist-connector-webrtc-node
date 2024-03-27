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

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/RTCCertificate.js
class RTCCertificate {
    #expires;
    #fingerprints;

    constructor() {
        this.#expires = null;
        this.#fingerprints = [];
    }

    get expires() {
        return this.#expires;
    }

    getFingerprints() {
        return this.#fingerprints;
    }
}

;// CONCATENATED MODULE: external "node-domexception"
const external_node_domexception_namespaceObject = require("node-domexception");
;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/RTCDataChannel.js


class _RTCDataChannel extends EventTarget {
    #dataChannel;
    #readyState;
    #bufferedAmountLowThreshold;
    #binaryType;
    #maxPacketLifeTime;
    #maxRetransmits;
    #negotiated;
    #ordered;

    onbufferedamountlow;
    onclose;
    onclosing;
    onerror;
    onmessage;
    onopen;

    constructor(dataChannel, opts = {}) {
        super();

        this.#dataChannel = dataChannel;
        this.#binaryType = 'arraybuffer';
        this.#readyState = this.#dataChannel.isOpen() ? 'open' : 'connecting';
        this.#bufferedAmountLowThreshold = 0;
        this.#maxPacketLifeTime = opts.maxPacketLifeTime || null;
        this.#maxRetransmits = opts.maxRetransmits || null;
        this.#negotiated = opts.negotiated || false;
        this.#ordered = opts.ordered || true;

        // forward dataChannel events
        this.#dataChannel.onOpen(() => {
            this.#readyState = 'open';
            this.dispatchEvent(new Event('open'));
        });

        this.#dataChannel.onClosed(() => {
            this.#readyState = 'closed';
            this.dispatchEvent(new Event('close'));
        });

        this.#dataChannel.onError((msg) => {
            this.dispatchEvent(
                new RTCErrorEvent('error', {
                    error: new RTCError(
                        {
                            errorDetail: 'data-channel-failure',
                        },
                        msg,
                    ),
                }),
            );
        });

        this.#dataChannel.onBufferedAmountLow(() => {
            this.dispatchEvent(new Event('bufferedamountlow'));
        });

        this.#dataChannel.onMessage((data) => {
            if (ArrayBuffer.isView(data)) {
                data = data.buffer;
            }

            this.dispatchEvent(new MessageEvent('message', { data }));
        });

        // forward events to properties
        this.addEventListener('message', (e) => {
            if (this.onmessage) this.onmessage(e);
        });
        this.addEventListener('bufferedamountlow', (e) => {
            if (this.onbufferedamountlow) this.onbufferedamountlow(e);
        });
        this.addEventListener('error', (e) => {
            if (this.onerror) this.onerror(e);
        });
        this.addEventListener('close', (e) => {
            if (this.onclose) this.onclose(e);
        });
        this.addEventListener('closing', (e) => {
            if (this.onclosing) this.onclosing(e);
        });
        this.addEventListener('open', (e) => {
            if (this.onopen) this.onopen(e);
        });
    }

    set binaryType(type) {
        if (type !== 'blob' && type !== 'arraybuffer') {
            throw new external_node_domexception_namespaceObject(
                "Failed to set the 'binaryType' property on 'RTCDataChannel': Unknown binary type : " + type,
                'TypeMismatchError',
            );
        }
        this.#binaryType = type;
    }

    get binaryType() {
        return this.#binaryType;
    }

    get bufferedAmount() {
        return this.#dataChannel.bufferedAmount();
    }

    get bufferedAmountLowThreshold() {
        return this.#bufferedAmountLowThreshold;
    }

    set bufferedAmountLowThreshold(value) {
        const number = Number(value) || 0;
        this.#bufferedAmountLowThreshold = number;
        this.#dataChannel.setBufferedAmountLowThreshold(number);
    }

    get id() {
        return this.#dataChannel.getId();
    }

    get label() {
        return this.#dataChannel.getLabel();
    }

    get maxPacketLifeTime() {
        return this.#maxPacketLifeTime;
    }

    get maxRetransmits() {
        return this.#maxRetransmits;
    }

    get negotiated() {
        return this.#negotiated;
    }

    get ordered() {
        return this.#ordered;
    }

    get protocol() {
        return this.#dataChannel.getProtocol();
    }

    get readyState() {
        return this.#readyState;
    }

    send(data) {
        if (this.#readyState !== 'open') {
            throw new external_node_domexception_namespaceObject(
                "Failed to execute 'send' on 'RTCDataChannel': RTCDataChannel.readyState is not 'open'",
                'InvalidStateError',
            );
        }

        // Needs network error, type error implemented
        if (typeof data === 'string') {
            this.#dataChannel.sendMessage(data);
        } else if (data instanceof Blob) {
            data.arrayBuffer().then((ab) => {
                this.#dataChannel.sendMessageBinary(new Uint8Array(ab));
            });
        } else {
            this.#dataChannel.sendMessageBinary(new Uint8Array(data));
        }
    }

    close() {
        this.#readyState = 'closing';
        this.dispatchEvent(new Event('closing'));

        this.#dataChannel.close();
    }
}

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/RTCIceCandidate.js
// https://developer.mozilla.org/docs/Web/API/RTCIceCandidate
//
// Example: candidate:123456 1 UDP 123456 192.168.1.1 12345 typ host raddr=10.0.0.1 rport=54321 generation 0



class _RTCIceCandidate {
    #address;
    #candidate;
    #component;
    #foundation;
    #port;
    #priority;
    #protocol;
    #relatedAddress;
    #relatedPort;
    #sdpMLineIndex;
    #sdpMid;
    #tcpType;
    #type;
    #usernameFragment;
    #ip;

    constructor({ candidate, sdpMLineIndex, sdpMid, usernameFragment }) {
        if (candidate == null) {
            throw new external_node_domexception_namespaceObject('candidate must be specified');
        }

        this.#candidate = candidate;
        this.#sdpMLineIndex = sdpMLineIndex || null;
        this.#sdpMid = sdpMid || null;
        this.#usernameFragment = usernameFragment || null;

        if (candidate) {
            const fields = candidate.split(' ');
            this.#foundation = fields[0];
            this.#component = fields[1] == '1' ? 'rtp' : 'rtcp';
            this.#protocol = fields[2];
            this.#priority = parseInt(fields[3], 10);
            this.#ip = fields[4];
            this.#port = parseInt(fields[5], 10);
            this.#type = fields[7];
            if (fields[6] === 'typ') {
                this.#tcpType = null;
            } else if (fields[6] === 'tcp') {
                this.#tcpType = fields[7];
                this.#type = fields[8];
            }

            // Parse the candidate string to extract relatedPort and relatedAddress
            for (let i = 9; i < fields.length; i++) {
                const field = fields[i];
                if (field.startsWith('raddr')) {
                    this.#relatedAddress = field.split('=')[1];
                } else if (field.startsWith('rport')) {
                    this.#relatedPort = parseInt(field.split('=')[1], 10);
                }
            }
        }
    }

    get address() {
        return this.#address || null;
    }

    get candidate() {
        return this.#candidate || '';
    }

    get component() {
        return this.#component;
    }

    get foundation() {
        return this.#foundation || null;
    }

    get port() {
        return this.#port || null;
    }

    get priority() {
        return this.#priority || null;
    }

    get protocol() {
        return this.#protocol || null;
    }

    get relatedAddress() {
        return this.#relatedAddress;
    }

    get relatedPort() {
        return this.#relatedPort || null;
    }

    get sdpMLineIndex() {
        return this.#sdpMLineIndex;
    }

    get sdpMid() {
        return this.#sdpMid;
    }

    get tcpType() {
        return this.#tcpType;
    }

    get type() {
        return this.#type || null;
    }

    get usernameFragment() {
        return this.#usernameFragment;
    }

    toJSON() {
        return {
            candidate: this.#candidate,
            sdpMLineIndex: this.#sdpMLineIndex,
            sdpMid: this.#sdpMid,
            usernameFragment: this.#usernameFragment,
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/RTCIceTransport.js


class _RTCIceTransport extends EventTarget {
    #pc = null;
    #extraFunctions = null;

    ongatheringstatechange = null;
    onselectedcandidatepairchange = null;
    onstatechange = null;

    constructor({ pc, extraFunctions }) {
        super();
        this.#pc = pc;
        this.#extraFunctions = extraFunctions;

        // forward peerConnection events
        this.#pc.addEventListener('icegatheringstatechange', () => {
            this.dispatchEvent(new Event('gatheringstatechange'));
        });
        this.#pc.addEventListener('iceconnectionstatechange', () => {
            this.dispatchEvent(new Event('statechange'));
        });

        // forward events to properties
        this.addEventListener('gatheringstatechange', (e) => {
            if (this.ongatheringstatechange) this.ongatheringstatechange(e);
        });
        this.addEventListener('statechange', (e) => {
            if (this.onstatechange) this.onstatechange(e);
        });
    }

    get component() {
        let cp = this.getSelectedCandidatePair();
        if (!cp) return null;
        return cp.local.component;
    }

    get gatheringState() {
        return this.#pc ? this.#pc.iceGatheringState : 'new';
    }

    get role() {
        return this.#pc.localDescription.type == 'offer' ? 'controlling' : 'controlled';
    }

    get state() {
        return this.#pc ? this.#pc.iceConnectionState : 'new';
    }

    getLocalCandidates() {
        return this.#pc ? this.#extraFunctions.localCandidates() : [];
    }

    getLocalParameters() {
        /** */
    }

    getRemoteCandidates() {
        return this.#pc ? this.#extraFunctions.remoteCandidates() : [];
    }

    getRemoteParameters() {
        /** */
    }

    getSelectedCandidatePair() {
        let cp = this.#extraFunctions.selectedCandidatePair();
        if (!cp) return null;
        return {
            local: new _RTCIceCandidate({
                candidate: cp.local.candidate,
                sdpMid: cp.local.mid,
            }),
            remote: new _RTCIceCandidate({
                candidate: cp.remote.candidate,
                sdpMid: cp.remote.mid,
            }),
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/RTCDtlsTransport.js


class _RTCDtlsTransport extends EventTarget {
    #pc = null;
    #extraFunctions = null;
    #iceTransport = null;

    onerror = null;
    onstatechange = null;

    constructor({ pc, extraFunctions }) {
        super();
        this.#pc = pc;
        this.#extraFunctions = extraFunctions;

        this.#iceTransport = new _RTCIceTransport({ pc, extraFunctions });

        // forward peerConnection events
        this.#pc.addEventListener('connectionstatechange', () => {
            this.dispatchEvent(new Event('statechange'));
        });

        // forward events to properties
        this.addEventListener('statechange', (e) => {
            if (this.onstatechange) this.onstatechange(e);
        });
    }

    get iceTransport() {
        return this.#iceTransport;
    }

    get state() {
        // reduce state from new, connecting, connected, disconnected, failed, closed, unknown
        // to RTCDtlsTRansport states new, connecting, connected, closed, failed
        let state = this.#pc ? this.#pc.connectionState : 'new';
        if (state === 'disconnected' || state === 'unknown') {
            state = 'closed';
        }
        return state;
    }

    getRemoteCertificates() {
        // TODO: implement
        return new ArrayBuffer(0);
    }
}

;// CONCATENATED MODULE: external "module"
const external_module_namespaceObject = require("module");
;// CONCATENATED MODULE: external "stream"
const external_stream_namespaceObject = require("stream");
;// CONCATENATED MODULE: ./node_modules/node-datachannel/lib/datachannel-stream.js


/**
 * Turns a node-datachannel DataChannel into a real Node.js stream, complete with buffering,
 * backpressure (up to a point - if the buffer fills up, messages are dropped), and
 * support for piping data elsewhere.
 *
 * Read & written data may be either UTF-8 strings or Buffers - this difference exists at
 * the protocol level, and is preserved here throughout.
 */
class DataChannelStream extends external_stream_namespaceObject.Duplex {
    constructor(rawChannel, streamOptions) {
        super({
            allowHalfOpen: false, // Default to autoclose on end().
            ...streamOptions,
            objectMode: true, // Preserve the string/buffer distinction (WebRTC treats them differently)
        });

        this._rawChannel = rawChannel;
        this._readActive = true;

        rawChannel.onMessage((msg) => {
            if (!this._readActive) return; // If the buffer is full, drop messages.

            // If the push is rejected, we pause reading until the next call to _read().
            this._readActive = this.push(msg);
        });

        // When the DataChannel closes, the readable & writable ends close
        rawChannel.onClosed(() => {
            this.push(null);
            this.destroy();
        });

        rawChannel.onError((errMsg) => {
            this.destroy(new Error(`DataChannel error: ${errMsg}`));
        });

        // Buffer all writes until the DataChannel opens
        if (!rawChannel.isOpen()) {
            this.cork();
            rawChannel.onOpen(() => this.uncork());
        }
    }

    _read() {
        // Stop dropping messages, if the buffer filling up meant we were doing so before.
        this._readActive = true;
    }

    _write(chunk, encoding, callback) {
        let sentOk;

        try {
            if (Buffer.isBuffer(chunk)) {
                sentOk = this._rawChannel.sendMessageBinary(chunk);
            } else if (typeof chunk === 'string') {
                sentOk = this._rawChannel.sendMessage(chunk);
            } else {
                const typeName = chunk.constructor.name || typeof chunk;
                throw new Error(`Cannot write ${typeName} to DataChannel stream`);
            }
        } catch (err) {
            return callback(err);
        }

        if (sentOk) {
            callback(null);
        } else {
            callback(new Error('Failed to write to DataChannel'));
        }
    }

    _final(callback) {
        if (!this.allowHalfOpen) this.destroy();
        callback(null);
    }

    _destroy(maybeErr, callback) {
        // When the stream is destroyed, we close the DataChannel.
        this._rawChannel.close();
        callback(maybeErr);
    }

    get label() {
        return this._rawChannel.getLabel();
    }

    get id() {
        return this._rawChannel.getId();
    }

    get protocol() {
        return this._rawChannel.getProtocol();
    }
}

;// CONCATENATED MODULE: ./node_modules/node-datachannel/lib/index.js
// createRequire is native in node version >= 12

const lib_require = (0,external_module_namespaceObject.createRequire)("file:///Users/vincentlamanna/crewdle/mist-connector-webrtc-node/node_modules/node-datachannel/lib/index.js");

const nodeDataChannel = lib_require('../build/Release/node_datachannel.node');


const {
    initLogger,
    cleanup,
    preload,
    setSctpSettings,
    RtcpReceivingSession,
    Track,
    Video,
    Audio,
    DataChannel,
    PeerConnection,
} = nodeDataChannel;



/* harmony default export */ const lib = ({
    ...nodeDataChannel,
    DataChannelStream: DataChannelStream,
});

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/RTCSessionDescription.js
// https://developer.mozilla.org/docs/Web/API/RTCSessionDescription
//
// Example usage
// const init = {
//     type: 'offer',
//     sdp: 'v=0\r\no=- 1234567890 1234567890 IN IP4 192.168.1.1\r\ns=-\r\nt=0 0\r\na=ice-ufrag:abcd\r\na=ice-pwd:efgh\r\n'
//   };

class _RTCSessionDescription {
    #type;
    #sdp;

    constructor(init = {}) {
        // Allow Empty Constructor
        // if (!init || !init.type || !init.sdp) {
        //     throw new DOMException('Type and sdp properties are required.');
        // }

        this.#type = init ? init.type : null;
        this.#sdp = init ? init.sdp : null;
    }

    get type() {
        return this.#type;
    }

    get sdp() {
        return this.#sdp;
    }

    toJSON() {
        return {
            sdp: this.#sdp,
            type: this.#type,
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/Events.js
class RTCPeerConnectionIceEvent extends Event {
    #candidate;

    constructor(candidate) {
        super('icecandidate');

        this.#candidate = candidate;
    }

    get candidate() {
        return this.#candidate;
    }
}

class RTCDataChannelEvent extends Event {
    #channel;

    constructor(channel) {
        super('datachannel');

        this.#channel = channel;
    }

    get channel() {
        return this.#channel;
    }
}

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/RTCSctpTransport.js


class _RTCSctpTransport extends EventTarget {
    #pc = null;
    #extraFunctions = null;
    #transport = null;

    onstatechange = null;

    constructor({ pc, extraFunctions }) {
        super();
        this.#pc = pc;
        this.#extraFunctions = extraFunctions;

        this.#transport = new _RTCDtlsTransport({ pc, extraFunctions });

        // forward peerConnection events
        this.#pc.addEventListener('connectionstatechange', () => {
            this.dispatchEvent(new Event('statechange'));
        });

        // forward events to properties
        this.addEventListener('statechange', (e) => {
            if (this.onstatechange) this.onstatechange(e);
        });
    }

    get maxChannels() {
        if (this.state !== 'connected') return null;
        return this.#pc ? this.#extraFunctions.maxDataChannelId() : 0;
    }

    get maxMessageSize() {
        if (this.state !== 'connected') return null;
        return this.#pc ? this.#extraFunctions.maxMessageSize() : 0;
    }

    get state() {
        // reduce state from new, connecting, connected, disconnected, failed, closed, unknown
        // to RTCSctpTransport states connecting, connected, closed
        let state = this.#pc.connectionState;
        if (state === 'new' || state === 'connecting') {
            state = 'connecting';
        } else if (state === 'disconnected' || state === 'failed' || state === 'closed' || state === 'unknown') {
            state = 'closed';
        }
        return state;
    }

    get transport() {
        return this.#transport;
    }
}

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/RTCPeerConnection.js








class _RTCPeerConnection extends EventTarget {
    static async generateCertificate() {
        throw new Error('Not implemented');
    }

    #peerConnection;
    #localOffer;
    #localAnswer;
    #dataChannels;
    #config;
    #canTrickleIceCandidates;
    #sctp;

    #localCandidates = [];
    #remoteCandidates = [];

    onconnectionstatechange;
    ondatachannel;
    onicecandidate;
    onicecandidateerror;
    oniceconnectionstatechange;
    onicegatheringstatechange;
    onnegotiationneeded;
    onsignalingstatechange;
    ontrack;

    constructor(init = {}) {
        super();

        this.#config = init;
        this.#localOffer = createDeferredPromise();
        this.#localAnswer = createDeferredPromise();
        this.#dataChannels = new Set();
        this.#canTrickleIceCandidates = null;

        this.#peerConnection = new lib.PeerConnection(init?.peerIdentity ?? `peer-${getRandomString(7)}`, {
            ...init,
            iceServers:
                init?.iceServers
                    ?.map((server) => {
                        const urls = Array.isArray(server.urls) ? server.urls : [server.urls];

                        return urls.map((url) => {
                            if (server.username && server.credential) {
                                const [protocol, rest] = url.split(/:(.*)/);
                                return `${protocol}:${server.username}:${server.credential}@${rest}`;
                            }
                            return url;
                        });
                    })
                    .flat() ?? [],
        });

        // forward peerConnection events
        this.#peerConnection.onStateChange(() => {
            this.dispatchEvent(new Event('connectionstatechange'));
        });

        this.#peerConnection.onIceStateChange(() => {
            this.dispatchEvent(new Event('iceconnectionstatechange'));
        });

        this.#peerConnection.onSignalingStateChange(() => {
            this.dispatchEvent(new Event('signalingstatechange'));
        });

        this.#peerConnection.onGatheringStateChange(() => {
            this.dispatchEvent(new Event('icegatheringstatechange'));
        });

        this.#peerConnection.onDataChannel((channel) => {
            const dataChannel = new _RTCDataChannel(channel);
            this.#dataChannels.add(dataChannel);
            this.dispatchEvent(new RTCDataChannelEvent(dataChannel));
        });

        this.#peerConnection.onLocalDescription((sdp, type) => {
            if (type === 'offer') {
                this.#localOffer.resolve({ sdp, type });
            }

            if (type === 'answer') {
                this.#localAnswer.resolve({ sdp, type });
            }
        });

        this.#peerConnection.onLocalCandidate((candidate, sdpMid) => {
            if (sdpMid === 'unspec') {
                this.#localAnswer.reject(new Error(`Invalid description type ${sdpMid}`));
                return;
            }

            this.#localCandidates.push(new _RTCIceCandidate({ candidate, sdpMid }));
            this.dispatchEvent(new RTCPeerConnectionIceEvent(new _RTCIceCandidate({ candidate, sdpMid })));
        });

        // forward events to properties
        this.addEventListener('connectionstatechange', (e) => {
            if (this.onconnectionstatechange) this.onconnectionstatechange(e);
        });
        this.addEventListener('signalingstatechange', (e) => {
            if (this.onsignalingstatechange) this.onsignalingstatechange(e);
        });
        this.addEventListener('iceconnectionstatechange', (e) => {
            if (this.oniceconnectionstatechange) this.oniceconnectionstatechange(e);
        });
        this.addEventListener('icegatheringstatechange', (e) => {
            if (this.onicegatheringstatechange) this.onicegatheringstatechange(e);
        });
        this.addEventListener('datachannel', (e) => {
            if (this.ondatachannel) this.ondatachannel(e);
        });
        this.addEventListener('icecandidate', (e) => {
            if (this.onicecandidate) this.onicecandidate(e);
        });

        this.#sctp = new _RTCSctpTransport({
            pc: this,
            extraFunctions: {
                maxDataChannelId: () => {
                    return this.#peerConnection.maxDataChannelId();
                },
                maxMessageSize: () => {
                    return this.#peerConnection.maxMessageSize();
                },
                localCandidates: () => {
                    return this.#localCandidates;
                },
                remoteCandidates: () => {
                    return this.#remoteCandidates;
                },
                selectedCandidatePair: () => {
                    return this.#peerConnection.getSelectedCandidatePair();
                },
            },
        });
    }

    get canTrickleIceCandidates() {
        return this.#canTrickleIceCandidates;
    }

    get connectionState() {
        return this.#peerConnection.state();
    }

    get iceConnectionState() {
        return this.#peerConnection.iceState();
    }

    get iceGatheringState() {
        return this.#peerConnection.gatheringState();
    }

    get currentLocalDescription() {
        return new _RTCSessionDescription(this.#peerConnection.localDescription());
    }

    get currentRemoteDescription() {
        return new _RTCSessionDescription(this.#peerConnection.remoteDescription());
    }

    get localDescription() {
        return new _RTCSessionDescription(this.#peerConnection.localDescription());
    }

    get pendingLocalDescription() {
        return new _RTCSessionDescription(this.#peerConnection.localDescription());
    }

    get pendingRemoteDescription() {
        return new _RTCSessionDescription(this.#peerConnection.remoteDescription());
    }

    get remoteDescription() {
        return new _RTCSessionDescription(this.#peerConnection.remoteDescription());
    }

    get sctp() {
        return this.#sctp;
    }

    get signalingState() {
        return this.#peerConnection.signalingState();
    }

    static generateCertificate(keygenAlgorithm) {
        throw new external_node_domexception_namespaceObject('Not implemented');
    }

    async addIceCandidate(candidate) {
        if (candidate == null || candidate.candidate == null) {
            throw new external_node_domexception_namespaceObject('Candidate invalid');
        }

        this.#remoteCandidates.push(
            new _RTCIceCandidate({ candidate: candidate.candidate, sdpMid: candidate.sdpMid || '0' }),
        );
        this.#peerConnection.addRemoteCandidate(candidate.candidate, candidate.sdpMid || '0');
    }

    addTrack(track, ...streams) {
        throw new external_node_domexception_namespaceObject('Not implemented');
    }

    addTransceiver(trackOrKind, init) {
        throw new external_node_domexception_namespaceObject('Not implemented');
    }

    close() {
        // close all channels before shutting down
        this.#dataChannels.forEach((channel) => {
            channel.close();
        });

        this.#peerConnection.close();
    }

    createAnswer() {
        return this.#localAnswer;
    }

    createDataChannel(label, opts = {}) {
        const channel = this.#peerConnection.createDataChannel(label, opts);
        const dataChannel = new _RTCDataChannel(channel, opts);

        // ensure we can close all channels when shutting down
        this.#dataChannels.add(dataChannel);
        dataChannel.addEventListener('close', () => {
            this.#dataChannels.delete(dataChannel);
        });

        return dataChannel;
    }

    createOffer() {
        return this.#localOffer;
    }

    getConfiguration() {
        return this.#config;
    }

    getReceivers() {
        throw new external_node_domexception_namespaceObject('Not implemented');
    }

    getSenders() {
        throw new external_node_domexception_namespaceObject('Not implemented');
    }

    getStats() {
        return new Promise((resolve) => {
            let report = new Map();
            let cp = this.#peerConnection.getSelectedCandidatePair();
            let bytesSent = this.#peerConnection.bytesSent();
            let bytesReceived = this.#peerConnection.bytesReceived();
            let rtt = this.#peerConnection.rtt();

            let localIdRs = getRandomString(8);
            let localId = 'RTCIceCandidate_' + localIdRs;
            report.set(localId, {
                id: localId,
                type: 'localcandidate',
                timestamp: Date.now(),
                candidateType: cp.local.type,
                ip: cp.local.address,
                port: cp.local.port,
            });

            let remoteIdRs = getRandomString(8);
            let remoteId = 'RTCIceCandidate_' + remoteIdRs;
            report.set(remoteId, {
                id: remoteId,
                type: 'remotecandidate',
                timestamp: Date.now(),
                candidateType: cp.remote.type,
                ip: cp.remote.address,
                port: cp.remote.port,
            });

            let candidateId = 'RTCIceCandidatePair_' + localIdRs + '_' + remoteIdRs;
            report.set(candidateId, {
                id: candidateId,
                type: 'candidate-pair',
                timestamp: Date.now(),
                localCandidateId: localId,
                remoteCandidateId: remoteId,
                state: 'succeeded',
                nominated: true,
                writable: true,
                bytesSent: bytesSent,
                bytesReceived: bytesReceived,
                totalRoundTripTime: rtt,
                currentRoundTripTime: rtt,
            });

            let transportId = 'RTCTransport_0_1';
            report.set(transportId, {
                id: transportId,
                timestamp: Date.now(),
                type: 'transport',
                bytesSent: bytesSent,
                bytesReceived: bytesReceived,
                dtlsState: 'connected',
                selectedCandidatePairId: candidateId,
                selectedCandidatePairChanges: 1,
            });

            return resolve(report);
        });
    }

    getTransceivers() {
        return []; // throw new DOMException('Not implemented');
    }

    removeTrack() {
        throw new external_node_domexception_namespaceObject('Not implemented');
    }

    restartIce() {
        throw new external_node_domexception_namespaceObject('Not implemented');
    }

    setConfiguration(config) {
        this.#config = config;
    }

    async setLocalDescription(description) {
        if (description == null || description.type == null) {
            throw new external_node_domexception_namespaceObject('Local description type must be set');
        }

        if (description.type !== 'offer') {
            // any other type causes libdatachannel to throw
            return;
        }
        this.#peerConnection.setLocalDescription(description.type);
    }

    async setRemoteDescription(description) {
        if (description.sdp == null) {
            throw new external_node_domexception_namespaceObject('Remote SDP must be set');
        }

        this.#peerConnection.setRemoteDescription(description.sdp, description.type);
    }
}

function createDeferredPromise() {
    let resolve, reject;

    let promise = new Promise(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
    });

    promise.resolve = resolve;
    promise.reject = reject;
    return promise;
}

function getRandomString(length) {
    return Math.random()
        .toString(36)
        .substring(2, 2 + length);
}

;// CONCATENATED MODULE: ./node_modules/node-datachannel/polyfill/index.js












/* harmony default export */ const polyfill = ({
    RTCCertificate: RTCCertificate,
    RTCDataChannel: _RTCDataChannel,
    RTCDtlsTransport: _RTCDtlsTransport,
    RTCIceCandidate: _RTCIceCandidate,
    RTCIceTransport: _RTCIceTransport,
    RTCPeerConnection: _RTCPeerConnection,
    RTCSctpTransport: _RTCSctpTransport,
    RTCSessionDescription: _RTCSessionDescription,
    RTCDataChannelEvent: RTCDataChannelEvent,
    RTCPeerConnectionIceEvent: RTCPeerConnectionIceEvent,
});

;// CONCATENATED MODULE: external "ws"
const external_ws_namespaceObject = require("ws");
;// CONCATENATED MODULE: external "@crewdle/mist-connector-webrtc-browser"
const mist_connector_webrtc_browser_namespaceObject = require("@crewdle/mist-connector-webrtc-browser");
;// CONCATENATED MODULE: ./src/index.ts



global.RTCPeerConnection = _RTCPeerConnection;
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