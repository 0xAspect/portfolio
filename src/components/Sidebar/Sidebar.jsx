import React, { useState, useEffect } from 'react'
import styles from "./sidebar.scss"
import { HiCubeTransparent as HiCube } from 'react-icons/hi';
import {GrTwitter, GrGithub} from "react-icons/gr";
import { NavLink } from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai"


const SideBar = (props) => {
  
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    if (props.expand === true) {
      setExpanded(true)
    }
  }

  const handleResize = () => {
    if (window.innerWidth > 768) {
      handleClose()
    } 
  }

  const handleClose = () => {
    setExpanded(false);
  }

  useEffect(() => {
    expand()
    window.addEventListener("resize", handleResize)
  });   

  return (
    <div className={expanded === true ?  'sidebar-container' : 'no-display'}>
      <div className='sidebar-nav-title'>
      <NavLink to="/"  onClick={handleClose} className='sidebar-nav-title' >0xAspect <HiCube className="sidebar-title-icon" /></NavLink>
      </div>
      <div className='sidebar-nav-wrapper' onClick={handleClose} >
        <NavLink className="sidebar-nav-link" to="/">About Me</NavLink>
        <NavLink className="sidebar-nav-link" to="/projects">Projects</NavLink>
        <NavLink className="sidebar-nav-link" to="/contact">Contact</NavLink>
        <a href= "https://github.com/0xAspect"class='sidebar-nav-link-external'><GrGithub className="sidebar-icon-external"/></a>
        <a href="https://twitter.com/Aspect0x" class='sidebar-nav-link-external'><GrTwitter className="sidebar-icon-external"/></a>
      </div>
      <AiOutlineClose onClick={handleClose} className='sidebar-close-icon'/>
    </div>
  )
}

export default SideBar
