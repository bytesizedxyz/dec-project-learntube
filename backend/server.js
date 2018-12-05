require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');
const session = require('express-session');

const index = require('./routes/index');
const todos = require('./routes/todos');
const users = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//middleware use for passport
app.use(session({ secret: process.env.secret, resave: true, saveUninitialized: true }));

//routes
app.use('/', index);
app.use('/users', users);
app.use('/todos', todos);

app.listen(port, () => {
  console.log(`🌎  => API Server now listening on PORT ${port}!`);
});
