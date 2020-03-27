export const LOCATION_API = {
  url: "http://ip-api.com/json",
  queryParams: {}
};

export const HEADLINES_API = {
  url: "http://newsapi.org/v2/top-headlines",
  queryParams: {
    apiKey: "f09f7188d95c43fca275d8172e8cf927"
  }
};

export const SEARCH_API = {
  url: "http://newsapi.org/v2/everything",
  queryParams: {
    apiKey: "f09f7188d95c43fca275d8172e8cf927"
  }
};

export const WEATHER_API = {
  url: "http://api.openweathermap.org/data/2.5/weather",
  queryParams: {
    appid: "411b9bf1a87dcc57bce930bb7f460be2"
  }
};

export const COVID_STATS_WORLD_API = {
  url: "https://covid19.mathdro.id/api",
  queryParams: {}
};

export const COVID_STATS_COUNTRY_API = {
  url: "https://covid19.mathdro.id/api/countries/",
  queryParams: {}
};
