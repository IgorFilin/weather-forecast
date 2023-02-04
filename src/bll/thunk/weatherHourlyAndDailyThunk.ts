import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {handleAppRequestError} from "../../utils/functions/errorHandler";


export const weatherHourlyAndDailyThunk = createAsyncThunk('weatherHourlyAndDaily', async ({
                                                                                 lat,
                                                                                 lon
                                                                             }: { lat?: number, lon?: number }, thunkAPI) => {
    try {
        const response = await api.getHourlyAndDailyWeather({lat, lon})
        return response
    } catch (e) {
        return thunkAPI.rejectWithValue(handleAppRequestError(e));
    }
})