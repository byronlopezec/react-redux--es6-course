//import { SUN } from '../Constans/weathers';
import convert from 'convert-units';
//Arrow Funcion

const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C");
}

// const getWeatherState = weather_data => {
//     return SUN;
// }

const transformWeather = weather_data => {

    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const { main } = weather_data.weather[0];
    const tempeture = Number(getTemp(temp).toFixed(2));//convertir grados Celcius

    const data = {
        humidity,
        tempeture,
        weatherState: main,
        wind: `${speed} [m/s]`
    }
    return data;
}

export default transformWeather;