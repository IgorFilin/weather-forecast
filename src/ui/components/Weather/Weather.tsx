import React from 'react';
import {Box} from "@mui/material";
import {SearchLocation} from "./SearchLocation/SearchLocation";
import {WeatherInCityBlock} from "./WeatherInCityBlock/WeatherInCityBlock";
import {WeatherHourlyAndDaily} from "./WeatherHourlyAndDaily/WeatherHourlyAndDaily";
import {Hr} from "../../sharedComponents/Hr/Hr";

interface IWeather {
}

export const Weather: React.FC<IWeather> = ({}) => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '80%',
                marginTop: '80px',
            }}>
                <SearchLocation/>
                <WeatherInCityBlock/>
                <Hr/>
                <WeatherHourlyAndDaily/>
                <Hr/>
            </Box>
        </Box>
    );
};

