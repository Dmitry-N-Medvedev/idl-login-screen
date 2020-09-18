import {
  nanoid,
} from 'nanoid';

export const BroadcastChannelNames = Object.freeze({
  UserInfoFieldChangeBroadcastChannel: `bc:${nanoid(7)}`,
  SignUpUserInfoPopulated: `bc:${nanoid(7)}`,
});
