const { userModel } = require('../models/userModel');

const userService = {
  getAll: async () => {
    const users = await userModel.getAll();
    return users;
  },
};

module.exports = { userService }