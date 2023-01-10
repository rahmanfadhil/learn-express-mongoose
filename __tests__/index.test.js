import request from 'supertest';
import app from '../index';

describe('Test the root path', () => {
  
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
