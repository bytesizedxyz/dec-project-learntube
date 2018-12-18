import axios from 'axios';
import api from '../apis/backend';
/*
 * action types
 */
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";


// redux thunk action creators
export const signup = () => (dispatch, getState) => {
  // axios request to signup

  const payload = {
    logged_in: true
  };
  // data for redux store is a boolean flag
  dispatch({
    type: SIGNUP,
    payload
  });
};

export const login = (username, password) => async (dispatch, getState) => {
  console.log(username, password)
  // axios request to login
  //console.log("THE DISPATCH: ", dispatch);
  const blah = await api.post("/users/sign_in",{username, password})

  const {
    token,
    user
  } = blah.data

  localStorage.setItem("token", token)
  const payload = {
    logged_in: true,
    username: user.username,
    email: user.email
  };
  dispatch({
    type: LOGIN,
    payload
  }); // data for redux store is a boolean flag

};

export const logout = () => async (dispatch, getState) => {
  // axios request to logout
  localStorage.removeItem("token");
  const payload = {
    logged_in: false
  };
  // data for redux store is a boolean flag
  dispatch({
    type: LOGOUT,
    payload
  });
};

//TODO:
//will need Search