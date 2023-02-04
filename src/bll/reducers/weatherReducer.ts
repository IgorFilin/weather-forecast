import {createSlice} from "@reduxjs/toolkit";
import {getWeatherHourlyAndDailyType, getWeatherOneType} from "../types";
import {weatherThunk} from "../thunk/weatherThunk";
import {weatherHourlyAndDailyThunk} from "../thunk/weatherHourlyAndDailyThunk";

const initialState = {
    weather: {} as getWeatherOneType,
    weatherHourlyAndDaily:{} as getWeatherHourlyAndDailyType,
    isLoading:false,
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
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(weatherThunk.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(weatherThunk.fulfilled, (state, action) => {
            state.weather = action.payload
            state.isLoading = false
        })
        builder.addCase(weatherThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
        builder.addCase(weatherHourlyAndDailyThunk.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(weatherHourlyAndDailyThunk.fulfilled, (state, action) => {
            state.weatherHourlyAndDaily = action.payload
            state.isLoading = false
        })
        builder.addCase(weatherHourlyAndDailyThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
    }
})
export const weatherReducer = weatherSlice.reducer
export const weatherActions = weatherSlice.actions
