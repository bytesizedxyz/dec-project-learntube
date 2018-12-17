import { UPLOAD_VIDEO } from "../actions/upload";

const initialState = {
  logged_in: false,
  title: "",
  url: "",
  posted_by: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_VIDEO:
    default:
      return state;
  }
};
