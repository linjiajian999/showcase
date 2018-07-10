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
  async index() {
    const { ctx } = this

    ctx.validate({
      page: {
        type: 'string',
        format: /\d+/,
        required: false
      },
      tab: {
        type: 'enum',
        values: ['ask', 'share', 'job', 'good'],
        required: false
      },
      limit: {
        typs: 'string',
        format: /\d+/,
        required: false
      }
    }, ctx.query)
    ctx.body = await ctx.service.topics.list({
      page: ctx.query.page,
      tab: ctx.query.tab,
      limit: ctx.query.limit,
      mdrender: ctx.query.mdrender !== 'false'
    })
  }
  async show() {
    const { ctx } = this
    ctx.status = 201
    ctx.body = await ctx.service.topics.show({
      id: ctx.params.id,
      mdrender: ctx.query.mdrender !== 'false',
      accesstoken: ctx.query.accesstoken || ''
    })
  }
  // posts
  async create() {
    const { ctx } = this
    ctx.body = this.app
    ctx.body += '\n'
    ctx.body += JSON.stringify(ctx.validate, null, 4)

    ctx.status = 201
    ctx.validate(createRule)
    // console.log(this.validate)
    const id = await ctx.service.topics.create(ctx.request.body)
    ctx.body = {
      topic_id: id
    }
    ctx.status = 201
  }
  async update() {
    const { ctx } = this
    const id = ctx.params.id
    try {
      ctx.validate(createRule)
    } catch (err) {
      ctx.body += err
    }

    await ctx.service.topics.update(Object.assign(
      { id },
      ctx.request.body
    ))
    ctx.status = 204
  }

}
export default TopicController
