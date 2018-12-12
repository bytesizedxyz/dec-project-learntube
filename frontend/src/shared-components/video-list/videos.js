import React, { Component } from "react";
//import axios from "axios";

import VideoList from "./VideoList";

const videoList = [
  {
    uuid: "1234 ",
    title: "faketitle1 ",
    url: "youtube.com ",
    postedBy: "banana ",
    createdAt: "12/1/2018 "
  },
  {
    uuid: "5678 ",
    title: "faketitle2 ",
    url: "youtube.com ",
    postedBy: "Groot ",
    createdAt: "11/30/2018 "
  },
  {
    uuid: "9101112 ",
    title: "faketitle3 ",
    url: "youtube.com ",
    postedBy: "Crampus ",
    createdAt: "10/31/2018 "
  }
];

export default class videos extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    //this is where the axios request goes when backend is connected
    this.settingState(videoList);
  };

  settingState = videoList => {
    this.setState({
      videos: videoList,
      selectedVideo: videoList[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
