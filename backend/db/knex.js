const environment = 'development';
// process.env.NODE_ENV ||
const config = require('../knexfile.js')[environment];
console.log(environment);
module.exports = require('knex')(config);
