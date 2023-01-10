import dotenv from 'dotenv';
import swaggerDoc from './swagger.json';
import blog from './blog';
import comment from './comments';
import likes from './like';
import login from './login';
import user from './users';
import message from './messagge';

const defaults = swaggerDoc.paths;

dotenv.config();


const paths = {
  ...defaults,
  ...blog,
  ...comment,
  ...likes,
  ...login,
  ...user,
  ...message
};

const swaggerDocs = {
  swagger: '2.0',
  info: {
    version: '1.0.0.',
    title: 'Penina APIs Documentation',
    description: 'Andelalllk lij  ',
  },
  schemes: ['http', 'https'],
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  tags: [
    {
      name: 'Penina Portfolio APIs Documentation',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: paths,
};
export default swaggerDocs;