//Retorna un objeto
const actionNormal  = payload => ({type: 'myAction', payload})

//Action para mi dispatch
//retorna una funcion dispatch
const actionDelay = payload => {
  return dispatch => {
    dispatch(`inicio: ${payload}`);
    window.setTimeout(() => dispatch(`terminó: ${payload}`),1000);
  }
}

const myDispatch = texto => {
  console.log(texto);
}

//Mientras tanto en el middleware
// return ({ dispatch, getState}) => next => action => {

const action = actionNormal("fetching");

// EL middleware Thunk simplemente analiza si "action" es una funcion
// si no es una funcion el middleware thunk no hace nada.
if(typeof action === 'function'){
  console.log("action delay");
  action(myDispatch);
}else {
  console.log("action normal");
  console.log(action);
}

