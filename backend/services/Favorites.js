const knex = require('../db/knex');
const { FAVORITES } = require('../SERVER_CONSTANTS').tableNames;

const favoriteVideo = ({user, video_id}) => {
  return new Promise((res, rej) => {
    knex(FAVORITES)
    .insert({user_uuid:user, video_uuid:video_id})
    .returning("*")
    .then(data => {
      res(data);
    })
    .catch(err => rej(err))
  })
}

module.exports = {
  favoriteVideo
}