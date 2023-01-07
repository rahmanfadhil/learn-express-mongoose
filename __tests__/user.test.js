import request from 'supertest';
import app from '../index';

const users = [
    { email:'isingizwecla@gmail.com', name: 'Clara' , role:'user'},
    { email:'clementhunk@gmail.com', name: 'clement' , role:'admin'},
    
  ];
  
  app.get('/api/v1/user', (req, res) => {
    res.status(200).json(users);
  })

  app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }
  });
  
  