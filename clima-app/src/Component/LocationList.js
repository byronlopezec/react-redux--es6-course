//funcion statelesss, sin estado
import React from 'react';
import WeatherLocation from './WeatherLocation'
import { PropTypes } from 'prop-types'
import './styles.css'


// {countries}, significa que paso un arreglo
const LocationList = ({ countries, onSelectedLocation }) => {

    const handleWeatherLocationClick = country => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(country);
    }

    const listaWeatherLocation = countries => {
        return (
            countries.map(
                (country) => <WeatherLocation
                    key={country}
                    country={country}
                    onWeatherLocationClick={() => handleWeatherLocationClick(country)}
                />
            )
        );
    }

    return (
        <div className='locationList'>
            {listaWeatherLocation(countries)}
        </div>
    );
}

LocationList.propTypes = {
    countries: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
}

export default LocationList;