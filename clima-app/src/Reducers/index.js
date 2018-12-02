import { combineReducers} from 'redux';
import { reducer as cityList, getForecastDataFromCities as _getForecastDataFromCities } from './cities.reducer'
import { reducer as city } from './city.reducer'

export default combineReducers({
    cityList,
    city
});

export const getCity = state => state.city
export const getForecastDataFromCities = state => ( _getForecastDataFromCities(state.cityList,state.city))