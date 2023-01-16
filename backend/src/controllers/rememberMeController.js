const { httpstatuscode } = require('../httpstatuscode');

const rememberMeController = {
  /** @type {import('express').RequestParamHandler} */
  verifyToken: async (req, res) => {
    const { user, salt } = req.user;
    return res.status(httpstatuscode.OK).json({ user, salt })
  }
}

module.exports = { rememberMeController };
