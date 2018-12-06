const auth = require('./Auth');

const createUser = (req, res, next) => {
  let { password } = req.body;
  const { username, email, is_admin } = req.body;
  const newUser = {
    username,
    email,
    password,
    is_admin
  };
  console.log('new user is ', newUser);
  auth
    .hashPassword(password)
    .then(hashedPassowrd => {
      newUser.password = hashedPassowrd;
      //create token here and then send it back, will be for later implementation
    })
    .then(() => {
      auth.createUser(newUser).catch(err => {
        if (err.code == 23505) {
          res.status(409).json({ error: 'Email is already in use' });
        } else {
          res
            .status(503)
            .json({ error: 'Something went wrong on our end. Please try again later.' });
        }
      });
    });
};

const signIn = (req, res) => {
  // const
};

module.exports = { createUser, signIn };
