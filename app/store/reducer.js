import { combineReducers } from "@reduxjs/toolkit";
import navReducer from "./nav";

export default combineReducers({
  nav: navReducer,
});
