import React, { Component } from "react";
import styled from "styled-components";
import Modal from "../../../shared-components/modal";
import VideoUpload from "./video-upload";
import AddPlaylist from "./add-playlist";
import { BlurredBackground } from "../../../shared-styles";

const Aside = styled.aside`
  height: 100vh;
  width: 20rem;
  background: #fcfcfc;
  padding-top: 1.4rem;
  padding-left: 1.4rem;
  box-shadow: 0px 0px 10px 2px rgba(10, 10, 10, 0.15);

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;

    li {
      margin-bottom: 1.4rem;
      font-size: 1.6rem;
      font-family: "Bangers", cursive;
      color: #224259;
      cursor: pointer;

      &:hover {
        color: #aaa;
      }
    }
  }
`;

class Sidebar extends Component {
  state = {
    modalExpanded: false
  };

  toggleModal = e => {
    // id will be upload-video or add-playlist
    const id = e.target.id;
    this.toggleModalSetState(id);
  };

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
