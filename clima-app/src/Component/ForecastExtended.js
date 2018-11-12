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

const api_key="f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null };//informacion que devuelve el servicio
    }
    componentDidMount(){
        
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