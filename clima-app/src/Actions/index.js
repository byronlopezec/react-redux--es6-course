import transformForecast from './../Services/transformForecast';
export const SET_CITY = 'SET_CITY';

export const setCityActionCreator = (value) => ({ type: SET_CITY, value })

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const fetchExtended = payload => {

    //axios para navegadores antiguos, fetch para actuales
    //la siguiente url permite extraer datos del servicio openweathermap
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

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