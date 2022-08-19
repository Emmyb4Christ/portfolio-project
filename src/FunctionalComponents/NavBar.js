import React from "react";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src={require("./image/my-logo.jpg")} alt="" />
      <h1>B.E. Tijani</h1>
      <ul>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#skill">
          <li>Skills</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
