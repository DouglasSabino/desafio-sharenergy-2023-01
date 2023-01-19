const { clientsController } = require('../controllers/clientsController');
const { handlerTokenValidation } = require('../middlewares/handleTokenValidation');
const express = require('express');

const routerClients = express.Router();

routerClients.post('/', handlerTokenValidation, clientsController.register);

routerClients.get('/:id', handlerTokenValidation, clientsController.getOne);
routerClients.get('/', handlerTokenValidation, clientsController.getAll);

routerClients.put('/:id', handlerTokenValidation, clientsController.updateOne);

routerClients.delete('/:id', handlerTokenValidation,clientsController.delete);

module.exports = { routerClients }