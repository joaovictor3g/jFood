import { Router } from 'express';

import addressController from './controllers/addressController';

const routes = Router();

routes.post('/create-user', addressController.create);

export default routes;