import React, {useState} from 'react'
import  "./preview.scss"
import { NavLink } from 'react-router-dom'

const Preview = (props) => {

let url = "/projects" + props.link;


  return (
  <>
    <NavLink to={url}>
      <li className='post-preview'  
          style={{backgroundImage: `url(${props.bg} )`}} >
            <a className='projects-text'>{props.title} </a>
      </li>
    </NavLink>
  </>
  )
}

export default Preview
