import React from 'react';
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import {Box} from "@mui/material";

interface IWeather {
}

export const Weather: React.FC<IWeather> = ({}) => {

    const { weather } = useAppSelector(state => state.weatherReducer)

    return (
        <Box textAlign={'center'}>

        </Box>
    );
};

