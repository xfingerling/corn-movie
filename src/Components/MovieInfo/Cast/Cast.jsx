import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import style from "./Cast.module.css";

const Cast = ({ movieInfo }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  const { credits } = movieInfo;

  console.log(credits);

  const castList = credits
    ? credits.cast.slice(0, 8).map(({ profile_path, name, id, character }) => (
        <li key={id} className={style.listItem}>
          <div className={style.imgWrap}>
            <img
              src={
                profile_path && `http://image.tmdb.org/t/p/w154/${profile_path}`
              }
              alt={character}
              className={style.profileImg}
            />
          </div>
          <p className={style.name}>{name}</p>
          <p className={style.character}>{character}</p>
        </li>
      ))
    : null;

  return (
    <div>
      <h2 className={style.title}>Actors and creators</h2>

      <Slider {...settings}>{castList}</Slider>
    </div>
  );
};

Cast.propTypes = {
  movieInfo: PropTypes.object,
};

export default Cast;
