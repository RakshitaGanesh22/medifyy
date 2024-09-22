import MainBanner from "../Component/Banner";
import NavBar from '../Component/NavBar';
import Question from '../Component/Question';
import MobileBanner from '../Component/smallBanner';
import useMediaQuery from '@mui/material/useMediaQuery';
import ABanner from "../Component/aBanner";
import { Box } from "@mui/material";
import FinalCardComponent from "../Component/FinalCardComponent";

export default function MyBooking() {
    return (
        <Box sx={{background:"#D9D9D9"}}>
            <MainBanner />
            <NavBar />
            <Box sx={{background:"#D9D9D9"}}>
            <ABanner />
            <FinalCardComponent />
            </Box>
            <MobileBanner />
            
        </Box>
    )
}