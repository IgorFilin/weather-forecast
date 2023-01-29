import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import {api} from "./api/api";
import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {setGeolocation} from "./bll/reducers/authSlice";
import {QuestionsGeoModal} from "./ui/components/QuestionsGeoModal/QuestionsGeoModal";
import {Weather} from "./ui/components/Weather/Weather";


function App() {
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
        debugger
        if (coords) {
            debugger
            dispatch(setGeolocation({lat: coords.latitude, lon: coords.longitude}))
        }
    }, [coords])


    return (
        <div className={style.app}>
            <QuestionsGeoModal opened={openedModal} acceptClick={acceptClickHandler}
                               notAcceptClick={notAcceptClickHandler}/>
            {!openedModal && <Weather/>}
        </div>
    );
}

export default App;
