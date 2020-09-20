import dotenv from 'dotenv';
import {
  nanoid,
} from 'nanoid';
import mocha from 'mocha';
import chai from 'chai';
import WebSocket from 'ws';
import {
  LibAPI,
} from '../libapi.node.mjs';
import {
  MessageTypes,
} from '../../../common/messages/MessageTypes.mjs';
import {
  SignUpUserInfoMessage,
} from '../../../common/messages/SignUpUserInfoMessage.mjs';
import {
  WebSocketsCloseCodes,
} from '../../../common/constants/WebSocketsCloseCodes.mjs';
import {
  serializeMessage,
} from '../../../common/SerDe/serializeMessage.mjs';
import {
  deserializeMessage,
} from '../../../common/SerDe/deserializeMessage.mjs';

const {
  describe,
  beforeEach,
  afterEach,
  it,
} = mocha;
const {
  expect,
} = chai;

dotenv.config({
  path: './specs/.env',
});

mocha.Runner.prototype.uncaught = (error) => {
  // eslint-disable-next-line no-console
  console.error(error);
};

describe('libAPI', () => {
  const sendMessageProps = {
    isBinary: true,
    compress: false,
  };
  const uWsConfig = Object.freeze({
    port: parseInt(process.env.UWS_PORT, 10),
  });
  let libAPI = null;

  beforeEach(async () => {
    libAPI = new LibAPI(uWsConfig);

    return libAPI.start();
  });

  afterEach(() => libAPI.stop());

  it('should start/stop API server', async () => {
    expect(true).to.be.true;
  });

  it.only(`should send ${MessageTypes.SignUpUserInfo} message to WSS`, async () => {
    let client = null;
    let signUpUserInfoMessage = null;
    let serializedMessage = null;

    const prepareMessage = async () => {
      signUpUserInfoMessage = Object.assign(Object.create(null), SignUpUserInfoMessage);

      Object.keys(signUpUserInfoMessage.payload).forEach((key) => {
        signUpUserInfoMessage.payload[key] = nanoid(5);
      });

      serializedMessage = await serializeMessage(signUpUserInfoMessage);
    };
    const connectToWSS = () => new Promise((resolve, reject) => {
      client = new WebSocket(`ws://localhost:${uWsConfig.port}/`);

      client.on('open', resolve);
      client.on('error', reject);
    });
    const sendSignUpUserInfoMessage = () => new Promise((resolve, reject) => {
      client.on('message', (messageBuffer) => {
        const message = deserializeMessage(messageBuffer);

        expect(
          message.type,
        ).to.equal(
          MessageTypes.AuthenticationSuccess,
        );
        expect(message.payload.token).to.exist;

        resolve();
      });

      try {
        client.send(serializedMessage, sendMessageProps);
      } catch (error) {
        reject(error);
      }
    });
    const disconnectFromWSS = () => new Promise((resolve, reject) => {
      try {
        client.close(WebSocketsCloseCodes.CLOSE_NORMAL, 'bye :)');

        resolve();
      } catch (error) {
        reject(error);
      }
    });

    await prepareMessage();
    await connectToWSS();
    await sendSignUpUserInfoMessage();
    return disconnectFromWSS();
  }).timeout(0);
});
