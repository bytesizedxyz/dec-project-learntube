const videoData = require('../dummyData/videos');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert(videoData);
    });
};