import {
  MessageTypes,
} from './MessageTypes.mjs';

export const AuthenticationSuccessMessage = ({
  type: MessageTypes.AuthenticationSuccess,
  payload: {
    token: null,
  },
});
