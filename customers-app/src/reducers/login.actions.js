import { handleActions } from "redux-actions";
import { GET_USER } from "../constants/users";

export const user = handleActions(
	{
		[GET_USER]: (state, actions) => {
			let user = actions.payload[0];
			delete user.password;
			return { ...state, ...user };
		}
	},
	{}
);
