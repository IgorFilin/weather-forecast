import {instance} from "./instance";
import {getWeatherHourlyAndDailyType, getWeatherOneType} from "../bll/types";


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
    },
    getHourlyAndDailyWeather<getWeatherHourlyAndDailyType>({lat, lon}: { lat?: number, lon?: number }) {
        return instance.get(`/onecall?lang=en&mode=json&units=metric`, {
            params: {
                lat,
                lon,
            }
        })
            .then((res) => res.data)
    }
}

