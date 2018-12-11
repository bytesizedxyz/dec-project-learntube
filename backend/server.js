require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');
const session = require('express-session');
const passport = require('passport');
const jwtMiddleware = require('./middleware/jwtMiddleware');

const users = require('./routes/users');
const videos = require('./routes/videos');
const playlists = require('./routes/playlists');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//middleware use for passport
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', users);

app.use(jwtMiddleware);

//routes
app.use('/videos', videos);
app.use('/playlists', playlists);

const server = app.listen(port, () => {
  console.log(`🌎  => API Server now listening on PORT ${port}!`);
});

knex('users')
  .insert({ username: 'aCoolUserNames' })
  .then(res => {
    console.log(res);
  });
module.exports = server;
