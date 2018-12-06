const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// GET - return all playlists where user_id = user_id
const playlists = {
  one: { name: 'name', name: 'name', name: 'name' },
  two: { name: 'name', name: 'name', name: 'name' },
  three: { name: 'name', name: 'name', name: 'name' }
};

// GET - return playlist where playlist_id = playlist_id
const playlistOne = {
  id: 7,
  title: '',
  user_id: ''
};
const user = {
  id: 1,
  user_name: 'myname',
  email: 'myemail@gmail.com',
  password: 'h45h3d#P@5sW0rD',
  is_admin: true,
  favorites: {
    favoriteOne: {
      id: 1,
      name: 'Whateva',
      url: 'google.com/someshitserverlocation',
      watch_count: 'ha',
      user_id: '1'
    }
  },
  playlists: {
    one: {
      name: 'name',
      videos: {
        videoOne: {
          uuid: '75G28y3d9210u433',
          url: 'youtube.com/someserverlocation',
          name: 'Whateva',
          watch_count: 34577882,
          user_uuid: '98G28y984tT39230u463',
          title: 'Life Is A Scam'
        }
      }
    }
  }
};

id: name: // user--playlist--playlist_video--video

url: // POST - create an playlist record
watch_count: // POST - create an playlist_video record
user_id: // PUT - update playlist record

module.exports = router;
