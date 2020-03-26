const initialState = {
  isLoading: true,
  isSuccess: false,
  articles: [],
  searchTerm: ""
};

export default (state = initialState, action) => {
  if (action.type === "LOAD_ARTICLES_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      articles: action.payload.articles
    };
  } else if (action.type === "SEARCH_ARTICLES_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      articles: action.payload.articles,
      searchTerm: action.payload.searchTerm
    };
  } else if (action.type === "LOAD_ARTICLES_FAILED") {
    return {
      ...state,
      isLoading: false,
      isSuccess: false
    };
  } else {
    return state;
  }
};
