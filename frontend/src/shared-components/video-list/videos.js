import React, { Component } from "react";
import styled from "styled-components";
import VideoList from "./VideoList";
import { viewVideo, retrieveVideosForListing } from "../../state/actions/video";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: linear-gradient(
    -225deg,
    #5391bd 0%,
    #5e8cad 29%,
    #44107a 80%,
    #231557 100%
  );
  // background: lime;
  padding-top: 20px;
  padding-bottom: 60px;
`;
//
class videos extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    this.props.retrieveVideosForListing();
  };

  settingState = videoList => {
    this.setState({
      videos: videoList,
      selectedVideo: videoList[0]
    });
  };

  onVideoSelect = videoUuid => {
    this.props.viewVideo(videoUuid);
  };

  render() {
    const { videos, videoUuids } = this.props;
    return (
      <Container>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={videos}
          videoUuids={videoUuids}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { videos: state.videos };
};

export default connect(
  state => {
    const { videoListingState } = state;
    return videoListingState;
  },
  { viewVideo, retrieveVideosForListing }
)(videos);
