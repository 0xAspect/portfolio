import React from 'react'
import Video from '../../../videos/video.mp4'
import  "./hero.scss"
import { Link as SLink} from "react-scroll";

const Hero = () => {
  return (
    <>
    <div className='hero-container'id="hero" >
      <div className='hero-bg'>
        <video className ="video-bg" autoPlay loop muted src ={Video} type='video/mp4' />
        </div>
        <div className='hero-content'>
          <h1 className='hero-h1'>Solidity/Web3.js Developer </h1>
          <p className='hero-p'>
            Passionate about Web3, NFT and DeFi with previous production-level smart contract design, build and deployment experience. 
          </p>
          <p className='hero-p'>Looking for opportunities in theb blockchain space.</p>
          <SLink     smooth={true}  offset={-70} duration={500} to= "projects" className='main-button'>Projects </SLink>
        </div>
      </div>
      </>
  )
}

export default Hero;