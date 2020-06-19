import { connect } from "react-redux";
import * as moviesOperations from "../../Redux/movies/moviesOperations";
import App from "./App";

const mapDispatchToProps = {
  fetchTrendingMovies: moviesOperations.fetchTrendingMovies,
};

export default connect(null, mapDispatchToProps)(App);
