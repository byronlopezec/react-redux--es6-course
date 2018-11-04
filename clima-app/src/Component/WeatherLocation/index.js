import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../Services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types';
import getUrlWeatherByCountry from '../../Services/getUrlWeatherByCountry';

//Arrow Funcion
class WeatherLocation extends Component {
    //Para hacer que WeatherLocation acepte propiedades le ponemos props
    constructor(props) {
        super(props);

        const { country } = props;
        this.state = {
            country, //notacion ES6
            data: null
        }
    }

    //se ejecuta antes del render()
    componentWillMount() {
        this.handleUpdateClick();

    }

    handleUpdateClick = () => {

        //Traemos datos del servidor con fetch//lo que devuelve fetch es objeto promise
        //extraemos el json del resolve y se lo enviamos al siguiente .then como parametro

        const api_weather = getUrlWeatherByCountry(this.state.country);

        fetch(api_weather).then(resolve => {
            return resolve.json();

        }).then(data => {

            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;//la funcion lo esperamos dentro de las propiedades

        //Uso de ES6 para facilitar notacion de "this.state.country"
        const { country, data } = this.state;
        //Es igual a: count country = this.state.country

        return (
            //Acceder a las propiedades del state con "this.state"
            //<Location country={this.state.country}/>

            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location country={country} />
                {data ? <WeatherData data={data} /> : <CircularProgress />}
            </div>
        );
    }
}


WeatherLocation.propTypes = {
    country: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;
//export default: para unica exportacion de componentes
//export para exportar varios componentes