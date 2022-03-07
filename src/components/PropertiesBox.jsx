import React from 'react'

const PropertiesBox = ({image, price, name}) => {
  return (
    <div className='p-box'>
      <img src={image} alt=''/>
      <p>{name}</p>
      <a href='#' className='price'>{price}</a>
      <a href='#' className='buy-btn'>Add to Cart</a>
    </div>
  )
}

export default PropertiesBox