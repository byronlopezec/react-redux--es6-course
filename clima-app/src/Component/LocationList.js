//funcion statelesss, sin estado
import React from 'react';
import WeatherLocation from './WeatherLocation'

const listaWeatherLocation = countries => {
    return (
        //A cada country que devuelve Pasale a weatherLocation
        //cada componente weatherLocation necesita un index unico que lo identifique
        countries.map((country,index) => <WeatherLocation key={index++} country={country} />)
    );
}

// {countries}, significa que paso un arreglo
const LocationList = ({ countries }) => (
    <div>
        {listaWeatherLocation(countries)}
    </div>
);


export default LocationList;