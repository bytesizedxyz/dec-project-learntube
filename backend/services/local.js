const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passportInit = require('./passport');
const db = require('../db/knex');

const options = {};

passportInit();

passport.use(new LocalStrategy)