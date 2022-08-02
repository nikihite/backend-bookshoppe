const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('characters routes', () => {
    beforeEach(() => {
      return setup(pool);
    });

    it('should return a list of directors with nested movies', async () => {
        const res = await request(app).get('/directors');
        expect(res.body.length).toEqual(4);
        const moira = res.body.find((char) => char.id === '1');
        expect(moira).toHaveProperty('first_name', 'Pete');
        expect(moira).toHaveProperty('last_name', 'Docter');
        expect(moira).toHaveProperty('movies');
        expect(moira.movies[0]).toHaveProperty('title');
        expect(moira.movies[0]).toHaveProperty('released');
        expect(moira.movies[0]).toHaveProperty('director_id');
        expect(moira.movies[0]).toHaveProperty('id');
      });
    
      afterAll(() => {
        pool.end();
      });
    });
    