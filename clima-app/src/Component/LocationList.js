//funcion statelesss, sin estado
import React from 'react';
import WeatherLocation from './WeatherLocation'

const listaWeatherLocation = countries => (
    //A cada country que devuelve Pasale a weatherLocation
    countries.map(country => <WeatherLocation country={country} />)
);

// {countries}, significa que paso un arreglo
const LocationList = ({ countries }) => (
    <div>
        {listaWeatherLocation(countries)}
    </div>
);


export default LocationList;