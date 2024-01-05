import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <h5>2023 &copy;</h5>
        <h5>0:05 AM EST </h5>
      </div>
      <div className="footerRight">
        <a href="" className="hover-underline-animation">
          Instagram
        </a>
        <a href="" className="hover-underline-animation">
          Facebook
        </a>
        <a href="" className="hover-underline-animation">
          Linkedin
        </a>
        <a href="" className="hover-underline-animation">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Footer;
