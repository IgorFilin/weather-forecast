import React from 'react';
import {Box} from "@mui/material";
import {Header} from "./ui/components/Header/Header";
import {Weather} from "./ui/components/Weather/Weather";


function App() {

    return (
        <Box>
            <Header/>
            <Weather/>
        </Box>
    );
}

export default App;
