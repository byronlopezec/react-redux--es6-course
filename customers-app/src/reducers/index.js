import { combineReducers } from "redux";
// import { customers as customerssss } from "./customers.actions";
import { customers } from "./customers.actions";
import { reducer as reduxForm } from "redux-form";
import { CUSTOMER_VIEW, CUSTOMER_LIST, CUSTOMER_EDIT } from "../constants/permissions";

//Al colocar el nombre "customerssss" es el nombre que tendrá el objeto o elemento del state de la aplicacion
//El nombre "customers" es el nombre que tendrá el elemento en el state de la aplicacion

//Para Simular un logeo con permisos del usuario
// eslint-disable-next-line no-unused-vars
const user = (state, action) => ({ permissions: [CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT] });

export default combineReducers({
	// customerssss
	customers,
	form: reduxForm,
	user
});
