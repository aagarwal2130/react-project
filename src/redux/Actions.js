export const setSuccessLocation = payload => ({
  type: "LOCATION_SUCCESS",
  payload
});

export const setErrorLocation = () => ({
  type: "LOCATION_ERROR"
});

export const setSuccessArticles = payload => ({
  type: "LOAD_ARTICLES_SUCCESS",
  payload
});

export const setErrorArticles = () => ({
  type: "LOAD_ARTICLES_FAILED"
});

export const setSearchArticles = payload => ({
  type: "SEARCH_ARTICLES_SUCCESS",
  payload
});

export const setWeather = payload => ({
  type: "WEATHER_SUCCESS",
  payload
});

export const setCovidWorldStats = payload => ({
  type: "COVID_WORLD_STATS_SUCCESS",
  payload
});

export const setCovidCountryStats = payload => ({
  type: "COVID_COUNTRY_STATS_SUCCESS",
  payload
});
