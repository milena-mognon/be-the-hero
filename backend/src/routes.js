import { Router } from 'express';
import OngsController from './app/controllers/OngsController';

const routes = new Router();

routes.post('/ongs', OngsController.store);
routes.get('/ongs', OngsController.index);

export default routes;
