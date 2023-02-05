import {createSlice} from "@reduxjs/toolkit";
import {getWeatherHourlyAndDailyType, getWeatherOneType} from "../types";
import {weatherThunk} from "../thunk/weatherThunk";
import {weatherHourlyAndDailyThunk} from "../thunk/weatherHourlyAndDailyThunk";

const initialState = {
    weather: {} as getWeatherOneType,
    weatherHourlyAndDaily:{} as getWeatherHourlyAndDailyType,
    isLoadingWeather:false,
    isLoadingWeatherHourlyAndDaily:false,
    error:'',
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setError:(state, action)=>{
            state.error = action.payload
    },
        setLoading:(state, action)=>{
            state.isLoadingWeather = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(weatherThunk.pending, (state, action) => {
            state.isLoadingWeather = true
        })
        builder.addCase(weatherThunk.fulfilled, (state, action) => {
            state.weather = action.payload
            state.isLoadingWeather = false
        })
        builder.addCase(weatherThunk.rejected, (state, action) => {
            state.isLoadingWeather = false
            state.error = action.payload as string
        })
        builder.addCase(weatherHourlyAndDailyThunk.pending, (state, action) => {
            state.isLoadingWeatherHourlyAndDaily = true
        })
        builder.addCase(weatherHourlyAndDailyThunk.fulfilled, (state, action) => {
            state.weatherHourlyAndDaily = action.payload
            state.isLoadingWeatherHourlyAndDaily = false
        })
        builder.addCase(weatherHourlyAndDailyThunk.rejected, (state, action) => {
            state.isLoadingWeatherHourlyAndDaily = false
            state.error = action.payload as string
        })
    }
})
export const weatherReducer = weatherSlice.reducer
export const weatherActions = weatherSlice.actions
