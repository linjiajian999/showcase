// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Hello from '../../../app/middleware/hello';

declare module 'egg' {
  interface IMiddleware {
    hello: typeof Hello;
  }
}
