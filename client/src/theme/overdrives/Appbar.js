export default function AppBar(theme) {
    return {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    position: 'static',
                    width: '100%',
                    display: 'inline-flex',
                    height: 'fit-content',
                   
                    borderRadius: 5,
                    zIndex: 4,
                    transition: `${theme.transitions.create(
                        ['all', 'transform'],
                        {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut
                        }
                    )}`,
                   
                },
                
                
            }
        }
    }
}