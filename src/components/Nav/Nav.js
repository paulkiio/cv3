import React from "react"
import "./Nav.css"
import NavLink from "./NavLink"

const Nav = () => {
  return (
    <header class="header">
      <ul class="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/">Contact</NavLink>
      </ul>
    </header>
  )
}

export default Nav
