import React from "react";
import Footer from "../components/footer";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="contact" className="container">
      <div className="contact-text">
        <h2>CONTACT ME!</h2>
        <h3>Send me a message and I'll get in touch shortly, or feel free to reach out on Twitter/Linkedin</h3>
        <div className="d-flex justify-content-between pt-5">
          <a href="mailto:lauraylchen@hotmail.com" className="btn-white">lauraylchen@hotmail.com</a>
          <div>
            <a href="https://github.com/lauraylchen/" target="_blank" className="fa-icons"><FaGithub /></a>
            <a href="https://twitter.com/lauraylchen/" target="_blank" className="fa-icons"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/lauraylchen/" target="_blank" className="fa-icons"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
