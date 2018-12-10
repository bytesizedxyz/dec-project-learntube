const bcrypt = require('bcrypt'); // bcrypt will encrypt passwords to be saved in db
const knex = require('../db/knex');

// check out bcrypt's docs for more info on their hashing function
const hashPassword = password => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash);
    })
  );
};

// user will be saved to db - we're explicitly asking postgres to return back helpful info from the row created
const createUser = user => {
  const { username, email, password, is_admin } = user;
  return knex('users')
    .insert({ username, email, password, is_admin })
    .then(data => {
      console.log('data is ', data);
    })
    .catch(err => {
      console.log('error creating user in auth');
      console.log(err);
      throw err;
    });
};

// crypto ships with node - we're leveraging it to create a random, secure token
const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'));
    });
  });
};

module.exports = { hashPassword, createUser, createToken };
