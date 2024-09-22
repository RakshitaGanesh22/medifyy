import { Grid2, Box, Typography, TextField, Button, IconButton, useMediaQuery, Avatar, InputAdornment } from "@mui/material";
import React from "react";
import mob1 from "../asset/mob1.png";
import mob2 from "../asset/mobile.png";
import arrow from "../asset/arrow.png";
import Gplay from "../asset/Gplay.png";
import Appstore from "../asset/Astore.png";
import theme from "../ThemeProvider";
import Footer from "./Footer";

export default function MobileBanner() {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    return (
        <Box>
            <Grid2 container sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", alignItems: "center", justifyContent: "center", background: theme => theme.palette.primary.main }}>
                {!isSmallScreen && (
                    <Grid2 container sx={{ display: "flex", gap: isSmallScreen ? "0rem" : "2rem", alignItems: "center", marginLeft: isSmallScreen ? "0rem" : "5rem", marginRight: isSmallScreen ? "0rem" : "5rem",zIndex:"1" }}>
                        <Grid2 sx={{ marginTop: "10rem", position: "relative", zIndex: "1", left: "8rem" }}>
                            <Box
                                component="img"
                                src={mob2}
                                alt="Mobile preview"
                                sx={{ width: "280px", borderRadius: "55px", height: "500px" }}
                            />
                            <Box
                                component="img"
                                src={mob1}
                                alt="App screen preview"
                                sx={{ width: "260px", height: "470px", borderRadius: "35px", marginLeft: "-270px" }}
                            />
                        </Grid2>
                        <Grid2 sx={{ marginLeft: "0" }}>
                            <Box
                                component="img"
                                src={mob2}
                                alt="Mobile preview"
                                sx={{ width: "280px", borderRadius: "55px", height: "500px" }}
                            />
                            <Box
                                component="img"
                                src={mob1}
                                alt="App screen preview"
                                sx={{ width: "260px", height: "470px", borderRadius: "35px", marginLeft: "-270px" }}
                            />
                        </Grid2>
                        <Box
                            component="img"
                            src={arrow}
                            alt="Arrow pointing"
                            sx={{ height: isSmallScreen ? "3rem" : "10rem", width: isSmallScreen ? "3rem" : "5rem" }}
                        />
                    </Grid2>
                )}
                <Grid2 sx={{ display: "flex", flexDirection: "column", gap: isSmallScreen ? "1rem" : "1.5rem" }}>
                    <Typography variant="h1" sx={{ textAlign: "start", fontWeight: "600", color: "#1B3C74" }}>
                        Download the<br />
                        <span style={{ color: "#2AA7FF", fontWeight: "bold" }}>Medify</span> App
                    </Typography>
                    <Typography sx={{ textAlign: "start", letterSpacing: "0.1rem" }}>Get the link to download the app</Typography>
                    <Box sx={{ textAlign: "start", display: "flex", gap: "1rem" }}>
                        <TextField
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                inputMode: 'numeric', // ensures the numeric keyboard pops up on mobile devices
                                pattern: "[0-9]*", // restricts input to numbers only
                            }}
                            sx={{ width: '300px' }} // Adjust width as needed
                            placeholder="Enter your phone number"
                        />
                        <Button variant="contained" sx={{ backgroundColor: "#2AA7FF", color: "white", width: "120px", height: "55px", borderRadius: "0.5rem", fontWeight: "bold" }}>
                            Send SMS
                        </Button>
                    </Box>
                    <Box sx={{ textAlign: "start" }}>
                        <IconButton>
                            <Avatar src={Gplay} alt="Download on Google Play" sx={{ height: "70px", width: "220px", borderRadius: "8px" }} />
                        </IconButton>
                        <IconButton>
                            <Avatar src={Appstore} alt="Download on the App Store" sx={{ height: "70px", width: "220px", borderRadius: "8px" }} />
                        </IconButton>
                    </Box>
                </Grid2>
            </Grid2>
            <Box sx={{ position: "relative", zIndex: "10000",top:isSmallScreen ? "0rem":"-8rem",overflow:"hidden",clipPath: "inset(0px)"}}>
                <Footer />
            </Box>
        </Box>
    );
}

