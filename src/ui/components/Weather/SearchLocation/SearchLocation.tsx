import React from 'react';
import {weatherThunk} from "../../../../bll/thunk/weatherThunk";
import {useAppGeolocation} from "../../../../utils/hooks/useAppGeolocation";
import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import {useInput} from "../../../../utils/hooks/useInput";
import {useAppDispatch} from "../../../../utils/hooks/useAppDispatch";

export const SearchLocation = () => {

    const searchLocation = useAppGeolocation(weatherThunk)

    const dispatch = useAppDispatch()

    const cityTitleAndHandlerObj = useInput(onEnterHandler)

    function onEnterHandler() {
        dispatch(weatherThunk({currentCity:cityTitleAndHandlerObj.value}))
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
        }}>
            <IconButton onClick={searchLocation} aria-label="location">
                <MyLocationIcon fontSize='large'/>
            </IconButton>
            <TextField
                sx={{
                    width: '300px',
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

