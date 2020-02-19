import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import roomReducer from "./roomReducer";

export default combineReducers({
  userData: userReducer,
  roomData: roomReducer
});
