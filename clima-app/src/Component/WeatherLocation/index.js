import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../Services/transformWeather';
import { api_weather } from '../../Constans/api_urs'

//Arrow Funcion
class WeatherLocation extends Component {

    constructor() {
        super();
        //Todo componente React tiene un estado
        //Se define el state en el constructor
        //PEROOO, se lo modifica desde afuera con setState()
        this.state = {
            country: "Quito",
            data: null
        }
        console.log("constructor");
    }

    //se ejecuta despues del render()
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();

    }

    //se ejecuta despues de haber una actualizacion
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");

    }

    // componentWillMount() {
    // console.log("UNSAFE componentWillMount");
    //     this.handleUpdateClick();//Termina ejecutandose despues de componentDidMount
    //     //No es recomendable usar Will, para React v17 se eliminara estos metodos.

    // }
    // componentWillUpdate() {
    //     console.log("UNSAFE componentWillUpdate");
    // }

    /*
    
    constructor
index.js:42 UNSAFE componentWillMount
index.js:67 render
index.js:32 componentDidMount
index.js:59 {humidity: 100, tempeture: 12.8, weatherState: "Rain", wind: "0.77 [m/s]"}
index.js:47 UNSAFE componentWillUpdate
index.js:67 render
index.js:37 componentDidUpdate

    */

    handleUpdateClick = () => {

        //Traemos datos del servidor con fetch//lo que devuelve fetch es objeto promise
        //extraemos el json del resolve y se lo enviamos al siguiente .then como parametro
        //
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        console.log("render");
        //Uso de ES6 para facilitar notacion de "this.state.country"
        const { country, data } = this.state;
        //Es igual a: count country = this.state.country

        return (
            //Acceder a las propiedades del state con "this.state"
            //<Location country={this.state.country}/>

            <div className="weatherLocationCont">
                <Location country={country} />
                { data ? <WeatherData data={data} /> : "Cargando...."}
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