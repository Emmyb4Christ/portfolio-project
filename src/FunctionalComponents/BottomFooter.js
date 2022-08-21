import React from "react";

const BottomFooter = () => {
  return (
    <div className="bottomFooter">
      <div>
        <div className="nameDiv">
          <div></div>
          <h3>Bamidele Tijani</h3>
          <div></div>
        </div>
      </div>
      <div className="bottom-social">
        <a href="https://web.facebook.com/tijani.emmanuel.908/">
          <img
            src={require("./image/facebook-icon.png")}
            alt=""
            width={"30px"}
          />
        </a>
        <a href="https://twitter.com/Bamidele_EmmyB">
          <img
            src={require("./image/twitter-icon.png")}
            alt=""
            width={"30px"}
          />
        </a>
      </div>
      <p className="copyright">Copyright 2022 | All right reserved</p>
    </div>
  );
};

export default BottomFooter;
