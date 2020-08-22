import { createStore, combineReducers } from "redux";
import { featuresReducer } from "./reducers/featuresReducer";

export default createStore(
  combineReducers({ featuresReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
