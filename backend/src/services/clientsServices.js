const Clients = require('../models/Clients');

const clientsServices = {
  register: async (body) => {
     const { nome, email, telefone, endereco , CPF } = body;
     const newClient = { nome, email, telefone, endereco , CPF }
     await Clients.create(newClient);
  },
  getOne: async (id) => {
    const client = Clients.findById(id)
    .then((doc) => doc)
    .catch((err) => console.log(err));
    return client;
  },
};

module.exports = { clientsServices }
