const knex = require('../db/knex');

const getVideos = (id) => {
  if(id){
    return knex("videos")
    .select("videos.url","videos.watch_count", "users.username", "videos.title")
    .innerJoin("users", {'users.id': 'videos.posted_by'})
    .where('videos.id', '=' , parseInt(id, 10));
  }
  return knex("videos")
  .select("videos.id","videos.url","videos.watch_count", "users.username", "videos.title")
  .innerJoin("users", {'users.id': 'videos.posted_by'});
  // select v.url, v.watch_count, u.username as posted_by, v.title from videos v inner join users u on u.id = v.posted_by;
}

const createVideo = (params) => {
  return knex("videos")
  .insert({
    url: params.url,
    watch_count:0,
    posted_by:1,
    title:params.title
  })
}

const updateVideo = (params, id) => {
  console.log(params, id)
  return knex("videos")
  .update(params)
  .where("videos.id", parseInt(id, 10))
  .returning("*")
}

module.exports = {
  getVideos,
  createVideo,
  updateVideo
}