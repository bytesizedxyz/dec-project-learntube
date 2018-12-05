import { LOGIN, SIGNUP, LOGOUT } from "../actions/header-actions";

const initialState = {
  logged_in: false
};

export const authReducer = (state = initialState, action) => {
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type) {
    case SIGNUP:
      return { ...state, logged_in: action.payload.logged_in };
    case LOGIN:
      return { ...state, logged_in: action.payload.logged_in };
    case LOGOUT:
      return { ...state, logged_in: action.payload.logged_in };
    default:
      return state;
  }
};
