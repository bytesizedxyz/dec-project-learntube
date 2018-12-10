import { navigate } from "@reach/router"
export const VIEW_VIDEO = "VIEW_VIDEO";
const dummyData = {
  QaVXaMFc6gk:{
    uuid:"QaVXaMFc6gk", title:"CHARLI XCX ft. Troye Sivan - 1999 | Kyle Hanagami"
  }
}
export const viewVideo = videoId => (dispatch, getState) => {
    // call getState to retrieve a video from the redux store using the videoId argument
    //let retrievedVideo = getState().videoList[videoId];
    let retrievedVideo = dummyData[videoId];
    const payload = { video: retrievedVideo };
    console.log(getState());
    // data for redux store is a boolean flag
           dispatch({ type: VIEW_VIDEO, payload });   

          navigate("/play-video", {state:getState()});


  };