import {createSlice} from "@reduxjs/toolkit";
import {getWeatherOneType} from "../types";
import {weatherThunk} from "../thunk/weatherThunk";

const initialState = {
    weather: {} as getWeatherOneType,
    isLoading:false,
    error:'',
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
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
    }
})
export const weatherReducer = weatherSlice.reducer
