import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { navigationReducer } from "./navigation/navigationReducer";

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
