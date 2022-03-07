import React from 'react'

const AgentBox = ({image, name}) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={image} alt="" />
      </div>
      <div className='a-b-text'>
      <h3>{name}</h3>
      <a href='#' className='agent-btn'>Learn More</a>
      </div>
    </div>
  )
}

export default AgentBox
