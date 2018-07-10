import { EggPlugin } from 'egg';
// import 'egg-validate'
const plugin: EggPlugin = {
  static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  }
};
export default plugin;
