const User = require('../models/User');

const userService = {
  new: async () => {
    const newUser = {
      user: "desafiosharenergy",
      password: "$2b$10$OU7vKPfJdxLWXVzX87s0Q.ET/Xozu0AHUEB9QdhIIGXEz/LlBmdSa",
      salt: "$2b$10$OU7vKPfJdxLWXVzX87s0Q."
    }

    await User.create(newUser);
  },
};

module.exports = { userService }