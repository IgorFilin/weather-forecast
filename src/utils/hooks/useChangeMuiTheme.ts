import {createTheme, PaletteMode} from "@mui/material";
import {useMemo, useState} from "react";
import {amber, deepOrange, grey} from "@mui/material/colors";


export function useChangeMuiTheme() {
    const [mode, setMode] = useState<PaletteMode>('light');


    const getDesignTokens = (mode: PaletteMode) => ({
        palette: {
            mode,
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

    return {theme,colorMode}
}