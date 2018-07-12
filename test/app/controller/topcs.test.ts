import { app, assert } from 'egg-mock/bootstrap';

describe('app controller ===> topics', () => {
  it('should GET /api/v2/ index', async () => {
    await app.httpRequest().get('/api/v2/topics').expect(200);
  });
});
