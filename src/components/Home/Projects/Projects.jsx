import React, { Component } from 'react'
import Preview from './Preview/Preview.jsx';
import mintImg from "../../../images/7.jpg"
import farmImg from "../../../images/trinket.png"
import stakeImg from "../../../images/cheese.png"
import {Link as SLink} from "react-scroll"
import "./projects.scss"

export class Projects extends Component {
  render() {
    return (
      <>
        <div title="section1" id="projects" hash="projects" className="regular-container"> 
            <div className='projects-content'>
                <h1 className='projects-h1'> Solidity projects </h1>
                <hr/>
                <p className='projects-p'>Live deployed contracts on Avalanche mainnet and on-going projects:</p>
                <ul className='category-preview'> 
                    <Preview title = "Avax Nibblers Minting Contract" link = "/nibblers-minting" bg = {mintImg}></Preview>
                    <Preview title = "Avax Nibblers Farming Contract" link = "/nibblers-farming" bg = {farmImg}></Preview>
                    <Preview title = "Avax Nibblers Staking Contract" link = "/nibblers-staking" bg = {stakeImg}></Preview>
                    <Preview title = "CoinFlip" link = "/coinflip" ></Preview>
                </ul>
            </div>
            <div className='projects-content' >
                <h1 className='projects-h1'> React.js/Web3.js and other projects </h1>
                <hr/>
                <p className='projects-p'>live and in-development react/web3.js projects:</p>
                <ul className='category-preview'> 
                    <Preview title = "Avax Nibblers Metadata" link = "/nibblers-meta" bg = {mintImg}></Preview>
                    <Preview title = "0x Aspect Portfolio website" link = "/nibblers-farming" bg = {farmImg}></Preview>
                    <Preview title = "Portfolio website" link = "/portfolio" ></Preview>
                </ul>
                <SLink     smooth={true}  offset={-70} duration={500} to= "contact" className='contact-button'>Contact </SLink>

            </div>

        </div>

      </>
    )
  }
}

export default Projects
