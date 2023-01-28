import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    geolocation: {
        lat:0,
        lon:0,
    }

}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{}
})