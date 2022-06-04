import React, {useState} from 'react'
import  "../home.scss"
import { NavLink } from 'react-router-dom'

const Preview = (props) => {

let url = "/projects" + props.link;

const bgStyle = {
    backgroundImage: `url(${props.bg} )`,   
    backgroundPosition: 'center',
    backgroundSize: "130%",
    backgroundRepeat: 'no-repeat',
}

  return (
    <>
    <NavLink to={url}><li className='post-preview'  style={bgStyle} ><a className='projects-text'>{props.title} </a>
    </li>
    </NavLink>
  
      </>
  )
}

export default Preview
