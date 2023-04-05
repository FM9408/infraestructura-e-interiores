import * as React from 'react';
import { useLocation} from 'react-router-dom'
import { useTheme, AppBar, Toolbar, Box } from '@mui/material';
import NavbarMenu from '../Menus/navbarmenu';




export default function Navbar() {
    const [display, setDisplay] = React.useState(false)
    const theme = useTheme()
    const location = useLocation()
    React.useEffect(() => {
        if (location.pathname === '/') {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }, [location])
   
  return (
      <Box sx={{
          flexGrow: 1, opacity: display === true ? '100%' : '0%', transition: theme.transitions.create(['opacity', 'transform'], {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.enteringScreen
    }) }}>
      <AppBar>
        <Toolbar>
          <NavbarMenu />
                  
        </Toolbar>
      </AppBar>
    </Box>
  );
}