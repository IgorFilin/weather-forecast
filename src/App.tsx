import React from 'react';
import {Box} from "@mui/material";
import {Header} from "./ui/components/Header/Header";
import {Weather} from "./ui/components/Weather/Weather";
import {SimpleSnackbar} from "./ui/sharedComponents/SnackBar/SnackBar";
// @ts-ignore
import {Provider as ProviderTranslate} from 'react-translated'
import translation from "./utils/translation";
import {useAppSelector} from "./utils/hooks/useAppSelector";


function App() {

    const land = useAppSelector(state => state.authReducer.lang)

    return (
        <ProviderTranslate language={land} translation={translation}>
        <Box>
            <Header/>
            <Weather/>
            <SimpleSnackbar/>
        </Box>
        </ProviderTranslate>
    );
}

export default App;
