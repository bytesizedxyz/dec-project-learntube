/*
 * action types
 */
export const RETRIEVE_VIDEOS_FOR_LISTING = "RETRIEVE_VIDEOS_FOR_LISTING";
export const RETRIEVE_VIDEOS_FOR_DASHBOARD = "RETRIEVE_VIDEOS_FOR_DASHBOARD";
export const VIEW_VIDEO = "VIEW_VIDEO";

// TEMP DUMMY DATA
const videoList = [
  { uuid: "1234", title: "faketitle1", url: "youtube.com" },
  { uuid: "5678", title: "faketitle2", url: "youtube.com" },
  { uuid: "9101112", title: "faketitle3", url: "youtube.com" }
];

// redux thunk action creators
// Perhaps this function can take a number as a range for the videos we'd like to retrieve
// from the backend.
export const retrieveVideosForListing = () => (dispatch, getState) => {
  // call getState to retrieve a video from the redux store using the videoId argument
  // Then normalize the data
  let videoIds;
  const normalizedVideos = videoList.reduce((acc, curr, i) => {
    // This ideally should be the video uuid from backend in the future
    videoIds.push(i);
    acc[i] = curr;
    return acc;
  }, {});

  console.log("THE NORMALIZED VIDEOS: ", normalizedVideos);

  const payload = { videos: normalizedVideos, videoIds };
  // data for redux store is a boolean flag
  dispatch({ type: RETRIEVE_VIDEOS_FOR_LISTING, payload });
};

export const viewVideo = videoId => (dispatch, getState) => {
  // call getState to retrieve a video from the redux store using the videoId argument
  let retrievedVideo = videoList[videoId];
  const payload = { video: retrievedVideo };

  // data for redux store is a boolean flag
  dispatch({ type: VIEW_VIDEO, payload });
};
