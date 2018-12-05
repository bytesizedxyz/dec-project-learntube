import { combineReducers } from "redux";
​import { authReducer } from "../reducers/header-reducers";

const globalReduxState = combineReducers({
  authenticationStatus: authReducer,
})

export default globalReduxState;