import { app, assert } from 'egg-mock/bootstrap';

describe('app controller ===> home', () => {
  it('should GET /', async () => {
    const result = await app.httpRequest().get('/').expect(200);
    assert(result.text.indexOf('hi, egg') !== -1);
  });
  it('should GET /login', async () => {
    const res = await app.httpRequest().get('/login').expect(200);
    let data;
    try {
      data = JSON.parse(res.text);
    } catch (err) {
      assert(false, 'response data should be json');
    }
    assert(data.state === 'nologin', 'response data.state should be nologin');
  });
});
