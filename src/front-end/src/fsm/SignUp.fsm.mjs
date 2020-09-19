import {
  FsmProtocolMessages,
} from '../constants/FsmProtocolMessages.mjs';
import {
  BroadcastChannelNames,
} from '../constants/BroadcastChannelNames.mjs';
import {
  SignUpProtocolMessageTypes,
  SignUpProtocolMessages,
} from '../constants/SignUpProtocolMessages.mjs';
import {
  SignUpUserInfoStructure,
} from '../constants/SignUpUserInfoStructure.mjs';

let userInfoFieldChangeBroadcastChannel = null;
let serverCommunicatorBroadcastChannel = null;

const signUpUserInfo = Object.assign({}, SignUpUserInfoStructure);

const isAllSignUpUserInfoFieldsPopulated = (userInfo) => Object.values(userInfo.payload).some((value) => value === null) === false;

const handleUserInfoFieldChangeMessage = ({ data: { type, key, payload }}) => {
  switch(type) {
    case SignUpProtocolMessageTypes.FieldValueChanged: {
      signUpUserInfo.payload[key] = payload;
    
      if (isAllSignUpUserInfoFieldsPopulated(signUpUserInfo)) {
        userInfoFieldChangeBroadcastChannel.postMessage(SignUpProtocolMessages.AllFieldsPopulated());
      }

      break;
    }
    case SignUpProtocolMessageTypes.SubmitSignUpInfo: {
      serverCommunicatorBroadcastChannel.postMessage(signUpUserInfo);
      break;
    }
    default: {
      break;
    }
  }

};

const start = () => {
  serverCommunicatorBroadcastChannel = new BroadcastChannel(BroadcastChannelNames.ServerCommunicatorBroadcastChannel);

  userInfoFieldChangeBroadcastChannel = new BroadcastChannel(BroadcastChannelNames.UserInfoFieldChangeBroadcastChannel);
  userInfoFieldChangeBroadcastChannel.onmessage = handleUserInfoFieldChangeMessage;

  self.postMessage(FsmProtocolMessages.started);
};

const stop = () => {
  if (userInfoFieldChangeBroadcastChannel) {
    userInfoFieldChangeBroadcastChannel.onmessage = null;
    userInfoFieldChangeBroadcastChannel.stop();
  }

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

onmessage = function ({ data }) {
  handleIncomingMessage(data);
};

onerror = function (event) {
  console.debug('SignUp.fsm.onerror', event);
};
