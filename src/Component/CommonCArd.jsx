import { Paper, Chip, Card, CardMedia, CardActions, CardContent, Typography, Button, Box, Grid2, useMediaQuery } from "@mui/material";
import hospital from "../asset/hospitalFinal.png";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from "react";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function CommonCard(prop) {
    const navigate = useNavigate();
    console.log(prop.item);
    const ProviderId=prop.item["Provider ID"];
    const hospitalName=prop.item["Hospital Name"];
    const place=prop.item["Address"]+","+prop.item["City"]+","+prop.item["State"];
    const title=prop.item["Hospital Type"];
    const ratings=prop.item["Hospital overall rating"];
    const [click, setClick] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null); // Track the selected day
    const isSmallScreen = useMediaQuery('(max-width:1000px)');
    const[open,setOpen]=useState(false);
    const [time,setTime]=useState(null);
    const [date,setDate]=useState(null);
    const availableDays = [
        { name: "Today", slots: 12 },
        { name: "Tomorrow", slots: 6 },
        { name: "Fri 5th May", slots: 5 },
        { name: "Sat 6th May", slots: 8 },
        { name: "Mon 8th May", slots: 4 },
        { name: "Tue 9th May", slots: 10 }
    ];
    
    
    const availableSlots = {
        "Today": [
            { timeOfDay: "Morning", times: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"] },
            { timeOfDay: "Afternoon", times: ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM"] },
            { timeOfDay: "Evening", times: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"] }
        ],
        "Tomorrow": [
            { timeOfDay: "Morning", times: ["9:00 AM", "9:30 AM", "10:00 AM"] },
            { timeOfDay: "Afternoon", times: ["1:00 PM", "1:30 PM", "2:00 PM"] }
        ],
        "Fri 5th May": [
            { timeOfDay: "Morning", times: ["8:00 AM", "8:30 AM", "9:00 AM"] },
            { timeOfDay: "Afternoon", times: ["12:00 PM", "12:30 PM", "1:00 PM"] }
        ],
        "Sat 6th May": [
            { timeOfDay: "Morning", times: ["7:00 AM", "7:30 AM", "8:00 AM"] },
            { timeOfDay: "Afternoon", times: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"] },
            { timeOfDay: "Evening", times: ["5:00 PM", "5:30 PM", "6:00 PM"] }
        ],
        "Mon 8th May": [
            { timeOfDay: "Morning", times: ["10:00 AM", "10:30 AM", "11:00 AM"] },
            { timeOfDay: "Afternoon", times: ["2:00 PM", "2:30 PM", "3:00 PM"] }
        ],
        "Tue 9th May": [
            { timeOfDay: "Morning", times: ["9:30 AM", "10:00 AM", "10:30 AM"] },
            { timeOfDay: "Afternoon", times: ["12:00 PM", "12:30 PM", "1:00 PM"] },
            { timeOfDay: "Evening", times: ["5:00 PM", "5:30 PM", "6:00 PM"] }
        ]
    };
    function handleSetting(day,time){
        console.log(day,time);
        setDate(day);
        setTime(time);
        const cardData1 = [
            {   id:ProviderId,
                 image: hospital, 
                hospitalName: hospitalName, 
                place: place, 
                Title: title, 
                Fee: "₹500", 
                Avilability: "Available Today", 
                Rating: ratings,
                Time:time,
            Day:day }
        ];
        localStorage.setItem(ProviderId, JSON.stringify(cardData1));
        navigate("/appointment")
    }
    

    const cardData = [
        {   id:ProviderId,
             image: hospital, 
            hospitalName: hospitalName, 
            place: place, 
            Title: title, 
            Fee: "₹500", 
            Avilability: "Available Today", 
            Rating: ratings }
    ];

    const handleClick = () => {
        setOpen(true);
        setClick(true);
        setSelectedDay("Today"); // Default selection for the first day
    };
    function handleClose() {
        setOpen(false);
        setClick(false);
    }

    const handleDayClick = (day) => {
        setSelectedDay(day); // Update selected day
    };

    const renderSlots = (day) => {
        const slotsForDay = availableSlots[day] || [];
        return slotsForDay.map((slot) => (
            <Box key={slot.timeOfDay} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #B3B3B3" }}>
                <Typography>{slot.timeOfDay}:&nbsp;</Typography>
                <Box sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {slot.times.map((time) => (
                        <Button onClick={()=>handleSetting(day,time)}>
                            <Chip key={time} label={time} sx={{ width: "90px", height: "34px", borderRadius: "2px", border: "1px solid #2AA7FF", color: "#2AA7FF", backgroundColor: "white", margin: "0.5rem", fontWeight: "600" }} />
                        </Button>
                        
                    ))}
                </Box>
            </Box>
        ));
    };

    const renderCard = (data) => {
        const { image, hospitalName, place, Title, Fee, Avilability, Rating } = data;
        return (
            <Grid2 item xs={12} sm={6} md={4} sx={{ width: isSmallScreen ? "80%" : "100%", height: isSmallScreen ? "auto" : "268px", boxSizing: "border-box",borderRadius:"1rem" }}>
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
                            <span style={{ color: "#02A401", fontWeight: "700" }}>Free&nbsp;</span> 
                            <span style={{ textDecoration: "line-through" }}>{Fee}</span>&nbsp;&nbsp;Consultation fee at clinic
                        </Typography>
                        <Chip label={Rating} icon={<ThumbUpIcon color="white" fontSize="small" sx={{ width: "12px", height: "11px",color:"white" }} />} sx={{ width: "40px", height: "22px", color: "white", backgroundColor: "#00A500", borderRadius: "2px" }} />
                    </CardContent>
                    <CardActions sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "9rem", gap: "0.8rem" }}>
                        <Typography sx={{ fontWeight: "600", color: "#01A400" }}>{Avilability}</Typography>
                        {!open ?<Button variant="contained" sx={{ background: "#2AA7FF", color: "white" }} onClick={handleClick}>Book FREE Center Visit</Button>:<Button variant="contained" sx={{ background: "#2AA7FF", color: "white" }} onClick={handleClose}>Close</Button>}
                    </CardActions>
                </Card>
            </Grid2>
        );
    };

    return (
        <Box style={{ display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center", alignItems: "center", height: "auto",Padding:"1rem" }}>
            {cardData.map(renderCard)}

            <hr />

            {click && (
                <Box sx={{width: isSmallScreen ? "100%" : "90%",borderRadius:"1rem"}}>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" ,width:isSmallScreen? "100%" : "100%"}}>
                        {availableDays.map((day) => (
                            <Button
                                key={day.name}
                                variant={selectedDay === day.name ? "contained" : "outlined"}
                                onClick={() => handleDayClick(day.name)}
                                sx={{ textTransform: "none",color:"black" ,backgroundColor: selectedDay === day.name ? "#2AA7FF" : "white"}}
                            >
                                <Box sx={{ display: "flex",flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                                    <Typography sx={{ fontWeight: "700" }}>{day.name}</Typography>
                                    <Typography sx={{ fontWeight: "500", color: "#01A400" }}>{day.slots} slots available</Typography>
                                </Box>
                            </Button>
                        ))}
                    </Box>

                    {selectedDay && renderSlots(selectedDay)}
                </Box>
            )}
        </Box>
    );
}
