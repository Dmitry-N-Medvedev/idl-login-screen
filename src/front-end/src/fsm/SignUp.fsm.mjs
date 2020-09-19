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

const signUpUserInfo = Object.assign({}, SignUpUserInfoStructure);

const isAllSignUpUserInfoFieldsPopulated = (userInfo) => Object.values(userInfo.payload).some((value) => value === null) === false;

const handleUserInfoFieldChangeMessage = ({ data: { type, key, payload }}) => {
  console.debug('FSM SignUp::handleUserInfoFieldChangeMessage', type, key, payload);

  switch(type) {
    case SignUpProtocolMessageTypes.FieldValueChanged: {
      signUpUserInfo.payload[key] = payload;
    
      console.debug('signUpUserInfo', signUpUserInfo);
    
      if (isAllSignUpUserInfoFieldsPopulated(signUpUserInfo)) {
        console.debug('signUpUserInfo: all fields are populated', signUpUserInfo);
    
        userInfoFieldChangeBroadcastChannel.postMessage(SignUpProtocolMessages.AllFieldsPopulated());
      }

      break;
    }
    case SignUpProtocolMessageTypes.SubmitSignUpInfo: {
      console.debug('FSM SignUp::handleUserInfoFieldChangeMessage', type);
      break;
    }
    default: {}
  }

};

const start = () => {
  userInfoFieldChangeBroadcastChannel = new BroadcastChannel(BroadcastChannelNames.UserInfoFieldChangeBroadcastChannel);
  userInfoFieldChangeBroadcastChannel.onmessage = handleUserInfoFieldChangeMessage;

  self.postMessage(FsmProtocolMessages.started);
};

const stop = () => {
  if (userInfoFieldChangeBroadcastChannel) {
    userInfoFieldChangeBroadcastChannel.onmessage = null;
    userInfoFieldChangeBroadcastChannel.stop();
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
