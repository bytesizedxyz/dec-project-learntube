const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const dao = {
  getAll: id => {
    return knex('playlists').where('user_uuid', id);
  },
  getOne: (table, id) => {
    return knex(table)
      .where('uuid', id)
      .first();
  },
  create: (table, playlist) => {
    return knex(table).insert(playlist, '*');
  },
  update: (table, id, playlist) => {
    return knex(table)
      .where('id', id)
      .update(playlist, '*');
  },
  deletePlaylist: (table, id) => {
    return knex(table)
      .where('id', id)
      .del();
  }
};

// GET - returns all playlist records where user_uuid = users_pkey
router.get('/playlists/all/:uuid', (req, res) => {
  dao.getAll(req.params.id).then(playlists => {
    res.json(playlists);
  });
});

// GET - returns all video records where:
// playlists_pkey = playlist_uuid(playlist_video)
// AND
// videos_pkey = video_uuid(playlist_video)

// query the playlist_video table for all records matching playlists_pkey and then
// parse the result to extract all video_uuid
// query the vidoes table for all records matching videos_pkey
router.get('/playlists/:id', (req, res, next) => {
  dao.getOne(req.params.id).then(playlist => {
    playlist ? res.json(playlist) : next();
  });
});

// POST - create a playlist record
router.post('/playlist', (req, res, next) => {
  dao.create('playlists', req.body).then(playlists => {
    res.json(playlists[0]);
  });
});

// POST - create a playlist_video record
router.post('/playlist_video', (req, res, next) => {
  dao.create('playlist_video', req.body).then(playlists => {
    res.json(playlists[0]);
  });
});

// PUT - update a playlist record
router.put('/playlist/:id', (req, res, next) => {
  dao.update('playlist', req.params.id, req.body).then(playlists => {
    res.json(playlists[0]);
  });
});

// PUT - update a playlist_video record
router.put('/playlist_video/:id', (req, res, next) => {
  dao.update('playlist_video', req.params.id, req.body).then(playlists => {
    res.json(playlists[0]);
  });
});

// DELETE - delete playlist record
router.delete('/playlist/:id', (req, res) => {
  dao.deletePlaylist('playlists', req.params.id).then(() => {
    res.json({ deleted: true });
  });
});

// DELETE - delete a playlist_video
router.delete('/playlist_video/:id', (req, res) => {
  dao.deletePlaylist('playlist_video', req.params.id).then(() => {
    res.json({ deleted: true });
  });
});

module.exports = router;
