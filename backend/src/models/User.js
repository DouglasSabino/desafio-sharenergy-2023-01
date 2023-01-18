const mongoose = require('mongoose');

const User = mongoose.model('User', {
  user: String,
  password: String,
  salt: String
})

module.exports = User;
