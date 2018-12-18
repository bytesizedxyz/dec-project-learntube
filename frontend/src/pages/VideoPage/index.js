import React from "react";
import Youtube from "react-youtube";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import styled from "styled-components";
import { retrieveVideo } from "../../state/actions/video";

const Main = styled.div`
  background-image: linear-gradient(
    -225deg,
    #5391bd 0%,
    #5e8cad 29%,
    #44107a 80%,
    #231557 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  #box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
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

    const { videoUuid, title, url, youtube_id } = currentViewedVideo;

    console.log(`video url: ${url}, video id: ${youtube_id}`);

    return (
      <Main>
        <div>
          <h1>{title}</h1>
          <div id="box">
            <Youtube
              opts={{ height: "800", width: "900" }}
              videoId={youtube_id}
            />
          </div>
        </div>
      </Main>
    );
  };
}
// 390, 400
export default connect(
  state => state,
  { retrieveVideo }
)(VideoPage);
