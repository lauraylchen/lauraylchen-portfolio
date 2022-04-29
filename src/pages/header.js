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
              <h3>Hi, that's Me!</h3>

              <div className='profile-image'>
                <img src={profile} alt="Portrait of Laura"/>

                <div className='vertical-text'>
                  <h4>FULL-STACK</h4>
                  <h2>DEVELOPER</h2>
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
