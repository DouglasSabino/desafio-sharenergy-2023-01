const { loginService } = require('../services/loginServices');

const loginController = {
/** @type {import('express').RequestParamHandler} */
  login: async (req, res, next) => {
   try {
     const user = await loginService.login(req.body);
     return res.status(200).json(user);
   } catch (error) {
    next(error);
   }
  },
};

module.exports = { loginController }
