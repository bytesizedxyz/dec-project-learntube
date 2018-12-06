import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth-reducers";
import { videoReducer } from "./reducers/video-listing-reducers";

const globalReduxState = combineReducers({
  authenticationStatus: authReducer,
  videoState: videoReducer
});

const store = createStore(globalReduxState, applyMiddleware(thunk));

export default store;
