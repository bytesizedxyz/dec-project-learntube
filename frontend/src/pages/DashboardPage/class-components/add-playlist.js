import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import { addNewPlaylist } from "../../../state/actions/playlist";
import Form from "../../../shared-components/fun-components/form";
import { Label, Input } from "../../../shared-styles/form-elements";
import { AboveModalContainer } from "../../../shared-styles";
import Icon from "../../../resources/icon";

class AddPlaylist extends Component {
  state = { title: "", validationErrorMsg: null, uploadResult: null };

  onSubmit = async (e, title) => {
    e.preventDefault();
    if (this.verifyValidInput()) {
      // To add a playlist
      const result = await this.addNewPlaylist(title);
      this.setUploadResultSuccess(result);
      setTimeout(this.setUploadResultNull, 1000);
    }
  };

  verifyValidInput = () => {
    const { title, url } = this.state;
    if (title.length < 5) {
      this.setStateValidationErrorMsg("title must be at least 5 characters.");
      return false;
    }
    return true;
  };

  onChange = e => {
    const { id, value } = e.target;
    this.setInputState(id, value);
  };

  setInputState = (id, val) => {
    this.setState({
      [id]: val
    });
  };

  setStateValidationErrorMsg = message => {
    this.setState({
      validationErrorMsg: message
    });
  };

  setUploadResultNull = () => {
    this.setState({
      uploadResult: null
    });
  };

  setUploadResultSuccess = result => {
    this.setState({
      uploadResult: result
    });
  };

  render() {
    const { onSubmit, onChange } = this;
    const { toggleModal } = this.props;
    const { title, validationErrorMsg, uploadResult } = this.state;
    return (
      <AboveModalContainer ref={this.props.formRef}>
        <div>
          <span>
            {!uploadResult ? (
              <h3 data-testid="header-one">Add a new Playlist</h3>
            ) : (
              <h3 data-testid="header-two">Playlist Successfully Created!</h3>
            )}
            {validationErrorMsg ? (
              <p data-testid="validation-err-msg">{validationErrorMsg}</p>
            ) : null}
          </span>
          <span onClick={toggleModal}>
            <Icon name="close icon" />
          </span>
        </div>
        <Form onSubmit={e => onSubmit(e, title)}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={onChange} />
          <button type="submit" data-testid="upload-submit">
            <Icon name="upload icon" />
            Upload
          </button>
        </Form>
      </AboveModalContainer>
    );
  }
}

// export default VideoUpload;

export default connect(
  state => null,
  { addNewPlaylist }
)(AddPlaylist);
