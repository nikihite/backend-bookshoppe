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
    const moira = res.body.find((char) => char.id === '1');
    expect(moira).toHaveProperty('name', 'Laura Numeroff');
    expect(moira).toHaveProperty('dob', '1953');
    expect(moira).toHaveProperty('pob', 'New York');
  });
    
  afterAll(() => {
    pool.end();
  });
});
