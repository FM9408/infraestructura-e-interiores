import {colors, alpha} from '@mui/material'

const PRIMARY = {
    main: colors.amber[500],
    dark: colors.amber[600],
    light: colors.amber[400],
    darker: colors.amber[700],
    lighter: colors.amber[300],
    darkest: colors.amber[800],
    lightest: colors.amber[200],
    contrastText: colors.common.white
}


const palette = {
    primary: PRIMARY,
    background: {
        default: alpha(colors.common.black, 0.01)
    },
    action: {
        active: colors.orange[300],
        hover: alpha(colors.amber[800], 0.7)
    },
    ...colors
}


export default palette