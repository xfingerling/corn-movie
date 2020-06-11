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
