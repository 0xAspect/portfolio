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



  const scrollHandler = (event) => {
    setTimeout(()=> scroller.scrollTo(event.target.name, {smooth: true, duration: 1000, offset: -50}))
  }



  return (
    <>
      <nav className="nav"> 
        <NavLink to="/" className='nav-link-title' onClick={scrollHandler}>0xAspect <HiCube className="icon" /></NavLink>
        <div class="nav-menu">
        <NavLink className='nav-link'   name="hero" to= "/" onClick={scrollHandler}>About Me </NavLink>
        <NavLink className='nav-link'  name="projects" to= "/" onClick={scrollHandler}>Projects </NavLink>
        <NavLink className="nav-link" name="contact" to="/"onClick={scrollHandler}>Contact</NavLink>
          <a href= "https://github.com/0xAspect"class='nav-link-external'><GrGithub className="icon-external"/></a>
          <a href="https://twitter.com/Aspect0x" class='nav-link-external'><GrTwitter className="icon-external"/></a>
        </div>
        <div className ="bars" onClick={toggle}><FaBars className='burger-menu' /></div>
        
      </nav>
      {expand === true && <Sidebar toggle={toggle} scrollHandler={scrollHandler}></Sidebar>}
    </>
  );
};

export default Navbar;