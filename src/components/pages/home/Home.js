import React from "react";
import Header from "../../header/Header";
import joy from "./img/joytallpolaroid.PNG";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function Home() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="image" src={joy} width="600px" alt="headshot" />
      </div>
      {/* <h1></h1> */}
      <p
        className="bio"
        style={{
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Passionate, Devoted, and Personable Creative with an extensive
        successful background in Education, Design, and Performance Art.
        Possessing Leadership, Cultural Competence, and Innovative transferable
        skill sets. Combining my Software Engineering certificate and uniquely
        creative professional experiences.
        <br></br>
        <br></br>
        <span className="joy">
          Joy <FontAwesomeIcon icon={faHandPeace} />{" "}
        </span>
      </p>
    </div>
  );
}
export default Home;
