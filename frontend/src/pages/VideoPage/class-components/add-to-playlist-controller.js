import React, { Component } from "react";
import { BlurredBackground } from "../../../shared-styles";
import Modal from "../../../shared-components/modal";
import PlaylistSelect from "../fun-components/playlist-select";
import AddPlaylist from "../../DashboardPage/class-components/add-playlist";

class AddToPlaylistController extends Component {
  state = {
    video_uuid: null,
    modalExpanded: null
  };

  componentDidMount = () => {
    this.setState({
      video_uuid: this.props.video_uuid
    });
  };

  toggleModal = e => {
    const id = e.target.id;
    this.setState({
      modalExpanded: id
    });
  };

  setStateModalExpandedNull = () => {
    this.setState({
      modalExpanded: null
    });
  };

  // PlaylistSelect will need to be passed a
  render() {
    const { toggleModal } = this;
    const { modalExpanded } = this.state;

    return (
      <>
        <button id="playlist-select" onClick={toggleModal}>
          Add To Playlist
        </button>
        {modalExpanded ? (
          <Modal>
            {formRef => {
              return (
                <>
                  <BlurredBackground />
                  {modalExpanded === "playlist-select" && (
                    <PlaylistSelect
                      formRef={formRef}
                      toggleModal={toggleModal}
                    />
                  )}
                  {modalExpanded === "add-playlist" && (
                    <AddPlaylist
                      formRef={formRef}
                      toggleModal={toggleModal}
                      videoView
                    />
                  )}
                </>
              );
            }}
          </Modal>
        ) : null}
      </>
    );
  }
}

export default AddToPlaylistController;
