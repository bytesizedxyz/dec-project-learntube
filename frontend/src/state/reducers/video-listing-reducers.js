import {
  RETRIEVE_VIDEOS_FOR_LISTING,
  RETRIEVE_VIDEOS_FOR_DASHBOARD,
} from "../actions/video";

const initialState = {
  videos: {
    "randomuuidstringfrombackend1": {
      uuid: "randomuuidstringfrombackend1",
      title: "faketitle1",
      url: "QaVXaMFc6gk",
      postedBy: "banana",
      createdAt: "12/1/2018"
    },
  },
  videoUuids: ["randomuuidstringfrombackend1"]
};


export const videoListingReducer = (state = initialState, action) => {
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type) {
    case RETRIEVE_VIDEOS_FOR_LISTING:
      return {
        ...state,
        videos: { ...state.videos, ...action.payload.videos },
        videoUuids: [...state.videoIds, ...action.payload.videoUuids]
      };
    case RETRIEVE_VIDEOS_FOR_DASHBOARD:
    default:
      return state;
  }
};
