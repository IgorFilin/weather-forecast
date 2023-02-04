import React from 'react';
import {Box} from "@mui/material";
import {Header} from "./ui/components/Header/Header";
import {Weather} from "./ui/components/Weather/Weather";
import {SimpleSnackbar} from "./ui/sharedComponents/SnackBar/SnackBar";


function App() {
    return (
        <Box>
            <Header/>
            <Weather/>
            <SimpleSnackbar/>
        </Box>
    );
}

export default App;
