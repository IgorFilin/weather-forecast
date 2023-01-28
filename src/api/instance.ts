import axios from "axios";

export const instance = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5',
    params:{
        'appid':''
    }
})