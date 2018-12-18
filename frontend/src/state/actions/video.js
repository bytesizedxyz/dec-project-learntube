import { navigate } from "@reach/router";
import backend from "../apis/backend";

/*
 * action types
 */
export const RETRIEVE_VIDEOS_FOR_LISTING = "RETRIEVE_VIDEOS_FOR_LISTING";
export const RETRIEVE_VIDEOS_FOR_DASHBOARD = "RETRIEVE_VIDEOS_FOR_DASHBOARD";
export const VIEW_VIDEO = "VIEW_VIDEO";

// TEMP DUMMY DATA
const videoList = [
  {
    uuid: "345744",
    url: "QaVXaMFc6gk",
    title: "CHARLI XCX ft. Troye Sivan - 1999 | Kyle Hanagami"
  },
  {
    uuid: "53734336",
    url: "20vDj6oQ-pE",
    title: "Backstreet Boys - Chances (Behind The Scenes)"
  },
  {
    uuid: "9789758967",
    url: "xOMmK9iFuE4",
    title: "Thirsty Gets Lucious Into The Poker Game | Season 5 Ep. 6 | EMPIRE"
  }
];

// redux thunk action creators
// Perhaps this function can take a number as a range for the videos we'd like to retrieve
// from the backend.
//export const retrieveVideosForListing = () => (dispatch, getState) => {
const updateVideo = video =>
  Object.assign({}, video, {
    youtube_id: video.url.match("([^/]+)/?$")[1]
  });

export const retrieveVideosForListing = () => async (dispatch, getState) => {
  const response = await backend.get("/videos");
  // console.log("retrieveVideosForListing; ", response.data);
  // call getState to retrieve a video from the redux store using the videoId argument
  // Then normalize the data
  let videoUuids = [];

  const videos = response.data.reduce((acc, curr, i) => {
    videoUuids.push(curr.uuid);
    acc[curr.uuid] = updateVideo(curr);
    return acc;
  }, {});

  const payload = { videos, videoUuids };
  // data for redux store is a boolean flag
  dispatch({ type: RETRIEVE_VIDEOS_FOR_LISTING, payload });
  console.log(
    "STATE AFTER VIDEOS PLACED ON STATE: ",
    getState().videoListingState
  );
};

// export const viewVideo = videoUuid => (dispatch, getState) => {
//   // call getState to retrieve a video from the redux store using the videoUuid argument
//   //console.log("THE VIDEO UUID IN viewVideo: "+videoUuid);
//   const reduxState = getState().videoListingState.videos;
//   console.log("REDUX STATE: ", reduxState);

//   const retrievedVideo = getState().videoListingState.videos[videoUuid];
//   console.log("THE RETRIEVED VIDEO FROM REDUX STATE: ", retrievedVideo);
//   // How we'll use this in the video view component
//   // https://www.youtube.com/watch?v= + url

//   const payload = { currentViewedVideo: retrievedVideo };

//   dispatch({ type: VIEW_VIDEO, payload });

//   navigate("/play-video");
// }

export const retrieveVideo = videoUuid => {
  return async function(dispatch, getState) {
    const response = await backend.get(`videos/${videoUuid}`);
    const payload = {
      currentViewedVideo: updateVideo(response.data)
    };
    dispatch({ type: VIEW_VIDEO, payload });
  };
};

//export const viewVideo = videoUuid => (dispatch, getState) => {
//ES5 way:
export const viewVideo = videoUuid => {
  return async function(dispatch, getState) {
    await dispatch(retrieveVideo(videoUuid));
    navigate(`/videos/${videoUuid}`, { state: getState() });
  };
};
