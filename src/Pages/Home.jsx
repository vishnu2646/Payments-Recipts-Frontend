import React from 'react'
import Cards from '../Components/Cards'
import HomeCard from '../Components/HomeCard'

const Home = () => {
  return (
    <div className='page'>
      <div className="container mt-3">
        <div className="topTitle mb-2">
          <h5 className="title">Overview</h5>
          <div className='toggler'>
            <p className='month active'>Last Month</p>
            <p className='year'>Last Year</p>
          </div>
        </div>
        <div className='d-flex mb-2'>
          <HomeCard />
          <p style={{ width: '100%' }}>Chart</p>
        </div>
        <Cards />
      </div>
    </div>
  )
}

export default Home