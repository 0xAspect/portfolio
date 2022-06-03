import React, { Component } from 'react'
import "./projects.scss"
import img from './145.jpg'
export class Projects extends Component {
  render() {
    return (
      <div className ="container-left">
        <img src={img} className='img-left'></img>
        <h1>Avax Nibblers - Minting Contract</h1>
      </div>
    )
  }
}

export default Projects
