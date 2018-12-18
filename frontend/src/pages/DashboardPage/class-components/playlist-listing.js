import React, { Component, Fragment } from "react";
import { retrievePlaylists } from "../../../state/actions/playlist";
import { connect } from "react-redux";
import PlaylistDisplay from "../fun-components/playlist-display";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => !props.videoView && "20px"};

  h3 {
    font-size: ${props => props.theme.extraLargeText};
    font-family: "Bangers", cursive;
    color: ${props => props.theme.darkBlue};
  }

  #grid-container {
    background: ${props => props.theme.backgroundGrey};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: scroll;

    #playlist-grid {
      display: ${props => (props.videoView ? "flex" : "grid")};
      flex-direction: column;
      grid-gap: 10px;
      justify-items: center;
      grid-template-columns: repeat(auto-fill, 300px);
      grid-template-rows: repeat(auto-fill, 140px);
      padding-top: ${props => !props.videoView && "20px"};
      width: ${props => (props.videoView ? "100%" : "60vw")};
      width: ${props => (props.videoView ? "100%" : "60vw")};
      height: ${props => (props.videoView ? "60vh" : "100%")};
      /* background: ${props => (props.videoView ? "blue" : "orange")}; */
    }
  }
`;

// const Header = styled.h3`
//   font-size: ${props => props.theme.extraLargeText};
//   font-family: "Bangers", cursive;
//   color: ${props => props.theme.darkBlue};
// `;

// const Container = styled.div`
//   background: ${props => props.theme.backgroundGrey};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   padding-top: 20px;
//   overflow-y: scroll;

//   #playlist-grid {
//     display: grid;
//     grid-gap: 10px;
//     justify-items: center;
//     grid-template-columns: repeat(auto-fill, 300px);
//     grid-template-rows: repeat(auto-fill, 140px);
//     padding-top: 20px;
//     width: ${props => (props.videoView ? "80%" : "60vw")};
//     height: ${props => (props.videoView ? "60vh" : "100%")};
//     background: ${props => (props.videoView ? "blue" : "orange")};
//   }
// `;

class PlaylistListing extends Component {
  componentDidMount = () => {
    // this.props.retrievePlaylists();
  };

  fetchDetails = e => {
    console.log("GETTING DETAILS");
  };

  render() {
    const { fetchDetails } = this;
    const {
      playlists,
      playlistUuids,
      videoView,
      addVideoToPlaylist
    } = this.props;
    return (
      <Container videoView={videoView}>
        <h3>{videoView ? "Add Video to Playlist:" : "Playlist Listing"}</h3>
        <div id="grid-container">
          <div id="playlist-grid">
            <PlaylistDisplay
              playlists={playlists}
              playlistUuids={playlistUuids}
              fetchDetails={fetchDetails}
              addVideoToPlaylist={addVideoToPlaylist}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default connect(
  state => state.playlistState,
  { retrievePlaylists }
)(PlaylistListing);
