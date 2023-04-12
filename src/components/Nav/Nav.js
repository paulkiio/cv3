import React from "react"
import "./Nav.css"
import NavLink from "./NavLink"

const Nav = () => {
  return (
    <header className="header">
      <ul className="nav-container">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        {/* <li>
          <NavLink to="/blog">Blog</NavLink>
        </li> */}
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Nav
