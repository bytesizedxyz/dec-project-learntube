/*
 * action types
 */
export const RETRIEVE_VIDEOS_FOR_LISTING = "RETRIEVE_VIDEOS_FOR_LISTING";
export const RETRIEVE_VIDEOS_FOR_DASHBOARD = "RETRIEVE_VIDEOS_FOR_DASHBOARD";


// TEMP DUMMY DATA
const videoList = [
  { uuid:"QaVXaMFc6gk", url:"https://www.youtube.com/watch?v=QaVXaMFc6gk", title:"CHARLI XCX ft. Troye Sivan - 1999 | Kyle Hanagami" },
  { uuid:"20vDj6oQ-pE", url:"https://www.youtube.com/watch?v=20vDj6oQ-pE", title:"Backstreet Boys - Chances (Behind The Scenes)" },
  { uuid:"xOMmK9iFuE4", url:"https://www.youtube.com/watch?v=xOMmK9iFuE4", title:"Thirsty Gets Lucious Into The Poker Game | Season 5 Ep. 6 | EMPIRE" },
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
    videoIds.push(curr.uuid);
    acc[curr.uuid] = curr;
    return acc;
  }, {});

  console.log("THE NORMALIZED VIDEOS: ", normalizedVideos);

  const payload = { videos: normalizedVideos, videoIds };
  // data for redux store is a boolean flag
  dispatch({ type: RETRIEVE_VIDEOS_FOR_LISTING, payload });
};


