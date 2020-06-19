import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import style from "./MoviesList.module.css";

import Container from "../Container/Container";
import MoviesListItem from "./MoviesListItem/MoviesListItem";

const MoviesList = ({ title, trendingMovies }) => {
  const listItem = trendingMovies.map((movie) => {
    return <MoviesListItem key={movie.id} movie={movie} />;
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section>
      <Container>
        {!!title && <h2 className={style.title}>{title}</h2>}
        <Slider {...settings} className={style.slider}>
          {listItem}
        </Slider>
      </Container>
    </section>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
