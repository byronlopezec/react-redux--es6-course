import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';
import { SET_FORECAST_DATA, GET_WEATHER_DATA, SET_WEATHER_DATA } from "../Actions";

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.value;
            //Genero mi diccionadrio de cities
            return { ...state, [city]: { ...state[city], forecastData, forecastDataDate: new Date() } }
        }
        case GET_WEATHER_DATA: {
            const city = action.value;
            return { ...state, [city]: { ...state[city], weather: null } }
        }
        case SET_WEATHER_DATA: {
            const { city, weather } = action.value;
            return { ...state, [city]: { ...state[city], weather } }
        }
        default:
            return state;
    }

}

// EL state esta referiendoce al el state manejado por este reducer
// export const getForecastDataFromCities = (state, city) => {
//     // console.log("state: "+JSON.stringify(state) + " city: "+city)
//     return (state[city] && state[city].forecastData)
// }

//Usando Reselect!!!1=======
export const getForecastDataFromCities = createSelector(
    (state, city) => (state[city] && state[city].forecastData), forecastData => forecastData)

const fromObjToArray = cityList => {
    return (toPairs(cityList).map(([key, value]) => ({ key, name: key, data: value.weather })))
}

export const getWeatherCityList = createSelector(state => fromObjToArray(state), cityList => cityList)