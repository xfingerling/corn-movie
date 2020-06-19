import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./App.module.css";

import AppHeader from "../AppHeader/AppGeaderContainer";

import Home from "../../Pages/Home/Home";
import Movies from "../../Pages/Movies/Movies";
import MovieDetails from "../../Pages/MovieDetails/MovieDetailsContainer";
import Series from "../../Pages/Series/Series";
import Сartoons from "../../Pages/Сartoons/Сartoons";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/Login/LoginContainer";
import SignUp from "../../Pages/SignUp/SignUp";

class App extends Component {
  componentDidMount() {
    this.props.fetchTrendingMovies();
  }

  render() {
    return (
      <div>
        <AppHeader />

        <div className={style.pageWrapper}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/series" exact component={Series} />
            <Route path="/сartoons" exact component={Сartoons} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchMovies: PropTypes.func,
};

export default App;
