import React from "react";
import joy from './img/joytallpolaroid.PNG';
import "./style.css";


function Home() {
    return (
      <div>
        <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
        <img className="image" src={joy} width="600px" alt="headshot" /> 
        </div>
        {/* <h1></h1> */}
        <p className="bio">
          As a recent graduate of Georgia Tech's Full Stack Web Development bootcamp, I am eager to begin my professional experience in the Tech Industry.
          I have been a professional educator for 12+ years, having experience with Throughout those years I've am certain that my experience of 12 years as a professional educator in the  with a Bachelors of
          Science in Kinesiology, I soon started my teaching journey, as a
          Performing Arts teacher and coordinator for the duration of 13 years! In
          the field of education, we are required to wear many hats. Educators
          must be flexible, juggle multiple concerns at once, and effectively
          communicate with other staff and parents (sometimes irate). In a setting
          where children are top priority, attention to detail is an
          understatement. We must be able to quickly assess any situation and rely
          on critical thinking to utilize the proper strategies and skills to
          solve the problem – professionally and accurately. These skills I have,
          and continue to, successfully develop. It is my belief that these skills
          translate to my next career endeavor - The Tech Industry. As a graduate
          of the Full Stack Web Development BootCamp at Georgia Tech, I'm eager to
          gain experience and continue my learning through Software Engineer
          opportunities!
        </p>
      </div>
    );
  }
export default Home;