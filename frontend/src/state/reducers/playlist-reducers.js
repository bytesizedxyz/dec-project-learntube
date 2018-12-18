import {
  RETRIEVE_PLAYLISTS,
  ADD_NEW_PLAYLIST,
  RETRIEVE_PLAYLIST_VIDEOS
} from "../actions/playlist";

const initialState = {
  playlists: {
    "1": {
      title: "Woot"
    }
  },
  playlistUuids: ["1"],
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
