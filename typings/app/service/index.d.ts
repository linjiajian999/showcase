// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Test from '../../../app/service/Test';
import Topics from '../../../app/service/topics';
import Upload from '../../../app/service/upload';

declare module 'egg' {
  interface IService {
    test: Test;
    topics: Topics;
    upload: Upload;
  }
}
