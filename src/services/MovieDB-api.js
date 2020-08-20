import axios from "axios";

const API_KEY = "20cd267abb960a552b7abbc1653318ee";
const BASE_URL = "https://api.themoviedb.org/3/";

export function fetchTrendingMovies() {
  return axios.get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
}

export function fetchMovieDetails(id) {
  return axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits`,
  );
}

// https://api.themoviedb.org/3/movie/581859?api_key=20cd267abb960a552b7abbc1653318ee
