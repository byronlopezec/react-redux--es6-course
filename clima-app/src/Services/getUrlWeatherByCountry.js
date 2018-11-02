import {url_base_weather,api_key} from './../Constans/api_urs';

const getUrlWeatherByCountry = country => {
    return `${url_base_weather}?q=${country}&appid=${api_key}`;
}

export default getUrlWeatherByCountry;