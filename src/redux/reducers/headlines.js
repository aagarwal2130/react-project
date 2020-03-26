const initialState = {
  isLoading: true,
  articlesLoaded: false,
  articlesSearched: false,
  isInvalidSearch: false,
  articles: [],
  searchTerm: ""
};

export default (state = initialState, action) => {
  if (action.type === "LOAD_ARTICLES_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      articlesLoaded: true,
      articlesSearched: false,
      articles: action.payload.articles
    };
  } else if (action.type === "SEARCH_ARTICLES_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      articlesLoaded: true,
      articlesSearched: true,
      articles: action.payload.articles,
      searchTerm: action.payload.searchTerm
    };
  } else if (action.type === "LOAD_ARTICLES_FAILED") {
    return {
      ...state,
      isLoading: false,
      articlesLoaded: false,
      articlesSearched: false
    };
  } else {
    return state;
  }
};
