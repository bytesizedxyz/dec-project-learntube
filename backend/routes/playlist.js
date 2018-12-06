const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// GET - return all playlists where user_id = user_id
// GET - return playlist where playlist_id = playlist_id

// POST - create a playlist
// user--playlist--playlist_video--video

// PUT - update a playlist

module.exports = router;
