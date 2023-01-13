const { loginModel } = require('../models/loginModel');

const loginService = {
  login: async (body) => {
    const user = await loginModel.login(body);
    return user;
  },
};

module.exports = { loginService }