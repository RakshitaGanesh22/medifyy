import { Grid2,Box,TextField, Autocomplete,InputAdornment, Button, CardMedia,Card,CardContent, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationContext } from "../Location";
import { useContext,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function SmallSearchBar() {
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const { state,setState,city,setCity,stateName, setStateName, cityName, setCityName,cardData,setCardData} = useContext(LocationContext);
    useEffect(() => {
        async function fetchData(){
          const Api="https://meddata-backend.onrender.com";
        try{
          const responce=await axios.get(Api+"/states");
          console.log(responce.data);
          setState(responce.data);
        }
        catch(error){
          console.log(error);
        }
        
        }
        fetchData();
        
      },[setState])
      
          
      async function HandleStateChange(newValue) {
        setStateName(newValue);
        const Api = "https://meddata-backend.onrender.com";
        try {
            const response = await axios.get(Api + "/cities/" + newValue);
            console.log(response.data);
            setCity(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const navigate = useNavigate(); 
      function HandleCityChange(newValue){
        setCityName(newValue);
      }
      async function fetchCardData() {
        const api="https://meddata-backend.onrender.com";
        try {
          const response = await axios.get(`${api}/data?state=${stateName}&city=${cityName}`);
          console.log(response.data);
          setCardData(response.data);
      }
      catch(error){
        alert("Error fetching data");
        window.location.reload();
      }
    }
      function HandleSubmit(event) {
        event.preventDefault();
        if (stateName && cityName) {
          fetchCardData();
          navigate('/Booking');
        } else {
          alert('Please select both state and city');
        }
      }
  return (
    <Box sx={{width:"100%",backgroundColor:"#D9D9D9"}}>
    <Box sx={{width:"100%",height:"100px",backgroundColor:"#2AA7FF",borderRadius:isSmallScreen?"0.5rem":"0rem 0rem 1rem 1rem"}}></Box>
    <Box sx={{width:"85%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-40px",marginBottom:"50px",boxShadow:'6px 6px 35px 0px #1028511C',backgroundColor:"#FFF",zIndex:"1000",
        borderRadius:"10px",height:isSmallScreen? 'auto' : '100px',overflowY:"auto",overflowX:"hidden",padding:"20px",marginLeft:isSmallScreen? '0px' : '6%',marginRight:isSmallScreen? '0px' : '5%',
    }}>
    <Grid2 container xs={12} spacing={10} sx={{
        direction: isSmallScreen? 'column' : 'row',
        alignItems: 'center',
        width  :'100%',
        display: 'flex',
        justifyContent:"center",

    }}>
<Autocomplete
  options={state}
  getOptionLabel={(state) => state}
  sx={{width:isSmallScreen? '100%' : '30%'}}
  onChange={(event, newValue) => HandleStateChange(newValue)}
  renderInput={(params) => (
    <TextField
      {...params}
      variant="outlined"
      placeholder="State"
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <LocationOnIcon />
          </InputAdornment>
        )
      }}
    />
  )}
/>
            
<Autocomplete
  options={city}
  getOptionLabel={(city) => city}
  sx={{width:isSmallScreen? '100%' : '30%'}}
  onChange={(event, newValue) => HandleCityChange(newValue)}
  renderInput={(params) => (
    <TextField
      {...params}
      variant="outlined"
      placeholder="City"
      InputProps={{
        ...params.InputProps, 
        startAdornment: (
          <InputAdornment position="start">
            <LocationOnIcon />
          </InputAdornment>
        )
      }}
    />
  )}
/>
<Button variant="contained" startIcon={<SearchIcon />} onClick={HandleSubmit} sx={{width:isSmallScreen? '30%' : '15%',height:isSmallScreen? '30px' : '50px'
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
    