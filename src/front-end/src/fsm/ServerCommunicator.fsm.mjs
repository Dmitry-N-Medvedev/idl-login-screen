import {
  FsmProtocolMessages,
} from '../constants/FsmProtocolMessages.mjs';
import {
  BroadcastChannelNames,
} from '../constants/BroadcastChannelNames.mjs';
// import {
//   MessageTypes,
// } from '../../../common/messages/MessageTypes.mjs';
import {
  WebSocketsCloseCodes,
} from '../../../common/constants/WebSocketsCloseCodes.mjs';
import {
  serializeMessage,
} from '../../../common/SerDe/serializeMessage.mjs';

let serverCommunicatorBroadcastChannel = null;
let client = null;

const handleServerCommunicatorMessage = async ({ data: { type, payload } }) => {
  try {
    const serializedMessage = await serializeMessage(Object.freeze({
      type,
      payload,
    }));

    client.send(serializedMessage);
  } catch (serializationError) {
    // eslint-disable-next-line no-console
    console.debug(serializationError);
  }
};

const startClient = () => new Promise((resolve, reject) => {
  try {
    client = new WebSocket('ws://localhost:9001/');

    client.onerror = async (event) => {
      // eslint-disable-next-line no-console
      console.debug('client.onerror:', event);

      await startClient();
    };

    client.onopen = () => {
      resolve();
    };

    client.onclose = (event) => {
      // eslint-disable-next-line no-console
      console.debug('client.onclose:', event);
    };

    client.onmessage = async ({ data }) => {
      const message = JSON.parse((new TextDecoder()).decode(await data.arrayBuffer()));

      // eslint-disable-next-line no-console
      console.debug('client.onmessage:', message);
    };
  } catch (error) {
    reject(error);
  }
});

const stopClient = () => new Promise((resolve, reject) => {
  try {
    client.close(WebSocketsCloseCodes.CLOSE_NORMAL, 'bye :)', resolve);
  } catch (error) {
    reject(error);
  } finally {
    client = null;
  }
});

const start = async () => {
  serverCommunicatorBroadcastChannel = new BroadcastChannel(
    BroadcastChannelNames.ServerCommunicatorBroadcastChannel,
  );
  serverCommunicatorBroadcastChannel.onmessage = handleServerCommunicatorMessage;

  await startClient();

  // eslint-disable-next-line no-restricted-globals
  self.postMessage(FsmProtocolMessages.started);
};

const stop = async () => {
  if (serverCommunicatorBroadcastChannel) {
    serverCommunicatorBroadcastChannel.onmessage = null;
    serverCommunicatorBroadcastChannel.stop();
  }

  await stopClient();

  // eslint-disable-next-line no-restricted-globals
  self.postMessage(FsmProtocolMessages.stopped);
};

const handleIncomingMessage = (message) => {
  switch (message.type) {
    case FsmProtocolMessages.start.type: {
      return start();
    }
    case FsmProtocolMessages.stop.type: {
      return stop();
    }
    default: {
      // eslint-disable-next-line no-console
      console.error('unknown message type', message);
    }
  }

  return undefined;
};

// eslint-disable-next-line func-names
onmessage = function ({ data }) {
  handleIncomingMessage(data);
};

// eslint-disable-next-line no-restricted-globals, func-names
onerror = function (event) {
  // eslint-disable-next-line no-console
  console.debug('ServerCommunicator.fsm.onerror', event);
};
