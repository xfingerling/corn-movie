import React, { Component } from "react";

import MovieInfo from "../../Components/MovieInfo/MovieInfoContainer";

class MovieDetails extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;

    this.props.fetchMovieDetails(movieId);
  }

  render() {
    return (
      <div>
        <h2>Movie Info PAge</h2>
        <MovieInfo />
      </div>
    );
  }
}

export default MovieDetails;
