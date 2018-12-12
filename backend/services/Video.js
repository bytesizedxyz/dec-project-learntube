const knex = require('../db/knex');
const { VIDEOTABLE } = require('../SERVER_CONSTANTS').tableNames;

const getVideos = (id) => {
  if(id){
    return knex(VIDEOTABLE)
    .select("videos.url","videos.watch_count", "users.username", "videos.title")
    .innerJoin("users", {'users.id': 'videos.posted_by'})
    .where('videos.id', '=' , parseInt(id, 10));
  }
  return knex(VIDEOTABLE)
  .select("videos.id","videos.url","videos.watch_count", "users.username", "videos.title")
  .innerJoin("users", {'users.id': 'videos.posted_by'});
  // select v.url, v.watch_count, u.username as posted_by, v.title from videos v inner join users u on u.id = v.posted_by;
}

const createVideo = ({ url, posted_by, title }) => {
  return knex(VIDEOTABLE)
  .insert({
    url: url,
    watch_count:0,
    user_uuid:posted_by,
    title:title
  })
}

const updateVideo = (params, id) => {
  console.log(params, id)
  return knex(VIDEOTABLE)
  .update(params)
  .where("videos.id", parseInt(id, 10))
  .returning("*")
}

module.exports = {
  getVideos,
  createVideo,
  updateVideo
}