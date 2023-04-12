// src/components/Navbar.js

// try get this working
// https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll

import React, { useState, useEffect } from "react"
import { debounce } from "../utilities/helpers"

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    )

    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    backgroundColor: "grey",
    textAlign: "center",
    transition: "top 0.6s",
  }

  return (
    <div style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}>
      Some Company Inc.
    </div>
  )
}

export default Navbar
