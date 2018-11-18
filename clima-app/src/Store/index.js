import { createStore } from 'redux';

// Para usar la extension Redux Devtools Extension en chrome se usa:
// window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
export const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
