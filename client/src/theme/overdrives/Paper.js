import { alpha } from "@mui/material"

export default function Paper(theme) {
    return {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: alpha(theme.palette.primary.lightest, .2),
                    
                }
            }
        }
    }
}