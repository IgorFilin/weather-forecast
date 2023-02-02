import React from 'react';
import {weatherThunk} from "../../../../bll/thunk/weatherThunk";
import {useAppGeolocation} from "../../../../utils/hooks/useAppGeolocation";
import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';

export const SearchLocation = () => {

    const searchLocation = useAppGeolocation(weatherThunk)

    return (
        <Box sx={{
            display:'flex',
            alignItems:'center',
            gap:'5px'
        }}>
            <IconButton onClick={searchLocation} aria-label="location">
                <MyLocationIcon fontSize='large'/>
            </IconButton>
            <TextField
                sx={{
                    width:'300px',
                }}
                margin='none'
                fullWidth
                placeholder='Search'
                variant='outlined'
                size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

