const { makeToken } = require('../jwt/makeToken');

/** @type {import('express').RequestHandler} */
const handlerTokenValidation = async (req, _res, next) => {
  const { authorization: userToken } = req.headers;
  if (!userToken) return next('TOKEN_NOT_FOUND');
  try {
    const decodedUser = makeToken.decoder(userToken);
    req.user = decodedUser.payload;
  } catch (error) {
    return next('TOKEN_NOT_FOUND');
  }
  return next();
};

module.exports = { handlerTokenValidation };