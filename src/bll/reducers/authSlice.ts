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
    reducers:{
        'setGeolocation':(state, action)=>{
            debugger
              state.geolocation.lat = action.payload.lat
              state.geolocation.lon = action.payload.lon
        }
    },
})
export const authReducer = authSlice.reducer
export const setGeolocation = authSlice.actions.setGeolocation