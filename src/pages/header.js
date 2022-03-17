import React from 'react'
import Navbar from "../components/navbar"
import portrait from "../images/portrait.png"

export default function Header() {
  return (
    <div id="header">
      <Navbar />

      <div id="banner">
        <div className="container">
          <h2>Hi, I am Laura</h2>
          <div className='d-flex justify-content-center'>
            <div className='pink-portrait d-flex justify-content-center'>
              <h3>FULL-STACK</h3>
              <h1>DEVELOPER</h1>
              <img src={portrait} alt="Portrait of Laura"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
