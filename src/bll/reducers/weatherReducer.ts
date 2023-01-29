import {createSlice} from "@reduxjs/toolkit";
import {getWeatherOneType} from "../types";
import {weatherThunk} from "../thunk/weatherThunk";

const initialState = {

} as getWeatherOneType

const weatherReducer = createSlice({
    name:'weather',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=> {
        builder.addCase(weatherThunk.fulfilled,(state,action)=>{
            state = action.payload
            debugger
        })
    }
})
export const authReducer = weatherReducer.reducer
