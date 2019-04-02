import { createStore, compose, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "../reducers";

//Instalacion plugin Redux para Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//retrasa la resolucion de la promise hasta que el promise devuelva una respuesta y ahi ejecut la accion.
const initialState = {};
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(promiseMiddleware)));
