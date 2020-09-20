import {
  nanoid,
} from 'nanoid';
import {
  AuthenticationSuccessMessage,
} from '../../../common/messages/AuthenticationSuccessMessage.mjs';
import {
  serializeAuthenticationSuccessMessage,
} from '../../../common/SerDe/serializeAuthenticationSuccessMessage.mjs';

export const handleSignUpMessage = async (/* signUpMessage */) => {
  const authenticationSuccessMessage = Object.assign(
    Object.create(null),
    AuthenticationSuccessMessage,
    {
      payload: {
        token: nanoid(64),
      },
    },
  );

  return serializeAuthenticationSuccessMessage(authenticationSuccessMessage);
};
