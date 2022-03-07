import React from 'react'
import aboutImage from '../images/about.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutImage} alt="about us" />
      </div>
      <div className="about-text">
        <h2>
          We are the best <br /> real Estate Company
        </h2>
        <p>
          Sed odio libero, tempus vel convallis ac, fringilla vehicula leo. In
          iaculis fringilla enim eu dictum. Phasellus fermentum tortor urna, sed
          vulputate eros placerat vel.{' '}
        </p>
        <button>View More Details</button>
      </div>
    </div>
  )
}

export default About
