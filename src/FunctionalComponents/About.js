import React from "react";

const About = () => {
  return (
    <div className="subHead about" id="about">
      <h3> About me</h3>
      <p>
        Bamidele Tijani is a talented full stack web developer who is interested
        in creating solutions to address global issues. He is also a goal-driven
        individual and an effective tech teacher. He can work and think quickly,
        and he enjoys working in a team because, in his opinion, doing so will
        make work easier, faster, and more accurate with few to no mistakes.
      </p>
      <a href="https://web.facebook.com/tijani.emmanuel.908/">
        <img src={require("./image/facebook-icon.png")} alt="" width={"30px"} />
      </a>
      <a href="https://twitter.com/Bamidele_EmmyB">
        <img src={require("./image/twitter-icon.png")} alt="" width={"30px"} />
      </a>
    </div>
  );
};

export default About;
