import React from "react"
import "./Nav.css"
import NavLink from "./NavLink"

const Nav = () => {
  return (
    <header className="header">
      <ul className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </header>
  )
}

export default Nav
