import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import '../Carousel/style.css'
export const CarouselShow = ()=>{
  return(<>
  <Container maxWidth='md'>
        <Box sx={{padding:'30px'}} width='100%' height='30%'>
            <Carousel className='main-carousel' >
                {CarouselImage.map((item, index) => <div key={index}><img src={`${item.path}`}  /><p className='legend'>{item.legend}</p></div>)}      
            </Carousel>
        </Box>
   </Container>
    </>
  )
}
const CarouselImage = [
    {  
    path:'/img/funcionariodois.jpeg',
    legend:'Inspeção de segurança',
    
    
},
{
    path:'/img/caixaderegistro2.jpeg',
    legend:'registros industriais',
    
},
{
    path:'/img/fogaoindustrial.jpeg',
    legend:'Fogão do tipo industrial',
  
    
},
{
    path:'/img/detectordevazamento.jpeg',
    legend:'Detecção de vazamento',
    
},
{
    path:'/img/funcionario.jpeg',
    legend:'Checagem de tubulação de gás',
    
},
{
    path:'/img/centraldegas.jpeg',
    legend:'Central de gás padrão',
    
},
{
    path:'/img/testedeestanqueidade.jpeg',
    legend:'Teste de estanqueidade',
    
},
]