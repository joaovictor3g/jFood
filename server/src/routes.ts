import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import addressController from './controllers/addressController';

import userController from './controllers/userController';

import snackController from './controllers/snackController';

const upload = multer(multerConfig);

const routes = Router();

routes.post('/create-address', addressController.create);

routes.post('/create-user/:idEndereco', userController.create);
routes.post('/log-in', userController.loginWithPassAndId);

routes.post('/create-snackbar/:idEndereco', upload.single('imagem'), snackController.create);

export default routes;