const pldata = require("../dummyData/playlist");
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlist').insert(pldata);
    });
};