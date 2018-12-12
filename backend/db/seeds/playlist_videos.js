const videosData = require('../dummyData/videos');
const playlistData = require('../dummyData/playlist');
const playlistVideosData = require('../dummyData/playlist_videos');
const { PLAYLISTVIDEOTABLE, PLAYLISTTABLE } = require('../../SERVER_CONSTANTS').tableNames;

exports.seed = (knex, Promise) => {
  return knex(PLAYLISTVIDEOTABLE).then(res => {
    let playlistVideoPromise = [];
    playlistVideosData.forEach(videoInPlaylist => {
      playlistVideoPromise.push(createVideoInPlaylist(knex, videoInPlaylist));
    });
    return Promise.all(playlistVideoPromise);
  });
};

const createVideoInPlaylist = (knex, videoInPlaylist) => {
  const { playlist_uuid, video_uuid } = videoInPlaylist;
  return knex(PLAYLISTTABLE)
    .where('uuid', playlist_uuid)
    .then(() => {
      return knex(PLAYLISTVIDEOTABLE).del();
    })
    .then(() => {
      return knex(PLAYLISTVIDEOTABLE).insert({
        playlist_uuid: playlist_uuid,
        video_uuid: video_uuid
      });
    });
};
