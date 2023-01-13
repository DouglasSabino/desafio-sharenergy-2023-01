const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const hashedPassword = bcrypt.hashSync('sh@r3n3rgy', salt);

console.log({ salt, hashedPassword });
