const express = require('express');
const router = express.Router();
const user = require('../services/User');

/* GET home page. */
router.post('/', user.createUser);

router.get('/signIn', user.signIn);

module.exports = router;
