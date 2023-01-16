const Joi = require('joi');
const { httpstatuscode } = require('../httpstatuscode');

const knowErros = { 
  TOKEN_NOT_FOUND: { 
    code: `${httpstatuscode.NOT_FOUND}`, message: "Token Invalido, Por Favor faça o Login Novamente" 
  },
};

/** @type {import('express').ErrorRequestHandler} */
const handleError = (err, _req, res, _next) => {
  if (Joi.isError(err)) {
    const [code, message] = err.message.split('|')
    return res.status(Number(code)).json({ message: `${message}` });
  }

  const error = knowErros[err];
  if (error) return res.status(Number(error.code)).json({ message: `${error.message}` });
  return res.status(httpstatuscode.INTERNAL_SERVER).json({ message: "Internal Server Error" });
}

module.exports = { handleError };