import axios from "axios";
import * as services from "./Constants";
import * as actions from "../redux/Actions";

export const getLocation = () => {
  return dispatch => {
    axios
      .get(services.LOCATION_API.url)
      .then(success => {
        dispatch(actions.setSuccessLocation(success.data));
      })
      .catch(error => {
        dispatch(actions.setErrorLocation());
      });
  };
};

export const getArticles = queryParams => {
  return dispatch => {
    axios
      .get(services.HEADLINES_API.url, {
        params: { ...services.HEADLINES_API.queryParams, ...queryParams }
      })
      .then(success => {
        //  throw new Error();
        success.data.searchTerm = "";
        dispatch(actions.setSuccessArticles(success.data));
      })
      .catch(error => {
        dispatch(actions.setErrorArticles());
      });
  };
};

export const searchHeadlines = queryParams => {
  return dispatch => {
    axios
      .get(services.SEARCH_API.url, {
        params: { ...services.SEARCH_API.queryParams, ...queryParams }
      })
      .then(success => {
        success.data.searchTerm = queryParams.q;
        dispatch(actions.setSearchArticles(success.data));
      })
      .catch(error => {
        dispatch(actions.setErrorArticles());
      });
  };
};

export const getWeather = queryParams => {
  return dispatch => {
    axios
      .get(services.WEATHER_API.url, {
        params: { ...services.WEATHER_API.queryParams, ...queryParams }
      })
      .then(success => {
        dispatch(actions.setWeather(success.data));
      });
  };
};

export const getCovidWorldStats = () => {
  return dispatch => {
    axios.get(services.COVID_STATS_WORLD_API.url).then(success => {
      dispatch(actions.setCovidWorldStats(success.data));
    });
  };
};

export const getCovidCountryStats = country => {
  console.log("asdasds");
  return dispatch => {
    axios
      .get(`${services.COVID_STATS_COUNTRY_API.url}${country}`)
      .then(success => {
        dispatch(actions.setCovidCountryStats(success.data));
      });
  };
};
