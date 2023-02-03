import React from 'react';
import {Box} from "@mui/material";
import {Header} from "./ui/components/Header/Header";
import {Weather} from "./ui/components/Weather/Weather";
import {SimpleSnackbar} from "./ui/components/SnackBar/SnackBar";
import {Hr} from "./ui/components/Hr/Hr";


function App() {

    return (
        <Box>
            <Header/>
            <Weather/>
            <Hr/>
            <SimpleSnackbar/>
        </Box>
    );
}

export default App;
