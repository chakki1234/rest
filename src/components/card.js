import * as React from 'react';
import Box from '@mui/material/Box';
import '../css/components.css'
import Paragraph from './paragraph';

export default function Card({ propsObj }) {
  return (
        <Box display='flex' className='card' justifyContent='center' alignItems='center'>
            <Box display='flex' className='card-inner'>
               <Box display='flex' className='card-column-1' flexDirection='column' width='50%' height='100%'>
                    <img item src={propsObj.imgUrl1} className='card-image' alt=''/> 
                    <Paragraph heading={propsObj.heading1} content={propsObj.content1}></Paragraph>
               </Box>
               <Box display='flex' className='card-column-2' flexDirection='column' width='50%' height='100%'>
                    <Paragraph heading={propsObj.heading2} content={propsObj.content2}></Paragraph>
                    <img item src={propsObj.imgUrl2} className='card-image' alt=''/> 
                    <img item src={propsObj.imgUrl3} className='card-image' alt=''/> 
               </Box>
            </Box>
        </Box>
    );
}
