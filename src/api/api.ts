import {instance} from "./instance";
import {getWeatherOneType} from "../bll/types";


export const api = {
    getCurrentWeather({lat,lon}:{lat:number,lon:number}){
        return instance.get(`/weather?lang=ru&lat=${lat}&lon=${lon}&mode=json&units=metric`)
            .then((res)=> res.data)
    }
}