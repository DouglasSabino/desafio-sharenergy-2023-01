const { loginController } = require('../controllers/loginController');
const express = require('express');

const routerLogin = express.Router();

routerLogin.post('/', loginController.login);

module.exports = { routerLogin }