import { Service, Context } from 'egg'

class TopicsService extends Service {
  root: string
  constructor(ctx: Context) {
    super(ctx)
    this.root = 'https://cnodejs.org/api/v1'
  }
  checkSuccess(res: any) {
    if (res.status !== 200) {
      const errorMsg = res.data && res.data.error_msg
        ? res.data.error_msg
        : 'unknown error'
      this.ctx.throw(res.status, errorMsg)
    }
    if (!res.data.success) {
      this.ctx.throw(500, 'remote response error', { data: res.data })
    }
  }
  async request(url: string, opts: any) {
    if (!/^\//.test(url)) {
      url = `/${url}`
    }
    url = `${this.root}${url}`
    opts = Object.assign({
      timeout: ['30s', '30s'],
      dataType: 'json'
    })
    return this.ctx.curl(url, opts)
  }
  // get
  async list(params: any) {
    const res = await this.request('/topics', {
      data: params
    })
    this.checkSuccess(res)
    return res.data.data
  }
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
  // post
  async create(params: any) {
    const res = await  this.request('/topics', {
      method: 'post',
      data: params,
      contentType: 'json'
    })
    this.checkSuccess(res)
    return res.data.topic_id
  }
  async update(params: any) {
    const res = await this.request('/topics/update', {
      method: 'post',
      data: params,
      contentType: 'json'
    })
    this.checkSuccess(res)
  }
}

export default TopicsService
