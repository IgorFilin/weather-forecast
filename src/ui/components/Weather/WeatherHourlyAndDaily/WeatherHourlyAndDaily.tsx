import React, {useEffect} from 'react';
import {Box, Paper, Skeleton, Typography} from "@mui/material";
import {useAppDispatch} from "../../../../utils/hooks/useAppDispatch";
import {weatherHourlyAndDailyThunk} from "../../../../bll/thunk/weatherHourlyAndDailyThunk";
import {useAppSelector} from "../../../../utils/hooks/useAppSelector";
import {converterUnixAndGetDate} from "../../../../utils/functions/convertedUnixInRealTime";
import moment from "moment";

export const WeatherHourlyAndDaily = () => {

    const weather = useAppSelector(state => state.weatherReducer.weather)
    const weatherHourlyAndDaily = useAppSelector(state => state.weatherReducer.weatherHourlyAndDaily)
    const isLoading = useAppSelector(state => state.weatherReducer.isLoading)

    const dispatch = useAppDispatch()


    const hourly = (weatherHourlyAndDaily?.hourly)
    // moment.unix.format("HH:00")
    console.log(hourly)

    useEffect(() => {
        if(Object.values(weather).length !== 0){
            dispatch(weatherHourlyAndDailyThunk({lat:weather.coord.lat,lon:weather.coord.lon}))
        }

    }, [weather])

    return (
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            width:'80%',
            flexWrap:'wrap',
            gap:'10px',
        }}>
            {hourly?.map(hour => {

                const icon = hour.weather && hour.weather[0].icon
                const temp = Math.round(hour.temp)

                return <Paper sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    width:'100px',
                    height:'100px',
                }}>
                    {isLoading ? <Skeleton width='130px' height='33px'/> :
                        <Typography  fontWeight={500} variant="h5" component="h6">
                            {moment.unix(hour.dt).format("HH:00")}
                        </Typography>}
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        {isLoading ? <Skeleton width='130px' height='33px'/> :
                            <Typography  fontWeight={500} variant="h5" component="h6">
                                {temp}
                            </Typography>}
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather description"
                             width='50px' height='50px'/>
                    </Box>
                </Paper>
            })}
        </Box>
    );
};

