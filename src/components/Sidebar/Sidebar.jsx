import React, { useEffect } from 'react'
import "./sidebar.scss"
import { HiCubeTransparent as HiCube } from 'react-icons/hi';
import {GrTwitter, GrGithub} from "react-icons/gr";
import { NavLink } from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai"


const SideBar = (props) => {

  const handleResize = () => {
    if (window.innerWidth > 768) {
      props.toggle()
    } 
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  });   

  const handleClick = (event) => {
    props.toggle();
    props.scrollHandler(event);
  }

  return (
    <div className='sidebar-container'>
      <div className='sidebar-nav-title'>
      <NavLink to="/"  onClick={props.toggle} className='sidebar-nav-title' >0xAspect <HiCube className="sidebar-title-icon" /></NavLink>
      </div>
      <div className='sidebar-nav-wrapper'  >
        <NavLink name="hero"onClick={handleClick} className="sidebar-nav-link" to="/">About Me</NavLink>
        <NavLink name="projects"onClick={handleClick}className="sidebar-nav-link" to="/">Projects</NavLink>
        <NavLink name="contact" onClick={handleClick}className="sidebar-nav-link" to="/">Contact</NavLink>
        <a href= "https://github.com/0xAspect"class='sidebar-nav-link-external'><GrGithub className="sidebar-icon-external"/></a>
        <a href="https://twitter.com/Aspect0x" class='sidebar-nav-link-external'><GrTwitter className="sidebar-icon-external"/></a>
      </div>
      <AiOutlineClose onClick={props.toggle}  className='sidebar-close-icon'/>
    </div>
  )
}

export default SideBar
