import React, {useEffect} from 'react';
import style from './App.module.css';
import {api} from "./api/api";
import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {setGeolocation} from "./bll/reducers/authSlice";

function App() {

    const dispatch = useDispatch()

    const {coords, getPosition} = useGeolocated({
        positionOptions: {enableHighAccuracy: false}, userDecisionTimeout: 5000, suppressLocationOnMount: true
    });

    const onClickHandler = () => {
        getPosition()
    }

    useEffect(() => {
        if(coords){
            dispatch(setGeolocation({lat:coords.latitude,lon:coords.longitude}))
            api.getCurrentWeather()
                .then((result) => {
                    // console.log(result)
                })
        }
    }, [coords])


    return (
        <div className={style.app}>
            <button onClick={onClickHandler}>Нажми на меня что узнать погоду :)</button>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default App;
