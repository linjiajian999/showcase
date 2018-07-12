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

// my config
export interface MiddlewareList {
  middleware: string[]
}

export default (appInfo: EggAppConfig) => {
  return {
    // app special config
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1527427128465_4432',
    // add your config here
    middleware: [
      'hello'
    ],
    hello: {
      name: 'hello',
      info: 'hello middleware',
      type: 'string'
    },
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'abc123',
        database: 'test'
      },
      app: true
    }
  } as PowerPartial<EggAppConfig> & BizConfig & HelloMiddleWare & MiddlewareList;
};
