/*
 * For this to work you need a .env file with a jwtSecret = whatever-you-want-for-your-secret
 *
 * @TODO:
 * Needs to handle the authentication of users better. Possible correlation against the db?
 *
 */
const { UNPROCESSABLE_ENTITY, UNAUTHORIZED } = require('../SERVER_CONSTANTS').statusCodes;
const jwt = require('jsonwebtoken');
const secret = process.env.jwtSecret;

module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    jwt.verify(token, secret, { algorithms: ['HS256'] }, (err, decoded) => {
      if (err.message === 'jwt expired' && !decoded) {
        res.status(UNAUTHORIZED).json({ error: 'JWT has expired. Please log in.' });
      } else if (err.message === 'invalid token' && !decoded) {
        res.status(UNAUTHORIZED).send({
          error: 'Invalid token'
        });
      } else if (err && decoded) {
        res.status(UNAUTHORIZED).send({
          error: 'token is decoded and theres an error'
        });
      } else if (!err && decoded) {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(UNPROCESSABLE_ENTITY).send({
      error: 'no bearer token'
    });
  }
};
