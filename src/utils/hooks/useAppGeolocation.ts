import {useGeolocated} from "react-geolocated";
import {useEffect} from "react";
import {useAppDispatch} from "./useAppDispatch";
import {weatherActions} from "../../bll/reducers/weatherReducer";


export function useAppGeolocation(thunk: any ) {

    const dispatch = useAppDispatch()

    const {coords, getPosition} = useGeolocated({
        positionOptions: {enableHighAccuracy: false}, userDecisionTimeout: 5000, suppressLocationOnMount: true
    });

    const searchLocation =  () => {
        getPosition()
        dispatch(weatherActions.setLoading(true))
    }

    useEffect(() => {
        coords && dispatch(thunk({lat:coords.latitude,lon:coords.longitude}))
    }, [coords])

    return searchLocation

}