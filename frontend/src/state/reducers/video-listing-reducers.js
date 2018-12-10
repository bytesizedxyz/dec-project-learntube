import {
  RETRIEVE_VIDEOS_FOR_LISTING,
  RETRIEVE_VIDEOS_FOR_DASHBOARD,
  VIEW_VIDEO
} from "../actions/video-listing-actions";

const initialState = {
  // Will be an object containing the video details
  // after the user clicks on a video from the video-listing component
  currentViewedVideo: null,
  videos: {},
  videoIds: []
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_VIDEOS_FOR_LISTING:
      return {
        ...state,
        videos: { ...state.videos, ...action.payload.videos },
        videoIds: [...state.videoIds, ...action.payload.videoIds]
      };
    case RETRIEVE_VIDEOS_FOR_DASHBOARD:
      return {};
    case VIEW_VIDEO:
      return { ...state, currentViewedVideo: action.payload.video };
    default:
      return state;
  }
};
