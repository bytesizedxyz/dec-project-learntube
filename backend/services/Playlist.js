const knex = require('../db/knex');
const { PLAYLISTTABLE, PLAYLISTVIDEOTABLE } = require('../SERVER_CONSTANTS').tableNames;


const dao = {
  get: id => {
    return knex(PLAYLISTTABLE).where('user_uuid', id);
  },
  getPlayist: id => {
    return knex(PLAYLISTVIDEOTABLE)
      .select()
      .innerJoin(PLAYLISTTABLE, { 'playlists.uuid': 'videos.uuid' })
      .where('playlists.uuid', '=', parseInt(id, 10));
  },
  create: (table, data) => {
    return knex(table).insert(data, '*');
  },
  update: (id, table, data) => {
    return knex(table)
      .where('id', id)
      .update(data, '*');
  },
  delete: (id, table) => {
    return knex(table)
      .where('id', id)
      .del();
  }
};

// GET - return all of users playlists
const getAllPlayists = (req, res) => {
  dao
    .get(req.params.id)
    .then(playlists => {
      res.json(playlists);
    })
    .catch(err => {
      console.log('error retrieving playlists');
      console.log(err);
      throw err;
    });
};

// GET - get a playlists contents
const getPlaylist = (req, res, next) => {
  dao
    .getPlaylist(id, table)
    .then(contents => {
      res.json(contents);
    })
    .catch(err => {
      console.log('error retrieving playlist videos');
      console.log(err);
      throw err;
    });
};

// POST - add a playlist
const addPlaylist = (req, res, next) => {
  dao
    .create('playlist', req.body)
    .then(playlists => {
      res.json(playlists[0]);
    })
    .catch(err => {
      console.log('error adding a playlist');
      console.log(err);
      throw err;
    });
};

// POST - add a playlist video
const addPlaylistVideo = (req, res, next) => {
  dao
    .create(PLAYLISTVIDEOTABLE, req.body)
    .then(videos => {
      res.json(videos[0]);
    })
    .catch(err => {
      console.log('error adding a playlist video');
      console.log(err);
      throw err;
    });
};

// PUT - update a playlist
const updatePlaylist = (req, res, next) => {
  dao
    .update(req.params.id, 'playlist', req.body)
    .then(playlists => {
      res.json(playlists[0]);
    })
    .catch(err => {
      console.log('error updating a playlist');
      console.log(err);
      throw err;
    });
};

// DELETE - delete a playlist
const deletePlaylist = (req, res, id) => {
  dao
    .deletePlaylist(req.params.id, PLAYLISTTABLE)
    .then(() => {
      res.json({ deleted: true });
    })
    .catch(err => {
      console.log('error deleting a playlist');
      console.log(err);
      throw err;
    });
};

// DELETE - delete a playlist video
const deletePlaylistVideo = (req, res, id) => {
  dao
    .deletePlaylist(req.params.id, PLAYLISTVIDEOTABLE)
    .then(() => {
      res.json({ deleted: true });
    })
    .catch(err => {
      console.log('error deleting a video from the playlist');
      console.log(err);
      throw err;
    });
};

module.exports = {
  getAllPlayists,
  getPlaylist,
  addPlaylist,
  addPlaylistVideo,
  updatePlaylist,
  deletePlaylist,
  deletePlaylistVideo
};
