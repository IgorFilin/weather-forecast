import {createTheme, PaletteMode} from "@mui/material";
import {useMemo, useState} from "react";
import {grey} from "@mui/material/colors";


export function useChangeMuiTheme() {

    const [mode, setMode] = useState<PaletteMode>('light');


    const getDesignTokens = (mode: PaletteMode) => ({
        palette: {
            mode,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                            width: '0.9rem',
                        },
                        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                            borderRadius: 8,
                            backgroundColor: '#333333',
                            minHeight: 24,
                            border: '3px solid #f5f5f5',
                        },
                        '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
                            {
                                backgroundColor: grey[600],
                            },
                        '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
                            {
                                backgroundColor: grey[600],
                            },
                        '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
                            {
                                backgroundColor: grey[600],
                            },
                    },
                },
            },
        }})


    const colorMode = useMemo(
        () => ({

            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );


    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

    return {theme, colorMode}
}