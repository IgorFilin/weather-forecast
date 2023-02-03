import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {actions} from "../../../bll/reducers/weatherReducer";

export const SimpleSnackbar = () => {

    const error = useAppSelector(state => state.weatherReducer.error)

    const dispatch = useDispatch()

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(actions.setError(''));
    };


    return (
            <div>
                <Snackbar
                    open={!!error}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert color='error' onClose={handleClose} severity="error" sx={{width: '100%'}}>
                        {error}
                    </Alert>
                </Snackbar>
            </div>

    );
}