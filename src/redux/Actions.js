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
  type: "SET_WEATHER",
  payload
});
