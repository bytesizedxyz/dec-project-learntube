import React from "react";
import Youtube from "react-youtube";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import styled from "styled-components";
import AddToPlaylistController from "./class-components/add-to-playlist-controller";
import { addVideoToPlaylist } from "../../state/actions/playlist";
import { retrieveVideo } from "../../state/actions/video";

const Main = styled.main`
  display: flex;
`;

const Error = styled.div`
  background: red;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 5rem;
`;

const NoVideoError = () => (
  <Error>
    <h1>{"Couldn't find video :("}</h1>
    <Link style={{ color: "white", paddingTop: "10px" }} to="/">
      Go home
    </Link>
  </Error>
);

class VideoPage extends React.Component {
  componentDidMount = () => {
    this.props.retrieveVideo(this.props.id);
  };

  render = () => {
    const { currentViewedVideo } = this.props.videoState;
    if (!currentViewedVideo) {
      return <NoVideoError />;
    }

    const { videoUuid, title, url, youtube_id } = currentViewedVideo;

    console.log(`video url: ${url}, video id: ${youtube_id}`);

    return (
      <Main>
        <div>
          <h1>{title}</h1>
          <Youtube
            opts={{ height: "390", width: "400" }}
            videoId={youtube_id}
          />
        </div>
        <AddToPlaylistController video_uuid={videoUuid} />
        <div>suggested videos column here</div>
      </Main>
    );
  };
}

export default connect(
  state => state,
  { retrieveVideo, addVideoToPlaylist }
)(VideoPage);
