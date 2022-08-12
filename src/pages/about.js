import React from 'react'
import { FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <div id="about" className="container">
      <div className='about-text'>
        <h2>WHO AM I</h2>
        <h1>Laura You-Li Chen</h1>
        <h4>FRONT-END DEVELOPER</h4>
        <p>
          Currently, I am freelancing and helping out as a teacher assistant at Le Wagon bootcamp.
        </p>
        <br />
        <p>
          Newly graduated from Le Wagon bootcamp, I chose web development because
          it requires technology, art and design all at once, which is what I am
          passionate about. At the same time, I strongly believe that any project
          could be developed with teamwork and strong communication.
        </p>
        <br />
        <p>
          From my previous jobs, I have kept my excellent customer service, knowing
          how to work under pressure and being a team player.
        </p>
        <br></br>
        <a href="https://www.linkedin.com/in/lauraylchen/" target="_blank">
          <div className='linkedin-link'>
            <FaLinkedin />
            <p>Checkout my Linkedin Profile</p>
          </div>
        </a>
      </div>
    </div>
  )
}
