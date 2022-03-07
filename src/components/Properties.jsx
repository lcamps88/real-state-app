import React from 'react'
import PropertiesBox from './PropertiesBox'
import imageProperty1 from '../images/p1.png'
import imageProperty2 from '../images/p2.png'
import imageProperty3 from '../images/p3.png'

const Properties = () => {
  return (
    <div className='product'>
      <div className='p-heading'>
        <h3>Properties</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>Proper
      <div className='product-container'>
        <PropertiesBox image={imageProperty1} name="Palm Beach" price='$250,000'/>
        <PropertiesBox image={imageProperty2} name="Lake Worth" price='$320,000'/>
        <PropertiesBox image={imageProperty3} name="Downtown" price='180,000'/>
      </div>
    </div>
  )
}

export default Properties