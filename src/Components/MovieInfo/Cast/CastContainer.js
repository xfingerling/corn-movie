import { connect } from "react-redux";
import Cast from "./Cast";

const mapStateToProps = (state) => ({
  movieInfo: state.movies.movieDetails,
});

export default connect(mapStateToProps)(Cast);
