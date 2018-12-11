// user_videos.js
const usersData = require('../dummyData/users');
const videosData = require('../dummyData/videos');
exports.seed = (knex, Promise) => {
  return knex('videos')
    .del()
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('users').insert(usersData);
    })
    .then(res => {
      console.log(res);
      let videoPromises = [];
      videosData.forEach(video => {
        let user = video.post_by;
        videoPromises.push(createProduct(knex, video, user));
      });
      return Promise.all(videoPromises);
    });
};
const createProduct = (knex, video, user) => {
  return knex('users')
    .where('username', user)
    .first()
    .then(userRecord => {
      return knex('videos').insert({
        url: video.url,
        title: video.title,
        post_by: userRecord.uuid
      });
    });
};
