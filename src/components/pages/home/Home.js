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
      <p className="bio">
        As a recent graduate of Georgia Tech's, Full
        Stack Web Development bootcamp, I am eager to continue my professional
        experience in the Tech Industry. I have a B.S. in Kinesiology, a
        professional teaching certification in Performance Art and Design, and a
        certification in Full Stack Web Development.
        <p></p>I have been a professional educator for 12+ years, having
        experience as a Student Development Coordinator and Performance Art and
        Design Teacher. Through my Educational Leadership graduate studies, I
        was successful in the implementation and facilitation of student success programming and professional
        staff development.
        <p></p>
        In the field of education, we are required to wear many hats. Educators
        must be flexible, juggle multiple concerns at once, and effectively
        communicate with students, team members, and parents (sometimes irate).
        Attention to detail is an understatement in a setting where children
        are top priority. We must be able to quickly assess any situation and
        rely on critical thinking to utilize the proper strategies and skills
        for problem solving – professionally and accurately. These skills I
        have, and continue to, successfully develop.
        <p></p>I am certain that these skills translate well into the Tech
        Industry, and will be an asset to any position, team, and company.
        <p></p>
        <p className="joy">
          Joy <FontAwesomeIcon icon={faHandPeace} />{" "}
        </p>
      </p>
    </div>
  );
}
export default Home;
