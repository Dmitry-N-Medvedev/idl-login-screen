import dotenv from 'dotenv';
import mocha from 'mocha';
import chai from 'chai';
import {
  LibAPI,
} from '../libapi.node.mjs';

const {
  describe,
  beforeEach,
  afterEach,
  it,
} = mocha;
const {
  expect,
} = chai;

dotenv.config({
  path: './specs/.env',
});

mocha.Runner.prototype.uncaught = (error) => {
  // eslint-disable-next-line no-console
  console.error(error);
};

describe('libAPI', () => {
  const uWsConfig = Object.freeze({
    port: parseInt(process.env.UWS_PORT, 10),
  });
  let libAPI = null;

  beforeEach(async () => {
    libAPI = new LibAPI(uWsConfig);

    return libAPI.start();
  });

  afterEach(() => libAPI.stop());

  it('should start/stop API server', async () => {
    expect(true).to.be.true;
  });
});
