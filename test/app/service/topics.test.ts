import { Context } from 'egg';
import Topics from '../../../app/service/topics';
import { app, assert } from 'egg-mock/bootstrap';

describe('service ===> topics', () => {
  let ctx: Context;
  let topics: Topics
  before(async () => {
    ctx = app.mockContext();
    topics = ctx.service.topics
  });

  it('check root', () => {
    console.log(`root url: ${topics.root}`)
  });
  it('get list', async () => {
    try {
      topics.list({})
    } catch (err) {
      assert(false)
    }
  })
});