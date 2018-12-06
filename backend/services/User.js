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
          console.log('error happened');
          res
            .status(503)
            .json({ error: 'Something went wrong on our end. Please try again later.' });
        }
      });
    });
};

const signIn = (req, res) => {
  // get user creds from request body
  // find user based on username in request
  // check user's password_digest against pw from request
  // if match, create and save a new token for user
  // send back json to client with token and user info
  // const
};

module.exports = { createUser, signIn };
