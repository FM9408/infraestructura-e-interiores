export default function IconButton(theme) {
    return {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'inherit',
                    color: theme.palette.primary.contrastText,
                    transition: `${theme.transitions.create(
                        ['all', 'transform'],
                        {
                            duration: theme.transitions.duration.short,
                            easing: theme.transitions.easing.easeInOut
                        }
                    )}`,
                    '&:hover': {
                        color: theme.palette.primary.lightest
                    },
                    '%:active': {
                        backgroundColor: theme.palette.action.active
                    }
                },
                SizeLarge: {
                    width: '2em',
                    height: '2em'
                }
            }
        }
    }
}