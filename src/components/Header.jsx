import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="intro">
        <p>Looking for a Property !</p>
        <h1>
          <span>Buy </span>and <span>Sale </span>Properties
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna
          nisl, condimentum at porttitor vel, mollis vitae magna. Nam non augue
          non leo tristique lacinia id sed mauris. Cras cursus malesuada
          maximus.{' '}
        </p>
        <a href="#" className="header-btn">
          Details
        </a>
      </div>
    </div>
  )
}

export default Header
