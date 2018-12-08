import React from "react";
import Youtube from "react-youtube";
import {connect} from "react-redux";
const VideoPage = props => {
    const {state} = props.location;
    const {id, title} = state.videoState.currentViewedVideo;
    return (
        <main>
            <h1>{title} </h1>
            <Youtube
            videoId={id}
            />
        </main>
    );
};

export default connect(state => state)(VideoPage);
