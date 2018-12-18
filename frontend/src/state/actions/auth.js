import axios from 'axios';
/*
 * action types
 */
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";


// redux thunk action creators
export const signup = () => (dispatch, getState) => {
  // axios request to signup

  const payload = { logged_in: true };
  // data for redux store is a boolean flag
  dispatch({ type: LOGOUT, payload });
};

export const login = (username, password) => async (dispatch, getState) => {
      console.log(username, password)
      // axios request to login
      //console.log("THE DISPATCH: ", dispatch);
      const blah = await axios.post(`https://dry-river-42897.herokuapp.com/users/sign_in`, {username, password})
      const { token, user } = blah.data
      
        localStorage.setItem("token", token)
        const payload = { 
          logged_in: true,
          username: user.username,
          email: user.email
        };
        dispatch({ type: LOGIN, payload });console.log(blah) // data for redux store is a boolean flag
  
};

export const logout = () => async (dispatch, getState) => {
  // axios request to logout

  const payload = { logged_in: false };
  // data for redux store is a boolean flag
  dispatch({ type: LOGOUT, payload });
};

//TODO:
//will need Search
