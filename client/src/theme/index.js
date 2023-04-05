import React from 'react'
import { createTheme, StyledEngineProvider, CssBaseline, ThemeProvider } from '@mui/material'
import palette from './palette'
import { transitions } from './transitions'
import customShadows from './costumShadows'
import overdrives from './overdrives/index'

const Theme = ({ children }) => {
    const themeOption = React.useMemo(
        () => ({
            palette,
            transitions,
            customShadows: customShadows(),
            shape: {borderRadius: 6}
        }),
        []
    )

    const theme = createTheme(themeOption)
    theme.components = {
        ...overdrives(theme)
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default Theme