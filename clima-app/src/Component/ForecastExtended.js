import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from './../Services/transformForecast';
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

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null };//informacion que devuelve el servicio
    }
    componentDidMount() {
        //axios para navegadores antiguos, fetch para actuales
        //la siguiente url permite extraer datos del servicio openweathermap
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        //Realizamos un http metodo Get usando fetch que devuelve un promise
        fetch(url_forecast).then(
            data => data.json()//Obtiene el objeto Json que devuelve el servicio
        ).then(
            weather_data => {
                //Uso un 2do then para usar los datos antes devueltos
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        )

    }

    renderForecastItemDays() {

        return (
            <h1>Items</h1>
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