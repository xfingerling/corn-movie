import { connect } from "react-redux";
import * as moviesOperations from "../../Redux/movies/moviesOperations";
import App from "./App";

const mapDispatchToProps = {
  fetchMovies: moviesOperations.fetchMovies,
};

export default connect(null, mapDispatchToProps)(App);
