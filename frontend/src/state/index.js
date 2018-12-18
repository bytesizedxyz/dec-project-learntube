import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

<<<<<<< HEAD
import { videoListingReducer } from "./reducers/video-listing-reducers";
import { videoReducer } from "./reducers/video-reducers";
import { authReducer } from "./reducers/auth-reducers";
import { playlistReducer } from "./reducers/playlist-reducers";
=======
import { videoListingReducer } from './reducers/video-listing-reducers';
import { videoReducer } from './reducers/video-reducers';
import { authReducer } from './reducers/auth-reducers';
>>>>>>> fa1a26832e9d548f46011b3ffa8d4b39e4918e82

const globalReduxState = combineReducers({
  authenticationStatus: authReducer,
  videoListingState: videoListingReducer,
  videoState: videoReducer,
  playlistState: playlistReducer
});

const store = createStore(globalReduxState, applyMiddleware(thunk));

export default store;
