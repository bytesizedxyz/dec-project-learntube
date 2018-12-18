import React from "react";
import PlaylistItem from "./playlist-item";

const playlistDisplay = ({
  playlists,
  playlistUuids,
  fetchDetails,
  addVideoToPlaylist
}) => {
  return playlistUuids.map(uuid => (
    <PlaylistItem
      uuid={uuid}
      fetchDetails={fetchDetails}
      addVideoToPlaylist={addVideoToPlaylist}
      playlists={playlists}
    />
  ));
};

export default playlistDisplay;
