import axios from "axios";

export const instance = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5',
    params:{
        'appid':'11f14ce33562ee8b184999fb3e863bf0'
    }
})