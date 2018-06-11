import {
  Application,
  Context
} from 'egg'

export interface HelloMiddlewareInfo {
  name: string
  info: string
  type: string
}
export interface HelloMiddleWare {
  hello: HelloMiddlewareInfo
}

export default (opt: HelloMiddlewareInfo, app: Application) => {
  console.log(opt)
  console.log(opt.name)
  console.log(opt.type)
  console.log(app)
  return async (ctx: Context, next: any) => {
    if (!ctx.body) {
      ctx.body = ''
    }
    ctx.body += 'hello middleware\n'
    ctx.set('x-middleware', 'hello')
    await next()
  }
}
