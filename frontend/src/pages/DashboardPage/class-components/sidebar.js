import React, { Component } from "react";
import styled from "styled-components";
import Modal from "../../../shared-components/modal";
import VideoUpload from "./video-upload";
import AddPlaylist from "./add-playlist";
import { BlurredBackground } from "../../../shared-styles";

const Aside = styled.aside`
  height: 100vh;
  width: 20rem;
  background: #224259;
`;

class Sidebar extends Component {
  state = {
    modalExpanded: false
  };

  toggleModal = e => {
    // Would then need to pass in e.target.id to accomodate
    // dynamically accessing state if there are additional links or state
    // added in the future.
    const id = e.target.id;
    this.toggleModalSetState(id);
  };

  // Can refactor to dynamically accessing state if
  // there are any additional links or state added in
  // the future.
  toggleModalSetState = id => {
    if (!this.state.modalExpanded) {
      this.setState({
        modalExpanded: id
      });
    } else {
      this.setStateModalExpandedNull();
    }
  };

  setStateModalExpandedNull = () => {
    this.setState({
      modalExpanded: null
    });
  };

  render() {
    const { toggleModal } = this;
    const { modalExpanded } = this.state;
    return (
      <Aside>
        <ul>
          <li id="upload-video" onClick={toggleModal}>
            Upload Video
          </li>
          <li id="add-playlist" onClick={toggleModal}>
            Add Playlist
          </li>
        </ul>
        {/* Need to use a React portal here instead. */}
        {modalExpanded ? (
          <Modal>
            {formRef => {
              return (
                <>
                  <BlurredBackground />
                  {modalExpanded === "upload-video" && (
                    <VideoUpload formRef={formRef} toggleModal={toggleModal} />
                  )}
                  {modalExpanded === "add-playlist" && (
                    <AddPlaylist formRef={formRef} toggleModal={toggleModal} />
                  )}
                </>
              );
            }}
          </Modal>
        ) : null}
      </Aside>
    );
  }
}

export default Sidebar;
