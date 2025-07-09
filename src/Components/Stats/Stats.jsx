import React from 'react'
import './stats.css'

const Stats = () => {
  return (
    <div className='stats'>
        <div className="stats-container container">
            <div className="stats-item">
            <h2>890+</h2>
            <p>Delivered Packages</p>
            </div>
            <div className="stats-item">
            <h2>137+</h2>
            <p>Countries Covered</p>
            </div>
            <div className="stats-item">
            <h2>740+</h2>
            <p>Tons of Goods</p>
            </div>
            <div className="stats-item">
            <h2>600+</h2>
            <p>Satisfied Clients</p>
            </div>
        </div>
    </div>
  )
}

export default Stats