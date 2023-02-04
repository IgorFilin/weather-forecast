import React, {useEffect} from 'react';
import {Box, Skeleton, Typography} from "@mui/material";
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
            justifyContent:'center',
            width:'80%',
            flexWrap:'wrap',
            gap:'10px',
        }}>
            {hourly?.map(hour => {
                return <Box>
                    {isLoading ? <Skeleton width='130px' height='33px'/> :
                        <Typography sx={{
                            color: 'rgb(133,83,83)',
                        }} fontWeight={400} variant="h5" component="h6">
                            {moment.unix(hour.dt).format("HH:00")}
                        </Typography>}
                </Box>
            })}
        </Box>
    );
};

