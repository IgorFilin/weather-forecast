import React from 'react';
import {useAppSelector} from "../../../utils/hooks/useAppSelector";

interface IWeather {
    coords: any
}

export const Weather: React.FC<IWeather> = ({coords}) => {

    const { weather } = useAppSelector(state => state.weatherReducer)

    return (
        <div >

        </div>
    );
};

