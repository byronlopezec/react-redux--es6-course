//funcion statelesss, sin estado
import React from 'react';
import WeatherLocation from './WeatherLocation'


const LocationList = (country) => {

    console.log(country);
    return (<div>
        <WeatherLocation country="Quito,ec" />
        <WeatherLocation country="Lima,pe" />
        <WeatherLocation country="Buenos Aires,ar" />
    </div>
    );
}

export default LocationList;