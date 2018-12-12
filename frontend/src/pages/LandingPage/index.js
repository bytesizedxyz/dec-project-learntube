import React from "react";
import {viewVideo} from "../../state/actions/video";
import {connect} from "react-redux";

const index = ({viewVideo}) => {
  return (
    <main>
      <h1>Landing Page</h1>
      <p>
      <button onFocus={(e)=>{console.log("buton clicked");viewVideo("QaVXaMFc6gk")}}>watch a video</button>
      </p>
    </main>
  );
};

export default connect(state => state, {viewVideo})(index);
