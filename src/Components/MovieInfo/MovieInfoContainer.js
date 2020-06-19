import { connect } from "react-redux";
import MovieInfo from "./MovieInfo";

const mapStateToProps = (state) => ({
  movieInfo: state.movies.movieDetails,
});

export default connect(mapStateToProps)(MovieInfo);
