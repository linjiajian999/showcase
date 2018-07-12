import { Service, Context } from 'egg'
export default class UploadService extends Service {
  constructor(ctx: Context) {
    super(ctx)
  }
  async upload() {
    return {
      url: ''
    }
  }
}