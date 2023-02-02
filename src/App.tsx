import React, {useContext, useEffect, useState} from 'react';
import style from './App.module.css';
import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {weatherThunk} from "./bll/thunk/weatherThunk";
import {useChangeMuiTheme} from "./utils/hooks/useChangeMuiTheme";
import {Box, Button, CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext} from "./index";
import {Header} from "./ui/components/Header/Header";


function App() {

    const changeTheme = useContext(ColorModeContext)

    const [openedModal, setOpenedModal] = useState(true)

    const {coords, getPosition} = useGeolocated({
        positionOptions: {enableHighAccuracy: false}, userDecisionTimeout: 5000, suppressLocationOnMount: true
    });

    const dispatch = useDispatch()

    const acceptClickHandler = () => {
        getPosition()
        setOpenedModal(false)
    }

    const notAcceptClickHandler = () => {
        setOpenedModal(false)
    }

    useEffect(() => {
        if (coords) {
            dispatch<any>(weatherThunk({lat: coords.latitude, lon: coords.longitude}))
        }
    }, [coords])


    return (
        <Box>
        <Header/>
        </Box>
    );
}

export default App;
