import React, {useEffect} from 'react';
import {Box, Skeleton, Typography} from "@mui/material";
import {useAppDispatch} from "../../../../utils/hooks/useAppDispatch";
import {weatherHourlyAndDailyThunk} from "../../../../bll/thunk/weatherHourlyAndDailyThunk";
import {useAppSelector} from "../../../../utils/hooks/useAppSelector";
import moment from "moment";

export const WeatherHourlyAndDaily = () => {

    const weather = useAppSelector(state => state.weatherReducer.weather)
    const weatherHourlyAndDaily = useAppSelector(state => state.weatherReducer.weatherHourlyAndDaily)
    const isLoading = useAppSelector(state => state.weatherReducer.isLoadingWeather)

    const dispatch = useAppDispatch()


    const hourly = (weatherHourlyAndDaily?.list)


    useEffect(() => {
        if (Object.values(weather).length !== 0) {
            dispatch(weatherHourlyAndDailyThunk({lat: weather.coord.lat, lon: weather.coord.lon}))
        }

    }, [weather])

    return (
        <Box sx={{
            display: 'flex',
            width: '80%',
            height:'100%',
            gap: '10px',
            overflowX: 'scroll',
        }}>
            {hourly?.map(hour => {

                const icon = hour.weather && hour.weather[0].icon
                const temp = Math.round(hour.main.temp)
                const feelLike = Math.round(hour.main.feels_like)

                return <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize:'20px',
                    justifyContent:'space-between',
                    padding:'10px',
                }}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        {isLoading
                            ?
                            <Skeleton width='130px' height='33px'/>
                            :
                            <Typography fontWeight={500} variant="h5" component="h6">
                                {temp}
                            </Typography>
                        }
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather description"
                             width='50px' height='50px'/>
                    </Box>
                    {isLoading
                        ?
                        <Skeleton width='130px' height='33px'/>
                        :
                        <Typography sx={{
                            whiteSpace:'nowrap'
                        }} fontWeight={400} fontSize={16}>
                            Feels like {feelLike}&#176;
                        </Typography>
                    }
                    {isLoading
                        ?
                        <Skeleton width='130px' height='33px'/>
                        :
                        <Typography fontWeight={500} variant="h5" component="h6">
                            {moment.unix(hour.dt).format("HH:00")}
                        </Typography>}
                </Box>
            })}
        </Box>
    );
};

