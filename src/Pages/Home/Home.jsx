import React from "react";

import MovieList from "../../Components/MoviesList/MovieListContainer";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <MovieList title="Trending Movies" />
    </div>
  );
};

export default Home;
