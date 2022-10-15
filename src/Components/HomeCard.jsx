import React from 'react'

const HomeCard = () => {
  return (
    <div className='card home-card'>
        <i className="fa-solid fa-chart-pie mb-3"></i>
        <div className="priceDiv mb-3">
            <p className="price">$6,556.55 <span><i className="fa-solid fa-arrows-rotate"></i></span></p>
            <p className="priceTimer">this month</p>
        </div>
        <div className="btn btn-secondary"><i className="fa-solid fa-file-arrow-down"></i> Download Report</div>
    </div>
  )
}

export default HomeCard