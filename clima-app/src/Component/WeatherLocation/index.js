import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types';


//Arrow Funcion
const WeatherLocation = ({ onWeatherLocationClick, country, data }) => (

    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location country={country} />
        {data ? <WeatherData data={data} /> : <CircularProgress />}
    </div>
);



WeatherLocation.propTypes = {
    country: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
    data: PropTypes.shape({
        tempeture: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
}

export default WeatherLocation;
//export default: para unica exportacion de componentes
//export para exportar varios componentes