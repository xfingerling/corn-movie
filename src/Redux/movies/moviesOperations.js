import * as MovieBD from "../../services/MovieDB-api";

import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} from "./moviesActions";

export const fetchTrendingMovies = () => (dispatch) => {
  dispatch(fetchMoviesRequest());

  MovieBD.fetchTrendingMovies()
    .then(({ data }) => dispatch(fetchMoviesSuccess(data)))
    .catch((error) => dispatch(fetchMoviesError(error)));
};

export const fetchMovieDetails = (id) => (dispatch) => {
  dispatch(fetchMovieDetailsRequest());

  MovieBD.fetchMovieDetails(id)
    .then(({ data }) => dispatch(fetchMovieDetailsSuccess(data)))
    .catch((error) => dispatch(fetchMovieDetailsError(error)));
};
