import React from 'react';
import {Box} from "@mui/material";
import {SearchLocation} from "./SearchLocation/SearchLocation";
import {WeatherInCityBlock} from "./WeatherInCityBlock/WeatherInCityBlock";

interface IWeather {
}

export const Weather: React.FC<IWeather> = ({}) => {


    return (
        <Box  sx={{
            display:'flex',
            justifyContent:'center',
        }}>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
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

