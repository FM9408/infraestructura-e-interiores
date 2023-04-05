import React from 'react';
import { Box, Paper } from '@mui/material'
import Navbar from './components/navegation/Appbar';
import Router from './router';
import './App.css';
import Theme from './theme';

function App() {
 
  return (
    <Theme>
      
      <Paper sx={{ width: '100%', backgroundColor: 'red' }}>
        <Box >
          <Navbar />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py: '1%'}}>
          <Router />
        </Box>
      </Paper>
    </Theme>
  );
}

export default App;
