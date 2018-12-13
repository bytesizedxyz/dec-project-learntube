const knex = require('../db/knex');
const { VIDEOTABLE } = require('../SERVER_CONSTANTS').tableNames;


const validateVideo = (title, url) => {
  return new Promise((res, rej) => {
    if (!(title && url)){
      res(Error("Invalid fields"));
    } else {
      rej(null);
    }
  })

}


const getVideos = (id) => {
  console.log("ID PASSED", !!id)
  return new Promise((res, rej) => {
    if(id){
      console.log("uuid",typeof id, id)
      knex(VIDEOTABLE)
      .select("videos.uuid","videos.url","videos.watch_count", "users.username", "videos.title")
      .innerJoin("users", {'users.uuid': 'videos.user_uuid'})
      .where(knex.raw('videos.uuid = ?', id))
      .then(data => res(data[0]))
      .catch(err => rej(err))
    } else {
      knex(VIDEOTABLE)
      .select("videos.uuid","videos.url","videos.watch_count", "users.username", "videos.title")
      .innerJoin("users", {'users.uuid': 'videos.user_uuid'})
      .then(data => res(data))
      .catch(err => rej(err))
    }

  })

  // select v.url, v.watch_count, u.username as posted_by, v.title from videos v inner join users u on u.id = v.posted_by;
}

const createVideo = ({ url, posted_by, title }) => {
  validateVideo(title, url).catch(err => {
    return err
  })
  return new Promise((res, rej) => {
    knex(VIDEOTABLE)
    .insert({
      url: url,
      watch_count:0,
      user_uuid:posted_by,
      title:title
    })
    .returning("*")
    .then(data => res(data))
    .catch(err => rej(err))
  })
}

const updateVideo = (params, id) => {
  console.log(params, id)
  return new Promise((res, rej) => {
    knex(VIDEOTABLE)
    .update(params)
    .where("videos.id", parseInt(id, 10))
    .returning("*")
    .then(data => res(data))
    .catch(err =>rej(Error(err)))
  })
}

module.exports = {
  getVideos,
  createVideo,
  updateVideo
}