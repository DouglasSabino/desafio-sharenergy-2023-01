const Clients = require('../models/Clients');

const clientsServices = {
  register: async (body) => {
     const { nome, email, telefone, endereco , CPF } = body;
     const newClient = { nome, email, telefone, endereco , CPF }
     await Clients.create(newClient);
  },
};

module.exports = { clientsServices }
