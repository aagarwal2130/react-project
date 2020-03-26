const intitalState = {
  isSuccess: false,
  country: "",
  city: ""
};

export default (state = intitalState, action) => {
  if (action.type === "LOCATION_SUCCESS") {
    return {
      ...state,
      isSuccess: true,
      country: action.payload.countryCode,
      city: action.payload.city
    };
  } else if (action.type === "LOCATION_ERROR") {
    return {
      ...state,
      isSuccess: true,
      country: "IN",
      city: "Bengaluru"
    };
  } else {
    return state;
  }
};
