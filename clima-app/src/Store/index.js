import { createStore } from 'redux';
import { city } from '../Reducers/city';

const initialState = {
    city: null
};

// Para usar la extension Redux Devtools Extension en chrome se usa:
// window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
export const store = createStore(city, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
