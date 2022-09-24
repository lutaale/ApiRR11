import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import path from 'path';
import routes from './routes';

class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.1nt9mhq.mongodb.net/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    
    //cors serve para definir limitações de uso da api criada
    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}

export default new App().server;