import { app, assert } from 'egg-mock/bootstrap'

describe('middleware hello', () => {

  it('should add hello info to body', async () => {
    const res = await app.httpRequest().get('/').expect(200)
    assert(res.text.indexOf('hello middleware') !== -1)
  })
})
