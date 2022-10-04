import { Router } from 'express';
import ProdutosController from './controllers/ProdutosController';
import QueryesController from './controllers/QueryesController';
import QueryCategory from './controllers/QueryCategory';
import Querycoritem from './controllers/Querycoritem';

const routes = new Router();


//rotas principais
routes.post('/produtos', ProdutosController.store);
routes.get('/produtos', ProdutosController.index)
routes.get('/produtos', ProdutosController.index2)
routes.delete('/produtos/:_id', ProdutosController.delete)
routes.put('/produtos/:_id', ProdutosController.update)

//rota queryes
routes.get('/produto', QueryesController.getproduto)


//mateus - category
routes.get('/categoria', QueryCategory.getCategoryProduct)
export default routes;

routes.get('/produtos/cor', Querycoritem.getmodelo)