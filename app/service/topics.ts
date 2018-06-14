import { Service, Context } from 'egg'

class TopicsService extends Service {
  root: string
  constructor(ctx: Context) {
    super(ctx)
    this.root = 'https://cnodejs.org/api/v1'
  }
  async request(url: string, opts: any) {
    if (!/^\//.test(url)) {
      url = `${this.root}${url}`
    }
    opts = Object.assign({
      timeout: ['30s', '30s'],
      dataType: 'json'
    })
    return this.ctx.curl(url, opts)
  }
  async checkSuccess(res: any) {
    if (res.status !== 200) {
      const errorMsg = res.data && res.data.error_msg ? res.data.error_msg : 'unknown error';
      this.ctx.throw(res.status, errorMsg);
    }
    if (!res.data.success) {
      this.ctx.throw(500, 'remote response error', { data: res.data });
    }
  }
  // get
  async show(params: any) {
    const res = await this.request(`/topic/${params.id}`, {
      data: {
        mdrender: params.mdrender,
        accesstioken: params.accesstioken
      }
    })
    this.checkSuccess(res)
    return res.data.data
  }
}

export default TopicsService
