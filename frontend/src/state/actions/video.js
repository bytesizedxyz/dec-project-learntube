import { navigate } from "@reach/router";
import backend from "../apis/backend";

export const RETRIEVE_VIDEOS_FOR_LISTING = "RETRIEVE_VIDEOS_FOR_LISTING";
export const RETRIEVE_VIDEOS_FOR_DASHBOARD = "RETRIEVE_VIDEOS_FOR_DASHBOARD";
export const VIEW_VIDEO = "VIEW_VIDEO";

// Slicing off the last 11 characters from youtube URL which is the youtube id.
// We only need the youtube id, not the entire URL.
const updateVideo = video =>
  Object.assign({}, video, {
    youtube_id: video.url.slice(-11)
  });

export const retrieveVideosForListing = () => async dispatch => {
  const response = await backend.get("/videos");

  // Creating an array of VideoUuids to correspond with array of video objects
  // that we are getting from the backend API in order to have O(1) lookup. (Big O Notation Concept)
  let videoUuids = [];
  const videos = response.data.reduce((acc, curr, i) => {
    videoUuids.push(curr.uuid);
    acc[curr.uuid] = updateVideo(curr);
    return acc;
  }, {});

  const payload = { videos, videoUuids };

  dispatch({ type: RETRIEVE_VIDEOS_FOR_LISTING, payload });
};

export const retrieveVideo = videoUuid => async dispatch => {
  const response = await backend.get(`videos/${videoUuid}`);
  const payload = {
    currentViewedVideo: updateVideo(response.data)
  };
  dispatch({ type: VIEW_VIDEO, payload });
};

export const viewVideo = videoUuid => async (dispatch, getState) => {
  await dispatch(retrieveVideo(videoUuid));
  navigate(`/videos/${videoUuid}`, { state: getState() });
};
