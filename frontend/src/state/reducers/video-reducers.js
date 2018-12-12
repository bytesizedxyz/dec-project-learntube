import {
    VIEW_VIDEO
  } from "../actions/video";
  
  const initialState = {
    currentViewedVideo: null
  };
  
  export const videoReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case VIEW_VIDEO:
        return { ...state, currentViewedVideo: action.payload.currentViewedVideo };
      default:
        return state;
    }
  };
  