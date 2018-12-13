import { UPLOAD_VIDEO } from "../actions/video-upload-actions";


const initialState = {
  logged_in: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_VIDEO:
    default:
      return state;
  }
};
