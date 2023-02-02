import React, {FormEvent, useContext} from 'react';
import {Box, IconButton, Paper, Typography} from "@mui/material";
import {MaterialUISwitch} from '../../../utils/functions/MaterialUISwitch';
import {ColorModeContext} from "../../../index";

interface IHeader {

}

export const Header: React.FC<IHeader> = () => {

    const [checked, setChecked] = React.useState(false);

    const changeTheme = useContext(ColorModeContext)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        changeTheme.toggleColorMode()
    };




    return (
        <Paper sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems:'center',
            width: '100%',
            height: '60px',
        }}>
            <Typography variant="h5" component="h5"></Typography>
            <IconButton color="primary">
                <MaterialUISwitch checked={checked} onChange={handleChange}  size='small' sx={{m: 1}}/>
            </IconButton>
        </Paper>
    );
};

