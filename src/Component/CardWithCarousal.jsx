import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardMedia,Card,CardContent,IconButton,Box, Grid2} from "@mui/material";
import * as React from'react';
import {ArrowForwardIos,ArrowBackIos } from "@mui/icons-material";
import card from "../asset/card1.png";
import "../App.css";
export default function CardWithCarousal() {
    // const NextArrow1 = (props) => {
    //     const{className,style,onClick} = props;
    //     return (
    //         <IconButton
    //             className={className}
    //             style={{ ...style, display: 'block', left: 500, top: 150, color: "black", zIndex: 1 ,}}
    //             onClick={onClick}
    //         >
    //             <ArrowBackIos/>
    //         </IconButton>
    //     );
    // }
    // const PrevArrow1 = (props) => {
    //     const{className,style,onClick}=props;
    //     return(
    //         <IconButton
    //         className={className}
    //         style={{ ...style, display: 'block',left: 10,top: 150, zIndex: 1,color:"white" }}
    //         onClick={onClick}>
                

    //         </IconButton>
    //     )
    // }
    const cardData=[
        {image:card},
        {image:card},
        {image:card},
        {image:card}
    ];
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        initialSlide:0,
        autoplay: true,
        autoplaySpeed: 1000,
        // nextArrow:<NextArrow1 />,
        // prevArrow:<PrevArrow1 />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

 return(
    
    <Slider {...settings} className="slider" >
            {cardData.map((item, index) => (
                <div key={index}>
                    <Card sx={{ width: 400, maxHeight: 200,marginBottom:5,
                     }}>
                        <CardMedia component="img" image={item.image} sx={{ objectFit: "contain" }} />
                    </Card>
                </div>
            ))}
        </Slider>
    
    
 )
}
