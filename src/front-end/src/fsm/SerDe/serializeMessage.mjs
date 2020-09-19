import {
  StructureTypes,
} from '../../constants/StructureTypes.mjs';
import {
  serializeSignUpUserInfo,
} from './serializeSignUpUserInfo.mjs';

const serializers = {
  [StructureTypes.SignUpUserInfo]: serializeSignUpUserInfo,
};

export const serializeMessage = async (message) => {
  console.debug('serializeMessage', message);

  try {
    return (await (serializers[message.type])(message));
  } catch (serializationError) {
    throw serializationError;
  }
};