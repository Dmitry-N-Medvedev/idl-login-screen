import signUpFSMURL from 'omt:./SignUp.js';

const fsms = {
  signUpFSM: {
    modulePath: `client/${signUpFSMURL.slice(2)}`,
    object: null,
  },
};

export const initializeFSM = async () => {
  for await (const [name, fsm] of Object.entries(fsms)) {
    console.debug('for:', name, fsm);

    try {
      fsm.object = new Worker(fsm.modulePath, {
        type: 'module',
        name,
      });

      fsm.object.onmessage = (event) => {
        console.debug('message from fsm', event);
      };
  
      fsm.object.postMessage({ hello: 'world' });
    } catch (error) {
      console.error(error);
    }

    console.debug(`FSM.initialized: ${name}`, fsm.object);
  }

  console.debug('ALL FSM have been initialized');
};

export const finalizeFSM = () => {
  Object.entries(fsms).forEach(([name, fsm]) => {
    fsm.finalize();

    console.debug(`FSM.finalized: ${name}`);
  });

  console.debug('ALL FSM have been finalized');
};