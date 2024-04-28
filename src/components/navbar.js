import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import logo from '../assets/images/sampleLogo.png'
import '../css/components.css'

export default function Navbar() {
  const navbarOptions = ['Home', 'Menu', 'About Us', 'Review Us', 'Contact Us']
  return (
      <Grid container direction='column' alignItems='center' className='navbar-container'>
          <Box item display='flex' flexDirection='row' justifyContent='center'>
            <img item src={logo} className='navBar-logo' alt=''/> 
          </Box>   
        <Divider item orientation='horizontal' variant='middle' className='navBar-divider' flexItem />
        <Box item display='flex' flexDirection='row'>
          {navbarOptions.map((option, index) => (
              <Typography key={index} variant='navbar' className='navbar-options'>
                {option}
              </Typography>
            ))}
        </Box>
      </Grid>
  );
}
