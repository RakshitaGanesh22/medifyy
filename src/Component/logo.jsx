import { Typography, Box, useMediaQuery,Stack,Button } from '@mui/material';
import { Grid2 } from '@mui/material';
import Doctor from "../asset/mainDoctor.png";
export default function Logo(){
    const isSmallScreen = useMediaQuery('(max-width:800px)');
    return(
        <Box sx={{
            display:'flex',
            flexDirection:isSmallScreen?'column':'row',
            justifyContent:'space-around',
            alignItems:'start',
            direction:isSmallScreen?'column':'row',
            width:'100%',
            background:theme => theme.palette.primary.main,
            padding:isSmallScreen?'20px':'50px',
            boxSizing:'border-box',
            
        }}>
            <Grid2 container item xs={12} sm={12} md={6} >
                <Stack direction='column' spacing={2} sx={{
                    alignItems:isSmallScreen?'center':'flex-start',
                    textAlign:isSmallScreen?'center':'left',
                    padding:isSmallScreen?'0':'20px',

                }}>
                <Typography sx={{
                    fontSize:isSmallScreen?'1.2rem':'1.6rem',
                    color:'#102851',
                }}>Skip the travel! Find Online</Typography>
                <Typography variant='h1' sx={{fontWeight:'500'}}>Medical <span style={{color:'#2AA7FF'}}>Centers</span></Typography>
                <Typography color='#5C6169'>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>
                <Button sx={{color:'white',background:'#2AA7FF',
                    width:isSmallScreen?'150px':'200px',
                    height:isSmallScreen?'40px':'50px'}}>Find Centers</Button>
                </Stack>
            </Grid2>
            <Grid2 item  sm={12} md={6} sx={{
                    alignItems:isSmallScreen?'center':'flex-start',
                    textAlign:isSmallScreen?'center':'left',

                }}>
                <img src={Doctor} style={{boxShadow: '0px 15px 20px 0px #00000059'}}alt="mainDoctor" height={isSmallScreen?'600px':'750px'} width={isSmallScreen?'500px':'650px'} />
            </Grid2>
        </Box>
    )
}