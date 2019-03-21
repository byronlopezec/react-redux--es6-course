import { createAction } from "redux-actions";
import { DELETE_CUSTOMERS } from "../constants";
import { apiDelete } from "../api";
import { urlCustomers } from "../api/urls";

export const deleteCustomer = createAction(DELETE_CUSTOMERS, (id) => apiDelete(urlCustomers, id)());
