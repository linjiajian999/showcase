import { EggAppConfig, PowerPartial } from 'egg';

// middleware interface
import {
  HelloMiddleWare
} from '../app/middleware/hello'

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}
export type TheMiddleware = HelloMiddleWare

export default (appInfo: EggAppConfig) => {
  const config =
    {} as PowerPartial<EggAppConfig> & BizConfig & TheMiddleware;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527427128465_4432';

  // add your config here
  config.middleware = [
    'hello'
  ];
  config.hello = {
    name: 'hello',
    info: 'hello middleware',
    type: 'string'
  }

  return config;
};
