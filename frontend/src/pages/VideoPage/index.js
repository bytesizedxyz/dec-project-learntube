import React from "react";
import Youtube from "react-youtube";
import {connect} from "react-redux";
import store from "../../state";
import styled from "styled-components"
const VideoPage = () => {
    const {getState} = store;
    console.log(getState());    
    const {uuid, title} = getState().videoState.currentViewedVideo;

    return (
        <main>
            <h1>{title} </h1>
            <Youtube
            videoId={uuid}
            />
        </main>
    );
};

export default connect(state => state)(VideoPage);
