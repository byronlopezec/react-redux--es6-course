import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";
import { apiGet } from "../api";
import { urlCustomers } from "../api/urls";

// export const fetchCustomers = () => ({
// 	type: FETCH_CUSTOMERS,
// 	payload: null
// });

//cuando el midleware react-promise detecta que le estoy pasando una promise en el payload
//ejecuta la promise y cuando la promise ha sido resuelta se genera una accion que ahi si la va tomar el reducer
//es decir la accion se detiene hasta obtener un resultado del servidor
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));
