import React from "react";
import {Box, CardMedia, Grid2,Typography} from "@mui/material";
import  { useContext } from 'react';
import MainBanner from "../Component/Banner";
import NavBar from '../Component/NavBar';
import SmallSearchBar from "../Component/smallSearchBar";
import CommonCard from "../Component/CommonCArd";
import Banner from "../asset/bannn.png";
import Question from '../Component/Question';
import MobileBanner from '../Component/smallBanner';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LocationContext } from '../Location';
export default function BookingPage(){
    const isSmallScreen = useMediaQuery('(max-width:1000px)');
    const { state,setState,city,setCity,stateName, setStateName, cityName, setCityName,cardData,setCardData} = useContext(LocationContext);
    return(
        <Box>
            <MainBanner/>
            <NavBar/>
            <Grid2 sx={{backgroundColor:"#D9D9D9"}}>
            <SmallSearchBar/>
            <Grid2 sx={{display: isSmallScreen ? "grid" : "flex", paddingBottom: "3rem", backgroundColor: "#D9D9D9", justifyContent: "space-around", alignItems: "center"}}>
                <Box sx={{display: "grid", gap: "1rem", padding: "1rem"}}>
                <Typography sx={{textAlign: "start", fontSize: isSmallScreen ? "1.5rem" : "2rem", fontWeight: "bold"}}>
                {cardData && `${cardData.length} medical centers available in ${cityName}`}
                </Typography>
                <Typography sx={{textAlign: "start"}}>
                    Book appointments with minimum wait-time & verified doctor details
            </Typography>
            {cardData && cardData.map((item) => (
            <CommonCard item={item} />
            ))}
        </Box>

  {!isSmallScreen && (
    <CardMedia component="img" image={Banner} sx={{height: "250px", width: "350px", display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "start"}} />
  )}
</Grid2>

            </Grid2>
            
            <Question/>
            <MobileBanner/>
        </Box>
    )
}