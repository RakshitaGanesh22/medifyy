import { Grid2,Box,TextField, Autocomplete,InputAdornment, Button, CardMedia,Card,CardContent, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationContext } from "../Location";
import { useContext,useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function ABanner() {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const [cityy, setCityy] = useState("");
    const {cardArray, setCardArray} =useContext(LocationContext);
    function handleChange(event) {
        setCityy(event.target.value);
    }
    function handleClick() {
        setCardArray((prevCards) => prevCards.filter((item) => item[0].hospitalName.toLowerCase() == cityy.toLowerCase()));
    }
  return (
    <Box sx={{width:"100%",backgroundColor:"#D9D9D9"}}>
    <Box  sx={{width:"100%",height:"130px",backgroundColor:"#2AA7FF",borderRadius:isSmallScreen?"0.5rem":"0rem 0rem 1rem 1rem",display:"flex",justifyContent:"flex-Start",alignItems:"center",paddingTop:"20px"}}>
    <Typography variant="h1" color="white" sx={{fontWeight:"bold",paddingLeft:"20px"}}>My Bookings</Typography></Box>
    <Box sx={{width:isSmallScreen? "90%":"50%",display:"flex",alignItems:"center",justifyContent:"end",marginTop:"-40px",marginBottom:"50px",boxShadow:'6px 6px 35px 0px #1028511C',backgroundColor:"#FFF",zIndex:"1000",
        borderRadius:"10px",height:isSmallScreen? 'auto' : '100px',overflowY:"auto",overflowX:"hidden",padding:"20px",marginLeft:isSmallScreen? '0px' : '40%',marginRight:isSmallScreen? '0px' : '5%',
    }}>
    <Grid2 container xs={12} spacing={10} sx={{
        direction: isSmallScreen? 'column' : 'row',
        alignItems: 'center',
        width  :'100%',
        display: isSmallScreen?"grid":"flex",

    }}>
            

    <TextField
    placeholder="Search By Hospital"
      variant="outlined"
      onChange={handleChange}
      sx={{width:isSmallScreen? '100%' : '50%'}}
      
    />

<Button variant="contained" onClick={handleClick} startIcon={<SearchIcon />} sx={{width:isSmallScreen? '40%' : '30%',height:isSmallScreen? '30px' : '50px'
    ,background:theme=>theme.palette.secondary.main,
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:isSmallScreen? '10px' : '20px',
    boxSizing
    : 'border-box',
}}>
  Search
</Button>
        </Grid2>
        </Box>
        </Box>
    );
    }
    