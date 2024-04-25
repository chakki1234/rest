import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../css/components.css'

export default function Banner({ content }) {
  return (
        <Box display='flex' className='banner' justifyContent='center' alignItems='center'>
            <Box display='flex' className='banner-inner'>
                <Typography variant="banner" align='center'>
                    {content}
                </Typography>
            </Box>
        </Box>
    );
}
