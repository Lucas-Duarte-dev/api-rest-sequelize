const express = require('express');
const UserController = require('./controllers/UserController');
const FinancesController = require('./controllers/FinancesController')
const LoginController = require('./controllers/LoginController')


const routes = express.Router();

routes.post('/user/:user_id/finances', FinancesController.store);  
routes.get('/user/:user_id/finances', FinancesController.index); 
 

routes.get('/login', LoginController.index);  

routes.post('/singin', UserController.store);  
routes.get('/users', UserController.index);  
routes.delete('/user/:id', UserController.delete);  

module.exports = routes;