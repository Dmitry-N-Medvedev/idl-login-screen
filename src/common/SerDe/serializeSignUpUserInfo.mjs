const encoder = new TextEncoder();

export const serializeSignUpUserInfo = async (message) => encoder.encode(JSON.stringify(message));
