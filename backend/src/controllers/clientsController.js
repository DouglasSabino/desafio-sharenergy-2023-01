const { clientsServices } = require('../services/clientsServices');
const { httpstatuscode } = require('../httpstatuscode');
const { schemaClients } = require('../schemasJoi/schemaClients');

const clientsController = {
/** @type {import('express').RequestParamHandler} */
  register: async (req, res, next) => {
    try {
      await schemaClients.createValidation(req.body)
      await clientsServices.register(req.body);
      return res.status(httpstatuscode.OK).json('cadastrado');
    } catch (error) {
      next(error); 
    }
  },
};

module.exports = { clientsController }

