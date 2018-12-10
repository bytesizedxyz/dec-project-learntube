import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Form from "../../../shared-components/fun-components/form";
import { Label, Input } from "../../../shared-styles/form-elements";

const Container = styled.div`
  h3 {
    font-size: 3rem;
    font-family: "Bangers", cursive;
  }
`;

class VideoUpload extends Component {
  state = { title: "", url: "", validationErrorMsg: null, uploadResult: null };

  onSubmit = async e => {
    e.preventDefault();
    if (this.verifyValidInput()) {
      const result = await axios.post("/upload");
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
    if (url.length < 9) {
      this.setStateValidationErrorMsg("URL must be at least 9 characters.");
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
    const { title, url, validationErrorMsg, uploadResult } = this.state;
    return (
      <Container>
        {!uploadResult ? (
          <h3 data-testid="header-one">Upload a video</h3>
        ) : (
          <h3 data-testid="header-two">Video Successfully Uploaded!</h3>
        )}
        {validationErrorMsg ? (
          <p data-testid="validation-err-msg">{validationErrorMsg}</p>
        ) : null}
        <Form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={onChange} />
          <label htmlFor="url">URL</label>
          <input id="url" type="text" value={url} onChange={onChange} />
          <button type="submit" data-testid="upload-submit">
            Upload
          </button>
        </Form>
      </Container>
    );
  }
}

export default VideoUpload;
