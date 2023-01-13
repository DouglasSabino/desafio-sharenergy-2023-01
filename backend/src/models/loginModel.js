const { connection } = require('./mongoConnection');

const loginModel = {
  login: async (body) => {
    const db = await connection();
    const { username } = body;
    const [user] = await db.collection('user').find({ user: username }).toArray();
    console.log(user);
    return user;
  },
};

module.exports = { loginModel }