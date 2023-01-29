import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";


export const weatherThunk = createAsyncThunk('weather', async ({lat, lon}: { lat: number, lon: number }) => {
    debugger
    try {
        const response = await api.getCurrentWeather({lat, lon})
        return response
    } catch (e) {
        console.warn(e)
    }
})