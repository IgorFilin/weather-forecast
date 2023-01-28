import React, {useEffect} from 'react';
import './App.css';
import {api} from "./api/api";
import {useGeolocated} from "react-geolocated";

function App() {

    const {coords} = useGeolocated({
        positionOptions: {enableHighAccuracy: false,}, userDecisionTimeout: 5000,
    });

    useEffect(() => {
        api.getCurrentWeather()
            .then((result) => {
                console.log(result)
            })

    }, [])

    console.log(coords)
    return (
        <div className="App">

        </div>
    );
}

export default App;
