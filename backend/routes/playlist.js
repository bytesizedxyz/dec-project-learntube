const express = require('express');
const router = express.Router();
const playlist = require('../services/Playlist');

router.get('/playlists/all/:uuid', playlist.getAllPlayists);

router.get('/playlists/:id', playlist.getPlaylist);

router.post('/playlist', playlist.addPlaylist);

router.post('/playlist_video', playlist.addPlaylistVideo);

router.put('/playlist_video/:id', playlist.updatePlaylist);

router.delete('/playlist/:id', playlist.deletePlaylist);

router.delete('/playlist_video/:id', playlist.deletePlaylistVideo);

module.exports = router;
