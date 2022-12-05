import "./Navbar.css"
import React, { useState } from "react"
import Logo from "../../data/images/logo.png"
import { Link, NavLink } from "react-router-dom"
import { links } from "../../data/data"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link?.path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                {link?.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
