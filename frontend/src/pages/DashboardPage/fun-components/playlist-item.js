import React from "react";

// Will playlist item be necessary?
const playlistItem = ({ playlists, playlistIds, fetchDetails }) => {
  return playlistIds.map(uuid => (
    <div key={uuid} id={uuid} onClick={fetchDetails}>
      <h1>{playlists[uuid].title}</h1>
    </div>
  ));
};

export default playlistItem;
