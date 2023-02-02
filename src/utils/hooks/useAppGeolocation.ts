import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {weatherThunk} from "../../bll/thunk/weatherThunk";
import {useAppDispatch} from "./useAppDispatch";
import {AsyncThunk} from "@reduxjs/toolkit";


export function useAppGeolocation(thunk: any ) {

    const dispatch = useAppDispatch()

    const {coords, getPosition} = useGeolocated({
        positionOptions: {enableHighAccuracy: false}, userDecisionTimeout: 5000, suppressLocationOnMount: true
    });

    const searchLocation = () => {
        getPosition()
    }

    useEffect(() => {
        coords && dispatch(thunk({lat:coords.latitude,lon:coords.longitude}))
    }, [coords])

    return searchLocation

}