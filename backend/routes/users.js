const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.post('/', (req, res, next) => {
  console.log('at create user route');

});

module.exports = router;
