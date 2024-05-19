// import React from "react";
import { NavLink } from "react-router-dom"
import './nav.css'

export default function Nav(){

    return(
        <div id="navigation">
        
        <NavLink
            id="homeNav"
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
        <h1 class="Title">William Vanterpool</h1>
        </NavLink>
        <NavLink
            to="/experience"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <h3 class="link">My experience</h3>
        </NavLink>

        <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <h3 class="link">My Projects</h3>
        </NavLink>

        <NavLink
            to="/contact-me"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <h3 class="link">Contact Me</h3>
        </NavLink>
        </div>
        
    )
}