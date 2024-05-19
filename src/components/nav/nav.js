// import React from "react";
import { NavLink } from "react-router-dom"
import { NavContainer, Navigation} from "./navStyle"
import './nav.css'

export default function Nav(){

    return(
        <NavContainer id="navContainer">
            <Navigation id="navigation">
                <NavLink
                    id="homeLink"
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "inactive"
                    }
                >
                <span class="title">William Vanterpool</span>
                </NavLink>
                <div id="otherLinks">
                    <NavLink
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
                    </NavLink>
                </div>
                
            </Navigation>
        </NavContainer>
        
    )
}