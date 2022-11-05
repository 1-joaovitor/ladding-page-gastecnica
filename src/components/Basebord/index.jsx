import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import logo from '../../img/logomenor.png'
import { createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const backtotop = ()=>{
  window.scrollTo(0,0 )
 
}
export default function Basebord() {
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
      <AppBar theme={theme} color='neutral' position='relative' padding='0px 30px' >
        <Box sx={{borderTop:'1px solid #E1E1E6', display: 'flex', alignItems:'center', justifyContent:'space-evenly'}} >
          <Box><img width='160px' src={logo}/></Box>
          <Box>
          <Button  sx={{color:'white', backgroundColor:'#8B0000',}} variant="contained" onClick={backtotop} endIcon={<KeyboardDoubleArrowUpIcon/>}>
        Volte ao topo
      </Button>
          </Box>
    </Box>
   </AppBar>
    );
  }