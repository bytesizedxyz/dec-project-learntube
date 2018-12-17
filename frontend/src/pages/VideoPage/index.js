import React from "react";
import Youtube from "react-youtube";
import { connect } from "react-redux";
import styled from "styled-components";
import AddToPlaylistController from "./class-components/add-to-playlist-controller";
import { addVideoToPlaylist } from "../../state/actions/playlist";

const VideoPage = ({ currentViewedVideo }) => {
  const { uuid, title, url } = currentViewedVideo;
  const Main = styled.div`
    display: flex;
    div {
      width: 50%;
    }
  `;
  return (
    <Main>
      <div>
        <h1>{title}</h1>
        <Youtube opts={{ height: "390", width: "400" }} videoId={url} />
      </div>
      <AddToPlaylistController video_uuid={uuid} />
      <div>suggested videos column here</div>
    </Main>
  );
};

export default connect(
  state => state.videoState,
  { addVideoToPlaylist }
)(VideoPage);
