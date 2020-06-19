import { connect } from "react-redux";
import * as moviesOperations from "../../Redux/movies/moviesOperations";
import MovieDetails from "./MovieDetails";

const mapDispatchToProps = {
  fetchMovieDetails: moviesOperations.fetchMovieDetails,
};

export default connect(null, mapDispatchToProps)(MovieDetails);
