import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {getWeatherOneType} from "../types";
import {AxiosError} from "axios";
import {handleAppRequestError} from "../../utils/functions/errorHandler";



export const weatherThunk = createAsyncThunk('weather', async ({lat, lon, currentCity}: { lat?: number, lon?: number,currentCity?:string },thunkAPI) => {
    try {
        const response = await api.getCurrentWeather({lat, lon ,currentCity})
        return response
    } catch (e) {
        return thunkAPI.rejectWithValue(handleAppRequestError(e));
    }
})