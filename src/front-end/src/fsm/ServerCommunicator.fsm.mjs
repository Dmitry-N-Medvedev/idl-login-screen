import {
  FsmProtocolMessages,
} from '../constants/FsmProtocolMessages.mjs';
import {
  BroadcastChannelNames,
} from '../constants/BroadcastChannelNames.mjs';
import {
  StructureTypes,
} from '../constants/StructureTypes.mjs';
import {
  serializeMessage,
} from './SerDe/serializeMessage.mjs';

let serverCommunicatorBroadcastChannel = null;

const handleServerCommunicatorMessage = async ({ data: { type, payload } }) => {
  try {
    const serializedMessage = await serializeMessage(Object.freeze({
      type,
      payload,
    }));
  
    console.debug('[ServerCommunicator.fsm] send serializedMessage to the server', serializedMessage);
  } catch (serializationError) {
    console.debug(serializationError);
  }
};

const start = () => {
  serverCommunicatorBroadcastChannel = new BroadcastChannel(BroadcastChannelNames.ServerCommunicatorBroadcastChannel);
  serverCommunicatorBroadcastChannel.onmessage = handleServerCommunicatorMessage;

  self.postMessage(FsmProtocolMessages.started);
};

const stop = () => {
  if (serverCommunicatorBroadcastChannel) {
    serverCommunicatorBroadcastChannel.onmessage = null;
    serverCommunicatorBroadcastChannel.stop();
  }

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
      console.error('unknown message type', message);
    }
  }
};

onmessage = function ({
  data
}) {
  handleIncomingMessage(data);
};

onerror = function (event) {
  console.debug('ServerCommunicator.fsm.onerror', event);
};
