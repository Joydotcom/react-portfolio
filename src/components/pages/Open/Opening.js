import React from "react";
import Typewriter from 'typewriter-effect';
import { Button } from "react-bootstrap";

import "./style.css";

function Open() {
  return (
    <div>
      <div className="type">
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Find Joy In Your Work ...')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('Find Joy In Your Work ...')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('Find Joy In Your Work ...')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('Find Joy In Your Work ...')
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
<div className="button">
<Button  className="btn btn-secondary btn-lg btn-block" href="#Home" role="button"> Let's Begin </Button>
</div>
</div>
  )}

  export default Open;