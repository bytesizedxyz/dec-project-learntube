import React from "react";
import {viewVideo} from "../../state/actions/video";
import {connect} from "react-redux";

const index = ({viewVideo}) => {
  return (
    <main>
      <h1>Landing Page</h1>
      <button onClick={()=>viewVideo("QaVXaMFc6gk")}>watch a video</button>
    </main>
  );
};

export default connect(state => state, {viewVideo})(index);
