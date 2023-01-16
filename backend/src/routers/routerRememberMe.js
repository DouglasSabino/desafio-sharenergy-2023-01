const { rememberMeController } = require('../controllers/rememberMeController');
const { handlerTokenValidation } = require('../middlewares/handleTokenValidation');
const express = require('express');

const routerRememberMe = express.Router();

routerRememberMe.post('/', handlerTokenValidation, rememberMeController.verifyToken);

module.exports = { routerRememberMe }