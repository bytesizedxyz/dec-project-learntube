import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${props => props.theme.cardWidth};
  min-height: ${props => props.theme.cardHeight};
  height: ${props => props.theme.cardHeight};
  background: ${props => props.theme.white};
  border-radius: 10px;
  /* top and left padding */
  padding: 14px 0px 0px 14px;
  font-family: "Bangers", cursive;
  box-shadow: 0px 0px 26px 4px rgba(191, 191, 191, 0.4);
  margin-top: 10px;
  margin-bottom: 10px;

  h3 {
    font-size: ${props => props.theme.largeText};
    color: ${props => props.theme.darkBlue};
  }
`;

const playlistItem = ({
  uuid,
  playlists,
  fetchDetails,
  addVideoToPlaylist
}) => {
  return (
    <Container
      key={uuid}
      id={uuid}
      onClick={addVideoToPlaylist ? addVideoToPlaylist : fetchDetails}
    >
      <h3>{playlists[uuid].title}</h3>
    </Container>
  );
};

export default playlistItem;
