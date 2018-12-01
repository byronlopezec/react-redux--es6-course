import { SET_FORECAST_DATA } from "../Actions";

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.value;
            //Genero mi diccionadrio de cities
            return { ...state, [city]: { forecastData } }
        }
        default:
            return state;
    }

}

// EL state esta referiendoce al el state manejado por este reducer
export const getForecastDataFromCities = (state, city) => {
    // console.log("state: "+JSON.stringify(state) + " city: "+city)
    return (state[city] && state[city].forecastData)
}