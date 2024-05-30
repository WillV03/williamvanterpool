// import React from "react";
import styled from 'styled-components';
import '../index.css';
import { Box, Typography } from '@mui/material';

export default function About(){

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


    return (
        <AboutContainer>
            <Typography color="primary.main" variant="h1">William Vanterpool, </Typography>
            <Typography color="primary.main" variant='h1'>Software Engineer</Typography>
            <img src="IMG_1755.jpg" alt="This is me" id="image"/>
            <h1>About</h1>
        </AboutContainer>
    )

}