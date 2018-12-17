import React from "react";
import { AboveModalContainer } from "../../../shared-styles";
import PlaylistListing from "../../DashboardPage/class-components/playlist-listing";

const playlistSelect = ({ formRef, toggleModal }) => {
  return (
    <AboveModalContainer ref={formRef}>
      <PlaylistListing />
      <button id="add-playlist" onClick={toggleModal}>
        Create Playlist
      </button>
    </AboveModalContainer>
  );
};

export default playlistSelect;
