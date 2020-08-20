import React from "react";
import moment from "moment";

import Container from "../Container/Container";
import Cast from "../MovieInfo/Cast/CastContainer";
import style from "./MovieInfo.module.css";

const MovieInfo = ({ movieInfo }) => {
  const {
    poster_path: poster,
    name,
    release_date,
    production_countries,
    title,
    genres,
    runtime,
    overview,
  } = movieInfo;

  return (
    <Container>
      <section className={style.section}>
        <button>Back</button>
        <h1 className={style.title}>{title}</h1>

        <img
          src={poster && `http://image.tmdb.org/t/p/w500/${poster}`}
          alt={name || title}
          className={style.poster}
        />

        <div className={style.container}>
          <div className={style.parameters}>
            <span>{moment(release_date).year()},&nbsp;</span>
            <ul className={style.countriesList}>
              {!!production_countries &&
                production_countries.map((el, index) => (
                  <li key={index}>{el.name},&nbsp;</li>
                ))}
            </ul>
            <ul className={style.generesList}>
              {!!genres &&
                genres.map(({ id, name }) => <li key={id}>{name},&nbsp;</li>)}
            </ul>
            <span className={style.runtime}>{runtime} min</span>
          </div>
          <p className={style.overview}>{overview}</p>

          <Cast />
        </div>
      </section>
    </Container>
  );
};

export default MovieInfo;
