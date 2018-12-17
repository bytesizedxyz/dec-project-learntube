import React from "react";

const playlistDisplay = ({ playlists, playlistIds, fetchDetails }) => {
  return playlistIds.map(uuid => (
    <div onClick={fetchDetails}>
      <h1>{playlists[uuid].title}</h1>
    </div>
  ));
};

export default playlistDisplay;
