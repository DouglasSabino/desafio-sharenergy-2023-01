const { httpstatuscode } = require('../httpstatuscode');
const Joi = require('joi');

const schemaClients = {
  createValidation: async (body) => {
    const schema = Joi.object({
        nome: Joi.string().min(3).required().messages({  
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "nome" é obrigatorio`,
          "string.min": `${httpstatuscode.BAD_REQUEST}|Nome precisa ter pelo menos 3 caracteres`
        }),
        email: Joi.string().required().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "email" é obrigatorio`,
          "string.pattern.base": `${httpstatuscode.BAD_REQUEST}|Por favor insira um email em um formato valido`,
        }),
        telefone: Joi.string().required().pattern(/^\(?[1-9]{2}\)?[ .-]?[2-9]{1}[0-9]{3,4}[ .-]?[0-9]{4}$/).messages({
            "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "telefone" é obrigatorio`, 
            "string.pattern.base": `${httpstatuscode.BAD_REQUEST}|Por favor digite um telefone válido `,   
        }),
        endereco: Joi.string().required().messages({
            "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "endereco" é obrigatorio`
        }),
        CPF: Joi.string().required().pattern(/^([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})-?([0-9]{2})$/).messages({
            "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "CPF" é obrigatorio`,
            "string.pattern.base": `${httpstatuscode.BAD_REQUEST}|Por favor digite um CPF válido`,
        }),
      });
      await schema.validateAsync(body);
  }
}

module.exports = { schemaClients }