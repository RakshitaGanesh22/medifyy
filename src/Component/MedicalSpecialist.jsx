import {Card,CardMedia,CardContent,Typography,Box,Grid2} from "@mui/material";
import Slider from "react-slick";
import Doc1 from "../asset/Doc.png";
import Doc2 from "../asset/Doc2.png";
import Doc3 from "../asset/Doc3.png";
import useMediaQuery from '@mui/material/useMediaQuery';
export default function MedicalSpecialist() {
    const doctor = [Doc1, Doc2, Doc3];
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const specialist = ["Dr. Ahmad Khan","Dr. Heena Sachdeva","Dr. Ankur Sharma"];
    const title = ["Neurologist","Orthopadics","Medicine"];
    const DocDetails=[
        {doctor:doctor[0],name:specialist[0],title:title[0]},
        {doctor:doctor[1],name:specialist[1],title:title[1]},
        {doctor:doctor[2],name:specialist[2],title:title[2]},
        {doctor:doctor[0],name:specialist[0],title:title[0]}
    ]
    function CardSection(props){
        const {doctor,name,title}=props;
        return(
            <Grid2 container  xs={12} sm={6} md={4} lg={3}>
            <Card sx={{
                width:"250px",
                height:"350px",
                boxSizing:"border-box",
                display:"flex",
                flexDirection:"column",
                borderRadius:"250px 250px 0px 0px",
                
            }}>
                <CardMedia
                    component="img"
                    image={doctor}/>
                <CardContent>
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <Typography color="#1B3C74" sx={{fontSize:isSmallScreen?"16px":"20px"}}>{name}</Typography>
                        <Typography color="#2AA7FF" sx={{fontSize:isSmallScreen?"10px":"14px"}}>{title}</Typography>
                    </Box>
                </CardContent>
            </Card>
            </Grid2>
        )
    }
    const settings={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <Box  sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: isSmallScreen? "50px" : '5rem',
            alignItems: 'center',
            height: '600px',
            overflowX: 'hidden',// Responsive padding
            boxSizing: 'border-box',
            margintop: isSmallScreen? "50px" : "150px",
            marginBottom:"0px"
             // This hides any overflow in the x-direction
        }}>
        <Typography variant='h1' sx={{fontWeight:"bold",marginTop:isSmallScreen?"10px":"50px",color:"#1B3C74"}}>Our Medical Specialist</Typography>
        <Slider  {...settings} className="doctor-slider">
            {DocDetails.map((doc)=><CardSection key={title} doctor={doc.doctor} name={doc.name} title={doc.title} />)}
        </Slider>
        </Box>
    )
} 