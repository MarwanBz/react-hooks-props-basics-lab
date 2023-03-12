import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the {props.bio} in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* add your <Links /> component here */}
      <Links links={"github,linkedin"} />
    </div>
  );
}

export default About;
