import React, {useContext} from 'react';
import {IconButton, Paper, Stack, Typography} from "@mui/material";
import {MaterialUISwitch} from '../../../utils/functions/MaterialUISwitch';
import {ColorModeContext} from "../../../index";
import {IOSSwitch} from "../../../utils/functions/MaterialUISwitchIOSStyled";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {actions} from "../../../bll/reducers/authSlice";

interface IHeader {

}

export const Header: React.FC<IHeader> = () => {

    const [checked, setChecked] = React.useState(false);

    const lang = useAppSelector(state => state.authReducer.lang)
    const dispatch = useDispatch()

    const changeTheme = useContext(ColorModeContext)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        changeTheme.toggleColorMode()
    };
    const handleChangeLang = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.changeLang(event.target.checked))
    }


    return (
        <Paper sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems:'center',
            width: '100%',
            height: '60px',
        }}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>EN</Typography>
                <IOSSwitch sx={{ m: 1 }} checked={lang === 'ru'} onChange={handleChangeLang} />
                <Typography>RU</Typography>
            </Stack>
            <IconButton color="primary">
                <MaterialUISwitch checked={checked} onChange={handleChange}  size='small' sx={{m: 1}}/>
            </IconButton>
        </Paper>
    );
};

