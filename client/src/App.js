import React from 'react';
import { Box, Paper } from '@mui/material'
import Navbar from './components/navegation/Appbar';
import Router from './router';
import Theme from './theme';

function App() {
 
  return (
    <Theme>
      
      <Paper sx={{ width: '100%' }}>
        <Box >
          <Navbar />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Router />
        </Box>
      </Paper>
    </Theme>
  );
}

export default App;
