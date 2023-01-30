import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {QuestionsGeoModal} from "./ui/components/QuestionsGeoModal/QuestionsGeoModal";
import {Weather} from "./ui/components/Weather/Weather";
import {weatherThunk} from "./bll/thunk/weatherThunk";


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
        if (coords) {
                dispatch<any>(weatherThunk({lat: coords.latitude, lon: coords.longitude}))
        }
    }, [coords])

    return (
        <div className={style.app}>
            <QuestionsGeoModal opened={openedModal} acceptClick={acceptClickHandler}
                               notAcceptClick={notAcceptClickHandler}/>
            {!openedModal && <Weather coords={coords}/>}
        </div>
    );
}

export default App;
