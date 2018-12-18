import React, { Fragment } from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videoUuids, videos, onVideoSelect }) => {
  return videoUuids.map(uuid => {
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
          youTubeId={video.youtube_id}
        />
      </Fragment>
    );
  });
};

export default VideoList;
