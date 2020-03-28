import { Router } from 'express';
import OngsController from './app/controllers/OngsController';
import IncidentsController from './app/controllers/IncidentsController';

const routes = new Router();

routes.post('/ongs', OngsController.store);
routes.get('/ongs', OngsController.index);

routes.post('/incidents', IncidentsController.store);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

export default routes;
