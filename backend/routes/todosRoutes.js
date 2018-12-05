const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from todos').then(function(todos) {
    res.send(todos.rows);
  });
});

module.exports = router;
