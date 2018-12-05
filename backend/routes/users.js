const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/createUser', (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
