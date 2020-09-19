const encoder = new TextEncoder();

export const serializeSignUpUserInfo = async (message) => {
  return encoder.encode(JSON.stringify(message));
}
