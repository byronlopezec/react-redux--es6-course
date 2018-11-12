import React, { Component } from 'react';
import PropTypes from 'prop-types'
//import ForecastItem from './ForecastItem/ForecastItem';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
// ];

// const data = {
//     tempeture: 10,
//     humidity: 10,
//     weatherState: "day-sunny",
//     wind: '10 ms'
// }

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null };//informacion que devuelve el servicio
    }

    renderForecastItemDays() {

        return (
            // days.map(day => <ForecastItem key={day} weekDay={day} hour={10} data={data}/>)
            <div>Items</div>
        );
    }

    renderProgress = () => {
        return <h2>
            "Cargando Datos Forecast!!!..."
        </h2>
    }

    render() {
        const city = this.props.city;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='forecast-title'>Prognóstico extendido {city}</h2>
                {/* {this.renderForecastItemDays(days)} */}
                {/* si no obtenemos datos lazamos un grafico de cargando pronostico  */}
                {forecastData == null ? this.renderProgress() : this.renderForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;