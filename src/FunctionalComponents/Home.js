import React from "react";

const Home = () => {
  return (
    <div className="home-div" id="home">
      <div>
        <h6> Hi THERE </h6>
        <h5> I AM TIJANI BAMIDELE </h5>
        <h2> A FullStack Web Developer </h2>
        <span> (JavaScript, React, NodeJs) </span>
      </div>
      <img src={require("./image/my-logo.jpg")} alt="" />
    </div>
  );
};

export default Home;
