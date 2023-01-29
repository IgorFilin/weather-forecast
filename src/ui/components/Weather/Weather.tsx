import React, {useEffect} from 'react';
import {api} from "../../../api/api";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import styles from './Weather.module.css'
import {useDispatch} from "react-redux";
import {weatherThunk} from "../../../bll/thunk/weatherThunk";


export const Weather = () => {

    const { geolocation } = useAppSelector(state => state.authReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        if(geolocation.lon && geolocation.lat){
            debugger
            dispatch<any>(weatherThunk({lat:geolocation.lat,lon:geolocation.lon}))
        }


    },[])

    return (
        <div className={styles.containerWeather}>

        </div>
    );
};

