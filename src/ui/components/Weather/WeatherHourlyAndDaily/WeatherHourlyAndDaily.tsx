import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {useAppDispatch} from "../../../../utils/hooks/useAppDispatch";
import {weatherHourlyAndDailyThunk} from "../../../../bll/thunk/weatherHourlyAndDailyThunk";
import {useAppSelector} from "../../../../utils/hooks/useAppSelector";

export const WeatherHourlyAndDaily = () => {

    const weather = useAppSelector(state => state.weatherReducer.weather)

    const dispatch = useAppDispatch()
    useEffect(() => {
        if(Object.values(weather).length !== 0){
            dispatch(weatherHourlyAndDailyThunk({lat:weather.coord.lat,lon:weather.coord.lon}))
        }

    }, [weather])

    return (
        <Box>

        </Box>
    );
};

