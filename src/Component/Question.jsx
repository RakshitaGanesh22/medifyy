import { Grid2, Box, Typography, useMediaQuery, Accordion, AccordionSummary, IconButton, AccordionDetails } from "@mui/material";
import { Add, Remove } from '@mui/icons-material';
import { useState } from "react";
import image from "../asset/image7.png";
import image1 from "../asset/happy2.png";

export default function Question() {
  const isSmallScreen = useMediaQuery("(max-width:1200px)");
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Grid2 container sx={{display:"grid"}}>
       <Box sx={{display:"flex",flexDirection:"column",gap:isSmallScreen?"0.3rem":"0.5rem"}}> 
            <Typography sx={{color:"#2AA7FF",fontWeight:"600"}}>Get Your Answer</Typography>
            <Typography variant="h1" color="#1B3C74" sx={{fontWeight:"600"}}>Frequently Asked Questions</Typography>
        </Box>
      <Grid2 sx={{display:isSmallScreen?"grid":"flex",flexDirection:"row",gap:"2rem",justifyContent:"center",alignItems:"center"}}>
        <Grid2>
          <Box
            component="img"
            src={image}
            sx={{ height: isSmallScreen ? "400px" : "500px", width: isSmallScreen ? "400px" : "530px" }}
            alt="Image description"
          />
          <Box
            component="img"
            src={image1}
            alt="Image description"
            sx={{
              height: "60px",
              width: "60px",
              borderRadius: "80%",
              overflow: "hidden",
              objectPosition: "center",
              objectFit: "cover",
              position: "relative",
              top: "-250px",
              left: "-3rem",
              transform: "translate(-50%, -50%)",
              visibility: isSmallScreen ? "hidden" : "visible"
            }}
          />
        </Grid2>
        <Grid2>
          <Accordion
            expanded={expandedPanel === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{border:"none",boxShadow:"none",height:isSmallScreen?"auto":"80px",width:isSmallScreen?"auto":"500px"}}
          >
            <AccordionSummary
              expandIcon={
                <IconButton sx={{ color: '#2AA7FF',fontWeight:"900" }}>
                  {expandedPanel === 'panel1' ? <Remove /> : <Add />}
                </IconButton>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{color:"#1B3C74",fontWeight:"600"}}>Why choose our medical for your family?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{color:"#1B3C74",fontWeight:"600"}}>Accordion content</Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 2 */}
          <Accordion
            expanded={expandedPanel === 'panel2'}
            onChange={handleChange('panel2')}
            sx={{border:"none",boxShadow:"none",height:isSmallScreen?"auto":"80px",width:isSmallScreen?"auto":"500px"}}
          >
            <AccordionSummary
              expandIcon={
                <IconButton sx={{ color: '#2AA7FF',fontWeight:"900" }}>
                  {expandedPanel === 'panel2' ? <Remove /> : <Add />}
                </IconButton>
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{color:"#1B3C74",fontWeight:"600"}}>Why we are different from others?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{color:"#1B3C74",fontWeight:"600"}}>Accordion content</Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 3 */}
          <Accordion
            expanded={expandedPanel === 'panel3'}
            onChange={handleChange('panel3')}
            sx={{border:"none",boxShadow:"none",height:isSmallScreen?"auto":"80px",width:isSmallScreen?"auto":"500px"}}
          >
            <AccordionSummary
              expandIcon={
                <IconButton sx={{ color: '#2AA7FF',fontWeight:"900" }}>
                  {expandedPanel === 'panel3' ? <Remove /> : <Add />}
                </IconButton>
              }
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography sx={{color:"#1B3C74",fontWeight:"600"}}>Trusted & experience senior care & love</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{color:"#1B3C74",fontWeight:"600"}}>Accordion content</Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 4 */}
          <Accordion
            expanded={expandedPanel === 'panel4'}
            onChange={handleChange('panel4')}
            sx={{border:"none",boxShadow:"none",height:isSmallScreen?"auto":"80px",width:isSmallScreen?"auto":"500px"}}
          >
            <AccordionSummary
              expandIcon={
                <IconButton sx={{ color: '#2AA7FF',fontWeight:"900" }}>
                  {expandedPanel === 'panel4' ? <Remove /> : <Add />}
                </IconButton>
              }
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography sx={{color:"#1B3C74",fontWeight:"600"}}>How to get appointment for emergency</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >Accordion content</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
