import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../Navigation/NavigationContainer";

import Home from "../../Pages/Home/Home";
import Movies from "../../Pages/Movies/Movies";
import Series from "../../Pages/Series/Series";
import Сartoons from "../../Pages/Сartoons/Сartoons";

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" exact component={Series} />
          <Route path="/сartoons" exact component={Сartoons} />
        </Switch>
      </div>
    );
  }
}

export default App;
