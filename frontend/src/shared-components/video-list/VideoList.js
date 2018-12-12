import React from "react";
import { connect } from "react-redux";
import VideoItem from "./VideoItem";
import { retrieveVideosForListing } from "../../state/actions/video";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    console.log(video);
    return (
      <VideoItem
        videoId={video.uuid}
        videoTitle={video.title}
        videoURL={video.url}
        postedBy={video.postedBy}
        createdAt={video.createdAt}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
