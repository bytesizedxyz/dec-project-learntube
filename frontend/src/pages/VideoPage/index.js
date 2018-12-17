import React from "react";
import Youtube from "react-youtube";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import styled from "styled-components";
import { retrieveVideo } from "../../state/actions/video";

const Main = styled.div`
  display: flex;
  div {
    width: 50%;
  }
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
