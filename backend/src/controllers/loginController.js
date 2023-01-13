const { loginService } = require('../services/loginServices');
const { schemaLogin } = require('../schemasJoi/schemaLogin');

const loginController = {
/** @type {import('express').RequestParamHandler} */
  login: async (req, res, next) => {
   try {
     await schemaLogin.validationLogin(req.body);
     const user = await loginService.login(req.body);
     return res.status(200).json(user);
   } catch (error) {
    next(error);
   }
  },
};

module.exports = { loginController }
