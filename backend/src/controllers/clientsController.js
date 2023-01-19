const { clientsServices } = require('../services/clientsServices');
const { httpstatuscode } = require('../httpstatuscode');
const { schemaClients } = require('../schemasJoi/schemaClients');

const clientsController = {
/** @type {import('express').RequestParamHandler} */
  register: async (req, res, next) => {
    try {
      await schemaClients.createValidation(req.body);
      await clientsServices.register(req.body);
      return res.status(httpstatuscode.OK).json('Cadastrado com Sucesso');
    } catch (error) {
      next(error); 
    }
  },
  /** @type {import('express').RequestParamHandler} */
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const client = await clientsServices.getOne(id);
      return res.status(httpstatuscode.OK).json(client);
    } catch (error) {
      next(error);
    }
  },
  /** @type {import('express').RequestParamHandler} */
  updateOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      await schemaClients.createValidation(req.body);
      await clientsServices.updateOne(req.body, id);
      return res.status(httpstatuscode.OK).json('Atualizado com Sucesso');
    } catch (error) {
      next(error);
    }
  },
  /** @type {import('express').RequestParamHandler} */
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      await clientsServices.delete(id);
      return res.status(httpstatuscode.OK).json('Usuario Deletado');
    } catch (error) {
      next(error);
    }
  },
};

module.exports = { clientsController }

