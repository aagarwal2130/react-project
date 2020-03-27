import location from "./locationReducer";
import headlines from "./headlinesReducer";
import weather from "./weatherReducer";
import covidWorld from "./covidWorldReducer";
import covidCountry from "./covidCountryReducer";

import { combineReducers } from "redux";

export default combineReducers({
  location,
  headlines,
  weather,
  covidWorld,
  covidCountry
});
