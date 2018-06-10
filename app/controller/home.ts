import { Controller } from 'egg';

export interface LoginForm {
  username: string
  password: string
}

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body += await ctx.service.test.sayHi('egg');
  }
  public async login() {
    const {
      ctx,
      config
    } = this
    console.log(config.middleware)

    const loginForm  = ctx.query as LoginForm
    ctx.body = {
      state: 'nologin',
      msg:'没有登录',
      name: loginForm.username,
      password: loginForm.password
    }
  }
}
