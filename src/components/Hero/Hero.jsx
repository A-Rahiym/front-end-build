import React from 'react'
import './Hero.scss'
const Hero = () => {
  return (
    <div className='Hero-section-container'>
      <div className='Hero-section'>
        <h3>Start up</h3>
        <h1>Forget about Code</h1>
        <p>
          Startup Framework gives you complete freedom over your creative <br />
          process — you don’t have to think about any technical aspects. <br />
          There are no limits and absolutely no coding. </p>
        <div className='circle-container'>
        <div className='circle-shape'/>
        <div className='circle-shape hidden'/>
        <div className='circle-shape hidden'/>        
        <div className='circle-shape hidden'/>
        <div className='circle-shape hidden'/>
        <div className='circle-shape hidden'/>
        </div>
        <button>Create an Account</button>
      </div>
    </div>
  )
}

export default Hero