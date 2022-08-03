const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(4);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });
  it('GET /authors/:id should return authors detail', async () => {
    const resp = await request(app).get('/authors/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'Laura Numeroff',
      dob: 1953,
      pob: 'New York',
    });
  });
    
  afterAll(() => {
    pool.end();
  });
});
