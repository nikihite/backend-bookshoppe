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
      title: expect.any(String)
    });
  });
  it('GET /books/:id should return book detail', async () => {
    const resp = await request(app).get('/books/1');
    expect(resp.body).toEqual({
      id: '1',
      title: 'If You Give a Mouse a Cookie',
      released: 1985,
    });
  });

  it('#POST /books should create a new book', async () => {
    const newBook = {
      'title': 'If You Give a Mouse a Cookie',
      'released': 1985,
    };
    const res = await request(app).post('/books').send(newBook);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newBook,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
