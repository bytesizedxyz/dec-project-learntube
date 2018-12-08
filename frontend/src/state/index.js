import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/header-reducers";
import { videoListingReducer } from "./reducers/video-listing-reducers";
import { videoReducer } from "./reducers/video-reducers";

const globalReduxState = combineReducers({
  authenticationStatus: authReducer,
  videoListingState: videoListingReducer,
  videoState: videoReducer
});

const store = createStore(globalReduxState, applyMiddleware(thunk));

export default store;
