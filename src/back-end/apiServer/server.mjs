import dotenv from 'dotenv';
import {
  LibAPI,
} from '@dmitry-n-medvedev/libapi';

let libAPI = null;

const handleSignal = async (signal) => {
  // eslint-disable-next-line no-console
  console.debug(`\n\n\ngot ${signal} signal. bye :)`);

  await libAPI.stop();

  // eslint-disable-next-line no-process-exit
  process.exit(0);
};

process.on('uncaughtException', async (error) => {
  // eslint-disable-next-line no-console
  console.error(error);

  await libAPI.stop();

  process.emit(1);
});

process.on('SIGINT', handleSignal);

(async () => {
  dotenv.config({
    path: './.env',
  });

  const config = Object.freeze({
    port: parseInt(process.env.UWS_PORT, 10),
  });

  libAPI = new LibAPI(config);

  await libAPI.start();
})();
