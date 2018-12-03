import transformForecast from './../Services/transformForecast';
import getUrlWeatherByCountry from './../Services/getUrlWeatherByCountry';
import transformWeather from './../Services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';//Obtener datos del clima del servidor
export const SET_WEATHER_DATA = 'SET_WEATHER_DATA'; //enviar esos datos obtenidos al State Global de la App.

//Lo usamos en el interior y en su lugar llamaremos a setSelectedCity
const setCityActionCreator = (value) => ({ type: SET_CITY, value })
const setForecastDataActionCreator = (value) => ({ type: SET_FORECAST_DATA, value })
const getWeatherCityActionCreator = (value) => ({ type: GET_WEATHER_DATA, value })
const setWeatherCityActionCreator = (value) => ({ type: SET_WEATHER_DATA, value })

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

//Establecer la ciudad actual y a la vez la peticion al servidor para obtener 
// el forecast extendido de dicha ciudad seleccionada
export const setSelectedCity = value => {

    //El getState es una funcion que optiene el estado global de la aplicacion
    return (dispatch,getState) => {
        const url_forecast = `${url}?q=${value}&appid=${api_key}`;

        //esta funcion establecera la ciudad actual de forma sincrona y a la vez
        //activar en el estado  un indicador de busqueda de datos
        dispatch(setCityActionCreator(value))

        const state = getState();
        const date = state.cityList && state.cityList[value].forecastDataDate;
        const now = new Date();

        //Verificar que no sea nulo 
        //Si hace menos de un minuto se solicito el pronostico extendido no volver hacer el fetch
        //La diferencia viene en milisegundos
        if (date && (now - date ) < 1 * 60 * 1000 ){
            return;
        }

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

    return dispatch => {

        cityList.forEach(city => {

            dispatch(getWeatherCityActionCreator(city));
            //Obtimizar consumo de datos y mejorar velocidad de aplicacion

            const api_weather = getUrlWeatherByCountry(city);
            fetch(api_weather).then(resolve => {
                return resolve.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCityActionCreator({ city, weather }))
            })
        }
        );
    }
} 