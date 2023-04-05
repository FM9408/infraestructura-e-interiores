import * as React from 'react';
import {Location, useLocation} from 'react-router-dom'
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NavbarMenu from '../Menus/navbarmenu';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

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
                  { /*<Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
                  </Search>
  */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}