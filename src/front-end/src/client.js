import * as sapper from '@sapper/app';
import {
  initializeFSM,
  finalizeFSM,
} from './fsm/index.mjs';

window.addEventListener('unload', (event) => {
  finalizeFSM();
});

(async () => {
  await initializeFSM();

  sapper.start({
    target: document.querySelector('#idl'),
  });
})();

