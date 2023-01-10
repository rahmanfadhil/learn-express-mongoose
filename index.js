import express from 'express';
import swaggerUi from "swagger-ui-express";
import mongoose from 'mongoose';
import blogroutes from './routes/blog'
import userroutes from './routes/user'
import loginroutes from './routes/login'
import messageroutes from './routes/message'
import commentroutes from './routes/comment'
import swaggerDocs from "./swaggerDocs/main"


mongoose
mongoose.connect('mongodb://127.0.0.1/testdb', { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected")
  }).catch((Error)=>console.log("Connection fails"))
  
  const app = express();
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use(express.json());
  app.use("/api/v1", blogroutes);
  app.use("/api/v1", userroutes);
  app.use("/api/v1", loginroutes);
  app.use("/api/v1", commentroutes);
  app.use("/api/v1", messageroutes);
  app.use('/upload', express.static('upload'));
  app.get('/', (req, res) => res.status(200).send('Welcome'));
  app.listen(5001, () => {
    console.log("Server has started!");
  });

  export default app;
