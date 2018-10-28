import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN,RAIN } from '../../Constans/weathers';

const location ="Quito,ec";
const api_key="f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather= `${url_base_weather}?q=${location}&appid=${api_key}`;

const data ={
    tempeture: 16,
    weatherState: SUN,
    humidity: 60, 
    wind: '15 [m/s]'
}
const data2 ={
    tempeture: 8,
    weatherState: RAIN,
    humidity: 40,
    wind: '30 [m/s]'
}
//Arrow Funcion
class WeatherLocation extends Component {
    
    constructor(){
        super();
        //Todo componente React tiene un estado
        //Se define el state en el constructor
        //PEROOO, se lo modifica desde afuera con setState()
        this.state = {
            country: "Ecuador",
            data: data
        }
    }

    getWeatherState = weather_data =>{
        return SUN;
    }

     getData = weather_data => {

        const {humidity,temp} = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = SUN;

        const data = {
            humidity,
            tempeture: temp,
            weatherState,
            wind: `${speed} [m/s]`
        }
        return data;
    }

    //dentro de un componente es necesario usar THIS
    handleUpdateClick = () => {
        //Lo siguiente da error
        //Debido a que un state solamente se lo declara en el constructor
        //pero se lo actualiza desde afuera con la funcion setState()
        // this.state = {
        // country: "Argentina",
        // data : data2
        // }

        //Traemos datos del servidor con fetch
        //Fetch es instruccion nativa para navegadores modernos
        //Libreria Axios para navegadores antiguos

        //lo que devuelve fetch es objeto promise
        //con el primer then, nos devuelve una respuesta satisfactoria
        //extraemos el json del resolve y se lo enviamos al siguiente .then como parametro
        //
        fetch(api_weather).then ( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState ( {
                data: newWeather
            });
        });


        // this.setState ( {
        //     //Si un atributo no se modifico no es necesario pasarlo
        //     //Si coutry se mantiene en Ecuador, solamente pasariamos
        //     //data: data2 
        //     country: "Argentina",
        //     data: data2
        //     }
        // );
    }

    render (){
        //Uso de ES6 para facilitar notacion de "this.state.country"
        const { country,data} = this.state;
        //Es igual a: count country = this.state.country

    return (
        //Acceder a las propiedades del state con "this.state"
        //<Location country={this.state.country}/>

        <div className="weatherLocationCont">
            <Location country={country}/>
            <WeatherData data={data}/>
            <button onClick={this.handleUpdateClick}> Atualizar </button>
        </div>
    );
    }
}
// const WeatherLocation = () => {
//     return (
//         <div className="weatherLocationCont">
//             <Location country={'Ecuador'} city={'Quito'} />
//             <WeatherData data={data}/>
//         </div>
//     );
// }

// const WeatherLocation = () => (
//     <div>
//         <Location country={'Ecuador'} city={'Quito'} />
//         <WeatherData />
//     </div>
// );


export default WeatherLocation;
//export default: para unica exportacion de componentes
//export para exportar varios componentes