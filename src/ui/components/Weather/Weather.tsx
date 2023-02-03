import React from 'react';
import {Box, Skeleton} from "@mui/material";
import {SearchLocation} from "./SearchLocation/SearchLocation";
import {WeatherInCityBlock} from "./WeatherInCityBlock/WeatherInCityBlock";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";

interface IWeather {
}

export const Weather: React.FC<IWeather> = ({}) => {

    const isLoading = useAppSelector(state => state.weatherReducer.isLoading)

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                width: '80%',
                marginTop: '80px',
            }}>
                <SearchLocation/>
               <WeatherInCityBlock/>
            </Box>
        </Box>
    );
};

