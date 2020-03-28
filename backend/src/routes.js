import { Router } from 'express';
import OngsController from './app/controllers/OngsController';
import IncidentsController from './app/controllers/IncidentsController';
import ProfileController from './app/controllers/ProfileController';

const routes = new Router();

routes.post('/ongs', OngsController.store);
routes.get('/ongs', OngsController.index);

routes.post('/incidents', IncidentsController.store);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

export default routes;
