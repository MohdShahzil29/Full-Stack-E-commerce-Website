import React from 'react'
import "./Banner.css" 


const Banner = () => { 
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text">
          <h1 className='h1'>MSM</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            aliquam quas.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2" >Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={'/images/banner-img.png'} alt="" />
      </div>
    </div>
  )
}

export default Banner