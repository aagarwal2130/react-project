const initialState = {
  isSuccess: false,
  temperature: "",
  condition: "",
  icon: ""
};

export default (state = initialState, action) => {
  if (action.type === "WEATHER_SUCCESS") {
    return {
      ...state,
      isSuccess: true,
      temperature: action.payload.main.temp,
      condition: action.payload.weather[0].main,
      icon: action.payload.weather[0].icon
    };
  } else {
    return state;
  }
};
