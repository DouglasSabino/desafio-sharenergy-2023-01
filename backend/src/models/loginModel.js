const User = require('../models/User');

const loginModel = {
  login: async (body) => {
    const { username } = body;
    const [user] = await User.find({ user: username });
    return user;
  },
};

module.exports = { loginModel }