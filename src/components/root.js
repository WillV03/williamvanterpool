import React from "react";
import Nav from "./nav";
import { Outlet } from "react-router";
import styled from 'styled-components';

const Body = styled.div`
display: flex;
`

function Loading(){
    return(
        <h1>LOADING</h1>
    )
}

export default function Root(){
    return(
        <>
        <Nav/>
        <Body>
            <React.Suspense fallback={<Loading/>}>
                <Outlet/>
                {/* <h1>Test</h1> */}
            </React.Suspense>
        </Body>
        </>
    )
}