import React from "react";
import fetch from "isomorphic-unfetch";

const About = props => {
  return (
    <div>
      <p>
        Helloooo!! from <strong>{props.name}</strong>
      </p>
    </div>
  );
};

About.getInitialProps = async function() {
  // this is our data route
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();
  // get initial props always needs to return an object
  return data;
};

export default About;
