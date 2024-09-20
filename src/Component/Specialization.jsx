import { Grid2, CardMedia, Card, CardContent, Typography, Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import D1 from "../asset/D1.png";
import D2 from "../asset/D2.png";
import D3 from "../asset/D3.png";
import D4 from "../asset/D4.png";
import D5 from "../asset/D5.png";
import D6 from "../asset/D6.png";
import D7 from "../asset/D7.png";

const images = [D1, D2, D3, D4, D5, D6, D7];

export default function Specialization() {
    const isSmallScreen = useMediaQuery('(max-width:700px)');

    const cardInfo = [
        { name: 'Dentistry', image: images[0] },
        { name: 'Primary Care', image: images[1] },
        { name: 'Cardiology', image: images[2] },
        { name: 'MRI Resonance', image: images[3] },
        { name: 'Blood Test', image: images[4] },
        { name: 'Psychologist', image: images[5] },
        { name: 'Laboratory', image: images[0] },
        { name: 'X-Ray', image: images[6] },
    ];

    function ShowCards({ name, image }) {
        return (
            <Card
                sx={{
                    width: isSmallScreen ? '150px' : '200px',
                    height: isSmallScreen ? '100px' : '150px',
                    margin: '10px',
                    display: "flex",
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
                    sx={{ width: isSmallScreen ? '30px' : '50px', height: isSmallScreen ? '30px' : '50px', objectFit: "contain",mixBlendMode: "multiply" }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography component="div" color="#ABB6C7">
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Grid2
            container
            alignItems="center"
            justifyContent="center"
            sx={{
                background: theme => theme.palette.primary.main,
                width: "100%", 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: 'center',
                gap: '3rem' ,
                padding: '2rem',
                boxSizing: 'border-box'
            }}
        >
            <Typography sx={{ color: "#102851", fontSize: isSmallScreen ? "1.75rem" : "2.75rem" }}>
            Find by specialisation
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "center", 
                    width: isSmallScreen ? '100%' : '70%',
                    gap: isSmallScreen ? '10px' : '20px' 
                }}
            >
                {cardInfo.map((card, index) => (
                    <ShowCards key={index} name={card.name} image={card.image} />
                ))}
            </Box>
        </Grid2>
    );
}
