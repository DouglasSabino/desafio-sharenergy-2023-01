const { userService } = require('../services/userService');

const userController = {
/** @type {import('express').RequestParamHandler} */
  new: async (_req, res) => {
    try {
      await userService.new();
      return res.status(201).json("Usuario criado com sucesso");
    } catch (error) {
      return res.status(500).json(error)
    }
  },
};

module.exports = { userController }