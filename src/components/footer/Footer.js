import React from "react";
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
    <footer className="text-center pl-5 pt-3 pb-3">
      <h3 style={{ color: "gray" }}>Contact</h3>
      <h4>
        <a href="mailto:msjoyjackson@gmail.com" style={{ color: "rgb(173, 110, 67)" }}>
          <FontAwesomeIcon icon={faEnvelope} /> msjoyjackson@gmail.com
        </a>
      </h4>
      <h4>
        <a href="tel:+16098922662" style={{ color: "rgb(173, 110, 67)" }}>
          <FontAwesomeIcon icon={faMobile} />   609.892.2662
        </a>
      </h4>
      <h4>
        <a href="https://www.linkedin.com/in/joy-jackson-233b6061/" style={{ color: "rgb(173, 110, 67)" }}>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </h4>
    </footer>
    </div>
  );
}

export default Footer;