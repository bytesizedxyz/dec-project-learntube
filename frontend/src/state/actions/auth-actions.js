/*
 * action types
 */
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const SEARCH_VIDEOS = "SEARCH_VIDEOS";

// redux thunk action creators
export const signup = () => (dispatch, getState) => {
  // axios request to signup

  const payload = { logged_in: true };
  // data for redux store is a boolean flag
  dispatch({ type: LOGOUT, payload });
};

export const login = () => async (dispatch, getState) => {
  // axios request to login
  console.log("THE DISPATCH: ", dispatch);
  const payload = { logged_in: true };
  // data for redux store is a boolean flag
  dispatch({ type: LOGIN, payload });
};

export const logout = () => async (dispatch, getState) => {
  // axios request to logout

  const payload = { logged_in: false };
  // data for redux store is a boolean flag
  dispatch({ type: LOGOUT, payload });
};

//TODO:
//will need Search
