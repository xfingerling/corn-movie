import { connect } from "react-redux";
import MovieList from "./MoviesList";

const mapStateToProps = (state) => ({
  trendingMovies: state.movies.trendingMovies,
});

export default connect(mapStateToProps)(MovieList);
