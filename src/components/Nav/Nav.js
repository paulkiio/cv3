import React from "react"
import "./Nav.css"

const Nav = () => {
  return (
    <header class="header">
      {/* <h1 class="logo">
        <a href="#">Paul Wathome</a>
      </h1> */}
      <ul class="main-nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default Nav
