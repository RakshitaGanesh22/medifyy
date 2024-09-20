import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function MainBanner(){
    return(
        <Box sx={{
            backgroundColor: theme => theme.palette.secondary.main,
            color:'white',
            width:'100%',
            height:'2.5rem',
            textAlign:'center',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            '@media(max-width:900px)':{
                width:'100%',
                height:'4rem'
            }
        }}>
            <Typography>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</Typography>
        </Box>
    )
}

