import React from "react";
import Youtube from "react-youtube";
import { connect } from "react-redux";
import styled from "styled-components";
import { retrieveVideo } from "../../state/actions/video";

const Main = styled.div`
  display: flex;
  div {
    width: 50%;
  }
`;

class VideoPage extends React.Component {
  componentDidMount = () => {
    this.props.retrieveVideo(this.props.id);
  };

  render = () => {
    const { currentViewedVideo } = this.props.videoState;
    if (!currentViewedVideo) {
      console.log("NO VIDEO FOUND");
      return null;
      // redirect to /
    }

    const { videoUuid, title, url } = currentViewedVideo;

    return (
      <Main>
        <div>
          <h1>{title}</h1>
          <Youtube opts={{ height: "390", width: "400" }} videoId={url} />
        </div>
        <div>suggested videos column here</div>
      </Main>
    );
  };
}

export default connect(
  state => state,
  { retrieveVideo }
)(VideoPage);
