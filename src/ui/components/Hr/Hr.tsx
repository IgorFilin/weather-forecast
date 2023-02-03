import React from 'react';
import {useAppSelector} from "../../../utils/hooks/useAppSelector";

export const Hr = () => {

    const weather = useAppSelector(state => state.weatherReducer.weather)

    if(Object.keys(weather).length === 0){
        return <></>
    }

    return (
        <>
            <hr style={{
                margin:'40px auto 40px',
                borderWidth: '0px 0px 2px',
                borderStyle: 'solid',
                borderColor: 'rgb(66, 66, 66)',
                width: '80%',
            }}/>
            </>
    );
};

