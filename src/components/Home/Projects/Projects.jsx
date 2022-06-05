import React, { Component } from 'react'
import Preview from './Preview/Preview.jsx';
import mintImg from "../../../images/7.jpg"
import farmImg from "../../../images/trinket.png"
import stakeImg from "../../../images/cheese.png"
import "./projects.scss"

export class Projects extends Component {
  render() {
    return (
      <>
        <div title="section1" id="section1" className="regular-container"> 
            <div className='projects-content'>
                <h1 className='projects-h1'> Solidity </h1>
                <hr/>
                <p className='projects-p'>Live deployed contracts on Avalanche mainnet and on-going projects:</p>
                <ul className='category-preview'> 
                    <Preview title = "Avax Nibblers Minting Contract" link = "/nibblers-minting" bg = {mintImg}></Preview>
                    <Preview title = "Avax Nibblers Farming Contract" link = "/nibblers-farming" bg = {farmImg}></Preview>
                    <Preview title = "Avax Nibblers Staking Contract" link = "/nibblers-staking" bg = {stakeImg}></Preview>
                    <Preview title = "RatDAO - work in progress" link = "/rat-dao" ></Preview>
                </ul>
            </div>
        </div>
      </>
    )
  }
}

export default Projects
