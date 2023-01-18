const { userController } = require('../controllers/userController');
const express = require('express');

const routerUser = express.Router();

routerUser.post('/', userController.new);

module.exports = { routerUser }
