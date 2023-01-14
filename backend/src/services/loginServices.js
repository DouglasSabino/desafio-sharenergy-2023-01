const { loginModel } = require('../models/loginModel');
const { makeToken } = require('../jwt/makeToken');
const bcrypt = require('bcrypt');


const verifyPassword = async (password, salt, hash) => {
  if (bcrypt.hashSync(password, salt) === hash) return true;
  return false; 
}

const loginService = {
  login: async (body) => {
    const { password } = body;
    const user = await loginModel.login(body);
    if (user !== undefined ) {
      const auth = await verifyPassword(password, user.salt, user.password);
      if(auth) {
        user.auth = true;
        const token = makeToken.coder(user);
        return [user, token];
      }
      else user.auth = false;
    }
    return "";
  },
};

module.exports = { loginService }