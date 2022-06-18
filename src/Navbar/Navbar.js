import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='nav-bar'>
       <div className='nav-left'>Profile</div>
       <div className='nav-right'>
        <img src={require("./image.png")} alt="" />
       </div>
    </div>
  )
}

export default Navbar