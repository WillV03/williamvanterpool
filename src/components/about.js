// import React from "react";
import styled from 'styled-components';
import '../index.css';

export default function About(){

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


    return (
        <AboutContainer>
            <h1>William Vanterpool,</h1>
            <h1>Software Engineer</h1>
            <img src="IMG_1755.jpg" alt="This is me" id="image"/>
            <h1>About</h1>
        </AboutContainer>
    )

}