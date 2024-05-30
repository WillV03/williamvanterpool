// import React from "react";
import { NavLink } from "react-router-dom"
import { NavContainer, Navigation} from "./navStyle"
import './nav.css'
import { Link, Typography } from "@mui/material"
import { Box, Button } from "@mui/material"

export default function Nav(){
    return(
        <NavContainer id="navContainer">
            <Navigation id="navigation">
                <Link sx={{
                        fontFamily:'Playfair',
                        alignItems: 'center'
                    }} href="/" underline="hover">
                <Typography variant="navTitle">William Vanterpool</Typography>
                </Link>
                <Box id="otherLinks" sx={{
                    display: 'flex',
                    textAlign: 'right',
                    marginLeft: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}>
                    {/* <NavLink
                        to="/experience"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "inactive"
                        }
                    >
                        <span class="link">My experience</span>
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "inactive"
                        }
                    >
                        <span class="link">My Projects</span>
                    </NavLink>

                    <NavLink
                        to="/contact-me"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "inactive"
                        }
                    >
                        <span class="link">Contact Me</span>
                    </NavLink> */}
                    <Link href='/experience'>
                        <Typography variant="link">
                            My Experience
                        </Typography>
                    </Link>
                    <Link href='/projects'>
                        <Typography variant="link">
                            My Projects
                        </Typography>
                    </Link>
                    <Link href='/contact-me'>
                        <Button variant="contained">
                            Contact Me
                        </Button>
                    </Link>
                </Box>
                
            </Navigation>
        </NavContainer>
        
    )
}