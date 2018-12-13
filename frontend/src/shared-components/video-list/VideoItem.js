import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  background: lime;
  margin: 0px 40px 140px 40px;

  #video-image {
    width: 100%;
    height: 80%;
    background: blue;
  }

  #video-details {
    width: 100%;
    height: 30%;
    background: blue;
    //padding-left: 5px;

    p {
      font-size: 0.8rem;
      font-weight: normal;
      color: white;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
     // letter-spacing: 0.5px;
    }

    p1 {
      font-size: 25px;
      font-weight: bold;
      color: white;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
     //letter-spacing: 0.5px

    }
  }
`;

const VideoItem = ({
  videoUuid,
  videoTitle,
  videoURL,
  postedBy,
  createdAt,
  onVideoSelect
}) => {
  return (
    <Container id={videoUuid} onClick={() => onVideoSelect(videoUuid)}>
      <img src={`https://img.youtube.com/vi/${videoURL}/0.jpg`} />
     <div id="video-details">
      <p1>{videoTitle}</p1>
      <p>{videoURL}</p>
      <p>{postedBy}</p>
      <p>{createdAt}</p>
    </div>
    </Container>
  );
};

export default VideoItem;
