import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../css/components.css'

export default function Paragraph({ heading, content }) {

  return (
        <Box display='flex' flexDirection='column'>
            <Box display='flex' className='paragraph-heading'>
            <Typography className='paragraph-text' variant="paragraphHeading">
                {heading}
            </Typography>
            </Box>
            <Box display='flex' className='paragraph-content'>
            <Typography className='paragraph-text' variant="paragraphContent" align='justify'>
                {content}
            </Typography>
            </Box>
        </Box>
    );
}
