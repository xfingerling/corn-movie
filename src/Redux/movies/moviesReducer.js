import { combineReducers } from "redux";
import Type from "../actionType";

const trendingMoviesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_MOVIES_SUCCESS:
      return payload.movies.results;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case Type.FETCH_MOVIES_REQUEST:
      return true;

    case Type.FETCH_MOVIES_ERROR:
    case Type.FETCH_MOVIES_SUCCESS:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_MOVIES_REQUEST:
      return null;

    case Type.FETCH_MOVIES_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  trendingMovies: trendingMoviesReducer,
  loading: loadingReducer,
  error: errorReducer,
});
