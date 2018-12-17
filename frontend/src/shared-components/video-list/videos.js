import React, { Component } from "react";
import styled from "styled-components";
import VideoList from "./VideoList";
import { viewVideo, retrieveVideosForListing } from "../../state/actions/video";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: linear-gradient(-225deg, #5391BD 0%, #5E8CAD 29%, #44107A 80%, #231557 100%);
 // background: lime;
  padding-top: 20px;
  padding-bottom: 60px;
  
`
//background-image: linear-gradient(-225deg, #FFF800 0%, #FF1361 29%, #44107A 80%, #231557 100%);
class videos extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
     this.props.retrieveVideosForListing();
    //this.settingState(videoList);
    // console.log("VIDEOS THIS.PROPS: ", this.props);
  };

  settingState = videoList => {
    this.setState({
      videos: videoList,
      selectedVideo: videoList[0]
    });
  };

  onVideoSelect = videoUuid => {
    // console.log("THE VIDEO UUID ON CLICK: ", videoUuid);
    this.props.viewVideo(videoUuid);
  };

  render() {
    const { videos, videoUuids } = this.props;
    // console.log("THE VIDEOS: ", videos);
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
  //mapStateToProps,
  state => {
    const { videoListingState } = state;
    return videoListingState;
  },
  { viewVideo, retrieveVideosForListing }
)(videos);
