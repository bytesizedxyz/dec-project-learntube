import React from "react";

const VideoItem = ({
  videoId,
  videoTitle,
  videoURL,
  postedBy,
  createdAt,
  onVideoSelect
}) => {
  return (
    <div onClick={() => onVideoSelect(videoId)}>
      {videoTitle}
      {videoURL}
      {postedBy}
      {createdAt}
    </div>
  );
};

export default VideoItem;
