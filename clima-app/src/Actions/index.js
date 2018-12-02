import transformForecast from './../Services/transformForecast';
import getUrlWeatherByCountry from './../Services/getUrlWeatherByCountry';
import transformWeather from './../Services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

//Lo usamos en el interior y en su lugar llamaremos a setSelectedCity
const setCityActionCreator = (value) => ({ type: SET_CITY, value })
const setForecastDataActionCreator = (value) => ({ type: SET_FORECAST_DATA, value })

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

//Establecer la ciudad actual y a la vez la peticion al servidor para obtener 
// el forecast extendido de dicha ciudad seleccionada
export const setSelectedCity = value => {

    return dispatch => {
        const url_forecast = `${url}?q=${value}&appid=${api_key}`;

        //esta funcion establecera la ciudad actual de forma sincrona y a la vez
        //activar en el estado  un indicador de busqueda de datos
        dispatch(setCityActionCreator(value))

        return fetch(url_forecast).then(
            data => data.json()//Obtiene el objeto Json que devuelve el servicio
        ).then(
            weather_data => {
                //Uso un 2do then para usar los datos antes devueltos
                const forecastData = transformForecast(weather_data);
                //modificar el estado con el resultado de la promise (fetch)
                //se establece el resultado del forecastextended para esa ciudad!!!
                dispatch(setForecastDataActionCreator({ city: value, forecastData }));
            }
        );
    };
};


export const setWeather = cityList => {

    //Traemos datos del servidor con fetch//lo que devuelve fetch es objeto promise
    //extraemos el json del resolve y se lo enviamos al siguiente .then como parametro

    const api_weather = getUrlWeatherByCountry(cityList);

    fetch(api_weather).then(resolve => {
        return resolve.json();

    }).then(data => {

        const newWeather = transformWeather(data);
        return { data: newWeather }
    });
}