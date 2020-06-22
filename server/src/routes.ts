import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import addressController from './controllers/addressController';

import userController from './controllers/userController';

import snackBarController from './controllers/snackBarController';

import snackController from './controllers/snackController';

const upload = multer(multerConfig);

const routes = Router();

routes.post('/create-address', addressController.create);

routes.post('/create-user/:idEndereco', userController.create);
routes.post('/log-in', userController.loginWithPassAndId);

routes.post('/create-snackbar/:idEndereco', upload.single('imagem'), snackBarController.create);
routes.get('/see-snackbars/', snackBarController.show);
routes.get('/see-detail/:id', snackBarController.detail);
routes.post('/search', snackBarController.returnSnackBarsWithInitials);

routes.get('/uploads', snackController.index);

export default routes;