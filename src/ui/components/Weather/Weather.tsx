import React from 'react';
import styles from './Weather.module.css'
import {useAppSelector} from "../../../utils/hooks/useAppSelector";

interface IWeather {
    coords: any
}

export const Weather: React.FC<IWeather> = ({coords}) => {

    const { weather } = useAppSelector(state => state.weatherReducer)

    return (
        <div className={styles.containerWeather}>
            <div>{weather?.name}</div>
            <div>{weather.main?.temp}</div>
        </div>
    );
};

