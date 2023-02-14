import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    geolocation: {
        lat: 0,
        lon: 0,
    },
    lang: 'en'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeLang: (state, action) => {
          state.lang = action.payload ? 'ru' : 'en'
        }
    },
})
export const authReducer = authSlice.reducer
export const actions = authSlice.actions
