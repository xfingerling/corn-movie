import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import navigationReducer from "./navigation/navigationReducer";
import moviesReducer from "./movies/moviesReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  movies: moviesReducer,
});

const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
