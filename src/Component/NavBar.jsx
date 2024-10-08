import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Stack, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Medify from '../asset/medify.png'; 
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width:900px)'); 

    // Toggle the drawer open/close
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    // Navigation items for larger screens
    const navItems = (
        <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={isSmallScreen ? 1 : 2} sx={{alignItems:isSmallScreen?'center':'center'}}>
            <Button color="black" component="a" href="#home">Find Doctors</Button>
            <Button color="black" component="a" href="#home">Hospitals</Button>
            <Button color="black" component="a" href="#home">Medicines</Button>
            <Button color="black" component="a" href="#home">Surgeries</Button>
            <Button color="black" component="a" href="#home">Software for Provider</Button>
            <Button color="black" component="a" href="#home">Facilities</Button>
            <Button sx={{
                background: theme => theme.palette.secondary.main,
                color: 'white',
                width: '130px',
                height: '40px',
                borderRadius: '0.5rem'
            }} onClick={() => navigate('/appointment')}>My Bookings</Button>
        </Stack>
    );

    // Navigation items for smaller screens (inside the drawer)
    const drawerContent = (
        <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            spacing={2}
            sx={{
                display: 'flex', // Always use 'flex' for Stack
                justifyContent: isSmallScreen ? '' : 'space-around' // Conditional justifyContent
            }}
        >
            
            {navItems}
        </Stack>
    );

    return (
        <AppBar position="static" sx={{ background: "white"}}>
            <Toolbar sx={{ direction:'row', display: 'flex', justifyContent: isSmallScreen?'space-between':'space-around' }}>
            <IconButton onClick={() => navigate('/')} sx={{ height: '2rem', width: '6rem', '@media(max-width:720px)': { height: '1.5rem', width: '5rem' } }}>
                <img src={Medify} alt="medify" height="27px" width="94px" />
            </IconButton>
                {isSmallScreen ? (
                    <>
                        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            {drawerContent}
                        </Drawer>
                    </>
                ) : (
                    drawerContent
                )}
            </Toolbar>
        </AppBar>
    );
}
