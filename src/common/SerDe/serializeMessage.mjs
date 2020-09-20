import {
  MessageTypes,
} from '../messages/MessageTypes.mjs';
import {
  serializeSignUpUserInfo,
} from './serializeSignUpUserInfo.mjs';
import {
  serializeAuthenticationSuccessMessage,
} from './serializeAuthenticationSuccessMessage.mjs';

const serializers = {
  [MessageTypes.SignUpUserInfo]: serializeSignUpUserInfo,
  [MessageTypes.AuthenticationSuccess]: serializeAuthenticationSuccessMessage,
};

export const serializeMessage = async (message) => ((serializers[message.type])(message));
