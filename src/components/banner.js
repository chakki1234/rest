import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../css/components.css'

export default function Banner({ bannerProps }) {
  return (
        <Box display='flex' sx={{backgroundColor: bannerProps.bgColor, minHeight: bannerProps.bannerHeight, width: '100%'}} justifyContent='center' alignItems='center'>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{height: bannerProps.textBoxHeight, width: bannerProps.textBoxWidth, backgroundColor: bannerProps.textBoxBgColor, borderRadius: bannerProps.borderRadius}}>
                <Typography variant="banner" align='center'>
                    {bannerProps.content}
                </Typography>
                { bannerProps.placeButton ? (
                    <Button className='banner-button' variant="outlined">{bannerProps.buttonText}</Button>
                ) : (
                    <></>
                )}
            </Box>
        </Box>
    );
}
