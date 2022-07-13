import React from 'react'
import seamify_landing_page from "../images/projects_screenshots/seamify_landing_page.jpg";
import zoo4u_landing_page from "../images/projects_screenshots/zoo4u_landing_page.png";
import sunnyside_landing_page from "../images/projects_screenshots/sunnyside_landing_page.png";
import pokemon_match_landing_page from "../images/projects_screenshots/pokemon_match_landing_page.png";


export default function ProjectCard() {
  return (
    <div>

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
                Seamify is a web app that pairs users with local seamstresses to give a new life to your old clothes. (Desktop screen only)
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
                Zoo4u is a kick off that is inspired by Airbnb. It allows people to rent and lend out their animals for a period of time. (Desktop screen only)
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
      <div className='row'>
        <div className='col-12 col-lg-6 px-4'>
          <div className='project-card card-left'>
            <div className='landing-image'>
              <a href="https://sunnysideagencychallenge.netlify.app" target="_blank">
                <img src={sunnyside_landing_page} alt="Landing page of Sunnyside Agency" />
              </a>
            </div>
            <div className='p-4 d-flex flex-column justify-content-between web-info'>
              <h3>Sunnyside Agency</h3>
              <p className='web-about'>
                Sunnyside Agency landing page. A creative company of graphic designers and photographers.
              </p>
              <p className='tool-used'>
                React | HTML | CSS | JS | TailwindCSS | Daisy UI | Netlify
              </p>
              <div className='d-flex justify-content-center'>
                <a href='https://sunnysideagencychallenge.netlify.app' target="_blank" className='btn-brown'>VISIT</a>
                <a href='https://github.com/lauraylchen/sunnyside-agency-landing-page' target="_blank" className='btn-brown'>CODE</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 px-4'>
          <div className='project-card'>
            <div className='landing-image'>
              <a href="https://pokemon-match-cards.netlify.app" target="_blank">
                <img src={pokemon_match_landing_page} alt="Landing page of Pokemon Match" />
              </a>
            </div>
            <div className='p-4 d-flex flex-column justify-content-between web-info'>
              <h3>Pokemon Match</h3>
              <p className='web-about'>
                Matching card game with Pokemon theme.
              </p>
              <p className='tool-used'>
                React | HTML | CSS | JS | TailwindCSS | Daisy UI | Netlify
              </p>
              <div className='d-flex justify-content-center'>
                <a href='https://pokemon-match-cards.netlify.app' target="_blank" className='btn-brown'>VISIT</a>
                <a href='https://github.com/lauraylchen/magic-memory' target="_blank" className='btn-brown'>CODE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
