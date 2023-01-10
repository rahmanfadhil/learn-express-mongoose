// import request from 'supertest';
// import app from '../index';

describe('Test the message route', () => {
  test('It should send a message', async () => {
    const messageData = {
      email: 'peninangizwenayo@example.com',
      message: 'This is a test message',
    };
    const response = await request(app)
      .post('/api/v1/message')
      .send(messageData);
    expect(response.statusCode).toBe(200);
  });
});
