import { SET_CITY } from "../Actions";

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
        //si existe la propiedad city se modifica por el valor en "value"
        //Si no existe, agrega la propiedad "city" y su valor al estado.
            return { ...state, city: action.value }
        default:
            return state;
    }
} 
