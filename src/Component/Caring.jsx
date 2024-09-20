import {Box, Grid2,Typography,List, ListItem, ListItemText,  IconButton,Avatar} from "@mui/material";
import img from "../asset/image1.png";
import img1 from "../asset/image5.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from "../ThemeProvider";
export default function Caring() {
    const isSmallScreen = useMediaQuery('(max-width:1200px)'); 
    return (
        <Grid2 container spacing={2} sm={6} md={6} lg={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:isSmallScreen?2:10,height:isSmallScreen?"auto":"600px",backgroundColor:theme=>theme.palette.primary.main}}>
            <Grid2 item xs={12} sm={12} md={8} lg={6}>
                <img src={img} alt="image1" style={{height:isSmallScreen?"350px":"480px",width:isSmallScreen?"420px":"520px"}}/>
            </Grid2>
            <Box sx={{ mt: 2, mb: 2 ,textAlign:"start"}}>
                <Typography color="#2AA7FF" sx={{fontSize:isSmallScreen? "0.7rem":"1rem",fontWeight:isSmallScreen? "400":"600",}}>HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
                <Typography color="#1B3C74" variant='h1' sx={{fontWeight:'500'}}>Patient <span style={{color:'#2AA7FF'}}>Caring</span></Typography>
                <Typography color="#77829D" sx={{display:"flex",flexWrap:"wrap",textAlign:"start",mt:2,mb:2}}>Our goal is to deliver quality of care in a courteous, respectful, and <br/>compassionate manner. We hope you will allow us to care for you and <br/>strive to be the first and best choice for healthcare.</Typography>
                
    <List>
      <ListItem color="#1B3C74">
        
      <IconButton
            edge="start"
            sx={{
              '&:hover': { backgroundColor: '#4aa3ff' } // Optional hover effect
            }}
          >
            <Avatar src={img1} sx={{height: "20px",width: "20px",objectFit: "contain"}}/>
          </IconButton>
          <ListItemText primary="Stay Updated About Your Health" sx={{ color: "#1B3C74" }}/>
      </ListItem>
      <ListItem>
        
          <IconButton
            edge="start"
            sx={{
              '&:hover': { backgroundColor: '#4aa3ff' } // Optional hover effect
            }}
          >
            <Avatar src={img1} sx={{height: "20px",width: "20px",objectFit: "contain"}}/>
          </IconButton>
          <ListItemText primary="Check Your Results Online" sx={{ color: "#1B3C74" }}/>
      </ListItem>
      <ListItem>
        
      <IconButton
            edge="start"
            sx={{
              '&:hover': { backgroundColor: '#4aa3ff' } // Optional hover effect
            }}
          >
            <Avatar src={img1} sx={{height: "20px",width: "20px",objectFit: "contain"}}/>
          </IconButton>
          <ListItemText primary="Manage Your Appointments" sx={{ color: "#1B3C74" }}/>
      </ListItem>
    </List>

            </Box>
        </Grid2>
        
    )
}