import util from 'util';
import EventEmitter from 'events';
import uWS from 'uWebSockets.js';

const noop = () => { };

export class LibAPI extends EventEmitter {
  #config = null;
  #debuglog = noop;
  #wss = null;
  #uws_listen_socket = null;

  constructor(config) {
    super();

    this.#config = { ...config };
    this.#debuglog = util.debuglog(this.constructor.name);
  }

  async start() {
    this.#wss = uWS.App({})
      .ws('/*', {
        compression: uWS.SHARED_COMPRESSOR,
        maxPayloadLength: 16 * 1024 * 1024,
        idleTimeout: 10,
        open: (/* ws */) => {
          this.#debuglog('ws connected');
        },
        message: (ws, message, isBinary) => {
          this.#debuglog('ws message', message, isBinary);
        },
        close: (ws, code, message) => {
          this.#debuglog('ws closed', code, message);
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
