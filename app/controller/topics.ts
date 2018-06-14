import { Controller } from "egg";

const createRule = {
  asscessToken: 'string',
  title: 'string',
  tab: {
    type: 'enum',
    values: [
      'ask',
      'share',
      'job'
    ],
    required: false
  }
}

class TopicController extends Controller {
  // get
  async show() {
    const { ctx } = this

    ctx.body = await ctx.service.topoics.show({
      
    })
  }
  // posts
  async create() {
    const { ctx } = this
    ctx.vaildate(createRule)

    const id = await ctx.service.topics.create(ctx.request.body)
    ctx.body = {
      topic_id: id
    }
    ctx.status = 201
  }
}
export default TopicController
