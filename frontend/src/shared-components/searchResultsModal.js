import React, { Component } from "react";
import { AboveModalContainer } from "../shared-styles";
import Icon from "../resources/icon";
import { navigate } from "@reach/router";

const SearchResultsModal = props => {
  const redirect = id => {
    props.toggleModal();
    return navigate(`/videos/${id}`);
  };
  const { searchResults } = props;
  return (
    <AboveModalContainer
      ref={props.formRef}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40rem",
        height: "30rem",
        background: "lime",
        margin: "0px 40px 140px 40px",
        maxWidth: "100%"
      }}>
      <span onClick={props.toggleModal}>
        <Icon name="close icon" />
      </span>
      {searchResults.map(result => (
        <div onClick={() => redirect(result.uuid)} key={result.uuid}>
          <img
            style={{
              width: "100%",
              height: "80%",
              background: "blue"
            }}
            src={`https://img.youtube.com/vi/$.searchResults.youTubeId}/0.jpg`}
          />
          <div
            style={{
              width: "100%",
              height: "30%",
              background: "blue"
            }}>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                textOverflow: "hidden",
                color: "white",
                marginTop: "0.2rem",
                marginBottom: "0.2rem"
              }}>
              {result.title}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "normal",
                color: "white",
                marginTop: "0.2rem",
                marginBottom: "0.2rem"
              }}>
              {result.url}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "normal",
                color: "white",
                marginTop: "0.2rem",
                marginBottom: "0.2rem"
              }}>
              {result.username}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "normal",
                color: "white",
                marginTop: "0.2rem",
                marginBottom: "0.2rem"
              }}>
              {result.watch_count}
            </p>
          </div>
        </div>
      ))}
    </AboveModalContainer>
  );
};

export default SearchResultsModal;
