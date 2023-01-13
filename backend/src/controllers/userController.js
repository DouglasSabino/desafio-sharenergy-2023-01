const { userService } = require('../services/userService');

const userController = {
/** @type {import('express').RequestParamHandler} */
  getAll: async (req, res) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
  },
};

module.exports = { userController }