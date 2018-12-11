import React, { Component } from "react";
import styled from "styled-components";
import Modal from "../../../shared-components/modal";
import VideoUpload from "./video-upload";
import { BlurredBackground } from "../../../shared-styles";

const Aside = styled.aside`
  height: 100vh;
  width: 20rem;
  background: blue;
`;

class Sidebar extends Component {
  state = {
    toggleUploadVideo: true
  };

  toggle = e => {
    const id = e.target.id;
    this.toggleSetState(id);
  };

  // Dynamically accessing state just in case
  // there are any additional links or state added in
  // the future.
  toggleSetState = id => {
    this.setState((state, props) => ({
      [id]: !state[id]
    }));
  };

  componentDidUpdate = () => {
    console.log("THE NEW STATE: ", this.state);
  };

  render() {
    const { toggle } = this;
    const { toggleUploadVideo } = this.state;
    return (
      <Aside>
        <ul>
          <li id="toggleUploadVideo" onClick={toggle}>
            Upload Video
          </li>
        </ul>
        {/* Need to use a React portal here instead. */}
        {toggleUploadVideo ? (
          <Modal>
            <BlurredBackground />
            <VideoUpload />
          </Modal>
        ) : null}
      </Aside>
    );
  }
}

export default Sidebar;
