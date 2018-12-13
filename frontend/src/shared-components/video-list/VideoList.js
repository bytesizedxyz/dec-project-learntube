import React from "react";
import { connect } from "react-redux";
import VideoItem from "./VideoItem";
import { retrieveVideosForListing, viewVideo } from "../../state/actions/video";

const VideoList = ({ videoUuids, videos, onVideoSelect }) => {
  return videoUuids.map(uuid => {
    const video = videos[uuid]
    return (
      <VideoItem
        videoUuid={video.uuid}
        videoTitle={video.title}
        videoURL={video.url}
        postedBy={video.postedBy}
        createdAt={video.createdAt}
        onVideoSelect={onVideoSelect}
      />
    )
  })
}

export default VideoList;
