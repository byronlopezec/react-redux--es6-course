import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,CLOUDY,RAIN,SUN,WINDY} from '../../../Constans/weathers';
import PropTypes from 'prop-types';
import './styles.css'

const stateToIconName = (weatherState) =>{
    
    switch (weatherState) {
        case CLOUD:
        return "cloud";

        case CLOUDY:
        return "cloudy";
        
        case RAIN:
        return "rain";
        
        case SUN:
        return "day-cloudy";
        
        case WINDY:
        return "windy";
        
        default:
        return "day-sunny";
    }
}

const getWeatherIcon = weatherState => {
        return ( <WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" /> );
}

const WeatherTemperature = ({tempeture,weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="tempeture">{tempeture} </span>
        <span className="tempetureType"> C</span>
    </div>
);

WeatherTemperature.propTypes = {
    tempeture: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}
export default WeatherTemperature;