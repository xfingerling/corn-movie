import axios from "axios";

import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./moviesActions";

export const fetchMovies = () => (dispatch) => {
  dispatch(fetchMoviesRequest());

  axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=20cd267abb960a552b7abbc1653318ee",
    )
    .then(({ data }) => dispatch(fetchMoviesSuccess(data)))
    .catch((error) => dispatch(fetchMoviesError(error)));
};
