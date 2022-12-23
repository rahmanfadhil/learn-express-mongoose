import express from 'express';
import mongoose from 'mongoose';
import blogroutes from './routes/blog'
import userroutes from './routes/user'
// import likeroutes from './routes/like'
import loginroutes from './routes/login'
import commentroutes from './routes/comment'



mongoose
mongoose.connect('mongodb://127.0.0.1/testdb', { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected")
  }).catch((Error)=>console.log("Connection fails"))
  const app = express();
  app.use(express.json());
  app.use("/api/v1", blogroutes);
  app.use("/api/v1", userroutes);
  // app.use("/api/v1", likeroutes);
  app.use("/api/v1", loginroutes);
  app.use("/api/v1", commentroutes);
  app.use('/upload', express.static('upload'));
  app.listen(5001, () => {
    console.log("Server has started!");
  });