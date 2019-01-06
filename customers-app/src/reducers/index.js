import { combineReducers } from "redux";
// import { customers as customerssss } from "./customers.actions";
import { customers } from "./customers.actions";
import { reducer as reduxForm } from "redux-form";

//Al colocar el nombre "customerssss" es el nombre que tendrá el objeto o elemento del state de la aplicacion
//El nombre "customers" es el nombre que tendrá el elemento en el state de la aplicacion
export default combineReducers({
	// customerssss
	customers,
	Form: reduxForm
});
