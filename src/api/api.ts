import {instance} from "./instance";
import {getWeatherOneType} from "../bll/types";


export const api = {
    getCurrentWeather<getWeatherOneType>({lat, lon ,currentCity}: { lat?: number, lon?: number, currentCity?: string }) {
        return instance.get(`/weather?lang=en&mode=json&units=metric`, {
            params: {
                lat,
                lon,
                q:currentCity
            }
        })
            .then((res) => res.data)
    }
}