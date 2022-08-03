const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/books should return a list of books', async () => {
    const resp = await request(app).get('/books');
    expect(resp.body.length).toEqual(12);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String)
    });
  });
  it('GET /books/:id should return book detail', async () => {
    const resp = await request(app).get('/books/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'If You Give a Mouse a Cookie',
      released: 1985,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
