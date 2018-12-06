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
          id: 1,
          name: 'Whateva',
          url: 'google.com/someshitserverlocation',
          watch_count: 'ha',
          user_id: '1'
        }
      }
    }
  }
};

id: name: url: watch_count: // user--playlist--playlist_video--video

user_id: // POST - create an playlist record
// POST - create an playlist_video record
// PUT - update playlist record

module.exports = router;
