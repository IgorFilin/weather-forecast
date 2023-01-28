import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {authReducer} from "./reducers/authSlice";


export const store = configureStore({
    reducer: {authReducer},
    middleware:[thunk],
})

// @ts-ignore
window.store = store