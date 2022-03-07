import React from 'react'
import AgentBox from './AgentBox'
import agentImage1 from '../images/s1.png'
import agentImage2 from '../images/s2.png'
import agentImage3 from '../images/s3.png'


const Agents = () => {
  return (
    <div className="agent">
      <div className="a-heading">
        <h1>Agents</h1>
        <p>
          Aenean scelerisque tellus vitae velit volutpat
        </p>
      </div>
      <div className='b-container'>
       <AgentBox image={agentImage1} name="Ali"/>
       <AgentBox image={agentImage2} name="Developer"/>
       <AgentBox image={agentImage3} name="Website"/>
      </div>
    </div>
  )
}

export default Agents
