import { VIEW_VIDEO } from "../actions/video";

const initialState = {
  currentViewedVideo: null
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_VIDEO:
      return { currentViewedVideo: action.payload.currentViewedVideo };
    default:
      return state;
  }
};
