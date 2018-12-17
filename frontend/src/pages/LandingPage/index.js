import React from "react";
import { viewVideo } from "../../state/actions/video";
import { connect } from "react-redux";
import Videos from "../../shared-components/video-list/videos";

const index = ({ viewVideo }) => {
  return (
    <main>
<<<<<<< HEAD
      <h1>Landing Page</h1>
=======
>>>>>>> 29c1d1b95a433fc6acba693036d28c23fc0843a9
      <Videos />
    </main>
  );
};

export default connect(
  state => state,
  { viewVideo }
)(index);
