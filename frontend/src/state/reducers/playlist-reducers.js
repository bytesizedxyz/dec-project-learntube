import {
  RETRIEVE_PLAYLISTS,
  ADD_NEW_PLAYLIST,
  RETRIEVE_PLAYLIST_VIDEOS
} from "../actions/playlist";

// State used for local dev
// playlists: {
//   "1": {
//     title: "Woot"
//   },
//   "2": {
//     title: "Boom"
//   },
//   "3": {
//     title: "Poof"
//   },
//   "4": {
//     title: "Poof"
//   },
//   "5": {
//     title: "Poof"
//   },
//   "6": {
//     title: "Poof"
//   },
//   "7": {
//     title: "Poof"
//   },
//   "8": {
//     title: "Poof"
//   }
// },
// playlistUuids: ["1", "2", "3", "4", "5", "6", "7", "8"],

const initialState = {
  playlists: {},
  playlistUuids: [],
  videos: {},
  videoUuids: []
};

const updatePlaylistStateObj = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    playlists: {
      ...state.playlists,
      ...payload.playlists
    },
    playlistUuids: [...state.playlistUuids, ...payload.playlistUuids]
  };
};

export const playlistReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case RETRIEVE_PLAYLISTS:
      return updatePlaylistStateObj(state, action);
    case ADD_NEW_PLAYLIST:
      return updatePlaylistStateObj(state, action);
    case RETRIEVE_PLAYLIST_VIDEOS:
      return {
        ...state,
        videos: {
          ...state.videos,
          ...action.payload.videos
        },
        videoUuids: [...state.videoUuids, ...action.payload.videoUuids]
      };
    default:
      return state;
  }
};
