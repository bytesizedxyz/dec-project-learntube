export const SEARCH_VIDEOS = "SEARCH_VIDEOS";

export const search = () => (dispatch, getState) => {
  const payload = {}; //the data[] };
  // data for redux store is a boolean flag
  dispatch({ SEARCH_VIDEOS, payload });
};
