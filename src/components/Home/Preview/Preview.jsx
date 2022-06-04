import React from 'react'
import  "../home.scss"

const Preview = (props) => {

let Background=props.bg

const bgStyle = {
    backgroundImage: `url(${Background} )`,   backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

  return (
    <>
    <li className='post-preview' style={bgStyle} ><a className='projects-text'>{props.title} </a>
    </li>
    
  
      </>
  )
}

export default Preview
