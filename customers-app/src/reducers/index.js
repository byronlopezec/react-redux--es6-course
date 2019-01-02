import { combineReducers } from "redux";
// import { customers as customerssss } from "./customers.actions";
import { customers } from "./customers.actions";

//Al colocar el nombre "customerssss" es el nombre que tendrá el objeto o elemento del state de la aplicacion
//El nombre "customers" es el nombre que tendrá el elemento en el state de la aplicacion
export default combineReducers({
	// customerssss
	customers
});
