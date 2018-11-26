import { combineReducers} from 'redux';
import { reducer as CitiesReducer } from './cities.reducer'
import { reducer as city } from './city'

export default combineReducers({
    CitiesReducer,
    city
});