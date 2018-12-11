const express = require('express');
const router = express.Router();
const {
  hashPassword,
  insertUser,
  testReqBody,
  signIn,
  checkPassword
} = require('../services/Auth');
const {
  SUCCESS,
  NO_CONTENT,
  NOT_MODIFIED,
  BAD_REQUEST,
  CONFLICT,
  UNPROCESSABLE_ENTITY,
  INTERNAL_SERVER_ERROR
} = require('../services/statusCodes');
router.post('/', (req, res, next) => {
  const { username, email, is_admin, password } = req.body;
  let newUser = {
    username,
    email,
    password,
    is_admin
  };
  testReqBody(newUser)
    .then(() => {
      hashPassword(password)
        .then(hashedPassowrd => {
          newUser.password = hashedPassowrd;
          //create token here and then send it back, will be for later implementation
        })
        .then(() => {
          insertUser(newUser)
            .then(data => {
              if (data.command && data.rowCount === 1) {
                res
                  .status(SUCCESS)
                  .json({ message: 'Successfully created a user.' });
              }
            })
            .catch(err => {
              if (err.code == 23505) {
                res.status(CONFLICT).json({ error: 'Email is already in use' });
              } else {
                console.log('error happened');
                res
                  .status(INTERNAL_SERVER_ERROR)
                  .json({
                    error:
                      'Something went wrong on our end. Please try again later.'
                  });
              }
            });
        });
    })
    .catch(err => {
      console.log(err);
      if (newUser !== err) {
        const errorMessage = { error: err };
        res.status(UNPROCESSABLE_ENTITY).json(errorMessage);
        return;
      }
    });
});

router.get('/signIn', (req, res) => {
  const { username, password } = req.body;
  const user = {
    username,
    password
  };
  signIn(user)
    .then(data => {
      checkPassword(password, data)
        .then(checkedPassword => {
          if (checkedPassword.response === true) {
            const userToSend = {
              username: checkedPassword.foundUser.username,
              email: checkedPassword.foundUser.email,
              is_admin: checkedPassword.foundUser.is_admin
            };
            res.status(SUCCESS).json({ user: userToSend });
          }
        })
        .catch(err => {
          res.status(BAD_REQUEST).json({ error: 'Password does not match.' });
        });
    })
    .catch(err => {
      console.log('error happened', err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error. Please try again later.' });
    });
});

module.exports = router;
