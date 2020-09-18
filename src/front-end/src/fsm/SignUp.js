onmessage = function ({ data }) {
  console.debug('SignUp.fsm.onmessage', data);
},
onerror = function (event) {
  console.debug('SignUp.fsm.onerror', event);
},

self.postMessage('asshole');

// import {
//   initializeSignUpFSM,
//   finalizeSignUpFSM,
// } from './SignUpUserInfo.fsm.mjs';

// const fsms = {

// };

// export const intitialize = () => {
//   console.debug('SignUp.fsm::intitialize');
// };

// export const finalize = () => {
//   console.debug('SignUp.fsm::finalize');
// };
