// eslint-disable-next-line node/no-unsupported-features/node-builtins
const decoder = new TextDecoder();

export const deserializeMessage = (buffer) => JSON.parse(decoder.decode(buffer));
