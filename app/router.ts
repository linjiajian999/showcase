import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // home
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login)
  // topics
  router.resources('topics', '/api/v2/topics', controller.topics)
  // upload
  router.resources('upload', '/api/upload', controller.upload)
};
