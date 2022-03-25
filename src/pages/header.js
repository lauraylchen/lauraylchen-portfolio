import React from 'react'
import Navbar from "../components/navbar"
import profile from "../images/profile.png"

export default function Header() {
  return (
    <div id="header">
      <Navbar />

      <div id="banner">
        <div className="container">
          <div className='d-flex justify-content-center'>
            <div className='center-content'>
              <h2>Hi, that's Me!</h2>

              <div className='pink-image'>
                <img src={profile} alt="Portrait of Laura"/>

                <div className='vertical-text'>
                  <h3>FULL-STACK</h3>
                  <h1>DEVELOPER</h1>
                </div>
              </div>

              <a className="about-button" href='#about'>
                <p>KNOW MORE</p>
                <p>ABOUT ME</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
