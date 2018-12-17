import { navigate } from "@reach/router";
import backend from "../apis/backend";

/*
 * action types
 */
export const RETRIEVE_VIDEOS_FOR_LISTING = "RETRIEVE_VIDEOS_FOR_LISTING";
export const RETRIEVE_VIDEOS_FOR_DASHBOARD = "RETRIEVE_VIDEOS_FOR_DASHBOARD";
export const VIEW_VIDEO = "VIEW_VIDEO";

// TEMP DUMMY DATA

// redux thunk action creators
// Perhaps this function can take a number as a range for the videos we'd like to retrieve
// from the backend.
//export const retrieveVideosForListing = () => (dispatch, getState) => {
export const retrieveVideosForListing = () => async dispatch => {
  const response = await backend.get("/videos");
  // console.log("retrieveVideosForListing; ", response.data);
  // call getState to retrieve a video from the redux store using the videoId argument
  // Then normalize the data
  let videoUuids = [];

  //replace videoList with results of an axios request to backend for videos later
  const videos = response.data.reduce((acc, curr, i) => {
    videoUuids.push(curr.uuid);
    acc[curr.uuid] = curr;
    return acc;
  }, {});

  const payload = { videos, videoUuids };
  // data for redux store is a boolean flag
  dispatch({ type: RETRIEVE_VIDEOS_FOR_LISTING, payload });
};

export const retrieveVideo = videoUuid => {
  return async function(dispatch, getState) {
    const response = await backend.get(`videos/${videoUuid}`);
    const payload = {
      currentViewedVideo: response.data
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
