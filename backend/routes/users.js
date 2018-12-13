const express = require('express');
const router = express.Router();
const { makingUser, signingInUser } = require('../services/Auth');
const {
  SUCCESS,
  BAD_REQUEST,
  CONFLICT,
  UNPROCESSABLE_ENTITY,
  INTERNAL_SERVER_ERROR
} = require('../SERVER_CONSTANTS').statusCodes;
router.post('/', (req, res, next) => {
  makingUser(req.body)
    .then(() => {
      console.log('back at routes');
      res.status(SUCCESS).json({ message: 'Successfully created a user.' });
    })
    .catch(err => {
      console.log(err.message);
      if (err.code === 23505) {
        res.status(CONFLICT).json({ error: 'Email is already in use' });
      } else if (err.message === 'You are missing required fields') {
        res.status(UNPROCESSABLE_ENTITY).json({ error: err.message });
      } else {
        console.log('error happened');
        res.status(INTERNAL_SERVER_ERROR).json({
          error: 'Something went wrong on our end. Please try again later.'
        });
      }
    });
});

router.get('/signIn', (req, res) => {
  const { username, password } = req.body;
  const user = {
    username,
    password
  };
  signingInUser(user)
    .then(response => {
      const { token, user } = response;
      res.status(SUCCESS).json({ user, token });
    })
    .catch(error => {
      console.log(error.message);
      if (error.message === 'Passwords do not match.') {
        res.status(BAD_REQUEST).json({ error: 'Password does not match.' });
      } else {
        console.log('error happened');
        res.status(INTERNAL_SERVER_ERROR).json({
          error: 'Something went wrong on our end. Please try again later.'
        });
      }
    });
});

module.exports = router;
