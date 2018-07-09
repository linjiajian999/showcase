import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/login', controller.home.login)

  router.resources('topics', '/api/v2/topics', controller.topics)
};
