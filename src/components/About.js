import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img
        src="https://avatars.githubusercontent.com/u/30384731?s=400&u=23ba583ee25295d82ea6723dabd0b912d638d67d&v=4"
        alt="I made this"
      />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
