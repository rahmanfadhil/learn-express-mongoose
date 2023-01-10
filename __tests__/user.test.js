// import request from 'supertest';
// import app from '../index';
// const user = {
//     role: "admin",
//     _id: "63ad1b3c319af319781a8c9f",
//     names: "clement",
//     email: "clementhunk@gmail.com",
//     password: "clement123",
   
// }

// describe('Test the users endpoint', () => {
    
//       test('It should create new user', async () => {
//         const response = await request(app)
//           .post('/api/v1/users')
//           .send(user);
//         expect(response.statusCode).toBe(201);
//       });
    

//   test('It should return a list of users', async () => {
//     const response = await request(app).get('/api/v1/users');
//     expect(response.statusCode).toBe(200);
//   });

//   test('It should return a single user', async () => {
//     const response = await request(app).get('/api/v1/users/names');
//     expect(response.statusCode).toBe(200);
   
//   });

//   test('It should return an error for a non-existent user', async () => {
//     const response = await request(app).get('/api/v1/users/999');
//     expect(response.statusCode).toBe(404);
//     // expect(response.body).toEqual({
//     //   status: 'error',
//     //   message: 'User not found',
//     // });
//   });
// });
  