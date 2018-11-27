import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast) => {
        return (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}
            >
            </ForecastItem>
        );
    }
    );
}

const renderProgress = () => {
    return <h2>
        "Cargando Datos Forecast!!!..."
    </h2>
}
const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>Prognóstico extendido {city}</h2>
        {/* si no obtenemos datos lazamos un grafico de cargando pronostico  */}
        {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;