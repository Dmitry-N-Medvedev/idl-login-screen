import {
  BroadcastChannelNames,
} from '../constants/BroadcastChannelNames.mjs';

const userInfo = {
  position: null,
  bday: null,
  guardianEmail: null,
  firstName: null,
  lastName: null,
  userName: null,
  email: null,
  password: null,
  repeatPassword: null,
  city: null,
  localization: null,
};

let userInfoFieldChangeBroadcastChannel = null;

const handleBroadcastChannelMessage = (event) => {
  console.debug('userInfoFieldChangeBroadcastChannel.message', event);

  const {
    key,
    payload
  } = event.data;

  userInfo[key] = payload;

  event.srcElement.postMessage({
    key,
    payload: true
  });

  console.debug('userInfo', userInfo);
};

const handleBroadcastChannelMessageError = (event) => {
  console.error('userInfoFieldChangeBroadcastChannel.messageerror', event);
};

export const initializeSignUpFSM = () => {
  userInfoFieldChangeBroadcastChannel = new BroadcastChannel(BroadcastChannelNames.UserInfoFieldChangeBroadcastChannel);

  userInfoFieldChangeBroadcastChannel.addEventListener('message', handleBroadcastChannelMessage, {
    capture: true,
    passive: true,
  });
  userInfoFieldChangeBroadcastChannel.addEventListener('messageerror', handleBroadcastChannelMessageError, {
    capture: true,
    passive: true,
  });
};

export const finalizeSignUpFSM = () => {
  if (userInfoFieldChangeBroadcastChannel) {
    userInfoFieldChangeBroadcastChannel.removeEventListener('message', handleBroadcastChannelMessage);
    userInfoFieldChangeBroadcastChannel.removeEventListener('messageerror', handleBroadcastChannelMessageError);
    userInfoFieldChangeBroadcastChannel.close();
  }
};