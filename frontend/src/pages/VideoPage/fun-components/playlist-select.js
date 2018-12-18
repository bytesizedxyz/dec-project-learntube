import React from "react";
import { AboveModalContainer } from "../../../shared-styles";
import PlaylistListing from "../../DashboardPage/class-components/playlist-listing";
import { Button } from "../../../shared-styles";

const playlistSelect = ({
  formRef,
  toggleModal,
  addVideoToPlaylist,
  videoView
}) => {
  return (
    <AboveModalContainer ref={formRef}>
      <PlaylistListing videoView addVideoToPlaylist={addVideoToPlaylist} />
      <Button id="add-playlist" onClick={toggleModal}>
        Create Playlist
      </Button>
    </AboveModalContainer>
  );
};

export default playlistSelect;
