import { combineReducers, createStore } from 'redux';
import themeReducer  from "./homeReducer";

const appReducer = combineReducers({
  themeReducer
});

export default appReducer;