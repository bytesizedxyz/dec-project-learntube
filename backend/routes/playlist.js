const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const knex = require('./knex'); // the connection!

module.exports = {
  getAll() {
    return knex('sticker');
  },
  getOne(id) {
    return knex('sticker')
      .where('id', id)
      .first();
  },
  create(sticker) {
    return knex('sticker').insert(sticker, '*');
  },
  update(id, sticker) {
    return knex('sticker')
      .where('id', id)
      .update(sticker, '*');
  },
  delete(id) {
    return knex('sticker')
      .where('id', id)
      .del();
  }
};

// GET - return all playlists where user_id = user_id
router.get('/playlists/all', (req, res) => {
  const id = 'user_id';
  const getAll = id => {
    return knex('playlists').where('user_id', id);
  };
  getAll().then(playlists => {
    res.json(playlists);
  });
});

// GET - return playlist where playlist_id = playlist_id
router.get('/playlists/:id', (req, res, next) => {
  const id = 'playlist_id';
  const getOne = id => {
    return knex('playlists')
      .where('id', id)
      .first();
  };

  getOne(req.params.id).then(playlist => {
    if (playlist) {
      res.json(playlist);
    } else {
      next();
    }
  });
});

// POST - create a playlist
// user--playlist--playlist_video--video
router.post('/playlist', (req, res, next) => {
  const create = sticker => {
    return knex('sticker').insert(sticker, '*');
  };

  create(req.body).then(stickers => {
    res.json(stickers[0]);
  });
});

// PUT - update a playlist
router.put('/playlist/:id', (req, res, next) => {
  const update = (id, sticker) => {
    return knex('sticker')
      .where('id', id)
      .update(sticker, '*');
  };

  update(req.params.id, req.body).then(stickers => {
    res.json(stickers[0]);
  });
});

// DELETE - delete a playlist
router.delete('/playlist/:id', (req, res) => {
  const deletePlaylist = id => {
    return knex('sticker')
      .where('id', id)
      .del();
  };

  deletePlaylist(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router;
