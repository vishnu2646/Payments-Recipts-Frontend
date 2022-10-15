import React from 'react'

const TopNav = () => {
  return (
    <div className='topNav'>
        <div className="container">
            <div className="left">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="right">
                <input type="text" name="" className='search form-control' placeholder="Enter text to search" id="" />
                <i className="fa-solid fa-sun"></i>
                <i className="fa-solid fa-palette"></i>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    </div>
  )
}

export default TopNav