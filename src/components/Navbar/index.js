import React, {useState} from 'react';
import styles from "./navbar.scss";
import { FaBars } from 'react-icons/fa';
import { HiCubeTransparent as HiCube } from 'react-icons/hi';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  }

  return (
    <>
      <nav class="nav">
        
        <div class='nav-link title'>0xAspect <HiCube className="icon" /></div>
        <div class="nav-menu">
          <NavLink className="nav-link" to="/">About Me</NavLink>
          <NavLink className="nav-link" to="/projects">Projects</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <li class='nav-link'>Links</li>
        </div>
        <div class ="bars" onClick={handleClick}><FaBars className='burger-menu' /></div>
      </nav>
    </>
  );
};

export default Navbar;