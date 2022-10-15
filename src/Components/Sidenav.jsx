import React from 'react'

const Sidenav = () => {
  return (
    <div className='sidebar'>
        <div className="d-flex mt-2 justify-content-center bg-white">
            <p>KDDA</p>
        </div>
        <div className="links">
            <li className="link active rounded">
                <i className="fa-solid fa-house"></i>
            </li>
            <li className="link rounded">
                <i className="fa-solid fa-table-cells"></i>
            </li>
            <li className="link rounded">
                <i className="fa-solid fa-gears"></i>
            </li>
            <li className="link rounded">
                <i className="fa-solid fa-right-from-bracket"></i>
            </li>
        </div>
    </div>
  )
}

export default Sidenav