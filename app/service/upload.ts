import * as fs from 'fs'
import * as path from 'path'

import { Service, Context, FileStream } from 'egg'

export default class UploadService extends Service {
  constructor(ctx: Context) {
    super(ctx)
  }
  async upload(root: string) {
    const { ctx } = this
    const uploadStream = await ctx.getFileStream()
    const currentDate = new Date()
    const filename = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${Math.random()}.${uploadStream.filename.split('.')[1] || 'png'}`
    const wStream = fs.createWriteStream(path.resolve(root, filename))
    uploadStream.pipe(wStream)
    return {
      url: `${root}/${filename}`
    }
  }
  async idOcr(fileStream: FileStream) {
    console.log(fileStream)
  }
}