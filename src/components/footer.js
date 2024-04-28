import * as React from 'react';
import Box from '@mui/material/Box';
import '../css/components.css'
import logo from '../assets/images/sampleLogo.png'
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
        <Box display='flex' className='footer' justifyContent='center' alignItems='center'>
            <Box display='flex' className='footer-inner' justifyContent='space-between' alignItems='center'>
                <Box display='flex' alignItems='center'>
                    <img item src={logo} className='footer-logo' alt=''/> 
                    <Typography variant="footer" align='center'>
                        Copyright 2024 Anton's Restaurant
                    </Typography>
                </Box>
                <InstagramIcon className='insta-logo'/>
            </Box>
        </Box>
    );
}
