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

const movieDetailsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Type.FETCH_MOVIE_DETAILS_SUCCESS:
      return { ...payload.movie };

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case Type.FETCH_MOVIES_REQUEST:
    case Type.FETCH_MOVIE_DETAILS_REQUEST:
      return true;

    case Type.FETCH_MOVIES_ERROR:
    case Type.FETCH_MOVIES_SUCCESS:
    case Type.FETCH_MOVIE_DETAILS_ERROR:
    case Type.FETCH_MOVIE_DETAILS_SUCCESS:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_MOVIES_REQUEST:
    case Type.FETCH_MOVIE_DETAILS_REQUEST:
      return null;

    case Type.FETCH_MOVIES_ERROR:
    case Type.FETCH_MOVIE_DETAILS_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  trendingMovies: trendingMoviesReducer,
  movieDetails: movieDetailsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
