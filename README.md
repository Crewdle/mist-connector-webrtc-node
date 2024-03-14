# Crewdle Mist WebRTC Node.js Connector

## Introduction

The Crewdle Mist WebRTC Node.js Connector harnesses the capabilities of the Node.js environment to facilitate peer-to-peer connections within the Crewdle Mist platform, leveraging the robustness of server-side operations. This connector is adept at handling the WebRTC protocol for real-time interactions, enabling direct communication and efficient data transfer between peers in a server-driven manner. By integrating with Node.js-based WebRTC functionalities, it bypasses the necessity for browser dependencies or additional software installations, offering a more flexible and powerful approach for real-time communication needs. This Node.js connector is an essential tool for developers looking to embed real-time communication features in their applications, particularly those that benefit from the scalability and versatility of server-side logic within the decentralized Crewdle Mist architecture.

## Getting Started

Before diving in, ensure you have installed the [Crewdle Mist SDK](https://www.npmjs.com/package/@crewdle/web-sdk).

## Installation

```bash
npm install @crewdle/mist-connector-webrtc-node
```

## Usage

```TypeScript
import { WebRTCNodePeerConnectionConnector } from '@crewdle/mist-connector-webrtc-node';

// Create a new SDK instance
const sdk = await SDK.getInstance('[VENDOR ID]', '[ACCESS TOKEN]', {
  peerConnectionConnector: WebRTCNodePeerConnectionConnector,
});
```

## Need Help?

Reach out to support@crewdle.com or raise an issue in our repository for any assistance.

## Join Our Community

For an engaging discussion about your specific use cases or to connect with fellow developers, we invite you to join our Discord community. Follow this link to become a part of our vibrant group: [Join us on Discord](https://discord.gg/XJ3scBYX).
