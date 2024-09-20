import { Card, CardMedia, CardContent, Typography, Grid2, Box } from "@mui/material";
import image1 from "../asset/extra1.png";
import image2 from "../asset/extra2.png";
import image3 from "../asset/extra3.png";
import image4 from "../asset/extra4.png";
import { useMediaQuery } from "@mui/material";

export default function OurFamily() {
  const isSmallScreen = useMediaQuery('(max-width:1000px)');
  const images = [image1, image2, image3, image4];
  const cardData = [
    { image: images[0], follow: "5000+", name: "Patients" },
    { image: images[1], follow: "200+", name: "Hospitals" },
    
  ];
  const cardData1=[
    { image: images[2], follow: "1000+", name: "Laboratories" },
    { image: images[3], follow: "700+", name: "Expert Doctors" }
  ]
  function CardSection({ image, follow, name }) {
    return(
        <Card
                sx={{
                    width: isSmallScreen ? '250px' : '250px',
                    height: isSmallScreen ? '300px' : '300px',
                    margin: '10px',
                    display: "flex",
                    gap:"1rem",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    ":hover": { backgroundColor: '#1028511C' }
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    sx={{ width: isSmallScreen ? '70px' : '100px', height: isSmallScreen ? '70px' : '100px', objectFit: "contain",borderRadius: "50%" }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h1" color="#1B3C74" sx={{fontWeight:"600"}}>{follow}</Typography>
                    <Typography component="div" color="#ABB6C7">
                        {name}
                    </Typography>
                </CardContent>
            </Card>
    )
  }
  
  return (
    <Grid2 container sx={{display:"flex",height:"100vh",alignItems:"center",justifyContent:"space-around",background:theme=>theme.palette.primary.main,height:isSmallScreen ? "auto" : "100vh",marginBottom:isSmallScreen ? "0" : "2rem",boxSizing:"border-box"}}>
      <Grid2 item xs={12} sm={12} md={12} lg={6} sx={{ display: "flex"}}>
        <Box sx={{ textAlign: "start", display: "grid", gap: isSmallScreen ? "0rem" : "1rem"}}>
          <Typography 
            color="#2AA7FF" 
            sx={{ 
              fontSize: isSmallScreen ? "0.7rem" : "1rem", 
              fontWeight: isSmallScreen ? "400" : "600" 
            }}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>
          <Typography 
            color="#1B3C74" 
            variant="h1" 
            sx={{ fontWeight: '500' }}>
            Patient <span style={{ color: '#2AA7FF' }}>Our Families</span>
          </Typography>
          <Typography 
            color="#77829D" 
            sx={{ 
              display: "flex", 
              flexWrap: "wrap", 
              textAlign: "start", 
              mt: 2, 
              mb: 2, 
              lineHeight: "2rem", // Adjusting line height to give space around each line
              wordSpacing: "0.05rem" ,
              letterSpacing: "0.05rem",
              alignItems:"center",
              justifyContent:"center" // Optional: to improve word spacing
            }}>
            We will work with you to develop individualised care plans,<br />
            including management of chronic diseases. If we cannot assist,<br />
            we can provide referrals or advice about the type of practitioner<br />
            you require. We treat all enquiries sensitively and in the strictest<br />
            confidence.
          </Typography>
        </Box>
      </Grid2>
      <Box sx={{display:isSmallScreen ? "grid" : "flex",gap:"1rem"}}>
      <Grid2 item xs={12} sm={12} md={12} lg={6} sx={{display:"flex",flexDirection:"column",gap:"1rem",position:isSmallScreen ? "static" : "relative",top:isSmallScreen ? "0rem" : "-2.5rem"}}>
            {cardData.map((item) => (<CardSection key={item.name} image={item.image} follow={item.follow} name={item.name} />))}
      </Grid2>
      <Grid2 item xs={12} sm={12} md={12} lg={6} sx={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            {cardData1.map((item) => (<CardSection key={item.name} image={item.image} follow={item.follow} name={item.name} />))}
      </Grid2>
      </Box>
    </Grid2>
  );
}
