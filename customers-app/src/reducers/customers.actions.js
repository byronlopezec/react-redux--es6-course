// Me permite manejar los reducers
import { handleActions } from "redux-actions";
import { FETCH_CUSTOMERS } from "../constants";

// export const customers = handleActions(FETCH_CUSTOMERS, (state) => state);
export const customers = handleActions({ [FETCH_CUSTOMERS]: (state, actions) => [...actions.payload] }, []);
