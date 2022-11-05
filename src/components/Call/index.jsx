import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import tablet from '../../img/tablet.png'
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';

const Item = styled(Paper)(({ theme }) => ({
 backgroundColor:'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginBottom:'30px',
  boxShadow:'none'
}));

export default function Call() {
  return (
    <Container maxWidth='x' sx={{display:'flex', justifyContent:'center', marginTop:'70px'}}>
        <Box>
         <Stack   direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Item><img src={tablet} width='100%'/></Item>

            <Item>
                <Box sx={{color:'#E1E1E6', fontSize:'25px', alignItems:'center'}}>
                <Typography fontWeight='700' color='white' variant='h3'><HandymanIcon sx={{ fontSize: 40 }} />Serviços</Typography>
              <Box textAlign='center' lineHeight='50px' color='#E1E1E6'>
                 <ul>
                    <li>Tubulações de gás.</li>
                    <li>Manutenções preventivas e corretivas em equipamentos e tubulações.</li>
                    <li>Teste de estanqueidade com laudo técnico e ART.</li>
                    <li>Vistorias de segurança.</li>
                    <li>Instalação de equipamentos a gás natural e GLP.</li>
                    <li>Conversão de equipamentos a gás GLP para gás natural.</li>
                </ul>
              </Box>
                </Box>
            </Item>
        </Stack>
        </Box>
     
      </Container>

  );
}