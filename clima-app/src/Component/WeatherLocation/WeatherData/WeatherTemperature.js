import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, SNOW, RAIN, SUN, THUNDER, DRIZZLE } from '../../../Constans/weathers';
import PropTypes from 'prop-types';
import './styles.css'

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [SNOW]: "snow",
    [RAIN]: "rain",
    [THUNDER]: "thundeeeer",//observa que el valor devuelto sera la CONSTANTE y no el string
    [DRIZZLE]: "sprinkle"
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return (
            <WeatherIcons className="wicon" name={icon} size="4x" />
        );
}

const WeatherTemperature = ({ tempeture, weatherState }) => (
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