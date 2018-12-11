// bcrypt will encrypt passwords to be saved in db
const bcrypt = require('bcrypt');
const knex = require('../db/knex');

// check out bcrypt's docs for more info on their hashing function
const hashPassword = password => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash);
    })
  );
};

// crypto ships with node - we're leveraging it to create a random, secure token
const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'));
    });
  });
};

// user will be saved to db - we're explicitly asking postgres to return back helpful info from the row created
const insertUser = user => {
  const { username, email, password, is_admin } = user;
  return knex('users')
    .insert({ username, email, password, is_admin })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('error creating user in auth');
      console.log(err);
      throw err;
    });
};

//getting user from database to sign in
const signIn = user => {
  const { username, email, password } = user;
  return knex('users')
    .where({ username: username })
    .then(data => {
      return data[0];
    })
    .catch(err => {
      console.log('err checking database', err);
    });
};

//checking wether the password sent matches the hashed password in the database
const checkPassword = (reqPassword, foundUser) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser.password, (err, response) => {
      if (err) {
        reject(err);
      } else if (response) {
        resolve({ response, foundUser });
      } else {
        reject(new Error('Passwords do not match.'));
      }
    })
  );
};

//to test if user is sending valid data to make a user
const testReqBody = async body => {
  if (!body.username) {
    throw 'You are missing required fields';
  } else if (!body.email) {
    throw 'You are missing required fields';
  } else if (!body.password) {
    throw 'You are missing required fields';
  } else {
    return body;
  }
};

module.exports = { hashPassword, insertUser, createToken, testReqBody, signIn, checkPassword };
