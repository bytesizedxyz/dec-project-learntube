import {
  RETRIEVE_VIDEOS_FOR_LISTING,
  RETRIEVE_VIDEOS_FOR_DASHBOARD,
} from "../actions/video";

// const initialState = {
//   videos: {
//     "randomuuidstringfrombackend1": {
//       uuid: "randomuuidstringfrombackend1",
//       title: "faketitle1making this super long to see what happens",
//       url: "QaVXaMFc6gk",
//       postedBy: "banana",
//       createdAt: "12/1/2018"
//     },
//     "randomuuidstringfrombackend2": {
//       uuid: "randomuuidstringfrombackend2",
//       title: "faketitle1",
//       url: "QaVXaMFc6gk",
//       postedBy: "banana",
//       createdAt: "12/1/2018"
//     },
//     "randomuuidstringfrombackend3": {
//       uuid: "randomuuidstringfrombackend3",
//       title: "faketitle1",
//       url: "QaVXaMFc6gk",
//       postedBy: "banana",
//       createdAt: "12/1/2018"
//     },
//     "randomuuidstringfrombackend4": {
//       uuid: "randomuuidstringfrombackend4",
//       title: "faketitle1",
//       url: "QaVXaMFc6gk",
//       postedBy: "banana",
//       createdAt: "12/1/2018"
//     },
//     "randomuuidstringfrombackend5": {
//       uuid: "randomuuidstringfrombackend5",
//       title: "faketitle1",
//       url: "QaVXaMFc6gk",
//       postedBy: "banana",
//       createdAt: "12/1/2018"
//     },
//     "randomuuidstringfrombackend6": {
//       uuid: "randomuuidstringfrombackend6",
//       title: "faketitle1",
//       url: "QaVXaMFc6gk",
//       postedBy: "banana",
//       createdAt: "12/1/2018"
//     },
//     "randomuuidstringfrombackend7": {
//       uuid: "randomuuidstringfrombackend7",
//       title: "faketitle1",
//       url: "QaVXaMFc6gk",
//       postedBy: "banana",
//       createdAt: "12/1/2018"
//     },
//     "randomuuidstringfrombackend7": {
//       uuid: "randomuuidstringfrombackend7",
//       title: "faketitle1",
//       url: "QaVXaMFc6gk",
//       postedBy: "banana",
//       createdAt: "12/1/2018"
//     },
//   },
//   videoUuids: ["randomuuidstringfrombackend1", "randomuuidstringfrombackend2", "randomuuidstringfrombackend3", "randomuuidstringfrombackend4", "randomuuidstringfrombackend5", "randomuuidstringfrombackend6", "randomuuidstringfrombackend7"]
// };

const initialState = {
  videos: {},
  videoUuids: []
}


export const videoListingReducer = (state = initialState, action) => {
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type) {
    case RETRIEVE_VIDEOS_FOR_LISTING:
      return {
        ...state,
        videos: { ...state.videos, ...action.payload.videos },
        videoUuids: [...state.videoUuids, ...action.payload.videoUuids]
      };
    case RETRIEVE_VIDEOS_FOR_DASHBOARD:
    default:
      return state;
  }
};
