import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './src/config/upload';

/*import SessionController from './controllers/SessionController';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';*/
import Foodeasyappcontroller from './src/controllers/Foodeasyappcontroller';


const routes = new Router();
const upload = multer(uploadConfig);


//rotas de cadastro, delete, update,e listagem de casas
routes.post('/foodeasyapp', Foodeasyappcontroller.store);
routes.get('/foodeasyapp', Foodeasyappcontroller.index)
//routes.put('/foodeasyapp/:_id', upload.single('thumbnail'), Foodeasyappcontroller.update)
routes.delete('/foodeasyapp/:_id', Foodeasyappcontroller.delete)

/*/listando todas as casas
routes.get('/housesList', DashboardController.show)


//reservando casas
routes.post('/reservas/:house_id', ReserveController.store)
routes.get('/reservas', ReserveController.index)
routes.delete('/reservas/:house_id', ReserveController.delete)

//rota de cadastro de usuarios
routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.show)
routes.delete('/sessions/:user_id',SessionController.delete)*/

export default routes;  