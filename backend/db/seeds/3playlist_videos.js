const playlistVideosData = require('../dummyData/playlist_videos');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlist_video').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlist_video').insert(playlistVideosData);
    });
};