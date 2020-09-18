import {
  targets,
} from './targets.js';

export const preset_env = Object.freeze({
  useESModules: true,
  esmodules: true,
  useBuiltIns: 'entry',
  targets,
  modules: false,
});
