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
  updateOne: async (body, id) => {
    const { nome, email, telefone, endereco , CPF } = body;
    const newClient = { nome, email, telefone, endereco , CPF }
    await Clients.findByIdAndUpdate(id, newClient);
  },
  delete: async (id) => {
    await Clients.findByIdAndDelete(id)
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
  },
};

module.exports = { clientsServices }
