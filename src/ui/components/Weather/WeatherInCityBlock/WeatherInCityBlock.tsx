import React from 'react';
import {Box, Typography} from "@mui/material";
import {useAppSelector} from "../../../../utils/hooks/useAppSelector";

interface IWeatherInCityBlock {
}

export const WeatherInCityBlock: React.FC<IWeatherInCityBlock> = () => {

    const weather = useAppSelector(state => state.weatherReducer.weather)

    const city = weather?.name?.toUpperCase()
    const country = weather?.sys?.country

    return (
        <Box>
            {Object.keys(weather).length !== 0 &&
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '10px',
                    gap: '5px',
                }}>
                    <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} alt="flag"
                         width='50px' height='30px'/>
                    <Typography fontWeight={700} variant="h3" component="h3">{city}</Typography>
                </Box>}
        </Box>
    );
};

