import React, {useEffect} from 'react';
import style from './App.module.css';
import {api} from "./api/api";
import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {setGeolocation} from "./bll/reducers/authSlice";
import {QuestionsGeoModal} from "./ui/components/QuestionsGeoModal";



function App() {

    const dispatch = useDispatch()

    const {coords, getPosition} = useGeolocated({
        positionOptions: {enableHighAccuracy: false}, userDecisionTimeout: 5000, suppressLocationOnMount: true
    });



    const acceptClickHandler = () => {
        getPosition()
    }

    const notAcceptClickHandler = () => {
        alert('OKEY')
    }

    useEffect(() => {
        if (coords) {
            dispatch(setGeolocation({lat: coords.latitude, lon: coords.longitude}))
            api.getCurrentWeather()
                .then((result) => {
                    // console.log(result)
                })
        }
    }, [coords])


    return (
        <div className={style.app}>
            <QuestionsGeoModal opened={true} acceptClick={acceptClickHandler} notAcceptClick={notAcceptClickHandler}/>
        </div>
    );
}

export default App;
