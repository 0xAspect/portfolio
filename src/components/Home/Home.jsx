import React from 'react'
import Video from '../../videos/video.mp4'
import  "./home.scss"
import { Link as SLink, animateScroll as scroll } from "react-scroll";
import Preview from './Preview/Preview';
import mintImg from "../../images/7.jpg"
import farmImg from "../../images/trinket.png"
import stakeImg from "../../images/cheese.png"
const Home = () => {

  
  return (
    <>
    <div className='hero-container'>
      <div className='hero-bg'>
        <video className ="video-bg" autoPlay loop muted src ={Video} type='video/mp4' />
        </div>
        <div className='hero-content'>
          <h1 className='hero-h1'>Solidity/Web3.js Developer </h1>
          <p className='hero-p'>
            Passionate about Web3, NFTs and DeFi with previous full-stack production-level DApp building and deployment experience. 
          </p>
          <p className='hero-p'>Looking for development opportunities in the blockchain space.</p>
          <SLink     smooth={true}  duration={500} to= "section1" className='main-button'>Projects </SLink>
        </div>
      </div>
      <div title="section1" id="section1" className="regular-container"> 
      <div className='projects-content'><h1 className='projects-h1'> Solidity </h1>
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

export default Home
