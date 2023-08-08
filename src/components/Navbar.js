import React from "react"
import logo from "../assets/images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
    <img src={logo} alt="logo" width={100} height={100}/>
    </nav>    
} 
export default Navbar
