const { userController } = require('../controllers/userController');
const express = require('express');

const routerUser = express.Router();

routerUser.get('/', userController.getAll);

module.exports = { routerUser }
