// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Home from '../../../app/controller/home';
import Topics from '../../../app/controller/topics';
import Upload from '../../../app/controller/upload';

declare module 'egg' {
  interface IController {
    home: Home;
    topics: Topics;
    upload: Upload;
  }
}
