import { createStore, compose } from "redux";
import reducers from "../reducers";

//Instalacion plugin Redux para Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers());
