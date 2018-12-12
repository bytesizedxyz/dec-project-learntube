// user_videos.js
const usersData = require('../dummyData/users');
const videosData = require('../dummyData/videos');
exports.seed = (knex, Promise) => {
  // return knex('videos')
  //   .del()
  //   .then(() => {
  //     return knex('users').del();
  //   })
  //   .then(() => {
  //     return knex('users').insert(usersData);
  //   })
  //   .then(() => {
  //     let videoPromises = [];
  //     videosData.forEach(video => {
  //       let userUUID = video.user_uuid;
  //       videoPromises.push(createVideo(knex, video, userUUID));
  //     });
  //     return Promise.all(videoPromises);
  //   });
};
const createVideo = (knex, video, userUUID) => {
  // return knex('users')
  //   .where('uuid', userUUID)
  //   .first()
  //   .then(() => {
  //     return knex('videos').insert({
  //       uuid: video.uuid,
  //       url: video.url,
  //       watch_count: video.watch_count,
  //       title: video.title,
  //       user_uuid: userUUID
  //     });
  //   });
};
