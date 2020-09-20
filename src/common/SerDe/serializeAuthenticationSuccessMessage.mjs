// eslint-disable-next-line node/no-unsupported-features/node-builtins
const encoder = new TextEncoder();

export const serializeAuthenticationSuccessMessage = async (message) => encoder.encode(
  JSON.stringify(message),
);
