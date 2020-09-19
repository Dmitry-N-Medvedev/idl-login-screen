import {
  fixOmtPath,
} from '../helpers/fixOmtPath.mjs';
import signUpFSMURL from 'omt:./SignUp.fsm.mjs';
import {
  FsmProtocolMessages,
} from '../constants/FsmProtocolMessages.mjs';

const fsms = {
  signUpFSM: {
    modulePath: fixOmtPath(signUpFSMURL),
    object: null,
    state: null,
  },
};

export const initializeFSM = async () => {
  const createFsms = () => {
    for (const [name, fsm] of Object.entries(fsms)) {
      try {
        fsm.object = new Worker(fsm.modulePath, {
          type: 'module',
          name,
        });
      } catch (error) {
        console.error(error);

        throw error;
      }
    }
  };
  const startFsms = () => new Promise((resolve, reject) => {
    const setFsmState = (fsmName, fsmState) => {
      (fsms[fsmName]).state = fsmState;

      if (Object.values(fsms).some((fsm) => fsm.state !== FsmProtocolMessages.started.type) === false) {
        return resolve();
      }
    };

    for (const [name, fsm] of Object.entries(fsms)) {
      try {
        fsm.object.onmessage = ({ data }) => {
          setFsmState(name, data.type);

          fsm.object.onmessage = null;
          };
  
        fsm.object.postMessage(FsmProtocolMessages.start);
      } catch (error) {
        console.error(error);
      }
    }
  });

  createFsms();
  await startFsms();
};

export const finalizeFSM = () => {
  for (const [name, fsm] of Object.entries(fsms)) {
    fsm.object.postMessage(FsmProtocolMessages.stop);
  }

  for (const [name, fsm] of Object.entries(fsms)) {
    fsm.object.terminate();
  }
};