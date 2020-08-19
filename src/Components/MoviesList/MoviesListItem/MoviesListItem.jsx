import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import debounce from "lodash.debounce";

import style from "./MoviesListItem.module.css";

import Overlay from "../Overlay/Overlay";

class MoviesListItem extends Component {
  state = {
    overlayIsOpen: false,
  };

  onMouseOver = debounce(() => {
    this.setState({ overlayIsOpen: true });
  }, 200);

  onMouseOut = () => {
    this.setState({ overlayIsOpen: false });
  };

  render() {
    const { overlayIsOpen } = this.state;
    const { movie, location } = this.props;
    const { title, name, id, poster_path: poster } = movie;

    return (
      <div
        className={style.movieListItem}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <Link
          to={{ pathname: `/movies/${id}`, state: { from: location } }}
          className={style.link}
        >
          {/* {overlayIsOpen && <Overlay />} */}
          <img
            src={poster && `http://image.tmdb.org/t/p/w200/${poster}`}
            alt={name || title}
            className={style.poster}
          />

          <p className={style.title}>{title}</p>
        </Link>
      </div>
    );
  }
}

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
  }),

  location: PropTypes.object,
};

export default withRouter(MoviesListItem);
