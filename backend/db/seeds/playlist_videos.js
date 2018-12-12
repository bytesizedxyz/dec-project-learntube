const videosData = require('../dummyData/videos');
const playlistData = require('../dummyData/playlist');
const playlistVideosData = require('../dummyData/playlist_videos');

exports.seed = (knex, Promise) => {
  return knex('playlist_video').then(res => {
    let playlistVideoPromise = [];
    playlistVideosData.forEach(videoInPlaylist => {
      playlistVideoPromise.push(createVideoInPlaylist(knex, videoInPlaylist));
    });
    return Promise.all(playlistVideoPromise);
  });
};

const createVideoInPlaylist = (knex, videoInPlaylist) => {
  const { playlist_uuid, video_uuid } = videoInPlaylist;
  return knex('playlist')
    .where('uuid', playlist_uuid)
    .then(() => {
      return knex('playlist_video').del();
    })
    .then(() => {
      return knex('playlist_video').insert({
        playlist_uuid: playlist_uuid,
        video_uuid: video_uuid
      });
    });
};
