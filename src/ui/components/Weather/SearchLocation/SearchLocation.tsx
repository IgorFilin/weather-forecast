import React from 'react';
import {weatherThunk} from "../../../../bll/thunk/weatherThunk";
import {useAppGeolocation} from "../../../../utils/hooks/useAppGeolocation";
import {Box, Icon, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useInput} from "../../../../utils/hooks/useInput";
import {useAppDispatch} from "../../../../utils/hooks/useAppDispatch";
import compass from './../../../../assets/svg/compass.svg'
import {useAppSelector} from "../../../../utils/hooks/useAppSelector";

export const SearchLocation = () => {

    const searchLocation = useAppGeolocation(weatherThunk)

    const isLoading = useAppSelector(state => state.weatherReducer.isLoading)

    const dispatch = useAppDispatch()

    const cityTitleAndHandlerObj = useInput(onEnterHandler)

    function onEnterHandler() {
        const currentCity = cityTitleAndHandlerObj.value.trim()
        dispatch(weatherThunk({currentCity}))
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginRight: '40px'
        }}>
            <IconButton onClick={searchLocation} disabled={isLoading} sx={{
                width: '70px',
                height: '70px',
                cursor: 'pointer',
            }}>
                <img src={compass}/>
            </IconButton>
            <TextField
                sx={{
                    maxWidth: '300px',
                }}
                {...cityTitleAndHandlerObj}
                disabled={isLoading}
                margin='none'
                fullWidth
                placeholder='Search'
                variant='outlined'
                size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

