import location from "./locationReducer";
import headlines from "./headlinesReducer";
import weather from "./weatherReducer";
import { combineReducers } from "redux";

export default combineReducers({
  location,
  headlines,
  weather
});
