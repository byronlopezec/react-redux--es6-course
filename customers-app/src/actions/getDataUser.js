import { createAction } from "redux-actions";
import { GET_USER } from "../constants/users";
import { apiGetUser } from "../api";
import { urlUsers } from "../api/urls";

export const getDataUser = createAction(GET_USER, (email) => apiGetUser(urlUsers, email)());
