import React from 'react';
import {Box, CircularProgress, Skeleton, Typography} from "@mui/material";
import {useAppSelector} from "../../../../utils/hooks/useAppSelector";
import {converterUnix} from "../../../../utils/functions/convertedUnixInRealTime";

interface IWeatherInCityBlock {
}

export const WeatherInCityBlock: React.FC<IWeatherInCityBlock> = () => {

    const weather = useAppSelector(state => state.weatherReducer.weather)

    const isLoading = useAppSelector(state => state.weatherReducer.isLoading)

    const city = weather.name?.toUpperCase()
    const country = weather.sys?.country
    const description = weather.weather && weather?.weather[0]?.description?.slice(0, 1).toUpperCase() + weather?.weather[0]?.description?.slice(1)
    const grades = Math.round(weather?.main?.temp)
    const icon = weather.weather && weather?.weather[0].icon
    const sunrise = converterUnix(weather.sys?.sunrise)
    const sunset = converterUnix(weather.sys?.sunset)
    const feelLike = Math.round(weather.main?.feels_like)

    if (isLoading && Object.keys(weather).length === 0) {
        return <Box><CircularProgress sx={{marginTop: '70px',}} /></Box>
    }

    return (
        <Box sx={{marginTop: '10px'}}>
            {Object.keys(weather).length !== 0 &&
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '20px',
                    gap: '7px',
                }}>
                    {isLoading ? <Skeleton width='50px' height='30px'/> : <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} alt="flag"
                         width='50px' height='30px'/>}
                    {isLoading ? <Skeleton width='200px' height='65px'/> :<Typography sx={{
                        fontWeight: 600,
                        fontSize: {
                            lg: 45,
                            md: 45,
                            sm: 35,
                            xs: 30
                        }
                    }}>
                        {city}
                    </Typography>}
                    {isLoading ? <Skeleton width='130px' height='33px'/> : <Typography fontWeight={400} variant="h5" component="h6">
                        {description}
                    </Typography>}
                    {isLoading ? <Skeleton width='100px' height='58px'/> :<Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '5px',
                    }}>
                         <Typography fontWeight={400} variant="h3" component="h3">
                            {grades}&#176;
                        </Typography>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather description"
                             width='50px' height='50px'/>
                    </Box>}
                    {isLoading ? <Skeleton width='150px' height='32px'/> :<Typography fontWeight={400} variant="h5" component="h5">Feels like {feelLike}&#176;
                    </Typography>}
                </Box>
            }
        </Box>
    );
};

