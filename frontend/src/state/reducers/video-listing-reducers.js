import {
  RETRIEVE_VIDEOS_FOR_LISTING,
  RETRIEVE_VIDEOS_FOR_DASHBOARD,
} from "../actions/video-listing-actions";
import VIEW_VIDEO from "../actions/video";

const initialState = {
  videos: {},
  videoIds: []
};

export const videoListingReducer = (state = initialState, action) => {
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type) {
    case RETRIEVE_VIDEOS_FOR_LISTING:
      return {
        ...state,
        videos: { ...state.videos, ...action.payload.videos },
        videoIds: [...state.videoIds, ...action.payload.videoIds]
      };
    case RETRIEVE_VIDEOS_FOR_DASHBOARD:
    default:
      return state;
  }
};
