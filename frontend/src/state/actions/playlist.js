import API from "../api";

/*
 * action types
 */
export const RETRIEVE_PLAYLISTS = "RETRIEVE_PLAYLISTS";
export const RETRIEVE_PLAYLIST_VIDEOS = "RETRIEVE_PLAYLIST_VIDEOS";
export const ADD_NEW_PLAYLIST = "ADD_NEW_PLAYLIST";

const normalizeData = resource => {
  let itemUuids = [];

  const items = resource.reduce((acc, curr, i) => {
    itemUuids.push(curr.uuid);
    acc[curr.uuid] = curr;
    return acc;
  }, {});

  return { items, itemUuids };
};

// redux thunk action creators
export const retrievePlaylists = uuid => (dispatch, getState) => {
  const playlistList = API.get(`playlists/all/${uuid}`);

  const { items, itemUuids } = normalizeData(playlistList);
  const payload = { playlists: items, playlistUuids: itemUuids };

  dispatch({ type: RETRIEVE_PLAYLISTS, payload });
};

export const addNewPlaylist = title => async (dispatch, getState) => {
  // API request should return shape of:
  // {
  //   uuid: String
  //   title: String
  //   user_uuid: String
  // }
  const postData = { title };
  const newPlaylist = await API.post(`/playlists/playlist`, postData);
  const playlistData = {
    [newPlaylist.uuid]: newPlaylist
  };
  const payload = {
    playlists: playlistData,
    playlistUuids: [newPlaylist.uuid]
  };
  dispatch({ type: ADD_NEW_PLAYLIST, payload });
  return newPlaylist;
};

export const retrievePlaylistVideos = uuid => async (dispatch, getState) => {
  // API request should return shape of:
  // an array of videos
  const playlistVideos = await API.get(`/playlists/${uuid}`);

  const { items, itemUuids } = normalizeData(playlistVideos);
  const payload = { videos: items, videoUuids: itemUuids };

  dispatch({ type: RETRIEVE_PLAYLIST_VIDEOS, payload });
};

export const addVideoToPlaylist = data => async (dispatch, getState) => {
  // data to be posted to add a video to playlist
  // (which should be obtained by the following user actions:
  // on video view page
  // -> the user may click an add to playlist button (at which point we add the videoUuid to local state)
  // -> upon clicking the add to playlist button, a modal will appear,
  //    with a list of all available playlists which the user may decide
  //    to add the video to.
  // -> once the user clicks on one of the available playlists, that playlistUuid will be obtained via the
  //    event.target.id and we'll immediately call this action creator with
  //    addVideoToPlaylist({ video_uuid, playlist_uuid })
  // )
  // should be in shape of:
  // {
  //   "playlist_uuid": "957e771a-2639-44e7-a838-00b9aa1cb9f6",
  //   "video_uuid": "f026af75-5104-42d5-9a00-14a102b6fe6b"
  // }
  const addedVideo = await API.post(`/playlists/playlist_video`, data);
  return "Video Successfully added to playlist.";
};
