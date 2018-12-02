import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { reducer as cityList, getForecastDataFromCities as _getForecastDataFromCities } from './cities.reducer'
import { reducer as city } from './city.reducer'

export default combineReducers({
    cityList,
    city
});

//CreateSelector, son funciones que esperan que se les pase selectores 
//que no son mas que funciones que se les pasa el state
//cada una de esas funciones son pasados como parametros en un resultFuntion

// export const getCity = state => state.city
export const getCity = createSelector(state => state.city, city => city)
// export const getForecastDataFromCities = state => ( _getForecastDataFromCities(state.cityList,getCity(state)))

export const getForecastDataFromCities = createSelector(
    //Recibe 1er selector, que sobre el state global de la App seleccionar cityList
    //Recibe un 2do selector que seria igual al selector getCity
    //Recibe un resultFunction que recibe los resultados de los anteriores selectors y retorna lo que deseamos
    // en este caso el resultFunction retornara el forecastData de la city existente en la Citylist.
    // state => state.cityList, getCity, (cityList, city) => (cityList[city] && cityList[city].forecastData)
    //Puede reemplazarse como:
    state => state.cityList, getCity, _getForecastDataFromCities
)