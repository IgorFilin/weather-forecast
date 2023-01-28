import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";


export const authThunk = createAsyncThunk('auth', async () => {
    try {
        const response = await api.getCurrentWeather()
        return response
    } catch (e) {
        console.warn(e)
    }
})