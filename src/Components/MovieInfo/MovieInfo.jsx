import React from "react";
import moment from "moment";

import Container from "../Container/Container";
import style from "./MovieInfo.module.css";

const MovieInfo = ({ movieInfo }) => {
  const {
    release_date,
    production_countries,
    title,
    genres,
    runtime,
    overview,
  } = movieInfo;
  console.log(movieInfo);
  return (
    <Container>
      <section className={style.wrap}>
        <p className={style.title}>{title}</p>
        <div>
          <span>{moment(release_date).year()}</span>,
          <ul>
            {!!production_countries &&
              production_countries.map((el, index) => (
                <li key={index}>{el.iso_3166_1}</li>
              ))}
          </ul>
          <ul>
            {!!genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
          <span>{runtime} min</span>
        </div>
        <p>{overview}</p>
      </section>
    </Container>
  );
};

export default MovieInfo;

// adult: false
// backdrop_path: "/t93doi7EzoqLFckidrGGnukFPwd.jpg"
// belongs_to_collection: null
// budget: 0
// genres: (3) [{…}, {…}, {…}]
// homepage: "https://www.netflix.com/title/80198975"
// id: 339095
// imdb_id: "tt1552211"
// original_language: "en"
// original_title: "The Last Days of American Crime"
// overview: "In the not-too-distant future, as a final response to crime and terrorism, the U.S. government plans to broadcast a signal that will make it impossible for anyone to knowingly break the law."
// popularity: 54.882
// poster_path: "/ygCQnDEqUEIamBpdQdDYnFfxvgM.jpg"
// production_companies: (3) [{…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2020-06-05"
// revenue: 0
// runtime: 148
// spoken_languages: [{…}]
// status: "Released"
// tagline: ""
// title: "The Last Days of American Crime"
// video: false
// vote_average: 5.7
// vote_count: 166
