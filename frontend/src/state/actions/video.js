import { navigate } from "@reach/router"

/*
 * action types
 */
export const RETRIEVE_VIDEOS_FOR_LISTING = "RETRIEVE_VIDEOS_FOR_LISTING";
export const RETRIEVE_VIDEOS_FOR_DASHBOARD = "RETRIEVE_VIDEOS_FOR_DASHBOARD";
export const VIEW_VIDEO = "VIEW_VIDEO";

// TEMP DUMMY DATA
const videoList = [
  { videoId:"QaVXaMFc6gk", uuid:"345744", url:"https://www.youtube.com/watch?v=QaVXaMFc6gk", title:"CHARLI XCX ft. Troye Sivan - 1999 | Kyle Hanagami" },
  { videoId:"20vDj6oQ-pE",uuid:"53734336", url:"https://www.youtube.com/watch?v=20vDj6oQ-pE", title:"Backstreet Boys - Chances (Behind The Scenes)" },
  { videoId:"xOMmK9iFuE4",uuid:"9789758967", url:"https://www.youtube.com/watch?v=xOMmK9iFuE4", title:"Thirsty Gets Lucious Into The Poker Game | Season 5 Ep. 6 | EMPIRE" },
];

// redux thunk action creators
// Perhaps this function can take a number as a range for the videos we'd like to retrieve
// from the backend.
export const retrieveVideosForListing = () => (dispatch, getState) => {
  // call getState to retrieve a video from the redux store using the videoId argument
  // Then normalize the data
  let videoIds = [];
  //replace videoList with results of an axios request to backend for videos later
  const videos = videoList.reduce((acc, curr, i) => {
    videoIds.push(curr.videoId);
    acc[curr.videoId] = curr;
    return acc;
  }, {});

  const payload = { videos, videoIds };
  // data for redux store is a boolean flag
  dispatch({ type: RETRIEVE_VIDEOS_FOR_LISTING, payload });
};

export const viewVideo = videoId => (dispatch, getState) => {
  // call getState to retrieve a video from the redux store using the videoId argument
  //let retrievedVideo = getState().videoList[videoId];
  let retrievedVideo;
  if(getState().videoListingState.videos[videoId]){
    retrievedVideo = getState().videoListingState.videos[videoId];
  }else{
    //simply handle unavailable/invalid videos in production
    retrievedVideo = { uuid:"QaVXaMFc6gk", url:"https://www.youtube.com/watch?v=QaVXaMFc6gk", title:"CHARLI XCX ft. Troye Sivan - 1999 | Kyle Hanagami" };
  }
   
  const payload = { currentViewedVideo: retrievedVideo };
  console.log(payload);

         dispatch({ type: VIEW_VIDEO, payload });   

        navigate("/play-video", {state:getState()});


};

