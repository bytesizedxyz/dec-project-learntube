import {
    VIEW_VIDEO
  } from "../actions/video-actions";
  
  const initialState = {
    currentViewedVideo: null
  };
  
  export const videoReducer = (state = initialState, action) => {

    switch (action.type) {
      case VIEW_VIDEO:
        return { ...state, currentViewedVideo: action.payload.video };
      default:
        return state;
    }
  };
  