import express from 'express';
// importa as rotas do arquivo routes.js
import routes from './routes';
import cors from 'cors';

class App {
  constructor() {
    this.server = express();
    this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
