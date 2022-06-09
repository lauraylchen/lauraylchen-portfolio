import React from "react";
import frontend from "../images/frontend.png";
import more from "../images/more.png";
import backend from "../images/backend.png";

export default function Technology() {
  return (
    <div id="technology">
      <div className="container">
        <h2>TOOLS THAT I USE</h2>
        <div className="row">
          <div className="col-12 col-lg-4 flip-card">
            <div className="flip-card-inner">
              <div class="flip-card-front">
                <h3>Back-end</h3>
                <img src={backend} alt="Backend"/>
              </div>
              <div class="flip-card-back">
                <ul>
                  <li>ActiveRecord</li>
                  <li>PostgreSQL</li>
                  <li>Rails</li>
                  <li>Ruby</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 flip-card">
            <div className="flip-card-inner">
              <div class="flip-card-front">
                <h3>Front-end</h3>
                <img src={frontend} alt="Frontend"/>
              </div>
              <div class="flip-card-back">
                <ul>
                  <li>Bootstrap</li>
                  <li>CSS</li>
                  <li>Figma</li>
                  <li>HTML</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>SASS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 flip-card">
            <div className="flip-card-inner">
              <div class="flip-card-front">
                <h3>Other Tools and API</h3>
                <img src={more} alt="More"/>
              </div>
              <div class="flip-card-back">
                <ul>
                  <li>Cloudinary</li>
                  <li>Gatsby</li>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Heroku</li>
                  <li>Mapbox</li>
                  <li>Npm</li>
                  <li>VSCode</li>
                  <li>Webpack</li>
                  <li>Yarn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
