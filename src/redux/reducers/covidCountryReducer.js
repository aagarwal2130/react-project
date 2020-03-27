const initialState = {
  isSuccess: false,
  confirmed: "",
  recovered: "",
  deaths: "",
  lastUpdated: ""
};

export default (state = initialState, action) => {
  if (action.type === "COVID_COUNTRY_STATS_SUCCESS") {
    return {
      ...state,
      isSuccess: true,
      confirmed: action.payload.confirmed.value,
      recovered: action.payload.recovered.value,
      deaths: action.payload.deaths.value,
      lastUpdated: action.payload.lastUpdate
    };
  } else {
    return state;
  }
};
