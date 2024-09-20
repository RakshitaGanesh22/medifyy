import { Grid2, Card, CardContent, CardMedia, Typography,Box } from "@mui/material";
import Blog from "../asset/blog.png";
import image from "../asset/smallDoc.png";
import useMediaQuery from '@mui/material/useMediaQuery';
export default function LatestNews() {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const blogs = [
        {image:Blog,type:"Medical",
            Date:"March 31, 2022",
            dic:"6 Tips To Protect Your Mental Health When You’re Sick",
            sDoc:image,
            name:"Rebecca Lee"},
        {image:Blog,type:"Medical",
            Date:"March 31, 2022",
            dic:"6 Tips To Protect Your Mental Health When You’re Sick",
            sDoc:image,
            name:"Rebecca Lee"},
        {image:Blog,type:"Medical",
            Date:"March 31, 2022",
            dic:"6 Tips To Protect Your Mental Health When You’re Sick",
            sDoc:image,
            name:"Rebecca Lee"}
    ]
    function CardMaker(props){
        const {image,type,Date,dic,sDoc,name} = props;
        return(
            <Card sx={{width:isSmallScreen?"300px":"370px",margin:"10px",height:isSmallScreen?"350px":"450px",textAlign:"start"}}>
                <CardMedia 
                    component="img" 
                    image={image}
                    sx={{height:isSmallScreen?"200px":"295px",width:"100%"}}
                    />
                <CardContent sx={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                    <Typography color="#77829D">
                        {type}{" "}{Date}
                    </Typography>
                    <Typography color="#1B3C74" sx={{fontWeight:"500"}}>{dic}</Typography>
                    <Typography sx={{display:"flex",gap:"0.5rem",alignItems:"center",textAlign:"start"}}><img src={sDoc} height="20px" width="20px" alt="smallDoc" />{name}</Typography>
                    </CardContent>

            </Card>
        )
    }
    return ( 
        <Box sx={{display:"flex",flexDirection:"column",gap:isSmallScreen?"1rem":"1.6rem",marginBottom:"2rem"}}> 
            <Typography sx={{color:"#2AA7FF",fontWeight:"600",marginTop:"2rem"}}>Blog & News</Typography>
            <Typography variant="h1" color="#1B3C74" sx={{fontWeight:"600"}}>Read Our Latest News</Typography>
        <Grid2 container spacing={2} sx={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            {blogs.map((blog)=>(<CardMaker image={blog.image} type={blog.type} Date={blog.Date} dic={blog.dic} sDoc={blog.sDoc} name={blog.name}/>))}
        </Grid2>
        </Box>  
    )
}