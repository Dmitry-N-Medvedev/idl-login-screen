import util from 'util';
import EventEmitter from 'events';
import uWS from 'uWebSockets.js';
import {
  noop,
} from '../../common/noop.mjs';
import {
  MessageHandler,
} from './MessageHandler.mjs';

const sendMessageProps = {
  isBinary: true,
  compress: false,
};

export class LibAPI extends EventEmitter {
  #config = null;
  #debuglog = noop;
  #wss = null;
  #uws_listen_socket = null;
  #messageHandler = null;

  constructor(config) {
    super();

    this.#config = { ...config };
    this.#debuglog = util.debuglog(this.constructor.name);
    this.#messageHandler = new MessageHandler();
  }

  async start() {
    this.#wss = uWS.App({})
      .ws('/*', {
        compression: uWS.SHARED_COMPRESSOR,
        maxPayloadLength: 16 * 1024 * 1024,
        idleTimeout: 0,
        open: (/* ws */) => {
          this.#debuglog('ws connected');
        },
        message: async (ws, message, isBinary) => {
          try {
            ws.send(
              (await this.#messageHandler.processMessage(message, isBinary)),
              sendMessageProps,
            );
          } catch (messageProcessingError) {
            ws.send(JSON.stringify(messageProcessingError), ...{ sendMessageProps });
          }
        },
        close: (ws, code) => {
          this.#debuglog('ws closed', code);
        },
      })
      .any('/*', (res /* , req */) => {
        res.end('use ws:// proto');
      })
      .listen(this.#config.port, (token) => {
        this.#uws_listen_socket = token;

        if (this.#uws_listen_socket) {
          this.#debuglog(`uWs is listening on ${this.#config.port}`);
        } else {
          this.#debuglog(`uWs failed to listen to ${this.#config.port}`);
        }
      });

    this.#debuglog(`${this.constructor.name} started`);
  }

  async stop() {
    if (this.#uws_listen_socket) {
      uWS.us_listen_socket_close(this.#uws_listen_socket);
      this.#uws_listen_socket = null;
    }

    this.#debuglog(`${this.constructor.name} stopped`);
  }
}
