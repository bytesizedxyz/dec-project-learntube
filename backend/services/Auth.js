const { USERTABLE } = require('../SERVER_CONSTANTS').tableNames;
const jwt = require('jsonwebtoken');

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
      throw err;
    });
};

//getting user from database to sign in
const signIn = user => {
  const { username } = user;
  return new Promise((res, rej) => {
    knex(USERTABLE)
      .where({ username: username })
      .then(data => {
        if (data.length === 1) {
          res(data[0]);
        } else {
          rej({ error: 'No users.' });
        }
      })
      .catch(err => {
        rej({ err });
      });
  });
};

//checking wether the password sent matches the hashed password in the database
const checkPassword = (reqPassword, foundUser) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser.password, (err, response) => {
      if (err) {
        reject(err);
      } else if (response) {
        const { username, email, is_admin, uuid } = foundUser;
        const user = {
          uuid: uuid,
          username: username,
          email: email,
          is_admin: is_admin
        };
        const token = jwt.sign(user, process.env.jwtSecret, { expiresIn: '2 days' });
        resolve({ user, token });
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
  if (result) {
    result.password = await hashPassword(result.password);
    return await insertUser(result);
  }
};

const signingInUser = recUser => {
  return new Promise((res, rej) => {
    signIn(recUser)
      .then(async user => {
        let possErr = await checkPassword(recUser.password, user).catch(err => {
          rej(err);
        });
        res(possErr);
      })
      .catch(err => rej(err));
  });
};

module.exports = {
  makingUser,
  signingInUser,
  hashPassword,
  insertUser,
  signIn,
  testReqBody,
  checkPassword
};
