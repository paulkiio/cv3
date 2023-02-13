import React from "react"
import "./Nav.css"
import NavLink from "./NavLink"

const Nav = () => {
  return (
    <header class="header">
      <ul class="main-nav">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/resume">
          <span>Resume</span>
        </NavLink>
        <NavLink to="/work">
          <span>Portfolio</span>
        </NavLink>
        <NavLink to="/">
          <span>Contact</span>
        </NavLink>
      </ul>
    </header>
  )
}

export default Nav
