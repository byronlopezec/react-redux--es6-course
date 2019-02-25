import { createAction } from "redux-actions";
import { UPDATE_CUSTOMERS } from "../constants";
import { apiPut } from "../api";
import { urlCustomers } from "../api/urls";

export const updateCustomer = createAction(UPDATE_CUSTOMERS, (dni, customer) => apiPut(urlCustomers, dni, customer)());
