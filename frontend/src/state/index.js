import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { videoListingReducer } from "./reducers/video-listing-reducers";
import { videoReducer } from "./reducers/video-reducers";
import { authReducer } from "./reducers/auth-reducers";
import { playlistReducer } from "./reducers/playlist-reducers";

const globalReduxState = combineReducers({
  authenticationStatus: authReducer,
  videoListingState: videoListingReducer,
  videoState: videoReducer,
  playlistState: playlistReducer
});

const store = createStore(globalReduxState, applyMiddleware(thunk));

export default store;
