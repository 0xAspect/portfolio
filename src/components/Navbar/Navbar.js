import React, {useState} from 'react';
import  "./navbar.scss";
import { FaBars } from 'react-icons/fa';
import { HiCubeTransparent as HiCube } from 'react-icons/hi';
import {GrTwitter, GrGithub} from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import {scroller} from 'react-scroll';


const Navbar = () => {
  const [expand, setExpand] = useState(false);

  const toggle = () => {
    setExpand(!expand)
  }

  const projectsScroll = () => {
    setTimeout(()=> scroller.scrollTo("projects", {smooth: true, duration: 500, offset: -50}))
  }
  const heroScroll = () => {
    setTimeout(()=> scroller.scrollTo("hero", {smooth: true, duration: 500, offset: -80}))
  }


  return (
    <>
      <nav className="nav"> 
        <NavLink to="/" className='nav-link-title'>0xAspect <HiCube className="icon" /></NavLink>
        <div class="nav-menu">
        <NavLink className='nav-link'   to= "/" onClick={heroScroll}>About Me </NavLink>
        <NavLink className='nav-link'   to= "/" onClick={projectsScroll}>Projects </NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <a href= "https://github.com/0xAspect"class='nav-link-external'><GrGithub className="icon-external"/></a>
          <a href="https://twitter.com/Aspect0x" class='nav-link-external'><GrTwitter className="icon-external"/></a>
        </div>
        <div className ="bars" onClick={toggle}><FaBars className='burger-menu' /></div>
        
      </nav>
      {expand === true && <Sidebar toggle={toggle} projectsScroll={projectsScroll} heroScroll={heroScroll}></Sidebar>}
    </>
  );
};

export default Navbar;