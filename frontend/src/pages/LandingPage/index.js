import React from "react";
import { viewVideo } from "../../state/actions/video";
import { connect } from "react-redux";
import Videos from "../../shared-components/video-list/videos";

const index = ({ viewVideo }) => {
  return (
    <main>
      <h1>Landing Page</h1>
      <Videos />
    </main>
  );
};

export default connect(
  state => state,
  { viewVideo }
)(index);
