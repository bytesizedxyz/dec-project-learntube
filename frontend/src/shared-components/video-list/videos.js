import React, { Component } from "react";
import styled from 'styled-components';
import VideoList from "./VideoList";
import { viewVideo, retrieveVideosForListing } from "../../state/actions/video";
import { connect } from "react-redux";

// NORMALIZED VIDEOS
// this is videos on this.props
// {
//   'randomuuidstringfrombackend1': {
//     uuid: "randomuuidstringfrombackend1 ",
//     title: "faketitle1 ",
//     url: "QaVXaMFc6gk",
//     postedBy: "banana ",
//     createdAt: "12/1/2018"
//   },
//   'randomuuidstringfrombackend1': {
//     uuid: "randomuuidstringfrombackend1 ",
//     title: "faketitle2 ",
//     url: "20vDj6oQ-pE",
//     postedBy: "Groot ",
//     createdAt: "11/30/2018 "
//   },
// }

// this videoUuids on this.props
// ["randomuuidstringfrombackend1", "randomuuidstringfrombackend2"]

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
    // this.props.retrieveVideosForListing();
    //this.settingState(videoList);
    console.log("VIDEOS THIS.PROPS: ", this.props);
  };

  settingState = videoList => {
    this.setState({
      videos: videoList,
      selectedVideo: videoList[0]
    });
  };

  onVideoSelect = videoUuid => {
    console.log("THE VIDEO UUID ON CLICK: ", videoUuid)
    this.props.viewVideo(videoUuid);
  };

  render() {
    const { videos, videoUuids } = this.props
    console.log("THE VIDEOS: ", videos)
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

export default connect(
  state => {
    const {videoListingState} = state;
    return videoListingState;
  },
  { viewVideo, retrieveVideosForListing }
)(videos);
