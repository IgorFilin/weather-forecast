import React from 'react';
import {weatherThunk} from "../../../../bll/thunk/weatherThunk";
import {useAppGeolocation} from "../../../../utils/hooks/useAppGeolocation";
import {Box, Icon, IconButton, InputAdornment, SvgIcon, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import {useInput} from "../../../../utils/hooks/useInput";
import {useAppDispatch} from "../../../../utils/hooks/useAppDispatch";
import compass from './../../../../assets/svg/compass.svg'

export const SearchLocation = () => {

    const searchLocation = useAppGeolocation(weatherThunk)

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
            <Icon onClick={searchLocation} sx={{
                width: '70px',
                height: '70px',
                cursor: 'pointer',
            }}>
                <img src={compass}/>
            </Icon>
            <TextField
                sx={{
                    maxWidth: '300px',
                }}
                {...cityTitleAndHandlerObj}
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

