import * as React from 'react';
import { Box, Container, Typography} from '@mui/material'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import '../Presentation/style.css'
import cel from '../../img/celular.png'

const Item = styled(Paper)(({ theme }) => ({
    
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none',
    margin:'0px',
  }));
  
export const Presentation = ()=>{
    return(
    <Container maxWidth="lg" sx={{display:'flex', padding:'0px', backgroundColor:'transparent', marginTop:'80px'}} >
        <Stack  direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
  
    <Item sx={{backgroundColor:'transparent'}}>
        <Box  borderRadius='20px' boxShadow=' ' padding='10px 30px' display='flex' justifyContent='center' alignItems='center' >
            <img className='phone' width='300px' src={cel} />
        </Box>
    </Item>
    <Item sx={{backgroundColor:'transparent'}}>
        <Box padding='10px 10px' marginRight='10px' position='relative' display='block' justifyContent='center' alignItems='center' >
            <Typography  color='#E1E1E6' fontWeight='500' variant='h3'>
                Gastécnica
            </Typography>
            <Typography fontWeight='700' color='#FF8C00' variant='h2'>
                O melhor serviço e o melhor atendimento
            </Typography>
            <Typography  fontWeight='500' color='#E1E1E6'>
                A Gastécnica conta com muitos anos de experiência no segmento, 
            desenvolvendo suas atividades sempre com qualidade e segurança. Você também pode ser nosso cliente!
            </Typography>
            <Box display='flex' justifyContent='center' alignItems='center'>
           <PhoneForwardedIcon  sx={{ fontSize: 40, color:'#E1E1E6' }}/>
           <Typography  fontWeight='700' color='#E1E1E6' variant='h4'>
                 (84) 98826-4980
                </Typography>
            </Box>
        </Box>
    </Item>
  
        </Stack>

    </Container>
    )
}