const usersData = require('../dummyData/users');
const playlistData = require('../dummyData/playlist');

exports.seed = (knex, Promise) => {
  // return knex('users').then(res => {
  //   let playlistPromise = [];
  //   playlistData.forEach(playlist => {
  //     let playlistUserUUID = playlist.user_uuid;
  //     playlistPromise.push(createPlaylist(knex, playlist, playlistUserUUID));
  //   });
  //   return Promise.all(playlistPromise);
  // });
};
// const createPlaylist = (knex, playlist, playlistUserUUID) => {
//   return knex('users')
//     .where('uuid', playlistUserUUID)
//     .first()
//     .then(() => {
//       return knex('playlist').del();
//     })
//     .then(() => {
//       return knex('playlist').insert({
//         uuid: playlist.uuid,
//         title: playlist.title,
//         user_uuid: playlistUserUUID
//       });
//     });
// };
