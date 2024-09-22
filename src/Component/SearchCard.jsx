import { Grid2, Box, TextField, Autocomplete, InputAdornment, Button, CardMedia, Card, CardContent, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState, useContext } from "react";
import image1 from "../asset/doctor.png";
import image2 from "../asset/lab.png";
import image3 from "../asset/hospital.png";
import image4 from "../asset/tab.png";
import image5 from "../asset/ambulance.png";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LocationContext } from "../Location";

export default function SearchCard() {
  const { state, setState, city, setCity, stateName, setStateName, cityName, setCityName,cardData,setCardData } = useContext(LocationContext);
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const navigate = useNavigate();
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
  const cardInfo = [
    { name: 'Doctors', image: image1 },
    { name: 'Labs', image: image2 },
    { name: 'Hospitals', image: image3 },
    { name: 'Medical Store', image: image4 },
    { name: 'Ambulance', image: image5 },
  ];

  useEffect(() => {
    async function fetchData() {
      const Api = "https://meddata-backend.onrender.com";
      try {
        const response = await axios.get(`${Api}/states`);
        setState(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [setState]);  

  async function HandleStateChange(newValue) {
    setStateName(newValue);
    const Api = "https://meddata-backend.onrender.com";
    try {
      const response = await axios.get(`${Api}/cities/${newValue}`);
      setCity(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function HandleCityChange(newValue) {
    setCityName(newValue);
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
    <Box sx={{
      width: "90%", display: "grid", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "50px", marginBottom: "50px",
      boxShadow: '6px 6px 35px 0px #1028511C', backgroundColor: "#FFF", zIndex: "1000",
      borderRadius: "10px", height: isSmallScreen ? 'auto' : '500px', overflowY: "auto", overflowX: "hidden", padding: "20px"
    }}>
      <Grid2 container xs={12} spacing={10} sx={{
        direction: isSmallScreen ? 'column' : 'row',
        alignItems: 'center', width: '100%', display: 'flex', justifyContent: "center",
      }}>
        <Autocomplete
          options={state}
          getOptionLabel={(state) => state}
          sx={{ width: isSmallScreen ? '100%' : '20%' }}
          onChange={(event, newValue) => HandleStateChange(newValue)}
          
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              required
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                    <span style={{ marginLeft: '8px' }}>State</span>
                  </InputAdornment>
                )
              }}
            />
          )}
        />
        <Autocomplete
          options={city}
          getOptionLabel={(city) => city}
          sx={{ width: isSmallScreen ? '100%' : '20%' }}
          onChange={(event, newValue) => HandleCityChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              required
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                    <span style={{ marginLeft: '8px' }}>City</span>
                  </InputAdornment>
                )
              }}
            />
          )}
        />
        <Button variant="contained" startIcon={<SearchIcon />} onClick={HandleSubmit} sx={{
          width: isSmallScreen ? '30%' : '15%', height: isSmallScreen ? '30px' : '50px',
          background: theme => theme.palette.secondary.main,
          color: "white", display: "flex", justifyContent: "flex-start", alignItems: "center",
          paddingLeft: isSmallScreen ? '10px' : '20px', boxSizing: 'border-box',
        }}>
          Search
        </Button>
      </Grid2>
      <Grid2>
        <Typography sx={{ color: "#102851", fontSize: isSmallScreen ? "1rem" : "1.5rem" }}>You may be looking for</Typography>
        <Grid2 container xs={12} sm={6} md={4} spacing={2} sx={{ display: 'flex', justifyContent: "space-around", }}>
          {cardInfo.map((card) => (
            <Card sx={{
              width: isSmallScreen ? '150px' : '200px', height: isSmallScreen ? '100px' : '150px',
              marginTop: isSmallScreen ? '10px' : '20px', marginBottom: isSmallScreen ? '10px' : '20px',
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              ":hover": { backgroundColor: '#1028511C' }, zIndex: "100"
            }}>
              <CardMedia component="img" image={card.image} alt="Image" sx={{
                width: isSmallScreen ? '30px' : '50px', height: isSmallScreen ? '30px%' : '50px', objectFit: "contain"
              }} />
              <CardContent>
                <Typography component="div" color="#ABB6C7">
                  {card.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid2>
      </Grid2>
    </Box>
  );
}
