export const FsmProtocolMessages = Object.freeze({
  start: Object.freeze({
    type: 'req:start',
  }),
  started: Object.freeze({
    type: 'res:start',
  }),
  stop: Object.freeze({
    type: 'req:stop',
  }),
  stopped: Object.freeze({
    type: 'res:stop',
  }),
});