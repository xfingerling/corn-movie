import Type from "../actionType";

export const fetchMoviesRequest = () => ({
  type: Type.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: Type.FETCH_MOVIES_SUCCESS,
  payload: {
    movies,
  },
});

export const fetchMoviesError = (error) => ({
  type: Type.FETCH_MOVIES_ERROR,
  payload: {
    error,
  },
});

export const fetchMovieDetailsRequest = () => ({
  type: Type.FETCH_MOVIE_DETAILS_REQUEST,
});

export const fetchMovieDetailsSuccess = (movie) => ({
  type: Type.FETCH_MOVIE_DETAILS_SUCCESS,
  payload: {
    movie,
  },
});

export const fetchMovieDetailsError = (error) => ({
  type: Type.FETCH_MOVIE_DETAILS_ERROR,
  payload: {
    error,
  },
});
