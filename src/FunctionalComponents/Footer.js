import React from "react";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="contact" id="contact">
        <h4> Get In Touch</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          sapiente assumenda aliquid ut pariatur nihil perspiciatis, ad
          excepturi dolorum nulla enim, quae, obcaecati fugit a dignissimos sint
          itaque aperiam iusto!
        </p>
        <div className="social">
          <a
            href="https://web.facebook.com/tijani.emmanuel.908/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("./image/facebook-icon.png")}
              alt=""
              width={"30px"}
            />
          </a>
          <a
            href="https://twitter.com/Bamidele_EmmyB"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("./image/twitter-icon.png")}
              alt=""
              width={"30px"}
            />
          </a>
        </div>
        <div>
          <div className="email">
            <img
              src={require("./image/email-icon.webp")}
              alt=""
              width={"30px"}
            />
            <p>tijaniemmanuelb@gmail.com</p>
          </div>
          <div className="phone">
            <img
              src={require("./image/phone-icon.png")}
              alt=""
              width={"30px"}
            />
            <p> +234-813-7088-334</p>
          </div>
        </div>
      </div>
      <div className="form-div">
        <h4>Neead a Service ?</h4>
        <h2> Send A Message </h2>
        <form>
          <input type="name" placeholder="Enter Your Full Name" /> <br></br>
          <input type="email" required placeholder="Enter Your Email" />
          <br></br>
          <textarea placeholder="Write a Message" rows="1" cols="18"></textarea>
          <div>
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
