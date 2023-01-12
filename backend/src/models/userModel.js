const { connection } = require('./mongoConnection');

const userModel = {
  getAll: async () => {
    const db = await connection();
    return db.collection('users').find().toArray();
  },
};

module.exports = { userModel }
