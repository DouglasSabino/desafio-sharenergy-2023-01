const { clientsController } = require('../controllers/clientsController');
const express = require('express');

const routerClients = express.Router();

routerClients.post('/', clientsController.register);

module.exports = { routerClients }