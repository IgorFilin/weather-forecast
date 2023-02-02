import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./bll/store";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useChangeMuiTheme} from "./utils/hooks/useChangeMuiTheme";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

function Main() {

    const {theme, colorMode} = useChangeMuiTheme()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Main/>
);

reportWebVitals();
