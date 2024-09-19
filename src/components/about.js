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
            <Typography color="primary.main" variant='h1'>William Vanterpool, </Typography>
            <Typography color="primary.main" variant='h1' fontStyle='italic' >Software Engineer</Typography>
            <img src="IMG_1755.jpg" alt="This is me" id="image"/>
            <Typography variant='h2' fontWeight='800'>About Me</Typography>
            <Typography variant='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis arcu sed mollis hendrerit. Aliquam vitae risus mi. Maecenas aliquam semper diam, ut aliquet nisl lacinia vitae. Integer placerat faucibus enim. Nullam viverra sed mi a viverra. Cras sed ornare turpis. Donec quis leo sit amet est ullamcorper rutrum. Suspendisse feugiat dolor ac laoreet pellentesque. Vestibulum a tortor in quam tincidunt efficitur.</Typography>
            <Typography variant='body'>Vivamus tortor felis, vestibulum et dignissim pulvinar, sollicitudin molestie justo. Nullam elit justo, venenatis sit amet ante vel, feugiat convallis nisl. Nullam ante velit, dictum eu leo non, dignissim blandit sapien. Etiam nec sapien non nunc pretium convallis quis non ligula. Ut tellus erat, condimentum in fringilla congue, hendrerit et urna. Phasellus in est ornare, elementum leo quis, hendrerit eros. Donec commodo enim ac faucibus cursus. Suspendisse sodales consequat enim, vel bibendum ante posuere eu. Suspendisse consectetur, velit et condimentum aliquam, turpis augue dictum neque, lobortis vulputate ex ex et justo. Aenean at diam augue. Nunc at ultrices leo. Mauris at nunc eget nibh pharetra elementum. Donec posuere orci eget odio aliquam, venenatis aliquam ligula fermentum. Ut et consequat velit. Maecenas nec nisi vitae risus tempor blandit vel cursus diam. Ut vestibulum tortor a erat tincidunt lobortis.</Typography>
        </AboutContainer>
    )

}