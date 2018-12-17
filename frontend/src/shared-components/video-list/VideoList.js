import React, { Fragment } from "react";
import VideoItem from "./VideoItem";
import { retrieveVideosForListing, viewVideo } from "../../state/actions/video";

const VideoList = ({ videoUuids, videos, onVideoSelect }) => {
  return videoUuids.map(uuid => {
    // return this.props.retrieveVideosForListing.map(video => {
    const video = videos[uuid];
    return (
      <Fragment key={uuid}>
        <VideoItem
          videoUuid={video.uuid}
          videoURL={video.url}
          videoTitle={video.title}
          postedBy={video.username}
          createdAt={video.createdAt}
          onVideoSelect={onVideoSelect}
        />
      </Fragment>
    );
  });
};

export default VideoList;
