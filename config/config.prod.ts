import { EggAppConfig } from 'egg'
import { DefaultConfig } from './config.default';

export default (appInfo: EggAppConfig) => {
  return {
    keys: appInfo.name + '_1527427128465_4432'
  } as DefaultConfig;
};
