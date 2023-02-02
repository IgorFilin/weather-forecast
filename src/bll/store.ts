import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {authReducer} from "./reducers/authSlice";
import {weatherReducer} from "./reducers/weatherReducer";


export const store = configureStore({
    reducer: {authReducer,weatherReducer},
    middleware:[thunk],
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch;

// @ts-ignore
window.store = store