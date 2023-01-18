const mongoose = require('mongoose');

const Clients = mongoose.model('Clients', {
  nome: String,
  email: String,
  telefone: String,
  endereco: String,
  CPF: String
})

module.exports = Clients;