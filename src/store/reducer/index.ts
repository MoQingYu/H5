import { combineReducers } from 'redux';
import commonReducer from "./common";

const appReducer = combineReducers({
  common: commonReducer
});

export default appReducer;