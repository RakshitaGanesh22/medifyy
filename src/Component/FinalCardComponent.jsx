import { Paper, Chip, Card, CardMedia, CardActions, CardContent, Typography, Button, Box, Grid2, useMediaQuery } from "@mui/material";
import hospital from "../asset/hospitalFinal.png";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState,useContext,useEffect } from "react";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../Location";
export default function FinalCardComponent() {
    const {cardArray, setCardArray} =useContext(LocationContext);
    const isSmallScreen = useMediaQuery('(max-width:1000px)');
    useEffect(() => {
        const loadedCards = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let item = JSON.parse(localStorage.getItem(key));
            if (typeof item === 'object' && item.length > 0) {
                loadedCards.push(item);
            }
        }
        setCardArray(loadedCards);
    }, []);
    function DeleteAppointment(id) {
        setCardArray((prevCards) => prevCards.filter((item) => item[0].id !== id));
        localStorage.removeItem(id); 
    }
    const renderCard = (data) => {
        const { id,image, hospitalName, place, Title,  Rating,Time,Day } = data[0];
        console.log(data);
        return (
            <Grid2 item xs={12} sm={6} md={4} sx={{ width: isSmallScreen ? "80%" : "60%", height: isSmallScreen ? "auto" : "268px", boxSizing: "border-box",borderRadius:"1rem",margin:"1rem"}}>
                <Card sx={{ display: "flex", height: isSmallScreen ? "auto" : "300px", width: "100%", alignItems: "center", justifyContent: "center",borderRadius:"1rem",Padding:"2rem" }}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt="Hospital Image"
                        sx={{ width: isSmallScreen ? "100px" : "124px", height: isSmallScreen ? "100px" : "124px", objectFit: "contain", marginTop: "-6rem" }}
                    />
                    <CardContent sx={{ textAlign: "start", display: "flex",flexDirection: "column", gap: "0.5rem",flexWrap: "wrap" }}>
                        <Typography sx={{ fontWeight: "600", fontSize: isSmallScreen ? "1rem" : "1.2rem", color: "#14BEF0" }}>{hospitalName}</Typography>
                        <Typography>
                            <Typography sx={{ fontWeight: "700", color: "#414146",display:"flex",flexWrap:"wrap",gap:"0.5rem" }}>{place}</Typography>
                            <Typography sx={{ display:"flex",flexWrap:"wrap"}}>{Title}</Typography>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed black", marginBottom: "1rem" }}>
                            
                        </Typography>
                        <Chip label={Rating} icon={<ThumbUpIcon color="white" fontSize="small" sx={{ width: "12px", height: "11px",color:"white" }} />} sx={{ width: "40px", height: "22px", color: "white", backgroundColor: "#00A500", borderRadius: "2px" }} />
                    </CardContent>
                    <CardActions sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",gap:"3rem"}}>
                        <Box  sx={{ display: "flex", justifyContent: "start", alignItems: "start",  gap: "0.8rem" }}>
                        <Chip label={Time} sx={{ backgroundColor: "#00A500", color: "white", borderRadius: "2px" }} />
                        <Chip label={Day} sx={{ backgroundColor: "#00A500", color: "white", borderRadius: "2px" }} />
                        </Box>
                        <Box >
                        <Button onClick={() => {DeleteAppointment(id)}}variant="contained" size="small" sx={{ backgroundColor: "red", color: "white",fontSize: "0.8rem",fontWeight: "600", borderRadius: "2px" }} >Cancel Appointment</Button>
                        </Box>
                    </CardActions>
                </Card>
            </Grid2>
            /*hii*/
        );
    };
    return (
        <Box style={{ display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "start", alignItems: "center", height: "auto",Padding:"1rem",marginBottom:"5rem",backgroundColor:"#D9D9D9" }}>
            {cardArray.map((data) => renderCard(data))}
        </Box>
        );
    
    }
