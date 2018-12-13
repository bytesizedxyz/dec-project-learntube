import React from "react";
import { connect } from "react-redux";
import VideoItem from "./VideoItem";
import { retrieveVideosForListing, viewVideo } from "../../state/actions/video";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.videoIds.map(videoId => {
    const video = videos.videos[videoId];
    return (
      <VideoItem
        videoId={video.videoId}
        videoTitle={video.title}
        videoURL={video.url}
        postedBy={video.postedBy}
        createdAt={video.createdAt}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (<div style={{display:'flex', flexDirection:'row'}}>{renderedList}</div>);
};

export default VideoList;
