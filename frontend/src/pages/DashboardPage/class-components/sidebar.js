import React, { Component } from "react";
import styled from "styled-components";
import Modal from "../../../shared-components/modal";
import VideoUpload from "./video-upload";
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
    console.log("IT WORKS: ", e);
    // Would then need to pass in e.target.id to accomodate
    // dynamically accessing state if there are additional links or state
    // added in the future.
    this.toggleModalSetState();
  };

  // Can refactor to dynamically accessing state if
  // there are any additional links or state added in
  // the future.
  toggleModalSetState = () => {
    this.setState((state, props) => ({
      modalExpanded: !state.modalExpanded
    }));
  };

  componentDidUpdate = () => {
    console.log("THE NEW STATE: ", this.state);
  };

  render() {
    const { toggleModal } = this;
    const { modalExpanded } = this.state;
    return (
      <Aside>
        <ul>
          <li onClick={toggleModal}>Upload Video</li>
        </ul>
        {/* Need to use a React portal here instead. */}
        {modalExpanded ? (
          <Modal>
            {formRef => {
              return (
                <>
                  <BlurredBackground />
                  <VideoUpload formRef={formRef} toggleModal={toggleModal} />
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
