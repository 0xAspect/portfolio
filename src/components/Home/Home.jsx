import React from 'react'
import Video from '../../videos/video.mp4'
import  "./home.scss"

const Home = () => {
  return (
    <div className='hero-container'>
      <div className='hero-bg'>
        <video className ="video-bg" autoPlay loop muted src ={Video} type='video/mp4' />
        </div>
        <div className='hero-content'>
          <h1 className='hero-h1'>Solidity/Web3.js Developer </h1>
          <p className='hero-p'>
            Passionate about Web3, NFT and DeFi with previous production-level smart contract building and deployment experience. 
          </p>
          <p className='hero-p'>Looking to move into the blockchain space full-time.</p>
        </div>
      </div>
  )
}

export default Home
