const knex = require('../db/knex');
const {
  PLAYLISTTABLE,
  PLAYLISTVIDEOTABLE
} = require('../SERVER_CONSTANTS').tableNames;

const dao = {
  get: (id, table) => {
    return knex(table).where('user_uuid', id);
  },
  getPlaylist: id => {
    return knex(PLAYLISTVIDEOTABLE)
      .select()
      .innerJoin(PLAYLISTTABLE, { 'playlists.uuid': 'videos.uuid' })
      .where('playlists.uuid', '=', parseInt(id, 10));

    // select pl.title as playlist_title, pv.order as playlist_order, u2.username as playlist_creator, v.url as url, v.watch_count as watch_count, u.username as posted_by, v.title as video_title from playlist_video pv
    // inner join videos v on pv.video_uuid = v.uuid inner join playlist pl on pv.playlist_uuid = pl.uuid
    // inner join users u on u.uuid = v.user_uuid inner join users u2 on u2.uuid = pl.user_uuid where pl.uuid = ? ;, [ID_YOU_WANT_TO_LOOK_UP]
  },
  create: (table, data) => {
    return knex(table).insert(data, '*');
  },
  update: (id, table, data) => {
    return knex(table)
      .where('uuid', id)
      .update(data, '*');
  },
  deletePlaylist: (id, table) => {
    return knex(table)
      .where('playlist_uuid', id)
      .del();
  },
  deletePlaylistVideo: (id, table) => {
    return knex(table)
      .where('video_uuid', id)
      .del();
  }
};

// GET - return all of a users playlists
const getAllPlaylists = (req, res) => {
  const {
    params: { uuid }
  } = req;
  dao
    .get(uuid, PLAYLISTTABLE)
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
  const {
    params: { uuid }
  } = req;
  dao
    .getPlaylist(uuid, PLAYLISTTABLE)
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
  const { body } = req;
  dao
    .create(PLAYLISTTABLE, body)
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
  const { body } = req;
  dao
    .create(PLAYLISTVIDEOTABLE, body)
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
  const {
    body,
    params: { uuid }
  } = req;
  console.log(uuid, body);
  dao
    .update(uuid, PLAYLISTTABLE, body)
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
  const {
    params: { uuid }
  } = req;
  dao
    .deletePlaylist(uuid, PLAYLISTTABLE)
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
  const {
    params: { uuid }
  } = req;
  dao
    .deletePlaylistVideo(uuid, PLAYLISTVIDEOTABLE)
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
  getAllPlaylists,
  getPlaylist,
  addPlaylist,
  addPlaylistVideo,
  updatePlaylist,
  deletePlaylist,
  deletePlaylistVideo
};
