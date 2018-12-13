import React from "react";
import Youtube from "react-youtube";
import {connect} from "react-redux";
import styled from "styled-components"

const VideoPage = ({videoState}) => {
   
    const {videoUuid, title, url} = videoState.currentViewedVideo;
    const Main = styled.div`
    display:flex;
    div{
        width:50%;
    }
    `
    return (
        <Main>
            <div>
            <h1>{title}</h1>
            <Youtube
            opts={{height: '390',
            width: '400'}}
            videoId={url}
            />
            </div>
            <div>
            suggested videos column here
            </div>
        </Main>
    );
};

export default connect(state => state)(VideoPage);
