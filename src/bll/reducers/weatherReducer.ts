import {createSlice} from "@reduxjs/toolkit";
import {getWeatherOneType} from "../types";
import {weatherThunk} from "../thunk/weatherThunk";

const initialState = {
    weather: {} as getWeatherOneType
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(weatherThunk.fulfilled, (state, action) => {
            debugger
            state.weather = action.payload
        })
    }
})
export const weatherReducer = weatherSlice.reducer
