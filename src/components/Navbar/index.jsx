import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import logo from '../../img/logomenor.png'
import { createTheme } from '@mui/material/styles'
import Navegation from '../Navegation';

export default function Navbar() {
  const theme = createTheme({
    status: {
      danger: '#ffffff',
    },
    palette: {
      primary: {
        main: '#8a1010',
        darker: '#053e85',
      },
      neutral: {
        main: 'rgb(32, 32, 36)',
        contrastText: '#fff',
      },
    },
  });
    return (
      <AppBar theme={theme} color='neutral' position='fixed' padding='0px 30px'>
        <Box sx={{borderBottom:'1px solid #E1E1E6', display: 'flex', alignItems:'center', justifyContent:'space-evenly'}} >
          <Box><img width='160px' src={logo}/></Box>
          
          <Navegation/>
    </Box>
   </AppBar>
    );
  }