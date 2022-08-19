import React from "react";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="col-1">
        <div>
          <h3>
            <img src={require("./image/html-icon.png")} alt="" />
            HTML
          </h3>
          <div className="level">
            <div className="right"></div>
          </div>
          <h3>
            <img src={require("./image/javascript-icon.png")} alt="" />
            JavaScript
          </h3>
          <div className="level">
            <div className="right java"></div>
          </div>
          <h3>
            <img src={require("./image/react-icon.png")} alt="" />
            React
          </h3>
          <div className="level">
            <div className="right react"></div>
          </div>
        </div>
        <div>
          <h3>
            <img src={require("./image/css-icon.png")} alt="" />
            CSS
          </h3>
          <div className="level">
            <div className="right css"></div>
          </div>
          <h3>
            <img src={require("./image/nodejs-icon.webp")} alt="" />
            NodeJs
          </h3>
          <div className="level">
            <div className="right node"></div>
          </div>
          <h3>
            <img src={require("./image/python-icon.png")} alt="" />
            Python
          </h3>
          <div className="level">
            <div className="right python"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
