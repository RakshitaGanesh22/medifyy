import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';

     const theme=createTheme({
        palette:{
           primary:{
            main: 'rgba(232, 241, 255, 0.47)',
           } ,
           secondary:{
            main:'#2AA8FF',
           },
           custom:{
            main:'#1B3C74',
           }
        },
        typography:{
            fontFamily:'Poppins,Roboto, Arial, sans-serif',
            h1:{
                fontSize:'3.5rem',
                '@media(max-width:720px)':{
                    fontSize:'2.5rem'
                }
            },
            h2:{
                fontSize:'3rem',
                '@media(max-width:720px)':{
                    fontSize:'2rem'
                }
            },
            body:{
                fontSize:'1rem',
                '@media(max-width:720px)':{
                    fontSize:'0.6rem'
                }
            }
            
        }
    })
    export default theme;

