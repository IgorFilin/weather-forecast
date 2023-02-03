import React from 'react';
import {Box, Typography} from "@mui/material";
import {useAppSelector} from "../../../../utils/hooks/useAppSelector";
import {Hr} from "../../Hr/Hr";

interface IWeatherInCityBlock {
}

export const WeatherInCityBlock: React.FC<IWeatherInCityBlock> = () => {

    const weather = useAppSelector(state => state.weatherReducer.weather)


    const city = weather.name?.toUpperCase()
    const country = weather.sys?.country
    const description = weather.weather && weather?.weather[0]?.description?.slice(0,1).toUpperCase() + weather?.weather[0]?.description?.slice(1)
    const grades = Math.round(weather?.main?.temp)
    const icon = weather.weather && weather?.weather[0].icon


    return (
        <Box sx={{marginTop:'10px'}}>
            {Object.keys(weather).length !== 0 &&
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '20px',
                    gap: '7px',
                }}>
                    <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} alt="flag"
                         width='50px' height='30px'/>
                    <Typography  sx={{fontSize: {
                            lg: 45,
                            md: 45,
                            sm: 30,
                            xs: 30
                        }}}>{city}</Typography>
                    <Typography  fontWeight={400} variant="h5" component="h6">{description}</Typography>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        gap:'5px',
                    }}>
                        <Typography  fontWeight={400} variant="h3" component="h3">{grades}</Typography>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather description"
                             width='50px' height='50px'/>
                    </Box>
                </Box>
            }
        </Box>
    );
};

