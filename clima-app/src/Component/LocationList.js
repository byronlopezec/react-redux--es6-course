//funcion statelesss, sin estado
import React from 'react';
import WeatherLocation from './WeatherLocation'
import { PropTypes } from 'prop-types'
import './styles.css'


// {countries}, significa que paso un arreglo
const LocationList = ({ countries, onSelectedLocation }) => {
    
    const handleWeatherLocationClick = country => {
        onSelectedLocation(country);
    }

    const listaWeatherLocation = countries => {
        return (
            countries.map(
                (country) => <WeatherLocation
                    key={country.key}
                    country={country.name}
                    onWeatherLocationClick={() => handleWeatherLocationClick(country.name)}
                    data={country.data}
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