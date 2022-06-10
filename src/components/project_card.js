import React from 'react'
import seamify_landing_page from "../images/seamify_landing_page.jpg";
import zoo4u_landing_page from "../images/zoo4u_landing_page.png";

export default function ProjectCard() {
  return (
    <div className='row'>
      <div className='col-12 col-lg-6 px-4'>
        <div className='project-card card-left'>
          <div className='landing-image'>
            <a href="http://www.seamify.ca" target="_blank">
              <img src={seamify_landing_page} alt="Landing page of Seamify" />
            </a>
          </div>
          <div className='p-4 d-flex flex-column justify-content-between web-info'>
            <h3>Seamify</h3>
            <p className='web-about'>
              Seamify is a web app that pairs users with local seamstresses to give a new life to your old clothes.
            </p>
            <p className='tool-used'>
              Ruby on Rails | HTML | SCSS | JS | Bootstrap | Figma | Heroku | PostgreSQL | Mapbox | Cloudinary
            </p>
            <div className='d-flex justify-content-center'>
              <a href='http://www.seamify.ca' target="_blank" className='btn-brown'>VISIT</a>
              <a href='https://github.com/lauraylchen/seamify' target="_blank" className='btn-brown'>CODE</a>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-6 px-4'>
        <div className='project-card'>
          <div className='landing-image'>
            <a href="https://zoo4u.herokuapp.com" target="_blank">
              <img src={zoo4u_landing_page} alt="Landing page of Zoo4U" />
            </a>
          </div>
          <div className='p-4 d-flex flex-column justify-content-between web-info'>
            <h3>Zoo4U</h3>
            <p className='web-about'>
              Zoo4u is a kick off that is inspired by Airbnb. It allows people to rent and lend out their animals for a period of time.
            </p>
            <p className='tool-used'>
              Ruby on Rails | HTML | SCSS | JS | Bootstrap | Heroku | PostgreSQL | Cloudinary
            </p>
            <div className='d-flex justify-content-center'>
              <a href='https://zoo4u.herokuapp.com' target="_blank" className='btn-brown'>VISIT</a>
              <a href='https://github.com/lauraylchen/zoo4u' target="_blank" className='btn-brown'>CODE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
