import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

// export const fetchCustomers = () => ({
// 	type: FETCH_CUSTOMERS,
// 	payload: null
// });
const customers = [
	{ dni: "1234567897", name: "Lopez Byron", age: 26 },
	{ dni: "1722450779", name: "Erika Lima", age: 28 },
	{ dni: "1702216876", name: "Santiago Proanio", age: 24 },
	{ dni: "0532659877", name: "Juan Vera", age: 18 },
	{ dni: "1702216871", name: "Maria Idalgo", age: 32 },
	{ dni: "1702216872", name: "Jose Flores", age: 17 }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);
