import request from 'supertest';
import app from '../index';

const credentials = {
  email: 'clara@gmail.com',
  password: 'clara123',
}

describe('Test the login endpoint', () => {
  test('It should authenticate user with valid credentials', async () => {
    const response = await request(app)
      .post('/api/v1/login')
      .send(credentials);
    expect(response.statusCode).toBe(200);
  });
});



