import * as fs from 'fs'
import * as path from 'path'
import { Controller, Context } from 'egg'

export default class UploadController extends Controller {
  readonly root: string
  constructor(ctx: Context) {
    super(ctx)
    this.root = path.resolve(__dirname, `${this.config.static.dir}/img`)
    if (!fs.existsSync(this.root)) {
      fs.mkdirSync(this.root)
    }
  }
  async create() {
    const { ctx } = this
    const res = await this.service.upload.upload(this.root)
    ctx.body = res
  }
}
