import axios from "axios";
import { LOCATION_API, HEADLINES_API, WEATHER_API } from "./Constants";

export const getLocation = () => axios.get(LOCATION_API.url);

export const getHeadlines = queryParams =>
  axios.get(HEADLINES_API.url, {
    params: { ...HEADLINES_API.queryParams, ...queryParams }
  });

export const getWeather = queryParams =>
  axios.get(WEATHER_API.url, {
    params: { ...WEATHER_API.queryParams, ...queryParams }
  });
