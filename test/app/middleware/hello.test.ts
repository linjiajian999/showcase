import { app, assert } from 'egg-mock/bootstrap'

describe('middleware hello', () => {

  it('should add hello info to header and body', async () => {
    const res = await app.httpRequest().get('/').expect(200)
    // console.log(res)
    assert(res.header['x-middleware'] === 'hello')
    assert(res.text.indexOf('hello middleware') !== -1)
  })
})
