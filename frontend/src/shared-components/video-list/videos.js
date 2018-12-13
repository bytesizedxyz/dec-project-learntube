import React, { Component } from "react";

import VideoList from "./VideoList";
import { viewVideo, retrieveVideosForListing } from "../../state/actions/video";
import { connect } from "react-redux";
const videoList = [
  {
    uuid: "1234 ",
    videoId: "QaVXaMFc6gk",
    title: "faketitle1 ",
    url: "youtube.com ",
    postedBy: "banana ",
    createdAt: "12/1/2018 "
  },

  {
    uuid: "5678 ",
    videoId: "20vDj6oQ-pE",
    title: "faketitle2 ",
    url: "youtube.com ",
    postedBy: "Groot ",
    createdAt: "11/30/2018 "
  },
  {
    uuid: "9101112 ",
    videoId: "xOMmK9iFuE4",
    title: "faketitle3 ",
    url: "youtube.com ",
    postedBy: "Crampus ",
    createdAt: "10/31/2018 "
  }
];

class videos extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    this.props.retrieveVideosForListing();
    //this.settingState(videoList);
    console.log("THIS.PROPS.VIEWVIDEO: ", this.props.viewVideo);
  };

  settingState = videoList => {
    this.setState({
      videos: videoList,
      selectedVideo: videoList[0]
    });
  };

  onVideoSelect = video => {
    this.props.viewVideo(video);
  };

  render() {
    return (
      <div>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.props.videoListingState}
        />
      </div>
    );
  }
}

export default connect(
  state => state,
  { viewVideo, retrieveVideosForListing }
)(videos);
