import React from 'react'

export default function Navbar() {
  return (
    <section id="navbar" className="navbar navbar-expand-sm">
      <div className="container justify-content-center">
        <div className="collapse navbar-collapse">
          <a class="navbar-brand" href="#header">
            <img src="../images/logo.png" alt="Laura's Logo" />
          </a>
        </div>
        <div className="navbar-links">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Technologies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
