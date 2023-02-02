import {useGeolocated} from "react-geolocated";
import {useEffect} from "react";
import {useAppDispatch} from "./useAppDispatch";


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