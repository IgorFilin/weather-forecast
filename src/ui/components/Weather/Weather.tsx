import React from 'react';
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import {Box} from "@mui/material";
import {SearchLocation} from "./SearchLocation/SearchLocation";
import {WeatherInCityBlock} from "./WeatherInCityBlock/WeatherInCityBlock";

interface IWeather {
}

export const Weather: React.FC<IWeather> = ({}) => {

    const {weather} = useAppSelector(state => state.weatherReducer)

    return (
        <Box  sx={{
            display:'flex',
            justifyContent:'center',
            border: '2px solid black',
        }}>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                border: '2px solid black',
                width:'80%',
                marginTop: '10%'
            }}>
                <Box sx={{

                }}>
                    <SearchLocation/>
                    <WeatherInCityBlock/>
                </Box>
            </Box>
        </Box>
    );
};

