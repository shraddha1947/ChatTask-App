import React from "react";
import "./Layout.css";
import ico1 from "../assets/ico1.png";
import ico2 from "../assets/ico2.png";
import ico3 from "../assets/ico3.png";

const Layout = () => {
  return (
    <div>
      <div className="layout">
        <h1 className="main-heading">Features for a better experience </h1>

        <div className="row">
          <div className="item">
            <img src={ico1} alt="ico1" />
            <div className="first-heading">
              <h2>Video messaging</h2>
              <p>
                This software is very easy for you to manage.You can use it as
                you wish.
              </p>
            </div>
          </div>

          <div className="item">
            <img src={ico2} alt="ico2" />
            <div className="second-heading">
              <h2>Save your time</h2>
              <p>
                This software is very easy for you to manage.You can use it as
                you wish.
              </p>
            </div>
          </div>

          <div className="item">
            <img src={ico3} alt="ico3" />
            <div className="third-heading">
              <h2>Keep safe & Private</h2>
              <p>
                This software is very easy for you to manage.You can use it as
                you wish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
