import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Link} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  marginRight: theme.spacing(0),
  textAlign: 'center',
  color: '#E1E1E6',
  fontSize:'16px',
  width:'70px',
  
}));

export default function Navegation() {
  return (

    <Box sx={{position:'relative' }} >  
      <Stack   direction="row" spacing={1}>
        <Link color="inherit" target='_blank' href="https://www.youtube.com/channel/UCxmpwaM-avvopEOMuMit2Ag" underline="none"><Item><YouTubeIcon sx={{ fontSize: 30, color:'rgb(187, 0, 0)'}}/></Item></Link>
        <Link target='_blank' color="inherit" href="https://api.whatsapp.com/send?phone=5584988264980&text=Ol%C3%A1%2C%20gast%C3%A9cnica!" underline="none"><Item><WhatsAppIcon sx={{ fontSize: 30, color:'#34af23' }}/></Item></Link>
        <Link target='_blank' color="inherit" href="https://instagram.com/gastecnica_servicos?igshid=NjZiMGI4OTY=" underline="none"><Item ><InstagramIcon sx={{ fontSize: 30, color:'rgb(81, 127, 164)' }}/></Item></Link>
      </Stack>
    </Box>
  );
}



  


  


  
