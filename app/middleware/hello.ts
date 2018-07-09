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
  return async (ctx: Context, next: any) => {
    if (!ctx.body) {
      ctx.body = ''
    }
    ctx.body += 'hello middleware\n'
    ctx.body += JSON.stringify(opt, null, 4)
    ctx.body += '\n'
    ctx.body += JSON.stringify(app, null, 4)
    ctx.body += '\n'
    ctx.set('x-middleware', 'hello')
    await next()
  }
}
