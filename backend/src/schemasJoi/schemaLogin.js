const { httpstatuscode } = require('../httpstatuscode');
const Joi = require('joi');

const schemaLogin = {
  validationLogin: async (body) => {
    const schema = Joi.object({
        username: Joi.string().min(3).required().messages({
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "username" é obrigatorio`,
        }),
        password: Joi.string().required().messages({
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "password" é obrigatorio`
        }),
      });
      await schema.validateAsync(body);
  }
}

module.exports = { schemaLogin }