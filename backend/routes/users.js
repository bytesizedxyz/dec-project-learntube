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
      if (
        err.message.includes('duplicate key value violates unique constraint "users_email_unique"')
      ) {
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

router.post('/sign_in', (req, res) => {
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
      if (error.message === 'Passwords do not match.') {
        res.status(BAD_REQUEST).json({ error: 'Password does not match.' });
      } else if (error.error === 'No users.') {
        res.status(BAD_REQUEST).json({ error: 'User does not exist.' });
      } else if (
        error.err.message ===
        'Undefined binding(s) detected when compiling SELECT query: select * from "users" where "username" = ?'
      ) {
        res.status(BAD_REQUEST).json({ error: 'User does not exist.' });
      } else {
        res.status(INTERNAL_SERVER_ERROR).json({
          error: 'Something went wrong on our end. Please try again later.'
        });
      }
    });
});

module.exports = router;
