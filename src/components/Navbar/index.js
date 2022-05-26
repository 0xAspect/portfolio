import React from 'react';
import styles from "./navbar.scss";
import { FaBars } from 'react-icons/fa';
import { HiCubeTransparent as HiCube } from 'react-icons/hi';


const Navbar = () => {
  return (
    <>
      <nav class="nav">
        
        <div class='nav-link title'>0xAspect <HiCube className="icon" /></div>
        <ul class="nav-menu">
          <li class='nav-link'>About Me</li>
          <li class='nav-link'>Projects</li>
          <li class='nav-link'>Links</li>
          <li class='nav-link'>Contact</li>

        </ul>
        <div class ="bars"><FaBars className='burger-menu' /></div>
      </nav>
    </>
  );
};

export default Navbar;