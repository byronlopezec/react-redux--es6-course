import { createStore, compose } from "redux";

//Instalacion plugin Redux para Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = (state) => state;

export const store = createStore(reducers, {}, composeEnhancers());
