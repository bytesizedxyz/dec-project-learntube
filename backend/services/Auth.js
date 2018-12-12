const { USERTABLE } = require("../SERVER_CONSTANTS").tableNames;

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

// user will be saved to db - we're explicitly asking postgres to return back helpful info from the row created
const insertUser = user => {
  const { username, email, password, is_admin } = user;
  return knex(USERTABLE)
    .insert({ username, email, password, is_admin })
    .returning('*')
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
  return knex(USERTABLE)
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
const testReqBody = async user => {
  const p = new Promise((res, rej) => {
    if (!(user.email && user.password && user.username)) {
      rej(Error('You are missing required fields'));
    } else {
      res(user);
    }
  });
  return p;
};

const makingUser = async user => {
  const result = await testReqBody(user);
  if (err) return { body: null, error };
  if (body) {
    body.password = await hashPassword(body.password);
    return await insertUser(body);
  }
};

const signingInUser = async user => {
  console.log(user);
  const foundUser = await signIn(user)
  
};

module.exports = {
  makingUser,
  signingInUser
};
