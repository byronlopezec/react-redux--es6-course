import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from './../Services/transformForecast';
import ForecastItem from './ForecastItem/ForecastItem';

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

    //Se ejecuta una única vez despues del 1er render. 
    componentDidMount() {
        this.updateCity(this.props.city)
    }

    //Se ejecuta cada vez que hay algun cambio en las propiedades
    //Nos pasa como parametros las propiedades que estan previos a establecerse
    //Todavia no se establecen esta propiedades, estan en un punto en el cual
    //es previo al establecimiento de las propiedades y previo a la actualizacion del componente.
    // SE EJECUTA SIEMPRE QUE SE MODIFICA LAS PROPIEDADES ESCEPTO LA 1ERA VEZ QUE SE ESTABLECE EL COMPONENTE.
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null })//llamaria al indicador de progreso...
            this.updateCity(nextProps.city)
        }

    }

    updateCity = city => {
        //axios para navegadores antiguos, fetch para actuales
        //la siguiente url permite extraer datos del servicio openweathermap
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        //Realizamos un http metodo Get usando fetch que devuelve un promise
        fetch(url_forecast).then(
            data => data.json()//Obtiene el objeto Json que devuelve el servicio
        ).then(
            weather_data => {
                //Uso un 2do then para usar los datos antes devueltos
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
            }
        )
    }

    renderForecastItemDays(forecastData) {
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
                {/* si no obtenemos datos lazamos un grafico de cargando pronostico  */}
                {forecastData == null ? this.renderProgress() : this.renderForecastItemDays(forecastData)}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;