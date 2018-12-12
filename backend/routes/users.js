const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
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
    .then(response => {
      console.log('back at routes', response);
      res.status(SUCCESS).json({ message: 'Successfully created a user.' });
    })
    .catch(err => {
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
  console.log(req.body);
  signingInUser(user),
    then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  // signIn(user)
  //   .then(data => {
  //     checkPassword(password, data)
  //       .then(checkedPassword => {
  //         if (checkedPassword.response === true) {
  //           const { username, email, is_admin } = checkedPassword.foundUser;
  //           const userToSend = {
  //             username: username,
  //             email: email,
  //             is_admin: is_admin
  //           };
  //           const token = jwt.sign(userToSend, process.env.jwtSecret);
  //           res.status(SUCCESS).json({ user: userToSend, token });
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         res.status(BAD_REQUEST).json({ error: 'Password does not match.' });
  //       });
  //   })
  //   .catch(err => {
  //     console.log('error happened', err);
  //     res
  //       .status(INTERNAL_SERVER_ERROR)
  //       .json({ error: 'Internal Server Error. Please try again later.' });
  //   });
});

module.exports = router;
