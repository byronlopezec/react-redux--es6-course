// Me permite manejar los reducers
import { handleActions } from "redux-actions";
import { FETCH_CUSTOMERS, INSERT_CUSTOMERS, UPDATE_CUSTOMERS, DELETE_CUSTOMERS } from "../constants";

// export const customers = handleActions(FETCH_CUSTOMERS, (state) => state);
export const customers = handleActions(
	{
		[FETCH_CUSTOMERS]: (state, actions) => [...actions.payload],
		[INSERT_CUSTOMERS]: (state, actions) => [...state, actions.payload],
		[DELETE_CUSTOMERS]: (state, actions) => [...state.filter((c) => c.id !== actions.payload)],
		[UPDATE_CUSTOMERS]: (state, actions) => {
			const customerPayload = actions.payload;
			const customerList = state;

			const { id } = customerPayload;
			const initialValues = [];
			// revisar propiedad array.reduce()
			// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
			const newCustomers = customerList.reduce((acc, customer) => {
				if (id === customer.id) {
					return [...acc, customerPayload];
				} else {
					return [...acc, customer];
				}
			}, initialValues);
			return newCustomers;
		}
	},
	[]
);
