import React from "react";
import Nav from "./nav/nav";
import { Outlet } from "react-router";
import styled from 'styled-components';

const Body = styled.div`
display: flex;
`
const SiteContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function Loading(){
    return(
        <h1>LOADING</h1>
    )
}

export default function Root(){
    return(
        <SiteContainer>
        <Nav/>
        <Body>
            <React.Suspense fallback={<Loading/>}>
                <Outlet/>
            </React.Suspense>
        </Body>
        </SiteContainer>
    )
}