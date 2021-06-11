import React from "react";
import Typewriter from 'typewriter-effect';
import { Button } from "react-bootstrap";

import "./style.css";

function Open() {
  return (
    <div>
      <div className="type" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("Oh, Hello! I Didn't see you there ...")
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('Would you like to...')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('Find Joy In Your Work? ...')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('Tap the button!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      
      
  }}
/>
</div>
<div className="button" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
<Button  className="btn btn-secondary btn-lg " href="#Home" role="button"> Let's Begin </Button>
</div>
</div>
  )}

  export default Open;