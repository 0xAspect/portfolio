import React from 'react'
import Video from '../../videos/video.mp4'
import  "./home.scss"
import { Link as SLink, animateScroll as scroll } from "react-scroll";

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
      <div className='hero-content'><h1 className='projects-h1'> Solidity </h1>
      <div className='category-preview'> asndaskdaskdas</div>
        <h1 className='projects-h1'> React/Web3.js </h1>

</div>

      </div>
  
      </>
  )
}

export default Home
