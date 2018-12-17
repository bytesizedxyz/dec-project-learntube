import React, { Component } from "react";
import { retrievePlaylists } from "../../../state/actions/playlist";
import { connect } from "react-redux";
import PlaylistItem from "../fun-components/playlist-item";

class PlaylistListing extends Component {
  componentDidMount = () => {
    // this.props.retrievePlaylists();
  };

  fetchDetails = e => {
    console.log("GETTING DETAILS");
  };

  render() {
    const { fetchDetails } = this;
    const { playlists, playlistUuids } = this.props;
    return (
      <div>
        <h1>Playlist Listing</h1>
        <PlaylistItem
          playlists={playlists}
          playlistIds={playlistUuids}
          fetchDetails={fetchDetails}
        />
      </div>
    );
  }
}

export default connect(
  state => state.playlistState,
  { retrievePlaylists }
)(PlaylistListing);
