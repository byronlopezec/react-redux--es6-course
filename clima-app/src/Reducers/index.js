import { combineReducers} from 'redux';
import { reducer as cityList } from './cities.reducer'
import { reducer as city } from './city.reducer'

export default combineReducers({
    cityList,
    city
});