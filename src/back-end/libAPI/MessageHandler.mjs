import {
  noop,
} from '../../common/noop.mjs';
import {
  deserializeMessage,
} from '../../common/SerDe/deserializeMessage.mjs';
import {
  MessageTypes,
} from '../../common/messages/MessageTypes.mjs';
import {
  handleSignUpMessage,
} from './MessageHandlers/SignUpMessageHandler.mjs';

export class MessageHandler {
  #debuglog = noop;
  #messageHandlers = {
    [MessageTypes.SignUpUserInfo]: handleSignUpMessage,
  };

  async processMessage(serializedMessage) {
    const message = deserializeMessage(serializedMessage);

    return (this.#messageHandlers[message.type])(message);
  }
}
