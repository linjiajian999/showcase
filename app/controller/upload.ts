import { Controller } from 'egg'

export default class UploadController extends Controller {
  async create() {
    const ctx = this.ctx
    const res = await ctx.service.upload.upload()
    ctx.body = res
  }
}
