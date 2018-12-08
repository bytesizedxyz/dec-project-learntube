
​

/*
 * action types
 */
​
export const VIEW_VIDEO = 'VIEW_VIDEO';
/*
 * action creators
 */

//thunked actions
export const viewVideo = (video_id) => (dispatch, getState) => {
  // getState should return redux global state
  // const video = getState()
  // axios request to signup

  const payload = { current_video: true }
  // data for redux store is a boolean flag
  dispatch({ type: VIEW_VIDEO, payload });
}
