const express = require("express");
const router = express.Router();
const playlist = require("../services/Playlist");
const jwtMiddleware = require("../middleware/jwtMiddleware");

router.get("/all/:uuid", playlist.getAllPlaylists);

router.get("/:uuid", playlist.getPlaylist);

// router.use(jwtMiddleware);

router.post("/playlist", playlist.addPlaylist);

router.post("/playlist_video", playlist.addPlaylistVideo);

router.put("/playlist_video/:uuid", playlist.updatePlaylist);

router.delete("/playlist/:uuid", playlist.deletePlaylist);

router.delete("/playlist_video/:uuid", playlist.deletePlaylistVideo);

module.exports = router;
