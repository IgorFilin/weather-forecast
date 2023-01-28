import {instance} from "./instance";


export const api = {
    getCurrentWeather(){
        return instance.get('/weather?lang=ru&lat=54,1961&lon=37,6182&mode=json&units=metric')
            .then((res)=> res.data)
    }
}